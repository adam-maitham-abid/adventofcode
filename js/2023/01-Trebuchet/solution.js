const fs = require("fs");

function is_digit(char) {
	const charCode = char.charCodeAt(0);
	return 48 <= charCode && charCode <= 57;
}

// Returns number composed of the first and last digits in a string.
function first_and_last_digit(value) {
	result = "";

	for (i = 0; i < value.length; i++) {
		const char = value[i];
		if (is_digit(char)) {
			result += char;
			break;
		}
	}

	for (i = value.length - 1; i >= 0; i--) {
		const char = value[i];
		if (is_digit(char)) {
			result += char;
			break;
		}
	}

	return Number(result);
}

const mapping = {
	// The input contains words sharing letters for some reason.
	"oneight": 18,
	"twone": 21,
	"threeight": 38,
	"fiveight": 58,
	"sevenine": 79,
	"eightwo": 82,
	"eighthree": 83,
	"nineight": 98,

	"one": 1,
	"two": 2,
	"three": 3,
	"four": 4,
	"five": 5,
	"six": 6,
	"seven": 7,
	"eight": 8,
	"nine": 9,
};

function convert_words_into_digits(line) {
	for (key in mapping) {
		// Using Regex for global search here since .replace() replaces only the first instance.
		const regex = new RegExp(key, 'g');
		line = line.replace(regex, mapping[key]);
	}
	return line;
}

input = fs.readFileSync("input.txt", "utf8");
lines = input.split("\r\n");

function solution_part1() {
	solution = 0;

	for (line of lines) {
		solution += first_and_last_digit(line);
	}
	
	console.log("Solution Part 1: " + solution);
}

function solution_part2() {
	solution = 0;

	for (line of lines) {
		line = convert_words_into_digits(line);
		solution += first_and_last_digit(line);
	}

	console.log("Solution Part 2: " + solution);
}

solution_part1();
solution_part2();