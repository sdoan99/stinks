'use strict';
const request = require('request');
const fs = require('fs');
const path = require('path');

const url = 'https://api.coincap.io/v2/assets';

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
    console.log('Data fetched successfully');
    
    // Create DataDataData folder if it doesn't exist
    const folderPath = path.join(__dirname, 'DataDataData');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    // Write data to a JSON file
    const filePath = path.join(folderPath, 'coincap_data.json');
    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Data has been stored in:', filePath);
      }
    });
  }
});