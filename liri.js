
require("dotenv").config();
var keys = require("./keys.js");
var SpotifyAPI = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var inquirer = require("inquirer");

var spotify = new SpotifyAPI(keys.spotify);

var input = process.argv[2]
var userString = process.argv[3]
switch (input) {
  case "concert-this":
    concertThis(userString);
    break;
  
  case "spotify-this-song":
    spotifyyy(userString)
    break;
  
  case "movie-this":
    myMovie(userString);
    console.log(userString)
    break;
 }
// Prompt the user to provide location information.

// After the prompt, store the user's response in a variable called location.


 function concertThis(artist) {
  spotify.search({ type: "artist", query: artist, limit: 1}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.artists.items[0]); 
  });
  
  };
  ///////////////////
  
  
  // After the prompt, store the user's response in a variable called location.
 function myMovie(input) {
  
   console.log(input);
   var movieName = input
   
  // After the prompt, store the user's response in a variable called location.
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  
  // This line is just to help us debug against the actual URL.
    axios.get(queryUrl).then(
    function(response) {
      console.log(JSON.stringify(response.data , null, 2));
    })
    
  }
  // .catch(function(error) {
  //   if (error.response) {
  //     // The request was made and the server responded with a status code
  //     // that falls out of the range of 2xx
  //     console.log("---------------Data---------------");
  //     console.log(error.response.data);
  //     console.log("---------------Status---------------");
  //     console.log(error.response.status);
  //     console.log("---------------Status---------------");
  //     console.log(error.response.headers);
  //   } else if (error.request) {
  //     // The request was made but no response was received
  //     // `error.request` is an object that comes back with details pertaining to the error that occurred.
  //     console.log(error.request);
  //   } else {
  //     // Something happened in setting up the request that triggered an Error
  //     console.log("Error", error.message);
  //   }
  //   console.log(error.config);
  // })