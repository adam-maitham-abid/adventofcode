const fs = require("fs");
const input = fs.readFileSync("input.txt", "ascii");
const grid = input.split(/\r?\n/).map(line => line.split(""));

let x = 0;
let y = 0;

function directionMatch(direction, text) {
	const row = grid[y + direction[1]];
	if (row && row[x + direction[0]] === text[0]) {
		text = text.substring(1);
	}
	else {
		return false;
	}
	if (text === "") {
		return true;
	}
	else {
		if (direction[0] > 0) direction[0]++;
		if (direction[0] < 0) direction[0]--;
		if (direction[1] > 0) direction[1]++;
		if (direction[1] < 0) direction[1]--;
		return directionMatch(direction, text);
	}
}

function solutionPart1() {
	let solution = 0;
	for (y = 0; y < grid.length; y++) {
		for (x = 0; x < grid[0].length; x++) {
			if (grid[y][x] === "X") {
				if (directionMatch([ 1, 0], "MAS")) solution++;
				if (directionMatch([ 1, 1], "MAS")) solution++;
				if (directionMatch([ 0, 1], "MAS")) solution++;
				if (directionMatch([ 0,-1], "MAS")) solution++;
				if (directionMatch([-1,-1], "MAS")) solution++;
				if (directionMatch([-1, 0], "MAS")) solution++;
				if (directionMatch([ 1,-1], "MAS")) solution++;
				if (directionMatch([-1, 1], "MAS")) solution++;
			}
		}
	}
	return solution;
}

function solutionPart2() {
	let solution = 0;
	for (y = 0; y < grid.length; y++) {
		for (x = 0; x < grid[0].length; x++) {
			if (grid[y][x] === "A") {
				let mas_instances = 0;
				if (directionMatch([ 1, 1], "M") && directionMatch([-1,-1], "S")) mas_instances++;
				if (directionMatch([-1,-1], "M") && directionMatch([ 1, 1], "S")) mas_instances++;
				if (directionMatch([ 1,-1], "M") && directionMatch([-1, 1], "S")) mas_instances++;
				if (directionMatch([-1, 1], "M") && directionMatch([ 1,-1], "S")) mas_instances++;
				if (mas_instances === 2) solution++;
			}
		}
	}
	return solution;
}

console.log("Solution Part 1: " + solutionPart1());
console.log("Solution Part 2: " + solutionPart2());