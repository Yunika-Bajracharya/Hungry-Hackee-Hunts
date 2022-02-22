var container = document.getElementById("array");

let array = [];
for (let i = 255; i <= 3825; i = i + 255) {
  array.push(i);
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function generatearray() {
  var newArray = shuffle(array);
  for (var i = 0; i < 15; i++) {

    var value = newArray[i];

    var array_ele = document.createElement("div");
    array_ele.classList.add("block");
    array_ele.style.height = `${value * 0.1}px`;
    array_ele.style.transform = `translate(${i * 50}px)`;
  
    // Creating label element for displaying size of particular block
    var array_ele_label = 
    document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;
  
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}

// to generate indexes
var count_container = 
document.getElementById("count");
function generate_idx() {
  for (var i = 0; i < 15; i++) {
    var array_ele2 = document.createElement("div");
    array_ele2.classList.add("block2");
    array_ele2.style.height = `${20}px`;
    array_ele2.style.transform = `translate(${i * 50}px)`;
  
    // Adding indexes
    var array_ele_label2 = 
    document.createElement("label");
    array_ele_label2.classList.add("block_id3");
    array_ele_label2.innerText = i;

    array_ele2.appendChild(array_ele_label2);
    count_container.appendChild(array_ele2);
  }
}
  
async function partition(l, r, delay = 100) {
  var blocks = document.querySelectorAll(".block");
  
  // Storing the value of pivot element
  var pivot = Number(blocks[r].childNodes[0].innerHTML);
  var i = l - 1;
  blocks[r].style.backgroundColor = "red";
  document.
  getElementsByClassName("range")[0].innerText = `[${l},${r}]`;
  
  for (var j = l; j <= r - 1; j++) {
    // To change color of blocks to be compared
    blocks[j].style.backgroundColor = "yellow";
    // To wait for 700 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    var value = 
    Number(blocks[j].childNodes[0].innerHTML);
  
    // To compare value of two blocks
    if (value < pivot) {
      i++;
      var temp1 = blocks[i].style.height;
      var temp2 = blocks[i].childNodes[0].innerText;
      blocks[i].style.height = blocks[j].style.height;
      blocks[j].style.height = temp1;
      blocks[i].childNodes[0].innerText =
      blocks[j].childNodes[0].innerText;
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
  blocks[i].childNodes[0].innerText =
  blocks[r].childNodes[0].innerText;
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
  for (var k = 0; k < 15; k++) 
  blocks[k].style.backgroundColor = "#6b5b95";
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

generatearray();
generate_idx();