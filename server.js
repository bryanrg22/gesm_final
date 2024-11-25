import express from 'express';
import OpenAI from 'openai';
import cors from 'cors';
import dotenv from 'dotenv';
import chatHandler from './server/api/chat.js';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/generate-poem', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    // Generate the poem
    const poemCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system", "content": "You are a poet specializing in Afro-Latin culture."},
        {"role": "user", "content": `Generate a poem about Afro-Latin culture with the following theme: ${prompt}`}
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    const poem = poemCompletion.choices[0].message.content.trim();

    // Generate the analysis
    const analysisCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system", "content": "You are a literary critic specializing in Afro-Latin poetry."},
        {"role": "user", "content": `Analyze the following poem in the context of Afro-Latin culture:\n\n${poem}`}
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    const analysis = analysisCompletion.choices[0].message.content.trim();

    res.status(200).json({ poem, analysis });
  } catch (error) {
    console.error('Error generating poem and analysis:', error);
    res.status(500).json({ error: 'Failed to generate poem and analysis' });
  }
});

app.post('/api/chat', chatHandler);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

