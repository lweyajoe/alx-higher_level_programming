#!/usr/bin/node
/*
const url = process.argv[2];
const filename = process.argv[3];
const fs = require('fs');
const request = require('request');

request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(filename, body, 'utf8');
  }
});
*/
// Import required modules
const request = require('request');
const fs = require('fs');

// Function to fetch a webpage and save its contents to a file
function fetchAndSaveWebpage (url, filePath) {
  // Send a GET request to the specified URL
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // Save the response body to the specified file path with UTF-8 encoding
      fs.writeFile(filePath, body, 'utf8', (err) => {
        if (err) {
          console.error(`Error writing to ${filePath}: ${err}`);
        } else {
          console.log(`Webpage content saved to ${filePath}`);
        }
      });
    } else {
      console.error(`Error fetching data from ${url}: ${error}`);
    }
  });
}

// Check if the required arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: node fetch_and_save.js <URL> <outputFilePath>');
  process.exit(1);
}

// Parse command-line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Call the function to fetch the webpage and save it to the file
fetchAndSaveWebpage(url, filePath);
