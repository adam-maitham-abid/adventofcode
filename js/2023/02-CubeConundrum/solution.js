const fs = require("fs");

games = []

games.push({ 1: [[1, 1, 1], [1, 1, 1], [1, 1, 1]] })

input = fs.readFileSync("input.txt", "ascii");
lines = input.split("\r\n");

function is_digit(char) {
	const charCode = char.charCodeAt(0);
	return 48 <= charCode && charCode <= 57;
}

const mapping = {
	"red": 0,
	"green": 1,
	"blue": 2,
}

function line_to_record(line) {
	record_id = "";
	record = [];
	
	for (i = 5; line[i] != ":"; i++) {
		record_id += line[i];
	}

	rounds = line.split(":")[1].split(";");

	for (i = 0; i < rounds.length; i++) {
		record.push([0, 0, 0]);
		amount = "";
		color = "";
		for (j = 0; j < rounds[i].length; j++) {
			char = rounds[i][j];
			if (is_digit(char)) {
				amount += char;
			}
			else if (char != " " && char != ",") {
				color += char;
			}
			if (char == "," || j == rounds[i].length - 1) {
				record[i][mapping[color]] = Number(amount);
				amount = "";
				color = "";
			}
		}
	}

	return { [record_id]: record };
}

records = []

for (line of lines) {
	records.push(line_to_record(line));
}

function solution_part1() {
	bag = [ 12, 13, 14 ];

	possible_records = [];

	for (record of records) {
		for (key in record) {
			possible = true;
			for (round of record[key]) {
				possible = (
					round[0] <= bag[0] &&
					round[1] <= bag[1] &&
					round[2] <= bag[2]
				)
				if (!possible) break;
			}
			if (possible) {
				possible_records.push(record);
			}
		}
	}

	solution = 0;

	for (record of possible_records) {
		for (key in record) {
			solution += Number(key)
		}
	}

	return solution;
}

function solution_part2() {
	solution = 0;

	minimum_sets = [];

	for (record of records) {
		for (key in record) {
			minimum_set = [ 0, 0, 0 ]
			for (round of record[key]) {
				for (i = 0; i < 3; i++) {
					minimum_set[i] = Math.max(minimum_set[i], round[i]);
				}
			}
			minimum_sets.push(minimum_set);
		}
	}

	for (set of minimum_sets) {
		solution += set[0] * set[1] * set[2];
	}

	return solution;
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());