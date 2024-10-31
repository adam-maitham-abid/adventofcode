fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");
moves = input.split(",");

function solution_part1() {
	x = 0;
	y = 0;

	for (move of moves) {
		if (move.includes("n")) y++;
		if (move.includes("s")) y--;
		if (move.includes("e")) x++;
		if (move.includes("w")) x--;
	}

	x = Math.abs(x);
	y = Math.abs(y);

	return Math.max(x, y);
}

function solution_part2() {
	x = 0;
	y = 0;

	furthest = 0;

	for (move of moves) {
		if (move.includes("n")) y++;
		if (move.includes("s")) y--;
		if (move.includes("e")) x++;
		if (move.includes("w")) x--;
		
		furthest = Math.max(furthest, Math.abs(x), Math.abs(y));
	}

	return furthest;	
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());