fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");

function solution_part1() {
	instructions = input.split("\r\n").map(Number);

	cursor = 0;
	steps = 0;

	while (cursor < instructions.length) {
		steps++;
		instructions[cursor] += 1;
		cursor += instructions[cursor] - 1;
	}

	return steps;
}

function solution_part2() {
	instructions = input.split("\r\n").map(Number);

	cursor = 0;
	steps = 0;

	while (cursor < instructions.length) {
		steps++;
		adjustment = (instructions[cursor] >= 3 ? -1 : 1);
		instructions[cursor] += adjustment;
		cursor += instructions[cursor] - adjustment;
	}

	return steps;
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());