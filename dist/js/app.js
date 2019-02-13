/* Import classes */
import List from './List.js';
import Game from './Game.js';

/* JSON */
const firstPlayer = 'https://raw.githubusercontent.com/Bebeto9009/memory_game/master/player.json';

document.addEventListener('DOMContentLoaded', function(){
    const list = new List(document.querySelector('.game__section--list'), document.querySelector('.btn-add'));
    list.init();
}, false);
