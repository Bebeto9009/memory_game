const startBtn = document.querySelector('.btn-play');
const backBtn = document.querySelector('.btn-back');
const memoryGame = document.getElementById('memory__game');
const scoreTable = document.querySelector('.score_table');
const gameList = document.getElementById('game');
const memory = {
    randomCards: [],
    checkedCards: [],
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
        this.checkedCards = [];
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
                if (this.firstchoice.length === 0) {
                    this.firstchoice = e.target;
                    console.log('first choice z if', this.firstchoice);
                    console.log('second choice z if', this.secondchoice);
                } else {
                    this.secondchoice = e.target;
                    // console.log('first choice z else', this.firstchoice);
                    // console.log('second choice z else', this.secondchoice);
                }
                this.click++;
                this.checkedCards.push(e.target);
                // setTimeout(function() {
                    e.target.classList.remove('reverse');
                // }, 250);
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
            this.firstchoice.style.opacity = '0';
            this.secondchoice.style.opacity = '0';
            this.nextTurn();
        } else {
            setTimeout(this.nextTurn.bind(this), 500);
            console.log(`it doesn't match`);
            // setTimeout(function() {
            this.firstchoice.classList.remove('select');
            this.secondchoice.classList.remove('select');
            this.firstchoice.classList.remove('disabled');
            this.secondchoice.classList.remove('disabled');
            this.firstchoice.classList.add('reverse');
            this.secondchoice.classList.add('reverse');
                console.log('first choice z else', this.firstchoice);
                console.log('second choice z else', this.secondchoice);
            this.nextTurn();
            // }, 100);
        }
    },

    nextTurn : function() {
        this.checkedCards = [];
        this.click = 0;
        this.firstchoice = [];
        this.secondchoice = [];
        console.log('next turn')
    },
} // end object memory

startBtn.addEventListener('click', event => {
    event.preventDefault();
    memoryGame.style.display = 'flex';
    scoreTable.style.display = 'flex';
    // memory.initGame();
    memory.startGame();
})

backBtn.addEventListener('click', event => {
    event.preventDefault();
    memoryGame.style.display = 'none';
    scoreTable.style.display = '';
    gameList.style.display = 'flex';
    memory.initGame();
})