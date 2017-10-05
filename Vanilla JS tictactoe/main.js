var turn = 'X';
var player, num, mode;
var spaces = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0
};

//event handler variables
var winner = document.getElementById('winner');
var whoWins = document.getElementById('who-wins');
var box = document.getElementsByClassName('square');
var restart = document.getElementsByClassName('restart');
var startmodal = document.getElementsByClassName('start');
var bgmodal = document.getElementById('modal-bg');
var closemodal = document.getElementsByClassName('close');
var X = document.getElementById('X');
var O = document.getElementById('O');
var players = document.getElementById('player');
var symbol = document.getElementById('symbol');


//player functions
function playerOne() {
    mode = 'one player';
    players.className = "hidden";
    symbol.className = 'row';
}

function playerTwo() {
    mode = 'two player';
    players.className = 'hidden';
    symbol.className = 'row';
}

//start the game for one player
function onePlayerStart() {
    //box event handlers
    for(var i = 0; i < box.length; i++){
        box[i].addEventListener('click', function(){
            //to select X or O
            if (turn === 'X'){
                if(spaces[this.id] === 0){
                    this.innerHTML = "O";
                    spaces[this.id] = "O";
                }
            }
        })
    }
}

