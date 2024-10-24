fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");
lines = input.split("\r\n");

// Convert spreadsheet from text into a 2D array of rows and columns
rows = [];
for (line of lines) {
	numbers = [];
	buffer = "";
	for (i = 0; i < line.length; i++) {
		const char = line[i];
		if (char != "\t"){
			buffer += char;
			if (i != line.length - 1) continue;
		}
		numbers.push(Number(buffer));
		buffer = "";
	}
	rows.push(numbers);
}

function sum(array) {
	return array.reduce((accumulator, current) => accumulator + current, 0);
}

function solution_part1() {
	differences = [];
	for (row of rows) {
		largest = row[0];
		smallest = row[0];
		for (column of row) {
			if (column > largest) largest = column;
			else if (column < smallest) smallest = column;
		}
		differences.push(largest - smallest);
	}
	solution = sum(differences);
	return solution;
}

function solution_part2() {
	divisible_results = [];
	for (row of rows) {
		found = false;
		for (i = 0; i < row.length; i++) {
			for (j = 0; j < row.length; j++) {
				if (i == j) continue; // Don't divide the number by itself.
				if (row[i] % row[j] == 0) {
					divisible_results.push(row[i] / row[j]);
					found = true;
					break;
				}
			}
			if (found) break;
		}
	}
	solution = sum(divisible_results);
	return solution;
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());