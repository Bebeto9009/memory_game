const memory = {
    randomCards: [],
    checkedCards: [],
    click: 0,
    img: [{
        'name' : 'koopa_troopa',
        'img' : '/img/koopa_troopa.jpg',
    },
    {
        'name' : 'luigi',
        'img' : '/img/luigi.jpg',
    },
    {
        'name' : 'mario',
        'img' : '/img/mario.jpg',
    },
    {
        'name' : 'mushroom',
        'img' : '/img/mushroom.jpg',
    },
    {
        'name' : 'yoshi',
        'img' : '/img/yoshi.jpg',
    }
    ],

    startGame : function() {
        const shuffled = this.img.sort(() => .5 - Math.random()); // shuffle
        let selected = shuffled.slice(0,2) ; //get 2 first elements from shuffle
        this.randomCards.push(selected);
        let allCard = this.randomCards[0].concat(this.randomCards[0]);
        allCard.sort(() => 0.5 - Math.random());

        allCard.forEach((item) => {
            const memoryList = document.querySelector('.memory__game--list');
            const card = document.createElement('img');

            card.classList.add('memory__game--item', 'reverse');
            card.dataset.name = item.name;
            card.src = item.img;

            memoryList.appendChild(card);

            card.addEventListener('click', this.selectCard.bind(this));
        })
    }, // end startGame method

    selectCard : function(e) {
        if (this.click < 2) {
            if (e.target === this.checkedCards[0]) {
                return;
            } else {
                this.click++;
                this.checkedCards.push(e.target);
                e.target.classList.remove('reverse');
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

memory.startGame();