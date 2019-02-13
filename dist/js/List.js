import Player from './Player.js';

export default class List {
    constructor() {
       this.btnAdd = document.querySelector('.btn-add');
    };



    addPlayer() {
        const player = new Player();
        document.appendChild(player.el);
    }


}