const firstPlayer = 'https://raw.githubusercontent.com/Bebeto9009/list_of_players/master/player.json';
let obj = [];
let playerArray = [];
let list = document.querySelector('.game__section');
let btnNewPlayer = document.querySelector('.btn-add');
let noPlayer = document.querySelector('.game-ordinar-numbers');
let namePlayer = document.querySelector('.game-name');
let gameRow = document.querySelector('.game__row');
let ol = document.querySelector('ol');

// let elements = document.querySelectorAll('.fa-trash-alt');
// let elementsNum = elements.length;
let counter = 2;

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
    });
//**************** fetch ****************//


function addNewRow() {
    let playerLi = document.createElement('li');

    let playersRow = document.createElement('div');
    playersRow.classList.add('game__row');

    let noNewPlayer = document.createElement('input');
    noNewPlayer.classList.add('game-ordinar-numbers');
    noNewPlayer.disabled = true;
    noNewPlayer.value = counter;

    let namePlayer = document.createElement('input');
    namePlayer.classList.add('game-name');
    namePlayer.required = true;

    let editPlayer = document.createElement('i');
    editPlayer.classList.add('fas', 'fa-edit');
    editPlayer.style.display = 'none';

    let removePlayer = document.createElement('i');
    removePlayer.classList.add('fas', 'fa-trash-alt');

    let acceptNewPlayer = document.createElement('i');
    acceptNewPlayer.classList.add('fas', 'fa-check');

    list.appendChild(ol);
    ol.appendChild(playerLi);
    // list.appendChild(playerLi);
    playerLi.appendChild(playersRow);
    playersRow.appendChild(noNewPlayer);
    playersRow.appendChild(namePlayer);
    playersRow.appendChild(editPlayer);
    playersRow.appendChild(acceptNewPlayer);
    playersRow.appendChild(removePlayer);
    counter++;
}

function disableEdit(){
    let editIcon = document.querySelectorAll('.fa-edit');
    for (let i = 0; i < editIcon.length; i++){
        editIcon[i].classList.add('no-click');
        console.log(editIcon);
    }
}

function disableDelete(){
    let trashIcon = document.querySelectorAll('.fa-trash-alt');
    for (let i = 0; i < trashIcon.length; i++){
        trashIcon[i].classList.add('no-click');
        console.log(trashIcon);
    }
}

function enableDelete(){
    let trashIcon = document.querySelectorAll('.fa-trash-alt');
    for (let i = 0; i < trashIcon.length; i++){
        trashIcon[i].classList.remove('no-click');
        console.log(trashIcon);
    }
}

function enableEdit(){
    let editIcon = document.querySelectorAll('.fa-edit');
    for (let i = 0; i < editIcon.length; i++){
        editIcon[i].classList.remove('no-click');
        console.log(editIcon);
    }
}

btnNewPlayer.addEventListener('click', function(event) {
    event.preventDefault();
    addNewRow();
    this.disabled = true;
    disableEdit();
    disableDelete();
}); // create row for new player

document.addEventListener('click', function(e) {
    if (e.target.className.includes('fa-trash-alt')) {
        // e.target.parentElement.remove();
        e.target.parentElement.parentNode.remove();
        counter--;
        btnNewPlayer.disabled = false;
    }
    if (e.target.className.includes('fa-check') && (e.target.parentElement.childNodes[1].value == '')) {
       return;
    } else {
        if (e.target.className.includes('fa-check')) {
            e.target.parentNode.childNodes[1].disabled = true; // disable name input
            e.target.parentElement.childNodes[2].style.display = 'block'; // show edit icon
            e.target.parentElement.childNodes[3].style.display = 'none'; // hide check icon
            btnNewPlayer.disabled = false;
            enableEdit();
            enableDelete();
        }
        if (e.target.className.includes('fa-edit')) {
            e.target.parentNode.childNodes[1].disabled = false; // enable name input
            e.target.parentElement.childNodes[2].style.display = 'none'; // hide edit icon
            e.target.parentElement.childNodes[3].style.display = 'block'; //show check icon
            btnNewPlayer.disabled = true;
            disableEdit();
            disableDelete();
        }
    }
}); //crud
