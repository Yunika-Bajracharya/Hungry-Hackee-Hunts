let sorted = false;

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
  

generatearray();
generate_idx();

function generate() {
  window.location.reload();
}