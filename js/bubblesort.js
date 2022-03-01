// Asynchronous BubbleSort function
async function BubbleSort(l, r, delay = 100) {
  var blocks = document.querySelectorAll(".block");

  document.getElementsByClassName("range")[0].innerText = `[${l},${r}]`;

  // BubbleSort Algorithm
  for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 15 - i - 1; j++) {
      // To change background-color of the
      // blocks to be compared
      blocks[j].style.backgroundColor = "red";
      blocks[j + 1].style.backgroundColor = "yellow";

      // To wait for .1 sec
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      var value1 = Number(blocks[j].childNodes[0].innerHTML);
      var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

      // To compare value of two blocks
      if (value1 > value2) {
        await swap(blocks[j], blocks[j + 1]);
        document.getElementsByClassName("range")[0].innerText = `[${j},${j+1}]`;
        blocks = document.querySelectorAll(".block");
      }

      // Changing the color to the previous one
      blocks[j].style.backgroundColor = "#6b5b95";
      blocks[j + 1].style.backgroundColor = "#6b5b95";
    }

    //changing the color of greatest element
    //found in the above traversal
    blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
  }
}

// Function to swap two blocks
function swap(el1, el2) {
  return new Promise((resolve) => {
    // For exchanging styles of two blocks
    var temp = el1.style.transform;
    el1.style.transform = el2.style.transform;
    el2.style.transform = temp;

    window.requestAnimationFrame(function () {
      // For waiting for .25 sec
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 250);
    });
  });
}

let bubbleSortButton = document.getElementById("bubbleSortButton");
bubbleSortButton.addEventListener("mousedown", () => {
  let promise = BubbleSort(0, 14);
  promise.then(function () {
    sorted = true;
  });
});