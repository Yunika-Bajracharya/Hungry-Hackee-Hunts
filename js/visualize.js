let delay = 10;

let inputSpeed =document.getElementById("speed");

inputSpeed.addEventListener("input", controlSpeed);

function controlSpeed() {
    let arraySpeed = inputSpeed.value;
    switch(parseInt(arraySpeed))
    {
        case 1: 
            delay = 2000;
            break;
        case 2: 
            delay=1000;
            break;
        case 3: 
            delay=100;
            break;
        case 4:
            delay=10;
            break;
        case 5:
            delay=1;
            break;
    }
}

const algoButtons = document.querySelectorAll(".algoButtons button");

function disableButtons() {
  for (let i = 0; i < algoButtons.length; i++) {
    algoButtons[i].disabled = true;
    inputSpeed.disabled = true;
  }
}

function enableButtons() {
  for (let i = 0; i < algoButtons.length; i++) {
    algoButtons[i].disabled = false;
    inputSpeed.disabled = false;
  }
}