const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

hourHand.style.backgroundColor = '#ffffff';
minHand.style.backgroundColor = '#E54F6E';
// Increment 10px for både X og Y når du roterer
// hourHand.style.transform = `translate(35px, -65px) rotate(60deg)`;
let hourHandRotation = 0;
let minHandRotation = 0;
let secondHandRotation = 0;

function rotateHourHand(degrees) {
  setTimeout(() => {
    console.log('rotateHourHand');

    hourHandRotation += degrees;
    hourHand.style.transform = `rotate(${hourHandRotation}deg)`;
    // ? Velger hvilket punkt den skal rotere fra, vi har right slik at den ikke beveger seg i Y aksen

    hourHand.style.transformOrigin = `right`;

    console.log('setTimeout HOUR HAND');

    rotateHourHand(degrees);
  }, 3600000);
}

function rotateMinHand(degrees) {
  setTimeout(() => {
    console.log('rotateMinHand');

    minHandRotation += degrees;

    minHand.style.transformOrigin = 'right';
    minHand.style.transform = `rotate(${minHandRotation}deg)`;

    console.log('setTimeout MIN HAND');

    rotateMinHand(degrees);
  }, 60000);
}

function rotateSecondHand(degrees) {
  setTimeout(() => {
    console.log('rotateSecondHand');

    secondHandRotation += degrees;

    secondHand.style.transformOrigin = 'right';
    secondHand.style.transform = `rotate(${secondHandRotation}deg)`;

    console.log('setTimeout SECOND HAND');

    rotateSecondHand(degrees);
  }, 1000);
}

function startClock() {
  rotateHourHand(10);
  rotateMinHand(10);
  rotateSecondHand(10);
}

startClock();
