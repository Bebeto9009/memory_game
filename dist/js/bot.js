function test() {
    let arr = [];
    let el = document.querySelectorAll('.memory-game__item').dataset.name;
    for (let i = 0; i < el.length; i++ ) {
        el.click();
    }
};


// selectCard : function(e) {
//     if (this.canPlay) {
//         e.target.classList.add('memory-game__item--select');
//         e.target.classList.add('memory-game__item--disabled');
//
//         setTimeout(function () {
//             e.target.classList.remove('memory-game__item--reverse');
//         }, 250);
//
//         if (this.click < 3) {
//             if (this.firstchoice.length === 0) {
//                 this.firstchoice = e.target;
//
//             } else if (this.firstchoice !== e.target) {
//                 this.secondchoice = e.target;
//                 this.canPlay = false;
//                 this.click++;
//
//                 if (this.firstchoice.dataset.name === this.secondchoice.dataset.name) {
//                     setTimeout(() => {
//                         this.matchCard();
//                     }, 500);
//                 } else {
//                     setTimeout(() => {
//                         this.mismatchCard();
//                     }, 500);
//                 }
//             }
//         }
//     }
// },