
require("dotenv").config();
var keys = require("./keys.js");
var SpotifyAPI = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var inquirer = require("inquirer");

var spotify = new SpotifyAPI(keys.spotify);




// Prompt the user to provide location information.
inquirer.prompt([

  {
    type: "input",
    name: "userInput",
    message: "Which song would you like?"
  }

// After the prompt, store the user's response in a variable called location.
]).then(function(input) {
    
concertThis(input.userInput)
 console.log(input);
 
});

var concertThis = function(artist) {
  spotify.search({ type: "artist", query: artist}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
  
  };
  