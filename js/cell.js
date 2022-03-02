const nrows = Math.floor(innerHeight / 45) - 3;
const ncols = Math.floor(innerWidth / 45) - 1;

function createCells() {
  for (let i = 0; i < nrows; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    if (i === 0) row.classList.add("first-row");
    document.body.appendChild(row);

    for (let j = 0; j < ncols; j++) {
      let col = document.createElement("div");
      col.classList.add("cell");
      if (j === 0) col.classList.add("first-col");
      row.appendChild(col);
    }
  }
}

createCells();
document.body.innerHTML += `
	<div class="container">
		<div class="direction-button top-margin"></div>
    <div class="direction-button"></div>
    <div class="direction-button"></div>
		<div class="direction-button"></div>
	</div>
`;

class Cell {
  constructor(i, j) {
    this.r = i;
    this.c = j;

    this.neighbors = [];
    this.walls = [true, true, true, true]; //Top Right Bottom Left
    this.visited = false;
  }
  show() {
    if (!this.walls[0])
      cellElements[this.r * ncols + this.c].style["border-top"] = "none";
    if (!this.walls[1])
      cellElements[this.r * ncols + this.c].style["border-right"] = "none";
    if (!this.walls[2])
      cellElements[this.r * ncols + this.c].style["border-bottom"] = "none";
    if (!this.walls[3])
      cellElements[this.r * ncols + this.c].style["border-left"] = "none";

    if (this.visited)
      cellElements[this.r * ncols + this.c].style.background =
        "rgb(72,191,109)";
  }
  createNeighbors() {
    if (this.r > 0) this.neighbors.push(grid[(this.r - 1) * ncols + this.c]); //Top
    if (this.c < ncols - 1)
      this.neighbors.push(grid[this.r * ncols + (this.c + 1)]); //Right
    if (this.r < nrows - 1)
      this.neighbors.push(grid[(this.r + 1) * ncols + this.c]); //Bottom
    if (this.c > 0) this.neighbors.push(grid[this.r * ncols + (this.c - 1)]); //Left
  }
  fix() {
    if (!this.walls[1] && !this.walls[2])
      cellElements[this.r * ncols + this.c].classList.add("bottomRightCorner");
  }
}

function fillGrid() {
  for (let i = 0; i < nrows; i++) {
    for (let j = 0; j < ncols; j++) {
      grid.push(new Cell(i, j));
    }
  }
  for (let i = 0; i < nrows; i++) {
    for (let j = 0; j < ncols; j++) {
      grid[i * ncols + j].createNeighbors();
    }
  }
}

let cellElements = document.querySelectorAll(".cell");
let grid = [];
fillGrid();
