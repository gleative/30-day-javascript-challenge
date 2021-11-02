window.addEventListener('keydown', playSound);

// const playSound = () => {
// 	window.alert(`pressed ${key}`);
// }
const boom = new Audio('./sounds/boom.wav');
const clap = new Audio('./sounds/clap.wav');
const hihat = new Audio('./sounds/hihat.wav');
const kick = new Audio('./sounds/kick.wav');
const openhat = new Audio('./sounds/openhat.wav');
const ride = new Audio('./sounds/ride.wav');
const snare = new Audio('./sounds/snare.wav');
const tom = new Audio('./sounds/tom.wav');
const tink = new Audio('./sounds/tink.wav');

function playSound(key) {
  console.log('playSound');

  const isFalse = false;
  const text = 'Hei du';
  const number = 32;
  console.log(key);
  console.log('keyCode', key.keyCode);

  // TODO: Ikke sånn under... du bare spiller av lyden er, hvis
  switch (key.keyCode) {
    // A
    case 65: {
      clap.play();
      break;
    }
    // S
    case 83: {
      hihat.play();
      break;
    }
    case 68: {
      kick.play();
      break;
    }
    case 70:
      openhat.play();
      break;
    case 71:
      boom.play();
      break;
    case 72:
      ride.play();
      break;
    // J
    case 74:
      console.log('NANI');
      snare.play();
      break;
    case 75:
      tom.play();
      break;
    case 76:
      tink.play();
      break;
  }
}
