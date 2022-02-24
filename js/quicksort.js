async function partition(l, r, delay = 100) {
  var blocks = document.querySelectorAll(".block");

  // Storing the value of pivot element
  var pivot = Number(blocks[r].childNodes[0].innerHTML);
  var i = l - 1;
  blocks[r].style.backgroundColor = "red";
  document.getElementsByClassName("range")[0].innerText = `[${l},${r}]`;

  for (var j = l; j <= r - 1; j++) {
    // To change color of blocks to be compared
    blocks[j].style.backgroundColor = "yellow";
    // To wait for 700 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    var value = Number(blocks[j].childNodes[0].innerHTML);

    // To compare value of two blocks
    if (value < pivot) {
      i++;
      var temp1 = blocks[i].style.height;
      var temp2 = blocks[i].childNodes[0].innerText;
      blocks[i].style.height = blocks[j].style.height;
      blocks[j].style.height = temp1;
      blocks[i].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
      blocks[j].childNodes[0].innerText = temp2;
      blocks[i].style.backgroundColor = "orange";
      if (i != j) blocks[j].style.backgroundColor = "pink";
      //To wait for 700 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
    } else blocks[j].style.backgroundColor = "pink";
  }
  // Swapping the ith with pivot element
  i++;
  var temp1 = blocks[i].style.height;
  var temp2 = blocks[i].childNodes[0].innerText;
  blocks[i].style.height = blocks[r].style.height;
  blocks[r].style.height = temp1;
  blocks[i].childNodes[0].innerText = blocks[r].childNodes[0].innerText;
  blocks[r].childNodes[0].innerText = temp2;
  blocks[r].style.backgroundColor = "pink";
  blocks[i].style.backgroundColor = "green";

  // To wait for 2100 milliseconds
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay * 3)
  );
  document.getElementsByClassName("range")[0].innerText = "";
  for (var k = 0; k < 15; k++) blocks[k].style.backgroundColor = "#6b5b95";
  return i;
}

// Asynchronous QuickSort function
async function QuickSort(l, r, delay = 100) {
  if (l < r) {
    // Storing the index of pivot element after partition
    var pivot_idx = await partition(l, r);
    // Recursively calling quicksort for left partition
    await QuickSort(l, pivot_idx - 1);
    // Recursively calling quicksort for right partition
    await QuickSort(pivot_idx + 1, r);
  }
}

let quickSortButton = document.getElementById("quickSortButton");
quickSortButton.addEventListener("mousedown", () => {
  let promise = QuickSort(0, 14);
  promise.then(function () {
    sorted = true;
  });
});