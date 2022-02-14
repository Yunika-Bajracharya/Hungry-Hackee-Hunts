const nrows = 20;
const ncols = 20;
let grid = [];

function createCells() {
	for (let y = 0; y < nrows; y++) {
		let row = document.createElement("div");
		row.classList.add("row");
		document.body.appendChild(row);

		for (let x = 0; x < ncols; x++) {
			let col = document.createElement("div");
			col.classList.add("cell");
			row.appendChild(col);
		}
	}
}

createCells();

class Cell {
    constructor(x, y) {
        this.row = x;
        this.col = y;
        this.walls = [true, true, true, true]; // top right bottoom left
        this.visited = false;
        this.neighbors = [];
    }

    index(row, column) {
        return column + row * ncols;
    }

    findNeighbors() {
        let top    = grid[index(this.row - 1, this.col)];
        let right  = grid[index(this.row, this.col + 1)];
        let bottom = grid[index(this.row + 1, this.col)];
        let left   = grid[index(this.row, this.col - 1)];
        
        if (this.row > 0) {
            this.neighbours.push(top);
        }
        if (this.col < ncols - 1) {
            this.neighbours.push(right);
        }
        if (this.row < nrows - 1) {
            this.neighbours.push(bottom);
        }
        if (this.col > 0) {
            this.neighbours.push(left);
        }
    }
};

function makeGrid() {
	for (let i = 0; i < nrows; i++) {
		for (let j = 0; j < ncols; j++) {
			grid.push(new Cell(i, j));
		}
	}
	for (let i = 0; i < nrows; i++) {
		for (let j = 0; j < ncols; j++) {
			grid[i * ncols + j].findNeighbors();
		}
	}
}

makeGrid();