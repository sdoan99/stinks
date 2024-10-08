'use strict';
const request = require('request');
const fs = require('fs');
const path = require('path');

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AMD&apikey=PEUGZENHJJ13YDFO';

request.get({
  url: url,
  json: true,
  headers: {'User-Agent': 'request'}
}, (err, res, data) => {
  if (err) {
    console.log('Error:', err);
  } else if (res.statusCode !== 200) {
    console.log('Status:', res.statusCode);
  } else {
    // data is successfully parsed as a JSON object
    console.log('Data fetched successfully');

    // Create DataDataData folder if it doesn't exist
    const folderPath = path.join(__dirname, 'DataDataData');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    // Write data to a JSON file
    const filePath = path.join(folderPath, 'alphavantage_data.json');
    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Data has been stored in:', filePath);
      }
    });
  }
});