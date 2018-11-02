const memory = {
    randomCards: [],
    checkedCards: [],
    img: [
        '/img/koopa_troopa.jpg',
        '/img/luigi.jpg',
        '/img/mario.jpg',
        '/img/mushroom.jpg',
        '/img/yoshi'
    ],

    startGame : function() {
        randomArr = [];

        for (let i = 0; i = this.img.length; i++) {
            console.log('coś')
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn-add').addEventListener('click', function () {
        memory.startGame();
    });
});

