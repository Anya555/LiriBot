require("dotenv").config();
var keys = require("./keys.js");
const axios = require("axios"); // Axios promise-based Node package for reading HTTP requests
var fs = require('fs'); // fs is a Node standard library package for reading and writing files
var Spotify = require('node-spotify-api'); // Node spotify package
var spotify = new Spotify(keys.spotify); // grabbing spotify ID and Secret


var command = process.argv[2]; //third argument in command lind: concert this, spotify-this-song, movie-this, do-what-it-says 
console.log(command);
let queryString = process.argv[3]; // fourth argument in command line (name of a song, movie or artis/band)

// getting data from Bands In Town API using axios
var concertThis = function() {
    const queryUrl = `https://rest.bandsintown.com/artists/${queryString}/events?app_id=codingbootcamp`;
    axios.get(queryUrl).then(function (res) {
        // console.log(res.data[0]);
        console.log(res.data[0].venue.name);
        console.log(res.data[0].venue.city);
        console.log(res.data[0].datetime);
    });
}

// getting data from  Node-Spotify-API using spotify.search method
var spotifyThisSong = function() {
    spotify
        .search({ type: 'track', query: queryString })
        .then(function(response) {
        console.log(response);
        })
        .catch(function(err) {
        console.log(err);
        });
}

// getting data from  OMDB API 
var movieThis = function() {
    const queryUrl = `https://www.omdbapi.com/?t=${queryString}&apikey=trilogy`;
    axios.get(queryUrl).then(function (res) {
        console.log(res.data);
        // console.log(res.Title);
        // console.log(res.Year);
        // console.log(res.imdbRating);
        // console.log(res.Ratings[1]);
        // console.log(res.Country);
        // console.log(res.Language);
        // console.log(res.Plot);
        // console.log(res.Actors);
    });
}

// reading data from random.txt file
var doThis = function(){
    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
      
        console.log(data);
      
      });
}


// switch control which functio gets rendered based on which command is put into command line
switch(command) {
    case 'concert-this':
      concertThis();
      break;
    case 'spotify-this-song':
     spotifyThisSong();
      break;
    case 'movie-this':
      movieThis();
      break;
    case 'do-what-it-says':
      doThis();
      break;
    default:
        console.log("Enter correct command");
  }






