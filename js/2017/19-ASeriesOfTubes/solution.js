fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");

grid = input.split("\r\n").map(line => line.split(""));

height = grid.length;
width = grid[0].length;

x = grid[0].indexOf("|");
y = 0;

const NORTH = 0;
const SOUTH = 1;
const EAST = 2;
const WEST = 3;

direction = SOUTH;

landmarks = [];

function move(direction) {
	if (direction === NORTH) return [x, y - 1];
	else if (direction === SOUTH) return [x, y + 1];
	else if (direction === EAST) return [x + 1, y];
	else if (direction === WEST) return [x - 1, y];
}

const tile = ([x, y]) => grid[y][x];

steps = 0;

while (true) {
	steps++;
	const here = tile([x, y]);
	if (here === " ") {
		steps--;
		break;
	}
	if (here === "+") {
		if (direction !== SOUTH && y > 0 && tile(move(NORTH)) != " ") direction = NORTH;
		else if (direction !== NORTH && y < height && tile(move(SOUTH)) != " ") direction = SOUTH;
		else if (direction !== WEST && x < width && tile(move(EAST)) != " ") direction = EAST;
		else if (direction !== EAST && x > 0 && tile(move(WEST)) != " ") direction = WEST;
	}
	else if (here !== "|" && here !== "-") {
		landmarks.push(here);
	}
	[x, y] = move(direction);
	if (x > width || x < 0 || y > height || y < 0) break;
}

function solution_part1() { return landmarks.join(""); }
function solution_part2() { return steps; }

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());