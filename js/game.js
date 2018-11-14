const startBtn = document.querySelector('.btn-play');
const memoryGame = document.getElementById('memory__game');
const memory = {
    gameList : document.getElementById('game'),
    randomCards: [],
    checkedCards: [],
    click: 0,
    img: [{
            'name' : 'koopa_troopa',
            'img' : 'img/koopa_troopa.jpg',
        },
        {
            'name' : 'luigi',
            'img' : 'img/luigi.jpg',
        },
        {
            'name' : 'mario',
            'img' : 'img/mario.jpg',
        },
        {
            'name' : 'mushroom',
            'img' : 'img/mushroom.jpg',
        },
        {
            'name' : 'yoshi',
            'img' : 'img/yoshi.jpg',
        },
        {
            'name' : 'boo',
            'img' : 'img/boo.jpg',
        },
        {
            'name' : 'bowser',
            'img' : 'img/bowser.jpg',
        },
        {
            'name' : 'donkey_kong',
            'img' : 'img/donkey_kong.jpg',
        },
        {
            'name' : 'goomba',
            'img' : 'img/goomba.jpg',
        },
        {
            'name' : 'kamek',
            'img' : 'img/kamek.jpg',
        },
        {
            'name' : 'peach',
            'img' : 'img/peach.jpg',
        },
        {
            'name' : 'pika',
            'img' : 'img/pika.jpg',
        },
        {
            'name' : 'plant',
            'img' : 'img/plant.jpg',
        },
        {
            'name' : 'star',
            'img' : 'img/star.jpg',
        },
        {
            'name' : 'toad',
            'img' : 'img/toad.jpg',
        },
        {
            'name' : 'toadette',
            'img' : 'img/toadette.jpg',
        },
        {
            'name' : 'waluigi',
            'img' : 'img/waluigi.jpg',
        },
        {
            'name' : 'wario',
            'img' : 'img/wario.jpg',
        }
    ],

    startGame : function() {
        this.gameList.style.display = 'none';
        const shuffled = this.img.sort(() => .5 - Math.random()); // shuffle
        let selected = shuffled.slice(0,5) ; //get 2 first elements from shuffle
        this.randomCards.push(selected);
        let allCard = this.randomCards[0].concat(this.randomCards[0]);
        allCard.sort(() => .5 - Math.random());

        allCard.forEach((item) => {
            const memoryList = document.querySelector('.memory__game--list');
            const card = document.createElement('img');

            card.classList.add('memory__game--item', 'reverse');
            card.dataset.name = item.name;
            card.src = item.img;

            memoryList.appendChild(card);

            card.addEventListener('click', this.selectCard.bind(this), false);
        })
    }, // end startGame method

    selectCard : function(e) {
        if (this.click < 2) {
            if (e.target === this.checkedCards[0]) {
                return;
            } else {
                this.click++;
                this.checkedCards.push(e.target);
                setTimeout(function() {
                    e.target.classList.remove('reverse');
                }, 250);
                e.target.classList.add('select');
                e.target.classList.add('disabled');

                if (this.click > 1) {
                    this.matchCard();
                }
            }
        }
    }, // end selectCard method

    matchCard : function() {
        if (this.checkedCards[0].dataset.name === this.checkedCards[1].dataset.name){
            console.log(`it's match`);
        } else {
            console.log(`it doesn't match`);
        }
    }
} // end object memory
// startBtn.addEventListener('click', memory.startGame);
startBtn.addEventListener('click', event => {
    event.preventDefault();
    memoryGame.style.height = '100vh';
    memory.startGame();
})
// memory.startGame();