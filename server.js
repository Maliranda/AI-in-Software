
import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "HTTP-Referer": "http://localhost:3000",
      "X-Title": "Hello AI Demo"
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
