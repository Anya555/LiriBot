require("dotenv").config();
var keys = require("./keys.js");
const axios = require("axios");
var inquirer = require("inquirer");
var fs = require('fs');

// var spotify = new Spotify(keys.spotify);
// var Spotify = require('node-spotify-api');


// console.log(keys.spotify.id);
// console.log(keys.spotify.secret);

var command = process.argv[2];

// runCommand();

// function runCommand(){
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
//         });
//     });
// }

// function artist(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter a name of an artist you're looking for:"
        }
    ]).then(function (name) {
            const queryUrl = `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`;
            axios.get(queryUrl).then(function (res) {
                console.log(res.data);
            });
        });
    // }


   
