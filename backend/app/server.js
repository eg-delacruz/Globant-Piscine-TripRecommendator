import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

// Environment variables
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

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
    // console.log('Received request with query:', req.query.userInput);

    res.json({
      greeting: 'Hello from Express!!!!',
      status: 'success',
    });
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to communicate with OpenAI',
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
