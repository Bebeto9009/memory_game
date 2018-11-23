const startBtn = document.querySelector('.btn-play');
const backBtn = document.querySelector('.btn-back');
const memoryGame = document.getElementById('memory__game');
const scoreTable = document.querySelector('.score_table');
const gameList = document.getElementById('game');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const player1Counter = document.querySelector('.counter1');
const player2Counter = document.querySelector('.counter2');

const memory = {
    randomCards: [],
    click: 0,
    firstchoice : [],
    secondchoice : [],
    memoryList : document.querySelector('.memory__game--list'),
    counter1 : 0,
    counter2 : 0,
    canPlay : true,
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

    initGame : function() {
        this.memoryList.innerHTML = '';
        this.firstchoice = '';
        this.secondchoice = '';
        this.click = 0;
        this.counter1 = 0;
        player1Counter.innerText = this.counter1;
        this.counter2 = 0;
        player2Counter.innerText = this.counter1;
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
            // setTimeout(this.matchCard.bind(this), 500);
            setTimeout(() => {
                    this.matchCard();
            }, 500);
        } else {
            // setTimeout(this.mismatchCard.bind(this), 500);
            setTimeout(() => {
                    this.mismatchCard();
            }, 500);
        }

        this.click++;
    }, // end selectCard method

    matchCard : function() {
        console.log(`it's match`);
        this.firstchoice.style.opacity = '0';
        this.secondchoice.style.opacity = '0';
        this.points();
        this.nextTurn();
        setTimeout(() => {
            this.whoWin();
        }, 20);

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

    points : function() {
        if (player1.classList.contains('active')) {
            this.counter1++;
            console.log('counter1', this.counter1)
            console.log('counter2', this.counter2)
            player1Counter.innerText = this.counter1;
        } else if (player2.classList.contains('active')) {
            this.counter2++;
            player2Counter.innerText = this.counter2;
        }
    },

    whoWin : function() {
        console.log('suma', (this.counter1 + this.counter2 === 18));
        if(this.counter1 + this.counter2 === 18) {
            if (this.counter1 > this.counter2) {
                console.log('wygrał gracz 1');
                alert('player 1 win! score: ', this.counter1);
            } else if (this.counter1 < this.counter2) {
                alert('player 2 win! score: ', this.counter2);
            } else {
                alert (`It's a tie`);
            }
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