const firstPlayer = 'https://raw.githubusercontent.com/Bebeto9009/the_game/master/player.json';
let obj = [];
let playerArray = [];
let list = document.querySelector('.game__section');
let btnNewPlayer = document.querySelector('.btn-add');
let noPlayer = document.querySelector('.game-ordinar-numbers');
let namePlayer = document.querySelector('.game-name');
let gameRow = document.querySelector('.game__row');

//**************** fetch ****************//
fetch(firstPlayer)
    .then(function (response) {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error ('Błąd połączenia');
        }
})
    .then(function (data) {
        obj = data;
        playerArray = obj.map(el => Object.values(el));

        noPlayer.value = playerArray[0][0];
        namePlayer.value = playerArray[0][1];
    })
    .catch(function (error) {
        console.log("Błąd: ", error);
    }); //fetch json first player
//**************** fetch ****************//

let table = [];
let click = 0;
let j = 1;
function addNewRow(no) {
    click += j;
    table.push(click);

    let playersRow = document.createElement('div');
    playersRow.classList.add('game__row');
    playersRow.id = 'row'+click;

    let noNewPlayer = document.createElement('input');
    noNewPlayer.classList.add('game-ordinar-numbers');
    noNewPlayer.disabled = true;

    let namePlayer = document.createElement('input');
    namePlayer.classList.add('game-name');
    namePlayer.required = true;

    let editPlayer = document.createElement('i');
    editPlayer.classList.add('fas', 'fa-edit');
    editPlayer.id = 'edit'+click;

    let removePlayer = document.createElement('i');
    removePlayer.classList.add('fas', 'fa-trash-alt');
    removePlayer.id = 'remove'+click;

    let acceptNewPlayer = document.createElement('i');
    acceptNewPlayer.classList.add('fas', 'fa-check');
    acceptNewPlayer.id = 'accept'+click;

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
});

function addPlayer () {

    console.log('player został dodany ');
}

(function(){
    for (let i = 0; i < table.length; i++){
        let btnAdd = document.querySelectorAll('#accept'+table[i]);
    }
})();

btnAdd.addEventListener('click', addPlayer);

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