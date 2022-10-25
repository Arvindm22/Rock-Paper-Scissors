let info = document.querySelector('form');
let player = document.querySelector('#player');
score_1= 0;
info.addEventListener('submit',function(e) {
        e.preventDefault();
        player.innerText =`${info.elements.playerName.value}:${score_1}`
        info.remove();    
})
       