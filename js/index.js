let count = 0;
let playerBtn = document.querySelectorAll('.player-btn');
for (const btn of playerBtn) {
    btn.addEventListener('click', function(event){
        if(count < 5){
            count++;
            let player = btn.parentElement.children[0].innerText;
            let playerList = document.getElementById('player-list');
            let addPlayer = document.createElement('li');
            addPlayer.innerText = player;
            playerList.appendChild(addPlayer);
            btn.setAttribute('disabled', true);
            btn.style.background='#5f778d';
        }
        else{
            alert('You already selected five players!');
        }

    })
}