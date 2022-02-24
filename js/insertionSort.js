// Asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = 100) {
  let bars = document.querySelectorAll(".block");
  // Provide lightgreen colour to 0th bar
  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < bars.length; i += 1) {
    // Assign i-1 to j
    var j = i - 1;

    // To store the integer value of ith bar to key
    var key = parseInt(bars[i].childNodes[0].innerHTML);

    // To store the ith bar height to height
    var height = bars[i].style.height;

    // For selecting section having id "ele"
    var barval = document.getElementById("ele");

    // For dynamically Updating the selected element
    // barval.innerHTML = `<h3>Element Selected is :${key}</h3>`;

    //Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "darkblue";

    // To pause the execution of code for 100 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    // For placing selected element at its correct position
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      // Provide darkblue color to the jth bar
      bars[j].style.backgroundColor = "darkblue";

      // For placing jth element over (j+1)th element
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;

      // Assign j-1 to j
      j = j - 1;

      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );

      // Provide lightgreen color to the sorted part
      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = " rgb(49, 226, 13)";
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

    // Provide light green color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
}

let insertionSortButton = document.getElementById("insertionSortButton");
insertionSortButton.addEventListener("mousedown", () => {
  let promise = InsertionSort();
  promise.then(function () {
    sorted = true;
  });
});