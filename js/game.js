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
        // randomArr = [];
        // for (let i = 0; i < this.img.length; i++) {
            this.randomCards.push(this.img[Math.floor(Math.random()*this.img.length)]);
            // console.log(return _.sample(this.img.length, 2);
            console.log(randomCards)
            // return;
        }
}


memory.startGame();