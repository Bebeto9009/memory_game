/* Import classes */
import ListPlayers from './ListPlayers.js';
import Player from './Player.js';

/* JSON */
const firstPlayer = 'https://raw.githubusercontent.com/Bebeto9009/memory_game/master/player.json';

/* Add event listener on add new player button */
let btnNewPlayer = document.querySelector('.btn-add');

let generatorID = 0;
// let objects = [];

btnNewPlayer.addEventListener('click', function(event) {
    event.preventDefault();
    generatorID++;
    // console.log(generatorID)
    let row = new ListPlayers(generatorID);
    row.addRow(generatorID);
    // objects.push(row);
    // console.log('objects', objects)
    console.log(row);
    console.log('ListPlayers.id',ListPlayers.id)

}); // Listener for create row for new player

/* Event listener on accept button */
document.querySelector('.game__section').addEventListener('click', (event) => {
    if (event.target.className.includes('fa-check')) {
       // console.log('id: ',event.target.parentElement.id);
       let clickedElement = event.target.parentElement.id;
       console.log('this', event)
       // console.log(clickedElement);
       clickedElement.savePlayer();
        // console.log(event.target.parentElement.parentNode);
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

