fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");
input = input.split(/\r?\n/).map(line => line.split(""));

nodes = null;

const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;

direction = null;
x = null;
y = null;

const CLEAN = undefined;
const INFECTED = 1;
const WEAKENED = 2;
const FLAGGED = 3;

function reload() {
	nodes = new Map();
	for (y = 0; y < input.length; y++) {
		for (x = 0; x < input[y].length; x++) {
			nodes.set(`${x},${y}`, input[y][x] === "#" ? INFECTED : CLEAN);
		}
	}
	x = (input[0].length - 1) / 2;
	y = (input.length - 1) / 2;
	direction = UP;
}

function rotate(amount) {
	direction = (direction + amount + 4) % 4;
}

function advance() {
	if (direction === UP) { y--; return; }
	if (direction === RIGHT) { x++; return; }
	if (direction === DOWN) { y++; return; }
	if (direction === LEFT) { x--; return; }
}

function solution_part1() {
	reload();
	solution = 0;
	for (i = 0; i < 10000; i++) {
		node = nodes.get(`${x},${y}`);
		if (node == CLEAN) {
			solution++;
			rotate(-1);
			nodes.set(`${x},${y}`, INFECTED);
		}
		else {
			rotate(1);
			nodes.set(`${x},${y}`, CLEAN);
		}
		advance();
	}
	return solution;
}

function solution_part2() {
	reload();
	solution = 0;
	for (i = 0; i < 10000000; i++) {
		node = nodes.get(`${x},${y}`);
		if (node == CLEAN) {
			rotate(-1);
			nodes.set(`${x},${y}`, WEAKENED);
		}
		else if (node == INFECTED) {
			rotate(1);
			nodes.set(`${x},${y}`, FLAGGED);
		}
		else if (node == WEAKENED) {
			solution++;
			nodes.set(`${x},${y}`, INFECTED);
		}
		else if (node == FLAGGED) {
			rotate(2);
			nodes.set(`${x},${y}`, CLEAN);
		}
		advance();
	}
	return solution;
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());