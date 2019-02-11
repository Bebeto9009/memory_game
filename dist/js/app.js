import ListPlayers from './ListPlayers.js';
import Player from './Player.js';

const firstPlayer = 'https://raw.githubusercontent.com/Bebeto9009/memory_game/master/player.json';

let btnNewPlayer = document.querySelector('.btn-add');
let players = {}

btnNewPlayer.addEventListener('click', function(event) {
    event.preventDefault();
    const player = new ListPlayers();
    player.addRow();
    console.log(player)
}); // create row for new player

// const test = new ListPlayers();
// test.addRow();