import Player from './Player.js';

export default class List {

    constructor (list, btn) {
        this.btnAdd = btn;
        this.list = list;
    };

    addRow() {
        const row = document.createElement('li');
        const player = new Player();
        row.appendChild(player.el);
        this.list.appendChild(row);
    }

    saveRow(name) {
        const player = new Player();
        //tu pobierz z inputa name i wrzuc do layera
        player.addPlayer(name);
    }

    editRow(newName) {
        const player = new Player();
        player.editPlayer(newName);
    }

    deleteRow(element) {
        //e.target.parentElement.parentNode.remove();
    }

    events() {
        this.btnAdd.addEventListener("click", e => {
            e.preventDefault();
            this.addRow();
        });
    }

    init() {
        if (this.list || this.addBtn) {
            try {
                this.events();
            } catch (e) {
                console.warn(e);
            }
        }
    }
}

