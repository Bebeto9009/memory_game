const memory = {
    randomCards: [],
    checkedCards: [],
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

            card.classList.add('memory__game--item', 'obverse');
            card.dataset.name = item.name;
            card.src = item.img;

            memoryList.appendChild(card);
        })
    } //end startGame method
} // end object memory

memory.startGame();