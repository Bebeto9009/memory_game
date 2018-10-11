const firstPlayer = 'https://raw.githubusercontent.com/Bebeto9009/list_of_players/master/player.json';
let obj = [];
let playerArray = [];
let list = document.querySelector('.game__section');
let btnNewPlayer = document.querySelector('.btn-add');
let namePlayer = document.querySelector('.game-name');
let gameRow = document.querySelector('.game__row');
let ol = document.querySelector('ol');

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

        namePlayer.value = playerArray[0][1];
    })
    .catch(function (error) {
        console.log(error);
    });
//**************** fetch ****************//


function addNewRow(item) {
    let playerLi = document.createElement('li');

    let playersRow = document.createElement('div');
    playersRow.classList.add('game__row');

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
    playerLi.appendChild(playersRow);
    playersRow.appendChild(namePlayer);
    playersRow.appendChild(editPlayer);
    playersRow.appendChild(acceptNewPlayer);
    playersRow.appendChild(removePlayer);
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
        e.target.parentElement.parentNode.remove();
        btnNewPlayer.disabled = false;
    }
    if (e.target.className.includes('fa-check') && (e.target.parentElement.childNodes[0].value == '')) {
       return;
    } else {
        if (e.target.className.includes('fa-check')) {
            e.target.parentNode.childNodes[0].disabled = true; // disable name input
            console.log(e.target.parentNode.childNodes)
            e.target.parentElement.childNodes[1].style.display = 'block'; // show edit icon
            e.target.parentElement.childNodes[2].style.display = 'none'; // hide check icon
            btnNewPlayer.disabled = false;
            enableEdit();
            enableDelete();

            itemsArray.push(e.target.parentNode.childNodes[0].value);
            localStorage.setItem('items', JSON.stringify(itemsArray));


        }
        if (e.target.className.includes('fa-edit')) {
            e.target.parentNode.childNodes[0].disabled = false; // enable name input
            e.target.parentElement.childNodes[1].style.display = 'none'; // hide edit icon
            e.target.parentElement.childNodes[2].style.display = 'block'; //show check icon
            btnNewPlayer.disabled = true;
            disableEdit();
            disableDelete();
        }
    }
}); //crud

let items;

if (localStorage.getItem('items')) {
    items = JSON.parse(localStorage.getItem('items'));
} else {
    items = [];
}

let itemsArray = [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

data.forEach(item => {
    addNewRow(item);
});