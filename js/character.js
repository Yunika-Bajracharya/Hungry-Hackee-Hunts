var jmp = new Howl({
  src: "./sfx/jmp.mp3",
  html5: true,
  volume: 0.6,
});

var eat = new Howl({
  src: "./sfx/eat.mp3",
  html5: true,
});

var tada = new Howl({
  src: "./sfx/tada.mp3",
  html5: true,
  volume: 0.8,
});

function victoryMessage() {
  eat.play();
  tada.play();
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

  let game = document.querySelector(".tree");
  let heartPosition = document.createElement("div");
  game.appendChild(heartPosition);
  heartPosition.style = `
        width: 50px;
        height: 30px;
        color: red;
        position: absolute;
        top: 10px;
        left: 50px;
    `;

  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      heartPosition.appendChild(popUps[i]);
      setTimeout(function () {
        popUps[i].remove();
      }, 2000);
    }, i * 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const hackee = document.querySelector(".character");
  let right = 0;
  let bottom = 20;

  function jump() {
    if (bottom > 400) return;
    if (bottom > 390) victoryMessage();
    bottom += 25;
    right += 50;
    hackee.style.bottom = bottom + "px";
    hackee.style.left = right + "px";
    jmp.play();
  }

  // assign functions to keycodes
  function control(e) {
    if (e.keyCode === 38) {
      // up arrow
      if (sorted === true) {
        jmp.play();
        jump();
      }
    }
  }

  document.addEventListener("keydown", control);
});
