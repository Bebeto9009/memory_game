counter = 0;

function test() {
    let el = document.querySelectorAll('.memory-game__item');
    let arr = Array.prototype.slice.call(el);
    console.log(arr)

    for (let i = 0; i < arr.length; i++ ) {

        if (arr[counter].dataset.name === arr[i].dataset.name){
            arr[counter].click();
            arr[i].click();
            console.log('arrcounter', arr[counter])
            console.log('counter', counter)
            arr.splice(counter, 1);
            arr.splice(i, 1);
            console.log('parentnode', arr[counter.parentNode])
        }


        // console.log(arr[i].dataset.name)
        // if (el[0].dateset.name === el[i].dataset.name) {
        //   console.log('i found', el[i].dataset.name)
        // }
    }
    counter++;
};

/*
function test() {
    let arr = [];
    let el = document.querySelectorAll('.memory-game__item')
    console.log(el)

    for (let i = 0; i < el.length; i++ ) {

        if (el[counter].dataset.name === el[i].dataset.name){
            el[counter].click();
            el[i].click();
            console.log('elcounter', el[counter])
            console.log('counter', counter)
            // el.splice(0, 1);
            // el.splice(1, 1);
            console.log(el)
        }


        // console.log(arr[i].dataset.name)
        // if (el[0].dateset.name === el[i].dataset.name) {
        //   console.log('i found', el[i].dataset.name)
        // }
    }
    counter++;
};
*/







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