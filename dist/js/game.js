const startBtn = document.querySelector('.btn-play');
const backBtn = document.querySelector('.btn-back');
const memoryGame = document.getElementById('memory__game');
const scoreTable = document.querySelector('.score_table');
const gameList = document.getElementById('game');
const memory = {
    randomCards: [],
    checkedCards: [],
    click: 0,
    memoryList : document.querySelector('.memory__game--list'),
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

    initGame : function () {
        this.memoryList.innerHTML = '';
        this.checkedCards[0] = '';
        this.checkedCards[1] = '';
        this.click = 0;
    },

    startGame : function() {
        this.initGame();
        gameList.style.display = 'none';
        const shuffled = this.img.sort(() => .5 - Math.random()); // shuffle
        let selected = shuffled.slice(0,18) ; //get 2 first elements from shuffle
        this.randomCards.push(selected);
        let allCard = this.randomCards[0].concat(this.randomCards[0]);
        allCard.sort(() => .5 - Math.random());

        allCard.forEach((item) => {

            const card = document.createElement('img');

            card.classList.add('memory__game--item', 'reverse');
            card.dataset.name = item.name;
            card.src = item.img;

            this.memoryList.appendChild(card);

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
            this.checkedCards[0].style.opacity = '0';
            this.checkedCards[1].style.opacity = '0';
            // this.nextTurn();
        } else {
            console.log(`it doesn't match`);
            this.checkedCards[0].remove('disabled');
            this.checkedCards[0].remove('select');
            this.checkedCards[1].remove('disabled');
            this.checkedCards[1].remove('select');
            setTimeout(function() {
                e.target.classList.add('reverse');
            }, 250);
            this.nextTurn();
        }
    },

    nextTurn : function() {
        this.checkedCards = [];
        this.click = 0;
    }
} // end object memory

startBtn.addEventListener('click', event => {
    event.preventDefault();
    memoryGame.style.display = 'flex';
    scoreTable.style.display = 'flex';
    memory.startGame();
    // memory.initGame();
})

backBtn.addEventListener('click', event => {
    event.preventDefault();
    memoryGame.style.display = 'none';
    scoreTable.style.display = '';
    // memory.initGame();
    gameList.style.display = 'flex';
})