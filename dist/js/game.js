const startBtn = document.querySelector('.btn-play');
const backBtn = document.querySelector('.btn-back');
const memoryGame = document.getElementById('memory__game');
const scoreTable = document.querySelector('.score_table');
const gameList = document.getElementById('game');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const player1Counter = document.getElementById('player1--counter');
const player2Counter = document.getElementById('player2--counter');

const memory = {
    randomCards: [],
    click: 0,
    firstchoice : [],
    secondchoice : [],
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
        this.firstchoice = '';
        this.secondchoice = '';
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
        e.target.classList.add('select');
        e.target.classList.add('disabled');

        setTimeout(function() {
            e.target.classList.remove('reverse');
        }, 250);

        if (this.click < 2) {
            if (this.firstchoice.length === 0) {
                this.firstchoice = e.target;
                // console.log(this.firstchoice.dataset.name)
            } else {
                this.secondchoice = e.target;
                // console.log(this.secondchoice.dataset.name)
            }
        }

        if (this.firstchoice.dataset.name === this.secondchoice.dataset.name){
            setTimeout(this.matchCard.bind(this), 500);
        } else {
            setTimeout(this.mismatchCard.bind(this), 500);
        }

        this.click++;
    }, // end selectCard method

    matchCard : function() {
        console.log(`it's match`);
        this.firstchoice.style.opacity = '0';
        this.secondchoice.style.opacity = '0';
        this.points();
        this.nextTurn();
    },

    mismatchCard : function() {
        console.log(`it doesn't match`);
        this.firstchoice.classList.remove('select');
        this.secondchoice.classList.remove('select');
        this.firstchoice.classList.remove('disabled');
        this.secondchoice.classList.remove('disabled');
        this.firstchoice.classList.add('reverse');
        this.secondchoice.classList.add('reverse');
        console.log('first choice z else', this.firstchoice);
        console.log('second choice z else', this.secondchoice);
        this.nextTurn();
        this.nextPlayer();
    },

    nextTurn : function() {
        this.click = 0;
        this.firstchoice = [];
        this.secondchoice = [];
        console.log('next turn')
    },

    nextPlayer : function () {
        console.log(player1);
        player1.classList.toggle('active');
        player2.classList.toggle('active');
    },

    points : function () {
        if (player1.classList.contains('active')) {
            player1Counter.innerHTML += 5;
        } else if (player2.classList.contains('active')) {
            player2Counter.innerHTML += 10;
        }
    }
} // end object memory

startBtn.addEventListener('click', event => {
    event.preventDefault();
    memoryGame.style.display = 'flex';
    scoreTable.style.display = 'flex';
    memory.startGame();
})

backBtn.addEventListener('click', event => {
    event.preventDefault();
    memoryGame.style.display = 'none';
    scoreTable.style.display = '';
    gameList.style.display = 'flex';
    memory.initGame();
})