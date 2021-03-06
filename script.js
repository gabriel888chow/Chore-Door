let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let currentlyPlaying = true;
  let numClosedDoors = 3;
  let openDoor1 = null;
  let openDoor2 = null;
  let openDoor3 = null;
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";

let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";

let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}
doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}
doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}
startButton.onclick = () => {
    if (currentlyPlaying === false) {
     startRound();
    }
}

const startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = status => {
  currentlyPlaying = false;
  if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
} 

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()* numClosedDoors);
  //return choreDoor;
  //41
  if (choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor === 1){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  }
}
randomChoreDoorGenerator();

const isBot = door => {
  if (door.src === botDoorPath) {
  return true;
} else {
  return false;
  }
}

//50
const isClicked = door => {
  if (door.src === closedDoorPath) {
  return false;
} else {
  return true;
  }
}

const playDoor = door => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door) === true){
    gameOver();
  }
}

