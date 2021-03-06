/*Use Node.js and express to create a game in which 2 Pokemon fight against one another. 
In the nodejs-express/routes.js file you see an array with three pokemons. 
Each pokemon has a name as well as a number that indicates its strength.
You can trigger a fighting match between two pokemon by sending an HTTP POST request 
at a URL path /pokemon1/vs/pokemon2, for example /Pikachu/vs/Rattata. 
To make fights more interesting, please write a middleware function that 
creates two random numbers which are later, in the routing handler, added to the strength of the first, 
and second pokemon, respectively.

The HTTP POST route handler computes and returns the result of the fight, i.e., 
the winner and loser. The winner is the pokemon with higher (strength + random strength) value.

Test the game by starting $ node index.js and sending 
an HTTP POST request via Postman at http://localhost:3000/pokefight/Pikachu/vs/Rattata.*/






'use strict'
const express = require('express');
const router = express.Router();
let pokemon = [
  { name: 'Charmander', strength: 70 },
  { name: 'Rattata', strength: 45 },
  { name: 'Pikachu', strength: 60 },
];

let pokemonFound = (pokemonName) => (pokemonObject) => pokemonObject.name.toUpperCase() == pokemonName.toUpperCase();

// TODO: Middleware function #1.
// Create two random numbers, each
// between 0 and 20.
// Assign the two numbers to the request object
// property 'randomStrength'.

router.use('/:p1/vs/:p2', (req, res, next) => {
    //check whether both players are same
    if (req.params.p1 === req.params.p2) {
        res.writeHead(400, 'Both the players are the same so please choose a different player');
        res.end();
    }

    var strength = {};
    strength.p1 = Math.floor(Math.random() * 20);
    strength.p2 = Math.floor(Math.random() * 20);

    req.randomStrength = strength;
    next();
});

//Middleware function log on the console on whom is fighting whom
router.use('/:p1/vs/:p2', (req, res, next) => {
    console.log(`The fight is between ${req.params.p1} and ${req.params.p2}`);
});

//POST request 
router.post('/:p1/vs/:p2', (req, res) => {
    //POST request handler that performs the fight
    // by comparing the pokemon's strength + their
    // respective 'randomStrength'.
    // Return winner and loser in the response.

    var player1 = pokemon.find(pokemonFound(req.params.p1));
    var player2 = pokemon.find(pokemonFound(req.params.p2));

    if (player1 !== undefined && player2 !== undefined) {
        var player1Won = (player1.strength + req.randomStrength.p1) > (player2.strength + req.randomStrength.p2);
        var winner = player1Won ? player1 : player2;
        var loser = player1Won? player2 : player1;

        res.send({"winner": winner.name, "loser": loser.name});
    } else{
        res.writeHead(400, "Np players with the names found");
    }

    res.end();
});


module.exports = router;
