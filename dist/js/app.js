const firstPlayer = 'https://raw.githubusercontent.com/Bebeto9009/list_of_players/master/player.json';
let obj = [];
let playerArray = [];
let list = document.querySelector('.game__section');
let btnNewPlayer = document.querySelector('.btn-add');
let namePlayer = document.querySelector('.game-name');
let gameRow = document.querySelector('.game__row');
let ol = document.querySelector('ol');
let storedArr = [];
let namesArr = [];

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


function addNewRow() {
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
    }
}

function disableDelete(){
    let trashIcon = document.querySelectorAll('.fa-trash-alt');
    for (let i = 0; i < trashIcon.length; i++){
        trashIcon[i].classList.add('no-click');
    }
}

function enableDelete(){
    let trashIcon = document.querySelectorAll('.fa-trash-alt');
    for (let i = 0; i < trashIcon.length; i++){
        trashIcon[i].classList.remove('no-click');
    }
}

function enableEdit(){
    let editIcon = document.querySelectorAll('.fa-edit');
    for (let i = 0; i < editIcon.length; i++){
        editIcon[i].classList.remove('no-click');
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
        delNames();
        countPlayer();
    }
    if (e.target.className.includes('fa-check') && (e.target.parentElement.childNodes[0].value == '')) {
       return;
    } else {
        if (e.target.className.includes('fa-check')) {
            e.target.parentNode.childNodes[0].disabled = true; // disable name input
            e.target.parentElement.childNodes[1].style.display = 'block'; // show edit icon
            e.target.parentElement.childNodes[2].style.display = 'none'; // hide check icon
            btnNewPlayer.disabled = false;
            enableEdit();
            enableDelete();
            addNames();
            countPlayer();
        }
        if (e.target.className.includes('fa-edit')) {
            e.target.parentNode.childNodes[0].disabled = false; // enable name input
            e.target.parentElement.childNodes[1].style.display = 'none'; // hide edit icon
            e.target.parentElement.childNodes[2].style.display = 'block'; //show check icon
            btnNewPlayer.disabled = true;
            disableEdit();
            disableDelete();
            countPlayer();
        }
    }
    function addNames() {
        namesArr.push(e.target.parentNode.childNodes[0].value);
        console.log('namesArr is', namesArr);
        localStorage.setItem('items', JSON.stringify(namesArr));
        storedArr = JSON.parse(localStorage.getItem('items'));
    }

    function delNames() {
        for (let i = 0; i < storedArr.length; i++) {
            if ((storedArr[i] === e.target.parentNode.childNodes[0].value) && (namesArr[i] === e.target.parentNode.childNodes[0].value)) {
                storedArr.splice(i, 1);
                namesArr.splice(i, 1);
                localStorage.setItem('items', JSON.stringify(storedArr))
            }
        }
    }
}); //crud

let items = JSON.parse(localStorage.getItem('items')) || [];
namesArr=items;
storedArr = items;
items.forEach(addNewRow);
let allPlayers = Array.from(document.querySelectorAll('.game-name'));
allPlayers.shift();
countPlayer();
for (let i = 0; i < allPlayers.length; i++) {
    for (let i = 0; i < items.length; i++) {
        allPlayers[i].value = items[i];
        allPlayers[i].disabled=true;
        allPlayers[i].parentElement.childNodes[1].style.display = 'block';
        allPlayers[i].parentElement.childNodes[2].style.display = 'none';
    }
}

function countPlayer() {
    if (namesArr.length < 3) {
        btnNewPlayer.disabled=false;
        console.log(allPlayers)
    } else {
        btnNewPlayer.disabled=true;
    }
}
