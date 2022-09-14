async function Heapify(n, i, delay) {
  
  var blocks = document.querySelectorAll(".block");
  var largest = i; // Initialize largest as root
  var l = 2 * i + 1;
  var r = 2 * i + 2;
  
  // If left child is larger than root
  if (
    l < n &&
    Number(blocks[l].childNodes[0].innerHTML) >
    Number(blocks[largest].childNodes[0].innerHTML)
    )
    largest = l;

  // If right child is larger than largest so far
  if (
    r < n &&
    Number(blocks[r].childNodes[0].innerHTML) >
      Number(blocks[largest].childNodes[0].innerHTML)
  ) 
    largest = r;

  // If largest is not root, swap and continue heapifying
  if (largest != i) {
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[largest].style.height;
    blocks[largest].style.height = temp1;
    blocks[i].childNodes[0].innerText = blocks[largest].childNodes[0].innerText;
    blocks[largest].childNodes[0].innerText = temp2;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    // Recursively Heapify the affected sub-tree
    await Heapify(n, largest);
  }
}

async function HeapSort(n, delay) {
  var blocks = document.querySelectorAll(".block");

  // Build heap (rearrange array)
  for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await Heapify(n, i, delay);
  }

  // One by one extract an element from heap
  for (var i = n - 1; i > 0; i--) {
    // Move current root to end
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[0].style.height;
    blocks[0].style.height = temp1;
    blocks[i].childNodes[0].innerText = blocks[0].childNodes[0].innerText;
    blocks[0].childNodes[0].innerText = temp2;
    blocks[i].style.backgroundColor = "green";
    
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    // Call max Heapify on the reduced heap
    await Heapify(i, 0);
  }
  blocks[i].style.backgroundColor = "green";
}

let heapSortButton = document.getElementById("heapSortButton");
heapSortButton.addEventListener("mousedown", () => {
  let promise = HeapSort(15, delay);
  disableButtons();
  promise.then(function () {
    sorted = true;
    enableButtons();
  });
});
