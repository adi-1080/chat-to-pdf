const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {GoogleGenerativeAI} = require('@google/generative-ai');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => {    
  console.log(`Server is running on http://${HOST}:${PORT}`);
});   

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});