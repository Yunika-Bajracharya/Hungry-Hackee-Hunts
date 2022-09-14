async function ShellSort(delay) {
  let bars = document.querySelectorAll(".block");

  document.getElementsByClassName("range")[0].innerText = `[${0},${14}]`;

  for (var i = 7; i > 0; i = Math.floor(i / 2)) {
    // To pause the execution of code
    // for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    for (var j = i; j < 15; j++) {
      var temp = parseInt(bars[j].childNodes[0].innerHTML);
      var k;

      var temp1 = bars[j].style.height;
      var temp2 = bars[j].childNodes[0].innerText;

      for (
        k = j;
        k >= i && parseInt(bars[k - i].childNodes[0].innerHTML) > temp;
        k -= i
      ) {
        bars[k].style.height = bars[k - i].style.height;
        bars[k].childNodes[0].innerText = bars[k - i].childNodes[0].innerText;

        document.getElementsByClassName("range")[0].innerText = `[${k},${k-i}]`;


        // To pause the execution of code
        // for 300 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
      }

      // Provide darkblue color to the jth bar
      bars[j].style.backgroundColor = "red";

      // Provide darkblue color to the kth bar
      bars[k].style.backgroundColor = "red";
      bars[k].style.height = temp1;
      bars[k].childNodes[0].innerText = temp2;

      // To pause the execution of code for
      // 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      // Provide color to the jth bar
      bars[j].style.backgroundColor = "pink";

      // Provide color to the kth bar
      bars[k].style.backgroundColor = "pink";

      // To pause the execution of code for
      // 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
    }
  }
  for (var x = 0; x < 15; x++) {
    bars[x].style.backgroundColor = "green";
  }
}

let shellSortButton = document.getElementById("shellSortButton");
shellSortButton.addEventListener("mousedown", () => {
  let promise = ShellSort(delay);
  disableButtons();
  promise.then(function () {
    sorted = true;
    enableButtons();
  });
});
