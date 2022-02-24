async function ShellSort(delay = 600) {
  let bars = document.querySelectorAll(".block");

  for (var i = 10; i > 0; i = Math.floor(i / 2)) {
    // To pause the execution of code
    // for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
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

        // To pause the execution of code
        // for 300 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 300)
        );
      }

      // Provide darkblue color to the jth bar
      bars[j].style.backgroundColor = "darkblue";

      // Provide darkblue color to the kth bar
      bars[k].style.backgroundColor = "darkblue";
      bars[k].style.height = temp1;
      bars[k].childNodes[0].innerText = temp2;

      // To pause the execution of code for
      // 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );

      // Provide skyblue color to the jth bar
      bars[j].style.backgroundColor = "rgb(0, 183, 255)";

      // Provide skyblue color to the kth bar
      bars[k].style.backgroundColor = "rgb(0, 183, 255)";

      // To pause the execution of code for
      // 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );
    }
  }
  for (var x = 0; x < 15; x++) {
    bars[x].style.backgroundColor = "rgb(49, 226, 13)";
  }
}

let shellSortButton = document.getElementById("shellSortButton");
shellSortButton.addEventListener("mousedown", () => {
  let promise = ShellSort();
  promise.then(function () {
    sorted = true;
  });
});
