var container = document.getElementById("array");

// to generate array of blocks
function generateArray() {
  for (var i = 0; i < 20; i++) {
    var value = Math.ceil(Math.random() * 100);

    var arrayElement = document.createElement("div");
    arrayElement.classList.add("block");

    arrayElement.style.height = `${value * 3}px`;
    arrayElement.style.transform = `translate(${i * 50}px)`;
    
    // Creating label element for displaying
    // size of particular block
    var arrayElementLabel = document.createElement("label");
    arrayElementLabel.classList.add("block_id");
    arrayElementLabel.innerText = value;
    
    arrayElement.appendChild(arrayElementLabel);
    container.appendChild(arrayElement);
  }
}

// to generate indexes
var countContainer = document.getElementById("count");
function generateId() {
  for (let i = 0; i < 20; i++) {
    var arrayElement2 = document.createElement("div");
    arrayElement2.classList.add("block2");
    arrayElement2.style.height = `${20}px`;
    arrayElement2.style.transform = `translate(${i * 50}px)`;

    // adding index
    var arrayElementLabel2 = document.createElement("label");
    arrayElementLabel2.classList.add("block_id3");
    arrayElementLabel2.innerText = i;

    arrayElement2.appendChild(arrayElementLabel2);
    countContainer.appendChild(arrayElement2);
  }
}
generateArray();
generateId();

////////////////////////////////////////

// low -> starting index
// high -> ending index

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// function partition (arr, low, high) {

//   let pivot = arr[high];
//   let i = (low - 1);

//   for (let j = low; j <= high - 1; j++) {
//     if (arr[j] <= pivot) {
//       i++;
//       swap(arr, i, j);
//     }
//   }
//   swap(arr, i+1, high);
//   return (i+1);
// }


// function quickSort (arr, low, high) {
//   if (low < high) {

//     // p is partitioning index, arr[p]
//     // is now at right place
//     p = partition(arr, low, high);

//     // Separately sort elements before
//     // partition and after partition
//     quickSort(arr, low, p - 1); // before partition
//     quickSort(arr, p + 1, high); // after partition
//   }
// }

// function printArray(arr, size) {
//   for (let i = 0; i < size; i++)
//       console.log(arr[i] + " ");
// }

// let arr = [5, 3, 7, 6, 2, 9];
// let n = arr.length;
// quickSort(arr, 0, n-1);
// console.log("sorted array\n");
// printArray(arr, n);