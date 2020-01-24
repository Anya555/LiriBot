require("dotenv").config();
var keys = require("./keys.js");
const axios = require("axios");
var fs = require('fs');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// console.log(keys.spotify.id);
// console.log(keys.spotify.secret);

var command = process.argv[2];  
// var songName = process.argv[3];  
let queryString = process.argv[3];
// var artistName = process.argv[4];
// var movieName = process.argv[5];


// switch(command) {
//     case 'concert-this':
//      concertThis(queryString);
//       break;
//     case 'spotify-this-song':
//      spotifyThisSong(queryString);
//       break;
//     case 'movie-this':
//       movieThis(queryString);
//       break;
//     case 'do-what-it-says':
//       doThis(queryString);
//       break;
//     default:
//         console.log("Enter correct command");
//   }
// 


// calling spotify API 
// var spotifyThisSong = function(songName) {
//     spotify
//         .search({ type: 'track', query: songName })
//         .then(function(response) {
//         console.log(response);
//         })
//         .catch(function(err) {
//         console.log(err);
//         });
// }

// spotifyThisSong(queryString);

// //calling bandsintown API 
// var concertThis = function (artistName) {
//     const queryUrl = `https://rest.bandsintown.com/artists/${artistName}/events?app_id=codingbootcamp`;
//     axios.get(queryUrl).then(function (res) {
//         console.log(res.data);
//         // console.log(res.venue.name);
//         // console.log(res.venue.city);
//         // console.log(res.datetime);
//     });
// }
// concertThis(queryString);

// // // calling OMDB API 
var movieThis = function (movieName) {
    const queryUrl = `http://www.omdbapi.com/?i=tt${movieName}&apikey=38168999`;
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

movieThis(queryString);
