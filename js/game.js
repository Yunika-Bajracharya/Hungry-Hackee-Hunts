let btn = document.querySelector(".generate-maze");
btn.addEventListener("click", function () {
  clearInterval(drawLoop);
  for (let popUp of popUps) {
    popUp.style.display = "none";
  }
  for (let i = 0; i < nrows; i++) {
    for (let j = 0; j < ncols; j++) {
      cellElements[i * ncols + j].removeAttribute("style");
      cellElements[i * ncols + j].classList.remove("bottomRightCorner");

      cellElements[i * ncols + j].innerHTML = "";
    }
  }
  grid = [];
  fillGrid();
  current = grid[0];
  stack = [];
  play = false;
  goal = grid[nrows * ncols - 1];
  if (canAnimate) drawLoop = setInterval(animate, 50);
  else {
    while (!play) {
      animate();
    }
  }
});

let checkbox = document.querySelector(".checkbox");
checkbox.addEventListener("click", function () {
  if (checkbox.innerHTML.includes("check"))
    checkbox.innerHTML = `<i class="fas fa-times"></i>`;
  else checkbox.innerHTML = `<i class="fas fa-check"></i>`;
  canAnimate = !canAnimate;
});

let directionButtons = document.querySelectorAll(".direction-button");

document.body.addEventListener("keydown", function (event) {
  if (play) {
    cellElements[current.r * ncols + current.c].innerHTML = ``;
    if (event.key === "ArrowUp") upArrowPressed();
    if (event.key === "ArrowLeft") leftArrowPressed();
    if (event.key === "ArrowRight") rightArrowPressed();
    if (event.key === "ArrowDown") downArrowPressed();
    cellElements[current.r * ncols + current.c].innerHTML = hackee;
    checkWin();
  }
});

function checkWin() {
  if (current === goal) {
    console.log("WON");
    play = false;
    victoryMessage();
    displayNext();
  }
}
function upArrowPressed() {
  if (!current.walls[0]) current = grid[(current.r - 1) * ncols + current.c];
  directionButtons[0].classList.add("highlight");
}
function leftArrowPressed() {
  if (!current.walls[3]) current = grid[current.r * ncols + (current.c - 1)];
  directionButtons[1].classList.add("highlight");
}
function rightArrowPressed() {
  if (!current.walls[1]) current = grid[current.r * ncols + (current.c + 1)];
  directionButtons[2].classList.add("highlight");
}
function downArrowPressed() {
  if (!current.walls[2]) current = grid[(current.r + 1) * ncols + current.c];
  directionButtons[3].classList.add("highlight");
}

function victoryMessage() {
  popUps = [];
  for (let i = 0; i < 10; i++) {
    const popUp = document.createElement("span");
    popUp.classList.add("heart");
    popUp.innerHTML = `<i class="fas fa-heart"></i>`;

    popUp.style.top = Math.random() * 50 + 50 + "%";
    popUp.style.left = Math.random() * 100 + "%";
    popUp.style.fontSize = Math.random() * 10 + 5 + "px";

    popUps.push(popUp);
  }

  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      cellElements[(goal.r - 1) * ncols + goal.c].appendChild(popUps[i]);
      setTimeout(function () {
        popUps[i].remove();
      }, 2000);
    }, i * 100);
  }
}

function displayNext() {
  let nextButton = document.createElement("div");
  nextButton.classList.add("generate-maze");
  nextButton.style.marginLeft = "-3px";
  nextButton.innerHTML = "Level 2";
  nextButton.addEventListener("mousedown", function () {
    window.open("sorting.html");
  });
  let navbar = document.querySelector(".navbar");
  navbar.appendChild(nextButton);
}
