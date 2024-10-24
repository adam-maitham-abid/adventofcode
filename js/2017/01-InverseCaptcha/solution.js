fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");

function solution_part1() {
	solution = 0;
	for (i = 0; i < input.length; i++) {
		const char = input[i];
		const next = input[(i + 1) % input.length]
		if (char == next) {
			solution += Number(char);
		}
	}
	return solution;
}

function solution_part2() {
	solution = 0;
	for (i = 0; i < input.length; i++) {
		const char = input[i];
		const next = input[(i + input.length / 2) % input.length]
		if (char == next) {
			solution += Number(char);
		}
	}
	return solution;
}

console.log("Solution Part 1 is " + solution_part1());
console.log("Solution Part 2 is " + solution_part2());