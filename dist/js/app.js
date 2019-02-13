/* Import classes */
import List from './List.js';
import Game from './Game.js';

/* JSON */
const firstPlayer = 'https://raw.githubusercontent.com/Bebeto9009/memory_game/master/player.json';

document.addEventListener('DOMContentLoaded', function(){
    const listener = new List(document.querySelector('.btn-add'));
    listener.init();
}, false);