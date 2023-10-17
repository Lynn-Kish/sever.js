const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Define an array to store boda-boda cyclist records (this is simplified)
const records = [];

// API for registering a new cyclist
app.post('/register', (req, res) => {
  const cyclist = req.body;
  records.push(cyclist);
  res.json({ success: true, message: 'Cyclist registered.' });
});

// API for listing all cyclists
app.get('/list', (req, res) => {
  res.json(records);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});