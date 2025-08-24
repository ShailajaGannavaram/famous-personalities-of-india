import fs from "fs";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.GITHUB_TOKEN, // or process.env.OPENAI_API_KEY
  baseURL: "https://models.github.ai/inference" // remove this line if using OpenAI directly
});

const bios = JSON.parse(fs.readFileSync("./bios.json", "utf8"));

async function embedAll() {
  for (let bio of bios) {
    if (!bio.vector) {
      const res = await client.embeddings.create({
        model: "openai/text-embedding-3-small",
        input: bio.bio
      });
      bio.vector = res.data[0].embedding;
      console.log(`✅ Embedded: ${bio.name}`);
    }
  }

  fs.writeFileSync("./bios.json", JSON.stringify(bios, null, 2));
  console.log("🎉 All bios embedded.");
}

embedAll();
