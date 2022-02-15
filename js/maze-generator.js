let stack = [];
let current = grid[0];
let play = false;
let goal = grid[nrows * ncols - 1];
let drawLoop = setInterval(animate, 50);
let canAnimate = true;
let popUps = [];

function mazeGenerator() {
	cellElements[current.r * ncols + current.c].style.background = "olive";
	if (!current.visited) {
		current.visited = true;
		stack.push(current);
	}

	let unvisited = [];
	for (let neigh of current.neighbors) {
		if (!neigh.visited) {
			unvisited.push(neigh);
		}
	}

	if (unvisited.length > 0) {
		let randomIndex = Math.floor(Math.random() * unvisited.length);
		let next = unvisited[randomIndex];

		//Remove Walls
		if (current.r - next.r === 1) {
			//TOP
			current.walls[0] = false;
			next.walls[2] = false;
		} else if (current.c - next.c === -1) {
			//RIGHT
			current.walls[1] = false;
			next.walls[3] = false;
		} else if (current.r - next.r === -1) {
			//BOTTOM
			current.walls[2] = false;
			next.walls[0] = false;
		} else if (current.c - next.c === 1) {
			//LEFT
			current.walls[3] = false;
			next.walls[1] = false;
		}

		current = next;
	} else if (stack.length > 0) {
		current = stack.pop();
	} else {
		clearInterval(drawLoop);
		play = true;
		cellElements[current.r * ncols + current.c].style.background = "greenyellow";
		cellElements[goal.r * ncols + goal.c].innerHTML = walnut;
		cellElements[current.r * ncols + current.c].innerHTML = hackee;
	}
}

function animate() {
	for (let i = 0; i < nrows; i++) {
		for (let j = 0; j < ncols; j++) {
			grid[i * ncols + j].show();
		}
	}
	for (let i = 0; i < nrows; i++) {
		for (let j = 0; j < ncols; j++) {
			grid[i * ncols + j].fix();
		}
	}
	mazeGenerator();
}