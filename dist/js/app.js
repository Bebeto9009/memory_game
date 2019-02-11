/* import classes */
import ListPlayers from './ListPlayers.js';
import Player from './Player.js';

/* JSON */
const firstPlayer = 'https://raw.githubusercontent.com/Bebeto9009/memory_game/master/player.json';

/* Add event listener on add new player button */
let btnNewPlayer = document.querySelector('.btn-add');

btnNewPlayer.addEventListener('click', function(event) {
    event.preventDefault();
    const player = new ListPlayers();
    player.addRow();
    console.log(player)
}); // create row for new player

/* event listener on accept button */
    document.addEventListener('click', (event) => {
    if (event.target.className.includes('fa-check')) {
        console.log('dziala')
        ListPlayers.savePlayer(event);
    }
});

        /*  */

/* Get value from new input */

const playerFactory = name => {
    let playerInput = document.querySelector('.user__name').value;
    return playerInput;
    console.log(playerInput)
};
// const test = new ListPlayers();
// test.addRow();

