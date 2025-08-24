import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import dotenv from "dotenv";
import OpenAI from "openai";
import path from "path";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const __dirname = path.resolve();
const biosFile = path.join(__dirname, "bios.json");

// Load or create bios file
let bios = fs.existsSync(biosFile)
  ? JSON.parse(fs.readFileSync(biosFile, "utf8"))
  : [];

const client = new OpenAI({
  apiKey: process.env.GITHUB_TOKEN,
  baseURL: "https://models.github.ai/inference" // ✅ Required for GitHub-hosted GPT
});

// Helper: Cosine similarity
function cosineSimilarity(a, b) {
  if (!a || !b || a.length !== b.length) return 0;
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, val) => sum + val ** 2, 0));
  const normB = Math.sqrt(b.reduce((sum, val) => sum + val ** 2, 0));
  return dot / (normA * normB);
}

// ✅ AI Bio Generation Route
app.post("/generate-bio", async (req, res) => {
  const { name } = req.body;

  const prompt = `Write a short and inspiring biography (150 words) of the Indian personality named "${name}". Include major contributions and historical significance.`;

  try {
    const result = await client.chat.completions.create({
      model: "openai/gpt-4o", // ✅ GitHub-compatible format
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 512
    });

    const bio = result.choices[0].message.content;
    res.json({ bio });
  } catch (error) {
    console.error("⚠️ OpenAI error:", error.message);
    res.status(500).json({ bio: "⚠️ Failed to generate bio." });
  }
});

// ✅ Save Generated Bio Route
app.post("/save-bio", (req, res) => {
  const { name, bio } = req.body;

  if (!name || !bio) {
    return res.status(400).json({ message: "Missing name or bio." });
  }

  const exists = bios.find(p => p.name.toLowerCase() === name.toLowerCase());
  if (exists) {
    return res.status(409).json({ message: "Bio already exists." });
  }

  const newEntry = { name, bio, tags: [] };
  bios.push(newEntry);
  fs.writeFileSync(biosFile, JSON.stringify(bios, null, 2));
  res.json({ message: "✅ Bio saved successfully." });
});

// ✅ Semantic Search Route
app.post("/semantic-search", async (req, res) => {
  const { query } = req.body;

  try {
    const response = await client.embeddings.create({
      model: "openai/text-embedding-3-small", // ✅ GitHub-compatible model name
      input: query
    });

    const queryVector = response.data[0].embedding;

    const results = bios
      .filter(b => b.vector)
      .map(b => ({
        ...b,
        score: cosineSimilarity(queryVector, b.vector)
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    res.json(results);
  } catch (error) {
    console.error("⚠️ Semantic Search Error:", error.message);
    res.status(500).json({ error: "Semantic search failed." });
  }
});

// ✅ Server Start
app.listen(4000, () => {
  console.log("🚀 AI backend running on http://localhost:4000");
});
