const fs = require("fs");
const input = fs.readFileSync("input.txt", "ascii");
const sets = input.split(/\r?\n/).map(line => line.split(/:? /).map(Number));

function combinations(values, length) {
	const result = [];
	function recurse(current) {
		if (current.length === length) {
			result.push([...current]);
			return;
		}
		for (value of values) {
			current.push(value);
			recurse(current);
			current.pop();
		}
	}
	recurse([]);
	return result;
}

function operate(set, operations) {
	let result = set[0] ?? 0;
	for (let i = 0; i < operations.length; i++) {
		switch (operations[i]) {
			case "+":
				result += set[i + 1];
				break;
			case "*":
				result *= set[i + 1];
				break;
			case "||":
				result = Number(String(result) + String(set[i + 1]));
				break;
		}
	}
	return result;
}

function solutionPart1() {
	let solution = 0;
	for (const set of sets) {
		const operations = combinations([ "+", "*" ], set.length - 2);
		for (operation of operations) {
			if (set[0] === operate(set.slice(1), operation)) {
				solution += set[0];
				break;
			}
		}
	}
	return solution;
}

function solutionPart2() {
	let solution = 0;
	for (const set of sets) {
		const operations = combinations([ "+", "*", "||" ], set.length - 2);
		for (operation of operations) {
			if (set[0] === operate(set.slice(1), operation)) {
				solution += set[0];
				break;
			}
		}
	}
	return solution;
}

console.log("Solution Part 1: " + solutionPart1());
console.log("Solution Part 2: " + solutionPart2());