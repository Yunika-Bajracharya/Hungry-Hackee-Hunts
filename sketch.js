let colsNum, rowsNum;
let cellSize = 40;
let grid = [];

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.position(150, 50);
    colsNum = floor(width / cellSize);
    rowsNum = floor(height / cellSize);
    
    for (let row = 0; row < rowsNum; row++) {
        for (let column = 0; column < colsNum; column++) {
            let cell = new Cell(row, column);
            grid.push(cell);
        }
    }
}

function draw() {
    background(51);
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

function Cell(row, column) {
    this.row = row;
    this.column = column;
    this.walls = [true, true, true, true]; // top right bottom left

    this.show = function() {
        let x = this.column * cellSize;
        let y = this.row * cellSize;
        stroke(255);

        if (this.walls[0]) {
            line(x, y, x + cellSize, y);
        }
        if (this.walls[1]) {
            line(x + cellSize, y, x + cellSize, y + cellSize);
        }
        if (this.walls[2]) {
            line(x, y + cellSize, x + cellSize, y + cellSize);
        }
        if (this.walls[3]) {
            line(x, y, x, y + cellSize);
        }
    }
}