#!/usr/bin/node
/*
const id = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/' + id;
const request = require('request');

request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    body = JSON.parse(body);
    console.log(body.title);
  } else {
    console.log('Erorr Code:' + response.statusCode);
  }
});
*/
// Import the 'request' module
const request = require('request');

// Function to fetch and print the movie title
function getMovieTitleByEpisode(episodeId) {
  // Construct the API endpoint URL
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${episodeId}`;

  // Send a GET request to the API
  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const movieData = JSON.parse(body);
      const title = movieData.title;
      console.log(`${title}`);
    } else {
      console.error(`Error fetching data from the API: ${error}`);
    }
  });
}

// Check if an episode ID is provided as a command-line argument
if (process.argv.length !== 3) {
  console.error('Please provide an episode ID as an argument.');
  process.exit(1);
}

// Parse the episode ID from the command-line argument
const episodeId = parseInt(process.argv[2]);

// Call the function to fetch and print the movie title
getMovieTitleByEpisode(episodeId);



