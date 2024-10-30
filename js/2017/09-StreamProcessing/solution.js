fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");

function solution_part1() {
	score = 0;
	depth = 0;
	
	garbage = false;
	
	for (i = 0; i < input.length; i++) {
		const char = input[i]
		if (garbage) {
			if (char == "!") {
				i++;
				continue;
			}
			if (char == ">") {
				garbage = false;
				continue;
			}
		}
		else {
			if (char == "<") {
				garbage = true;
				continue;
			}
			if (char == "{") {
				depth++;
				continue;
			}
			if (char == "}") {
				score += depth;
				depth--;
				continue;
			}
		}
	}
	return score;
}

function solution_part2() {
	total_garbage = 0;
	in_garbage = false;
	
	for (i = 0; i < input.length; i++) {
		const char = input[i]
		if (in_garbage) {
			if (char == "!") {
				i++;
			}
			else if (char == ">") {
				in_garbage = false;
			}
			else {
				total_garbage++;
			}
		}
		else {
			if (char == "<") {
				in_garbage = true;
				continue;
			}
		}
	}
	return total_garbage;
}

console.log("Solution Part 1:" + solution_part1());
console.log("Solution Part 2:" + solution_part2());