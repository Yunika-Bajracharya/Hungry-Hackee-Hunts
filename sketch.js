// var hackee; 
// var hackeex=600;
// var hackeey=300;
// function preload(){ 
//     hackee = loadImage("image.png"); 
// }

// function setup(){ 
//     createCanvas(1000,650); 
// } 

// function draw(){ 
//     background(20,155,255); 
//     //fill(10,40,40); 
//     // cursor("none"); 
//     //circle(20,20,50);
//     image(hackee, hackeex, hackeey,50,50); 
// }

// function keyPressed() {
//     if (keyCode === UP_ARROW) {
//       hackeey=hackeey-5;
//     } else if (keyCode === DOWN_ARROW) {
//         hackeey=hackeey-5;
//     }else if (keyCode === RIGHT_ARROW) {
//         hackeex=hackeex+5;
//     }else if (keyCode === LEFT_ARROW) {
//         hackeex=hackeex+5;
//     }
// }

//squirrel
var hackee; 
var hackeex=0;
var hackeey=450;
function preload(){ 
    hackee = loadImage("image.png"); 
}
//for gravity
var jump=false;
var velocity=2;
var direction=1;
var jumpPower=10;
var fallingSpeed=2;
var minHeight=450;


// for sort
let values = [];
let w = 60;

let states = [];

function setup() {
  canvas=createCanvas(1000,500);
  canvas.position(250,100);
  resetSketch();
  var button=createButton('reset');
  button.mousePressed(resetSketch);
  button.position(700,650);
}

function resetSketch(){
    values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1;
  }
  quickSort(values, 0, values.length - 1);
}

function draw() {
    //   background(0);
      clear();
    
      for (let i = 1; i < values.length; i++) {
        stroke(20);
        if (states[i] == 0) {
          fill('#E0777D');
        } else if (states[i] == 1) {
          fill('#D6FFB7');
        } else {
          fill(255);
        }
        rect(i * w, height - values[i], w, values[i]);
        image(hackee, hackeex, hackeey,50,50); 
      }
      
    //   gravity();
    }
    

async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(arr, start, end);
  states[index] = -1;

  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end)
  ]);
}

async function partition(arr, start, end) {
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }

  let pivotValue = arr[end];
  let pivotIndex = start;
  states[pivotIndex] = 0;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr, pivotIndex, end);

  for (let i = start; i < end; i++) {
    if (i != pivotIndex) {
      states[i] = -1;
    }
  }

  return pivotIndex;
}


async function swap(arr, a, b) {
  await sleep(300);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


//hackee moves
function gravity(){
    if(hackeey>=minheight && jump==false){
         //stop falling
        hackeey=hackeey+0;
    }
    else{
        //fall
        hackeey=hackeey+(direction+velocity);
    }
    
    if(hackeey>=minheight && jump==true){
        velocity=-jumpPower;
    }
    else{
        velocity=fallingSpeed;
    }
}

function keyPressed() {
    // if (keyCode === UP_ARROW) {
    //   hackeey=hackeey-5;
    //   hackeex=hackeex+5;
    // } else if (keyCode === DOWN_ARROW) {
    //     hackeey=hackeey+5;
    // }else if (keyCode === RIGHT_ARROW) {
    //     hackeex=hackeex+5;
    // }else if (keyCode === LEFT_ARROW) {
    //     hackeex=hackeex-5;
    // }

    if(keyDown('a')){
        jump=true;
    }
    else{
        jump=false;
    }
}