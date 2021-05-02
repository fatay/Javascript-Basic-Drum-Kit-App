document.body.addEventListener('keydown',HandleKeys);
document.body.addEventListener('keyup',KeyUpDelete);

function HandleKeys(e) {
  const getKey = e.key;
  let sound;
  switch(getKey) {
    case "w":
      sound = new Audio('sounds/crash.mp3');
      document.querySelector(".w").classList.add('pressed');
    break;

    case "a":
      sound = new Audio('sounds/kick-bass.mp3');
      document.querySelector(".a").classList.add('pressed');
    break;

    case "s":
      sound = new Audio('sounds/snare.mp3');
      document.querySelector(".s").classList.add('pressed');
    break;

    case "d":
      sound = new Audio('sounds/tom-1.mp3');
      document.querySelector(".d").classList.add('pressed');
    break;

    case "j":
      sound = new Audio('sounds/tom-2.mp3');
      document.querySelector(".j").classList.add('pressed');
    break;

    case "k":
      sound = new Audio('sounds/tom-3.mp3');
      document.querySelector(".k").classList.add('pressed');
    break;

    case "l":
      sound = new Audio('sounds/tom-4.mp3');
      document.querySelector(".l").classList.add('pressed');
  }

  if(typeof sound != "undefined") {
    sound.play();
  }
}

function KeyUpDelete(e) {
  let getKey = e.key;
  switch(getKey) {
    case "w":
      sound = new Audio('sounds/crash.mp3');
      document.querySelector(".w").classList.remove('pressed');
    break;

    case "a":
      sound = new Audio('sounds/kick-bass.mp3');
      document.querySelector(".a").classList.remove('pressed');
    break;

    case "s":
      sound = new Audio('sounds/snare.mp3');
      document.querySelector(".s").classList.remove('pressed');
    break;

    case "d":
      sound = new Audio('sounds/tom-1.mp3');
      document.querySelector(".d").classList.remove('pressed');
    break;

    case "j":
      sound = new Audio('sounds/tom-2.mp3');
      document.querySelector(".j").classList.remove('pressed');
    break;

    case "k":
      sound = new Audio('sounds/tom-3.mp3');
      document.querySelector(".k").classList.remove('pressed');
    break;

    case "l":
      sound = new Audio('sounds/tom-4.mp3');
      document.querySelector(".l").classList.remove('pressed');
  }
}