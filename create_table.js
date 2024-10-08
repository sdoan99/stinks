const fs = require('fs');
const path = require('path');

// Read the JSON file
const filePath = path.join(__dirname, 'DataDataData', 'alphavantage_data.json');
const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Extract the time series data
const timeSeriesData = jsonData['Time Series (Daily)'];

// Create an array of objects for the table
const tableData = Object.entries(timeSeriesData).map(([date, values]) => ({
  Date: date,
  Open: values['1. open'],
  High: values['2. high'],
  Low: values['3. low'],
  Close: values['4. close'],
  Volume: values['5. volume']
}));

// Sort the data by date (most recent first)
tableData.sort((a, b) => new Date(b.Date) - new Date(a.Date));

// Display the table
console.table(tableData);

// Log some additional information
console.log(`\nData for ${jsonData['Meta Data']['2. Symbol']}`);
console.log(`Last Refreshed: ${jsonData['Meta Data']['3. Last Refreshed']}`);
console.log(`Time Zone: ${jsonData['Meta Data']['5. Time Zone']}`);