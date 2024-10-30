fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");
lines = input.split("\r\n");

testt = []
testt["xd"] = 2;
console.log(testt["xd"]);

programs = [];
held_programs = [];
buffer = "";
for (line of lines) {
	for (i = 0; i < line.length; i++) {
		const char = line[i];
		if (char == " ") {
			programs.push(buffer);
			buffer = "";
			break;
		}
		buffer += char;
	}
}
for (line of lines) {
	held = false;
	for (i = 0; i < line.length; i++) {
		const char = line[i];
		if (held) {
			if (char != " " && char != ",") {
				buffer += char;
				if (i == line.length - 1)
				held_programs.push(buffer);
			}
			else if (buffer != "") {
				held_programs.push(buffer);
				buffer = "";
			}
		}
		else if (char == ">") {
			held = true;
		}
	}
}

function solution_part1() {
	for (program of programs) {
		if (!held_programs.includes(program)) {
			return program;
		}
	}
	return null;
}

function solution_part2() {
	for (program of programs) {
		if (!held_programs.includes(program)) {
			return program;
		}
	}
	return null;
}

console.log("Solution Part 1: " + solution_part1());