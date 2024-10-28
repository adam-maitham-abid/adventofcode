fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");

function contains_array(array_list, a2) {
	return array_list.some(a1 => a1.length === a2.length && a1.every((value, index) => value === a2[index]))
}

function solution_part1() {
	banks = input.split("\t").map(Number);
	history = []

	steps = 0;

	while (!contains_array(history, banks)) {
		history.push(Array.from(banks));

		steps++;
		largest = 0;

		for (i = 0; i < banks.length; i++) {
			if (banks[i] > banks[largest]) largest = i;
		}

		blocks = banks[largest];
		banks[largest] = 0;

		for (i = largest + 1; blocks > 0; i++) {
			i = i % banks.length;
			banks[i]++;
			blocks--;
		}
	}
	return steps;
}

function find_array(array_list, a2) {
	return array_list.find(a1 => a1.length === a2.length && a1.every((value, index) => value === a2[index]))
}

function solution_part2() {
	banks = input.split("\t").map(Number);
	history = []

	steps = 0;

	while (true) {
		match = find_array(history, banks)
		if (match) {
			return steps - history.indexOf(match);
		}
		history.push(Array.from(banks));

		steps++;
		largest = 0;

		for (i = 0; i < banks.length; i++) {
			if (banks[i] > banks[largest]) largest = i;
		}

		blocks = banks[largest];
		banks[largest] = 0;

		for (i = largest + 1; blocks > 0; i++) {
			i = i % banks.length;
			banks[i]++;
			blocks--;
		}
	}
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());