require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios"); // Axios is a promise-based Node package for reading HTTP requests
const fs = require('fs'); // fs is a Node standard library package for reading and writing files
const Spotify = require('node-spotify-api'); // Node spotify package
const spotify = new Spotify(keys.spotify); // grabbing spotify ID and Secret
const moment = require('moment'); // moment node package

let command = process.argv[2]; //third argument in command lind: concert-this, spotify-this-song, movie-this, do-what-it-says 
console.log(command);
let queryString = process.argv[3]; // fourth argument in command line (name of a song, movie or artis/band)

// getting data from Bands In Town API using axios
let concertThis = function() {
    const queryUrl = `https://rest.bandsintown.com/artists/${queryString}/events?app_id=codingbootcamp`;
    axios.get(queryUrl).then(function (res) {
        console.log("Name of the venue: " + res.data[0].venue.name);
        console.log("Venue location: " + res.data[0].venue.city);
        console.log("Date of the Event: ");
        console.log(moment(res.data[0].datetime).format('L'));  
    })
    .catch(function(err) {
      console.log("There is no events for this artist!");
      });
}


// getting data from  Node-Spotify-API using spotify.search method
let spotifyThisSong = function() {
    spotify              
        .search({ type: 'track', query: queryString, limit: 1 })  // setting limit to 1 will only give 1 response instead of 20, which also makes it easier to traverse the data
        .then(function(data) {
        console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
        console.log("The song's name: " + data.tracks.items[0].name);
        console.log("A preview link of the song from Spotify: " + data.tracks.items[0].preview_url);
        console.log("The album that the song is from: " + data.tracks.items[0].album.name);
    })
        .catch(function(err) {
        console.log("Something went wrong. Please try a different song");
        });
}


// getting data from  OMDB API 
let movieThis = function() {
  // If the user doesn't type a movie in, 
  //the program will output data for the movie 'Mr. Nobody.'
if(!queryString){
  queryString = "Mr Nobody"
}
    const queryUrl = `https://www.omdbapi.com/?t=${queryString}&apikey=trilogy`;
    axios.get(queryUrl).then(function (res) {
        console.log("Title of the movie: " + res.data.Title);
        console.log("Year the movie came out: " + res.data.Year);
        console.log("IMDB Rating of the movie: " + res.data.imdbRating);
        console.log("Rotten Tomatoes Rating of the movie: " + res.data.Ratings[1].Value); 
        console.log(" Country where the movie was produced: " + res.data.Country);
        console.log("Language of the movie: " + res.data.Language);
        console.log("Plot of the movie: " + res.data.Plot);
        console.log("Actors in the movie: " + res.data.Actors);
    })
    .catch(function(err) {
      console.log("Something went wrong. Please try a different movie");
      });
}

// reading data from random.txt file
let doThis = function(){
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        console.log(data);
      });
}


// switch controls which function gets executed based on which command is put into command line
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






