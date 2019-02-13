export default class Player {

    constructor() {
        this.el = document.createElement('div');
    }


    addPlayer() {
        let list = document.querySelector('.game__section');
        let ol = document.querySelector('ol');
        let playerLi = document.createElement('li');

        let playersRow = document.createElement('div');
        playersRow.classList.add('user');

        let namePlayer = document.createElement('input');
        namePlayer.classList.add('user__name');
        namePlayer.required = true;

        let editPlayer = document.createElement('i');
        editPlayer.classList.add('fas', 'fa-edit');
        editPlayer.style.display = 'none';

        let removePlayer = document.createElement('i');
        removePlayer.classList.add('fas', 'fa-trash-alt');

        let acceptNewPlayer = document.createElement('i');
        acceptNewPlayer.classList.add('fas', 'fa-check');

        list.appendChild(ol);
        ol.appendChild(playerLi);
        playerLi.appendChild(playersRow);
        playersRow.appendChild(namePlayer);
        playersRow.appendChild(editPlayer);
        playersRow.appendChild(acceptNewPlayer);
        playersRow.appendChild(removePlayer);
    }
}