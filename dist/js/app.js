const firstPlayer = 'https://raw.githubusercontent.com/Bebeto9009/list_of_players/master/player.json';
let obj = [];
let playerArray = [];
let list = document.querySelector('.game__section');
let btnNewPlayer = document.querySelector('.btn-add');
let noPlayer = document.querySelector('.game-ordinar-numbers');
let namePlayer = document.querySelector('.game-name');
let gameRow = document.querySelector('.game__row');
let elements = document.querySelectorAll('.fa-trash-alt');
let elementsNum = elements.length;

document.addEventListener('click', function(e){
    if(e.path[0].className.includes('fa-trash-alt')) {
        e.path[0].parentElement.remove();
    }
    if(e.path[0].className.includes('fa-check')) {
        e.path[1].childNodes[1].disabled=true;
    }
    if(e.path[0].className.includes('fa-edit')) {
        e.path[1].childNodes[1].disabled=false;
    }
})


// document.getElementById('row').addEventListener('click', function(e) {
//     if(e.target && e.target.className === 'fa-trash-alt') {
//         console.log('udalo sie');
//         console.log(e);
//         // gameRow.parentNode.removeChild(gameRow);
//     }
// });

// document.getElementById('row').addEventListener('click', function(e) {
//     let classes = e.target.className;
//     if(classes = ".fa-trash-alt"){
//         gameRow.parentNode.removeChild(gameRow);
//     }
// })


// document.getElementById("row").addEventListener("click", function(event) {
//     if ( event.target.className === 'fa-trash-alt') {
//         //Do your magic
//         gameRow.parentNode.removeChild(gameRow);
//     }
// });


// document.getElementById("row").addEventListener("click", function(event) {
//     if ( event.target.className === 'fa-trash') {
//         //Do your magic
//         gameRow.parentNode.removeChild(gameRow);
//     }
// });

// elements.forEach(element => {
//     element.addEventListener('click', event => console.log(event));
// })
//
// elements.forEach(function(element){
//     element.addEventListener('click', function(event){
//         if(element.target && element.target.id== 'brnPrepend')
//     })
// })
//
// trashIcon.addEventListener('click', function(event){
//     console.log(event)
// })

//**************** fetch ****************//
fetch(firstPlayer)
    .then(function (response) {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error();
        }
})
    .then(function (data) {
        obj = data;
        playerArray = obj.map(el => Object.values(el));

        noPlayer.value = playerArray[0][0];
        namePlayer.value = playerArray[0][1];
    })
    .catch(function (error) {
        console.log(error);
    }); //fetch json first player
//**************** fetch ****************//


function addNewRow() {

    let playersRow = document.createElement('div');
    playersRow.classList.add('game__row');
    // playersRow.id = 'row';

    let noNewPlayer = document.createElement('input');
    noNewPlayer.classList.add('game-ordinar-numbers');
    noNewPlayer.disabled = true;

    let namePlayer = document.createElement('input');
    namePlayer.classList.add('game-name');
    namePlayer.required = true;

    let editPlayer = document.createElement('i');
    editPlayer.classList.add('fas', 'fa-edit');
    // editPlayer.id = 'edit';

    let removePlayer = document.createElement('i');
    removePlayer.classList.add('fas', 'fa-trash-alt');
    // removePlayer.id = 'remove';

    let acceptNewPlayer = document.createElement('i');
    acceptNewPlayer.classList.add('fas', 'fa-check');
    // acceptNewPlayer.id = 'accept';

    list.appendChild(playersRow);
    playersRow.appendChild(noNewPlayer);
    playersRow.appendChild(namePlayer);
    playersRow.appendChild(editPlayer);
    playersRow.appendChild(removePlayer);
    playersRow.appendChild(acceptNewPlayer);
}

btnNewPlayer.addEventListener('click', function(event) {
    event.preventDefault();
    addNewRow();
    // let el = document.querySelectorAll('.fa-trash-alt');
    // let elNum = el.length;
    // for (i = 0; i < elNum; i++){
    //     console.log(el[i])
    //     el[i].addEventListener('click', function(e) {
    //         e.currentTarget.parentNode.remove();
    //         console.log(e);
    //     });
    // }
});


// function addPlayer () {
//
//     console.log('player został dodany ');
// }

// (function(){
//     for (let i = 0; i < table.length; i++){
//         let btnAdd = document.querySelectorAll('#accept'+table[i]);
//     }
// })();

// /**************** add new player inputs ****************/
// let count=1;
// function newPlayer(){
//     count++;
//
//     let playersRow = document.createElement('div');
//     playersRow.classList.add('game__row');
//     playersRow.id = count;
//
//     let noNewPlayer = document.createElement('input');
//     noNewPlayer.classList.add('game-ordinar-numbers');
//     noNewPlayer.disabled = true;
//     noNewPlayer.value = count;
//
//     let namePlayer = document.createElement('input');
//     namePlayer.classList.add('game-name');
//
//     let editPlayer = document.createElement('i');
//     editPlayer.classList.add('fas', 'fa-edit');
//
//     let removePlayer = document.createElement('i');
//     removePlayer.classList.add('fas', 'fa-trash-alt');
//
//     let acceptNewPlayer = document.createElement('i');
//     acceptNewPlayer.classList.add('fas', 'fa-check');
//
//     list.appendChild(playersRow);
//     playersRow.appendChild(noNewPlayer);
//     playersRow.appendChild(namePlayer);
//     playersRow.appendChild(editPlayer);
//     playersRow.appendChild(removePlayer);
//     playersRow.appendChild(acceptNewPlayer);
// } // add new inputs for new player
//
// btnNewPlayer.addEventListener('click', function(event){
//     event.preventDefault();
//     newPlayer();
// }); // create new player on button
// /**************** add new player inputs ****************/
//
// /**************** delete player ****************/
// function deletePlayer(){
//     gameRow.parentNode.removeChild(gameRow);
// }  // delete player function
//
// let deleteIcon = document.querySelector('.fa-trash-alt');
// deleteIcon.addEventListener('click', deletePlayer);
// // button to function delete player
// /**************** delete player ****************/
//
// /**************** accept new player ****************/
// let counter = [];
// function addPlayer(){
//     counter.push(namePlayer.value); // wrzucamy do tablicy wartość name
//     gameRow.id = counter.indexOf(namePlayer.value); // dodajemy id z kolejności elementu nazwy gracza w tablicy
// }
//
// let acceptPlayer = document.getElementById(counter.indexOf(namePlayer.value));
// console.log(acceptPlayer)
// acceptPlayer.addEventListener('click', addPlayer);
// /**************** accept new player ****************/