const startBtn = document.querySelector('.btn-play');
const backBtn = document.querySelector('.btn-back');
const memoryGame = document.getElementById('memory-game');
const scoreTable = document.querySelector('.score-table');
const gameList = document.getElementById('game');
// const player1 = document.getElementById('player1');
// const player2 = document.getElementById('player2');
// const player1Counter = document.querySelector('.counter1');
// const player2Counter = document.querySelector('.counter2');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const activePlayers = document.querySelector('.score-table__active-players');
const activePlayersList = [];

const memory = {
    randomCards : [],
    click : 0,
    firstchoice : [],
    secondchoice : [],
    memoryList : document.querySelector('.memory-game__list'),
    counter1 : 0,
    counter2 : 0,
    cards : 2,
    sec : 0,
    min : 0,
    npCounter : 0,
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
        this.canPlay = true;
        this.memoryList.innerHTML = '';
        this.firstchoice = '';
        this.secondchoice = '';
        this.click = 0;
    },

    generatePlayers : function() {
        for (let i = 0; i < finalPlayers.length; i++) {
            let newPlayer = document.createElement('span');
            newPlayer.id = i+1;
            newPlayer.classList.add('score-table__player');
            newPlayer.innerText = finalPlayers[i];
            let newCounter = document.createElement('span');
            newCounter.id = finalPlayers[i] + '--counter';
            newCounter.classList.add('score-table__counter');
            newCounter.innerText = 'Found pairs: ';
            let newCounterScore = document.createElement('span');
            newCounterScore.classList.add('score-table__counter--score');
            newCounterScore.innerText = 0;
            newPlayer.appendChild(newCounter);
            newCounter.appendChild(newCounterScore);
            activePlayers.appendChild(newPlayer);
            activePlayersList.push(newPlayer);
            activePlayersList[0].classList.add('active')
        }
    },

    startGame : function() {
        this.initGame();
        gameList.style.display = 'none';
        this.generatePlayers();
        const shuffled = this.img.sort(() => .5 - Math.random()); // shuffle
        let selected = shuffled.slice(0,this.cards) ; //get 2 first elements from shuffle
        this.randomCards.push(selected);
        let allCard = this.randomCards[0].concat(this.randomCards[0]);
        allCard.sort(() => .5 - Math.random());

        allCard.forEach((item) => {
            const card = document.createElement('img');
            card.classList.add('memory-game__item', 'memory-game__item--reverse');
            card.dataset.name = item.name;
            card.src = item.img;
            this.memoryList.appendChild(card);
            card.addEventListener('click', this.selectCard.bind(this), false);
        });
    }, // end startGame method

    selectCard : function(e) {
        if (this.canPlay) {
            e.target.classList.add('memory-game__item--select');
            e.target.classList.add('memory-game__item--disabled');

            setTimeout(function () {
                e.target.classList.remove('memory-game__item--reverse');
            }, 250);

            if (this.click < 3) {
                if (this.firstchoice.length === 0) {
                    this.firstchoice = e.target;

                } else if (this.firstchoice !== e.target) {
                    this.secondchoice = e.target;
                    this.canPlay = false;
                    this.click++;

                    if (this.firstchoice.dataset.name === this.secondchoice.dataset.name) {
                        setTimeout(() => {
                            this.matchCard();
                        }, 500);
                    } else {
                        setTimeout(() => {
                            this.mismatchCard();
                        }, 500);
                    }
                }
            }
        }
    }, // end selectCard method

    matchCard : function() {
        this.firstchoice.style.opacity = '0';
        this.secondchoice.style.opacity = '0';
        this.points();
        this.nextTurn();
        setTimeout(() => {
            this.whoWin();
        }, 220);
    },

    mismatchCard : function() {
        this.firstchoice.classList.remove('memory-game__item--select');
        this.secondchoice.classList.remove('memory-game__item--select');
        this.firstchoice.classList.remove('memory-game__item--disabled');
        this.secondchoice.classList.remove('memory-game__item--disabled');
        this.firstchoice.classList.add('memory-game__item--reverse');
        this.secondchoice.classList.add('memory-game__item--reverse');
        this.nextTurn();
        this.nextPlayer();
    },

    nextTurn : function() {
        this.click = 0;
        this.firstchoice = [];
        this.secondchoice = [];
        this.canPlay = true;
    },

    nextPlayer: function () {
        this.click = 0;
        this.npCounter++;
        console.log('npCounter', this.npCounter)
        for (let i = 0; i < activePlayersList.length; i++) {
            if (this.npCounter > activePlayersList.length) {
                this.npCounter = 0;
                console.log('pierwszy if', this.npCounter, activePlayersList.length)
            } else {
                if (activePlayersList[i].classList.contains('active')) {
                    activePlayersList[i].classList.remove('active');
                    console.log('drugi if', this.npCounter)
                    if (activePlayersList[this.npCounter] < activePlayersList){
                        activePlayersList[this.npCounter].classList.add('active');
                    }
                    // return;
                }
            }
        }
    },

    points : function() {
        if (player1.classList.contains('active')) {
            this.counter1++;
            player1Counter.innerText = this.counter1;
        } else if (player2.classList.contains('active')) {
            this.counter2++;
            player2Counter.innerText = this.counter2;
        }
    },

    whoWin : function() {
        if(this.counter1 + this.counter2 === this.cards) {
            if (this.counter1 > this.counter2) {
                alert('Player 1 win! With score: '+ this.counter1 + ' time ' + min+':'+sec);
                stopTimer();
            } else if (this.counter1 < this.counter2) {
                alert('Player 2 win! With score: '+ this.counter2 + ' time ' + min+':'+sec);
                stopTimer();
            } else {
                alert (`It's a tie`);
                stopTimer();
            }
        }
    },
} // end object memory

/* timer */
let sec = 0;
let min = 0;
seconds.innerHTML = sec.toString().padStart(2, "0");
minutes.innerHTML = min.toString().padStart(2, "0");
let startTimer = null;

const timer = function () {
    sec++;
    minutes.innerHTML = Math.floor(sec / 60).toString().padStart(2, "0");
    seconds.innerHTML = (sec % 60).toString().padStart(2, "0");
};

function stopTimer () {
    if (startTimer){
        clearInterval(startTimer);
        sec = 0;
        min = 0;
        seconds.innerHTML = sec.toString().padStart(2, "0");
        minutes.innerHTML = min.toString().padStart(2, "0");
    }
};
/* end timer */

/* modal */
const modalReset = document.getElementById('modal__reset');
const modalResetBtn = document.querySelector('.btn-reset');
const modalResetNo = document.getElementById('modal__reset--no');
const modalResetYes = document.getElementById('modal__reset--yes');

function modalResetOn() {
    modalReset.classList.add('modal--show');
}

function modalResetOff() {
    modalReset.classList.remove('modal--show');
}

modalResetBtn.addEventListener('click', event => {
    event.preventDefault();
    modalResetOn();
});

modalResetNo.addEventListener('click', event => {
    event.preventDefault();
    modalResetOff();
})

modalResetYes.addEventListener('click', event => {
    event.preventDefault();
    modalResetOff();
    stopTimer();
    startTimer = setInterval(timer, 1000);
    memory.initGame();
    memory.startGame();
    activePlayers.innerHTML = '';
    memory.generatePlayers();
})

/* end modal */

startBtn.addEventListener('click', event => {
    event.preventDefault();
    memoryGame.style.display = 'flex';
    scoreTable.style.display = 'flex';
    memory.startGame();
    startTimer = setInterval(timer, 1000);
});

backBtn.addEventListener('click', event => {
    event.preventDefault();
    activePlayers.innerHTML = '';
    tempPlayers = [];
    memoryGame.style.display = 'none';
    scoreTable.style.display = '';
    gameList.style.display = 'flex';
    memory.initGame();
    stopTimer();
});

