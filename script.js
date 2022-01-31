const PIANO = document.querySelector('.piano');
const keys = document.querySelectorAll('.piano-key');
let abovePiano = false;

// mouse sounds
PIANO.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('piano-key')) {
        abovePiano = true;
        const note = event.target.dataset.note;
        const src = `./assets/audio/${note}.mp3`;
        event.target.classList.add('piano-key-active')
        playNote(src);
    }
})


PIANO.addEventListener('mouseup', event => {
    abovePiano = false;
    event.target.classList.remove('piano-key-active')
}) 


PIANO.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('piano-key') && event.buttons == 1 && abovePiano) {
    const note = event.target.dataset.note;
    const src = `./assets/audio/${note}.mp3`;
    event.target.classList.add('piano-key-active')
    playNote(src);
}
})


function playNote(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}


PIANO.addEventListener('mouseout', event => {
    event.target.classList.remove('piano-key-active')
}) 


//keyboard sounds
window.addEventListener('keydown', e => {
    if (e.repeat) return;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
    audio.play();
    audio.currentTime = 0;
    key.classList.add('piano-key-active')  
})


window.addEventListener('keyup', releaseKey)
function releaseKey(e) {
    const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
    key.classList.remove('piano-key-active')
}


//Notes-Letters switch

const notesBtn = document.querySelector('.btn-notes');
const lettersBtn = document.querySelector('.btn-letters');
notesBtn.addEventListener('click', activateNotes);
function activateNotes() {
    lettersBtn.classList.remove('btn-active');
    notesBtn.classList.add('btn-active');
    keys.forEach(key => {
        key.classList.remove('letter');
    })
}
lettersBtn.addEventListener('click', activateLetters)
function activateLetters() {
    notesBtn.classList.remove('btn-active');
    lettersBtn.classList.add('btn-active');
    keys.forEach(key => {
        key.classList.add('letter');
    })
}

//Fullscreen
const fsBtn = document.querySelector(".fullscreen");

fsBtn.addEventListener('click', toggleFullScreen);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } 
    else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
