require("dotenv").config();
var keys = require("./keys.js");
const axios = require("axios");
var inquirer = require("inquirer");
var fs = require('fs');

var spotify = new Spotify(keys.spotify);
var Spotify = require('node-spotify-api');

var command = process.argv[2];  // concert-this, spotify-this-song
var extrainfo = process.argv[3];  // name of artist, name of song

// console.log(keys.spotify.id);
// console.log(keys.spotify.secret);

// var command = parseInt(process.argv[2]);
// var artistChoice = process.argv[3];

// 
// switch(command) {
//     case 'concert-this':
//       artist();
//       break;
//     case 'spotify-this-song':
        //  song();
//       break;
//     case 'movie-this':
        // movie();
//       break;
//     case 'do-what-it-says':
        //  doThis();
//       break;
//     default:
     
//   }
// 
    var song = function(){
        // extraInfo is the song name
        spotify.request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
        .then(function(data) {
            console.log(data); 


            
        })
        .catch(function(err) {
            console.error('Error occurred: ' + err); 
        });
    }

// function artist(){
    // inquirer.prompt([
    //     {
    //         type: "input",
    //         name: "name",
    //         message: "Enter a name of an artist you're looking for:"
    //     }
    // ]).then(function () {
    //         const queryUrl = `https://rest.bandsintown.com/artists/ = artistChoice = events?app_id=codingbootcamp`;
    //         axios.get(queryUrl).then(function (res) {
    //             console.log(res.data);
                // console.log(res.venue.name);
                // console.log(res.venue.city);
                // console.log(res.datetime);
        //     });
        // });
    // }

// function movie(){
// inquirer.prompt([
//     {
//         type: "input",
//         name: "name",
//         message: "Enter a name of the movie you're looking for:"
//     }
// ]).then(function (name) {
//         const queryUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=38168999`;
//         axios.get(queryUrl).then(function (res) {
//             console.log(res.data);
            // console.log(res.Title);
            // console.log(res.Year);
            // console.log(res.imdbRating);
            // console.log(res.Ratings[1]);
            // console.log(res.Country);
            // console.log(res.Language);
            // console.log(res.Plot);
            // console.log(res.Actors);
    //     });
    // });
// }

// 
// 

 