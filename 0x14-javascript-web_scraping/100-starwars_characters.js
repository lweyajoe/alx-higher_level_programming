#!/usr/bin/node

// Import the 'request' module
const request = require('request');

// Function to fetch and print all characters from a Star Wars movie
function printCharactersFromMovie (movieId) {
  // Construct the API endpoint URL
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  // Send a GET request to the API
  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const movieData = JSON.parse(body);
      const characters = movieData.characters;

      console.log(`Characters in ${movieData.title}:`);

      // Fetch and print each character
      characters.forEach((characterUrl) => {
        request(characterUrl, (charError, charResponse, charBody) => {
          if (!charError && charResponse.statusCode === 200) {
            const characterData = JSON.parse(charBody);
            console.log(`- ${characterData.name}`);
          } else {
            console.error(`Error fetching character data: ${charError}`);
          }
        });
      });
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
