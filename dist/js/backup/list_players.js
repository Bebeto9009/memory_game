const firstPlayer = 'https://raw.githubusercontent.com/Bebeto9009/memory_game/master/player.json';

class newPlayer {

    constructor(name) {
        this.name = name;
    }

    addRow() {
        let list = document.querySelector('.game__section');
        let ol = document.querySelector('ol');
        let playerLi = document.createElement('li');

        let playersRow = document.createElement('div');
        playersRow.classList.add('user');

        let namePlayer = document.createElement('input');
        namePlayer.classList.add('user__name');
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
}

const listPlayer = {

    newRow: function () {
        let btnNewPlayer = document.querySelector('.btn-add');
        btnNewPlayer.addEventListener('click', e => {
            e.preventDefault();
            let newElRow = new newPlayer('');
            newElRow.addRow();
            // console.log(player)
        })
    },

    savePlayer: function () {
        document.addEventListener('click', function (e) {
            if (e.target.className.includes('fa-trash-alt')) {
                e.target.parentElement.parentNode.remove();
                // btnNewPlayer.disabled = false;
                // delNames();
                // countPlayer();
            }
            if (e.target.className.includes('fa-check') && (e.target.parentElement.childNodes[0].value === '')) {
                return;
            } else {
                if (e.target.className.includes('fa-check')) {
                    e.target.parentNode.childNodes[0].disabled = true; // disable name input
                    e.target.parentElement.childNodes[1].style.display = 'block'; // show edit icon
                    e.target.parentElement.childNodes[2].style.display = 'none'; // hide check icon
                    // btnNewPlayer.disabled = false;
                    // enableEdit();
                    // enableDelete();
                    // addNames();
                    // countPlayer();
                }
                if (e.target.className.includes('fa-edit')) {
                    e.target.parentNode.childNodes[0].disabled = false; // enable name input
                    e.target.parentElement.childNodes[1].style.display = 'none'; // hide edit icon
                    e.target.parentElement.childNodes[2].style.display = 'block'; //show check icon
                    // btnNewPlayer.disabled = true;
                    // disableEdit();
                    // disableDelete();
                    // countPlayer();
                }
            }
        })
    }
}

listPlayer.newRow();
listPlayer.savePlayer();

// newPlayer.addRow();
