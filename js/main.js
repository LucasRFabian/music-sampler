let mediaPlayer = document.querySelectorAll('.mediaPlayer');
let albumCover = document.querySelectorAll('.albumCover');
let players = document.querySelectorAll('audio');

function hideAll() {
    mediaPlayer.forEach(function(el) {
        el.style.display = 'none';
    });
}
function muteAll() {
    players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });
}

hideAll();
muteAll();

albumCover.forEach(function(el) {
  el.onclick = (e) => {
    hideAll();
    muteAll();
 
    switch (e.target.getAttribute('id')) {
      case 'slipknot1999':
        document.querySelector('.waitAndBleed')
        	.style.display = 'block';
        document.querySelector('.textOne')
        	.style.display = 'block';
        break;
      case 'subliminalVerses':
        document.querySelector('.duality')
        	.style.display = 'block';
        document.querySelector('.textTwo')
        	.style.display = 'block';
        break;
      case 'allHopeIsGone':
        document.querySelector('.snuff')
            .style.display = 'block';
        document.querySelector('.textThree')
        	.style.display = 'block';
        break;
      case 'weAreNotYourKind':
        document.querySelector('.neroForte')
            .style.display = 'block';
        document.querySelector('.textFour')
            .style.display = 'block';
        break;
    } 
  }
});
