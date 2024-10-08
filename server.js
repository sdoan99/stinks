const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/stock-data', (req, res) => {
  const filePath = path.join(__dirname, 'DataDataData', 'alphavantage_data.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading stock data' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});