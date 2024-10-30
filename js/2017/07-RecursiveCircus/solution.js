fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");
lines = input.split("\r\n");

programs = {};

for (line of lines) {
	buffer = [];
	buffer_index = 0;
	for (i = 0; i < line.length; i++) {
		const char = line[i];
		if (char == " " || char == "(" || char == ")" || char == "," || char == "-" || char == ">") {
			if (buffer[buffer_index] != "" && buffer[buffer_index] != null) {
				buffer_index++;
			}
		}
		else {
			buffer[buffer_index] = (buffer[buffer_index] ?? "") + char;
		}
	}
	programs[buffer[0]] = { weight: Number(buffer[1]), tower_weight: 0, children: buffer.slice(2) }
}

function solution_part1() {
	child_programs = []
	for (id in programs) {
		const program = programs[id];
		for (child_id of program.children) {
			child_programs.push(child_id);
		}
	}
	for (id in programs) {
		if (!child_programs.includes(id)) {
			return id;
		}
	}
}

function calculate_tower_weight(root_id) {
	const program = programs[root_id];
	program.tower_weight += program.weight;
	for (child_id of program.children) {
		program.tower_weight += calculate_tower_weight(child_id);
	}
	return program.tower_weight;
}

calculate_tower_weight("xegshds");

function solution_part2(id, imbalance) {
	const program = programs[id];
	if (program.children.length > 2) {
		const expected_weight = programs[program.children[0]].tower_weight === programs[program.children[1]].tower_weight
			? programs[program.children[0]].tower_weight : (programs[program.children[0]].tower_weight === programs[program.children[2]].tower_weight
			? programs[program.children[0]].tower_weight : programs[program.children[1]].tower_weight);

		for (child_id of program.children) {
			const child = programs[child_id];
			if (child.tower_weight != expected_weight) {
				return (solution_part2(child_id, expected_weight - child.tower_weight));
			}
		}
		let correction = program.tower_weight + imbalance;
		for (child_id of program.children) {
			const child = programs[child_id];
			correction -= child.tower_weight;
		}
		return correction;
	}
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2(solution_part1()));