fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");
instructions = input.split("\r\n");

function solution_part1() {
	registers = {}
	for (instruction of instructions) {
		tokens = instruction.split(" ");
	
		condition_left = registers[tokens[4]] ?? 0;
		condition_right = Number(tokens[6]);
	
		condition_type = tokens[5];
	
		condition = false;
		if      (tokens[5] == ">" ) condition = condition_left >  condition_right;
		else if (tokens[5] == ">=") condition = condition_left >= condition_right;
		else if (tokens[5] == "<" ) condition = condition_left <  condition_right;
		else if (tokens[5] == "<=") condition = condition_left <= condition_right;
		else if (tokens[5] == "==") condition = condition_left == condition_right;
		else if (tokens[5] == "!=") condition = condition_left != condition_right;
	
		if (condition) {
			const register = tokens[0];
			if (tokens[1] == "inc") {
				registers[register] = (registers[register] ?? 0) + Number(tokens[2]);
			}
			else {
				registers[register] = (registers[register] ?? 0) - Number(tokens[2]);
			}
		}
	}
	largest = 0
	for (id in registers) {
		if (registers[id] > largest) largest = registers[id];
	}
	return largest;
}

function solution_part2() {
	registers = { }
	largest = 0
	for (instruction of instructions) {
		tokens = instruction.split(" ");
	
		condition_left = registers[tokens[4]] ?? 0;
		condition_right = Number(tokens[6]);
	
		condition_type = tokens[5];
	
		condition = false;
		if      (tokens[5] == ">" ) condition = condition_left >  condition_right;
		else if (tokens[5] == ">=") condition = condition_left >= condition_right;
		else if (tokens[5] == "<" ) condition = condition_left <  condition_right;
		else if (tokens[5] == "<=") condition = condition_left <= condition_right;
		else if (tokens[5] == "==") condition = condition_left == condition_right;
		else if (tokens[5] == "!=") condition = condition_left != condition_right;
	
		const register = tokens[0];
		if (condition) {
			if (tokens[1] == "inc") {
				registers[register] = (registers[register] ?? 0) + Number(tokens[2]);
			}
			else {
				registers[register] = (registers[register] ?? 0) - Number(tokens[2]);
			}
		}

		if (registers[register] > largest) largest = registers[register];
	}
	return largest;
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());