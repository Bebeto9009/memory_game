counter = 0;


let el = document.querySelectorAll('.memory-game__item');
let arr = Array.prototype.slice.call(el);

function test() {

    if (counter < el.length) {
        for (let i = arr.length; i--;) {
            if (arr[0].dataset.name === arr[i].dataset.name) {
                arr[0].click();
                arr[i].click();
                arr.splice(i, 1);
                arr.slice(0, 1);
            }
        }
        counter++;
    };
}

function run() {
    setInterval(test,1000);
}

run();




