fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");
input = Number(input);

function solution_part1() {
	spinlock = [ 0 ];
	position = 0;

	for (i = 1; i <= 2017; i++) {
		position += input;
		position %= spinlock.length;
		position++;
		spinlock = spinlock.slice(0, position).concat(i).concat(spinlock.slice(position));
	}

	return spinlock[(position + 1) % spinlock.length];
}

function solution_part2() {
	solution = 0;
	position = 0;

	for (i = 1; i <= 50000000; i++) {
		position += input;
		position %= i;
		position++;
		if (position == 1) solution = i;
	}

	return solution;
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());