#!/usr/bin/node
// Import the 'request' module
const request = require('request');

// Function to fetch and print character names from a Star Wars movie
function printCharactersFromMovie(movieId) {
  // Construct the API endpoint URL for the movie
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  // Send a GET request to the API to fetch movie data
  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const movieData = JSON.parse(body);
      const characterUrls = movieData.characters;

      console.log(`Characters in ${movieData.title}:`);

      // Function to fetch and print character names
      function fetchAndPrintCharacter(index) {
        if (index < characterUrls.length) {
          // Send a GET request to the character URL
          request(characterUrls[index], (charError, charResponse, charBody) => {
            if (!charError && charResponse.statusCode === 200) {
              const characterData = JSON.parse(charBody);
              console.log(`- ${characterData.name}`);
              // Fetch and print the next character
              fetchAndPrintCharacter(index + 1);
            } else {
              console.error(`Error fetching character data: ${charError}`);
            }
          });
        }
      }

      // Start fetching and printing characters
      fetchAndPrintCharacter(0);
    } else {
      console.error(`Error fetching movie data: ${error}`);
    }
  });
}

// Check if a movie ID is provided as a command-line argument
if (process.argv.length !== 3) {
  console.error('Please provide a movie ID as an argument.');
  process.exit(1);
}

// Parse the movie ID from the command-line argument
const movieId = parseInt(process.argv[2]);

// Call the function to fetch and print characters from the movie
printCharactersFromMovie(movieId);