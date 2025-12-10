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
    const prompt = `You are a trip recommandation assistant. The following is a user input explaining their desired travel location or precerences. Based on this input, provide potential travel locations that match the user's interests. The respsonse should be between 3 to 5 locations stored in a JSON array (each JSON object with city, country, explanation and geocode), telling the city, the country and a brief explanation of why this location is a good fit for the user. Here is the user input: ${req.query.userInput}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const parsedText = response.text
      .split('```json')[1]
      ?.split('```')[0]
      .trim();
    const jsonResponse = JSON.parse(parsedText || '[]');

    // Dummy response for testing frontend integration without exhausting API calls
    // const jsonResponse = [
    //   {
    //     city: 'Budapest',
    //     country: 'Hungary',
    //     explanation:
    //       'Budapest is famous for its inexpensive and hearty Hungarian cuisine, from goulash to street food, and offers an unforgettable, vibrant nightlife, especially in its unique ruin bars, which are known for affordable drinks.',
    //     geocode: { latitude: 47.4979, longitude: 19.0402 },
    //   },
    //   {
    //     city: 'Krakow',
    //     country: 'Poland',
    //     explanation:
    //       'Krakow provides excellent value for money with delicious traditional Polish food and extremely affordable drinks. Its historic Old Town and Jewish Quarter host a bustling nightlife scene with numerous bars and clubs.',
    //     geocode: { latitude: 50.0647, longitude: 19.945 },
    //   },
    //   {
    //     city: 'Lisbon',
    //     country: 'Portugal',
    //     explanation:
    //       'Lisbon offers surprisingly affordable and delicious food, especially seafood and pastries. The city boasts a incredibly vibrant nightlife, particularly in areas like Bairro Alto and Cais do Sodré, with options ranging from Fado houses to modern clubs.',
    //     geocode: { latitude: 38.7223, longitude: -9.1393 },
    //   },
    //   {
    //     city: 'Prague',
    //     country: 'Czech Republic',
    //     explanation:
    //       'Prague is renowned for its very affordable beer and hearty Czech dishes, offering great value for money. It combines this with a lively and diverse nightlife scene, from historical pubs to vibrant dance clubs, catering to all tastes.',
    //     geocode: { latitude: 50.0755, longitude: 14.4378 },
    //   },
    // ];

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
