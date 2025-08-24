// 📘 AI Bio Route
app.post("/generate-bio", async (req, res) => {
  const name = req.body.name;
  const prompt = `Write a short and inspiring biography (150 words) of the Indian personality named "${name}". Include major contributions and historical significance.`;

  try {
    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: "" },
        { role: "user", content: prompt },
      ],
      model: "openai/gpt-4o",
      temperature: 0.7,
      max_tokens: 512,
    });

    const bioText = response.choices[0].message.content;
    res.json({ bio: bioText });
  } catch (err) {
    console.error("⚠️ GPT-4o (GitHub) API error:", err.message || err);
    res.json({ bio: fallbackBio(name) });
  }
});

