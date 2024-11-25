import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `Generate a poem about Afro-Latin culture with the following theme: ${prompt}`,
      max_tokens: 200,
      temperature: 0.7,
    });

    const poem = completion.data.choices[0].text.trim();
    res.status(200).json({ poem });
  } catch (error) {
    console.error('Error generating poem:', error);
    res.status(500).json({ error: 'Failed to generate poem' });
  }
}

