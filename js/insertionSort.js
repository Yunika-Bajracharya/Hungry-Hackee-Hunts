async function InsertionSort(delay = 100) {
  let bars = document.querySelectorAll(".block");
  bars[0].style.backgroundColor = " yellow";

  document.getElementsByClassName("range")[0].innerText = `[${0},${14}]`;

  for (var i = 1; i < bars.length; i += 1) {
    // Assign i-1 to j
    var j = i - 1;

    // To store the integer value of ith bar to key
    var key = parseInt(bars[i].childNodes[0].innerHTML);

    // To store the ith bar height to height
    var height = bars[i].style.height;


    //Provide  color to the ith bar
    bars[i].style.backgroundColor = "red";

    // To pause the execution of code for 100 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    // For placing selected element at its correct position
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      // Provide color to the jth bar
      bars[j].style.backgroundColor = "red";

      // For placing jth element over (j+1)th element
      document.getElementsByClassName("range")[0].innerText = `[${j+1},${j}]`;
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;

      // Assign j-1 to j
      j = j -1;

      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );

      // Provide lightgreen color to the sorted part
      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = " yellow";
      }
    }

    // Placing the selected element to its correct position
    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    // Provide color to the ith bar
    //bars[i].style.backgroundColor = " #6b5b95";
  }
  for (var x = 0; x < 15; x++) {
    bars[x].style.backgroundColor = "#6b5b95";
  }
}

let insertionSortButton = document.getElementById("insertionSortButton");
insertionSortButton.addEventListener("mousedown", () => {
  let promise = InsertionSort();
  promise.then(function () {
    sorted = true;
  });
});