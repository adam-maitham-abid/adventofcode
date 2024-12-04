const fs = require("fs");
const input = fs.readFileSync("input.txt", "ascii");

function solutionPart1() {
	let solution = 0;
	const regex = /mul\(\d{1,3},\d{1,3}\)/g;
	for (match of input.match(regex)) {
		const arguments = match.substring(4, match.length - 1).split(",").map(Number);
		solution += arguments[0] * arguments[1];
	}
	return solution;
}

function solutionPart2() {
	let solution = 0;
	let enabled = true;
	for (let i = 0; i < input.length; i++) {
		if (input.substring(i - 3, i + 1) === "do()") {
			enabled = true;
		}
		else if (input.substring(i - 6, i + 1) === "don't()") {
			enabled = false;
		}
		else if (input[i] === ")") {
			let buffer1 = "";
			let buffer2 = "";
			let second = false;
			for (let j = i - 1; j > 0 && i - j <= 8; j--) {
				const char = input[j];
				if (input.substring(j - 3, j + 1) === "mul(") {
					if (buffer1 !== "" && buffer2 !== "") {
						if (enabled) {
							solution += Number(buffer1) * Number(buffer2);
						}
					}
					break;
				}
				else if (char === ",") {
					if (second) break;
					if (buffer1 !== "") second = true;
					else break;
				}
				else if (!isNaN(char) && char !== " ") {
					if (!second) buffer1 = char + buffer1;
					else buffer2 = char + buffer2;
				}
				else break;
			}
		}
	}
	return solution;
}

console.log("Solution Part 1: " + solutionPart1());
console.log("Solution Part 2: " + solutionPart2());