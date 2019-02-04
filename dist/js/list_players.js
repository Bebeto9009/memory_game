const firstPlayer = 'https://raw.githubusercontent.com/Bebeto9009/memory_game/master/player.json';

class listPlayers {
    constructor(name){
        this.name = name;
    }

    controller (name) {
        const startBtn = document.querySelector('.btn-play');

        console.log(startBtn + name)
        return startBtn;
    }
}

const adrian = new listPlayers('Adrian');
console.log(adrian);
adrian.controller();

console.log(adrian.name+1)