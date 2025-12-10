import dotenv from 'dotenv';
import express from 'express';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();

// Environment variables
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

const ai = new GoogleGenAI({
  apiKey: API_KEY,
});

// Middleware
app.use(express.json());

// CORS configuration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Update to match the domain you will make the request from
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/api/open_ai', async (req, res) => {
  try {
    const prompt = `You are a trip recommandation assistant. The following is a user input explaining their desired travel location or precerences. Based on this input, provide potential travel locations that match the user's interests. The respsonse should be between 3 to 5 locations stored in a JSON array (each JSON object with city, country, and explanation), telling the city, the country and a brief explanation of why this location is a good fit for the user. Here is the user input: ${req.query.userInput}`;

    // const response = await ai.models.generateContent({
    //   model: 'gemini-2.5-flash',
    //   contents: prompt,
    // });

    // const parsedText = response.text
    //   .split('```json')[1]
    //   ?.split('```')[0]
    //   .trim();
    // const jsonResponse = JSON.parse(parsedText || '[]');

    // Dummy response for testing frontend integration without exhausting API calls
    const jsonResponse = [
      {
        city: 'Budapest',
        country: 'Hungary',
        explanation:
          'Renowned for its unique ruin bars, thermal baths, and delicious yet affordable Hungarian cuisine, offering an unbeatable combination of vibrant nightlife and budget-friendly food.',
      },
      {
        city: 'Prague',
        country: 'Czech Republic',
        explanation:
          'Famous for its incredibly cheap and high-quality beer, traditional hearty meals, and a bustling nightlife scene with countless pubs, clubs, and bars, especially around the Old Town.',
      },
      {
        city: 'Krakow',
        country: 'Poland',
        explanation:
          'A historic city with an incredibly vibrant nightlife centered around its Old Town and Jewish Quarter, offering fantastic traditional Polish food and drinks at very affordable prices.',
      },
      {
        city: 'Belgrade',
        country: 'Serbia',
        explanation:
          "Often dubbed the 'party capital of the Balkans,' Belgrade boasts a legendary nightlife, particularly along its riverboats (splavovi), coupled with extremely cheap and delicious local food.",
      },
    ];

    res.json({
      data: jsonResponse,
      status: 'success',
    });
  } catch (error) {
    console.error('Error communicating with GoogleGenAI:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to communicate with GoogleGenAI',
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
