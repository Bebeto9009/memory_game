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
    editPlayer.style.display = 'none';
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
    playersRow.appendChild(acceptNewPlayer);
    playersRow.appendChild(removePlayer);

}

btnNewPlayer.addEventListener('click', function(event) {
    event.preventDefault();
    addNewRow();
}); // create row for new player

document.addEventListener('click', function(e) {
    if (e.target.className.includes('fa-trash-alt')) {
        e.target.parentElement.remove();
    }

    if (e.target.className.includes('fa-check') && (e.target.parentElement.childNodes[1].value == '')) {
       return;
    } else {
        if (e.target.className.includes('fa-check')) {
            e.target.parentNode.childNodes[1].disabled = true; // disable name input
            e.target.parentElement.childNodes[2].style.display = 'block'; // show edit icon
            e.target.parentElement.childNodes[3].style.display = 'none'; // hide check icon
        }

        if (e.target.className.includes('fa-edit')) {
            e.target.parentNode.childNodes[1].disabled = false; // enable name input
            e.target.parentElement.childNodes[2].style.display = 'none'; // hide edit icon
            e.target.parentElement.childNodes[3].style.display = 'block'; //show check icon
        }
    }
}); //crud
