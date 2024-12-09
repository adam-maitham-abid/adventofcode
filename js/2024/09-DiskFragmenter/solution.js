const fs = require("fs");
const input = fs.readFileSync("input.txt", "ascii").split("").map(Number);

function checksum(filesystem) {
	let checksum = 0;
	for (let i = 0; i < filesystem.length; i++) {
		if (filesystem[i] !== ".") {
			checksum += i * filesystem[i];
		}
	}
	return checksum;
}

function solutionPart1() {
	let fileBlocks = 0;
	const filesystem = [];
	for (let i = 0; i < input.length; i++) {
		let even = false;
		if (i % 2 === 0) {
			even = true;
			fileBlocks += input[i];
		}
		for (let j = 0; j < input[i]; j++) {
			if (even) {
				filesystem.push(i / 2);
			}
			else {
				filesystem.push(".");
			}
		}
	}
	let j = 0;
	for (let i = filesystem.length - 1; i >= fileBlocks; i--) {
		while (filesystem[j] !== ".") j++;
		filesystem[j] = filesystem[i];
		filesystem[i] = ".";
	}
	console.log(filesystem);
	return checksum(filesystem);
}

function solutionPart2() {
	let fileBlocks = 0;
	const filesystem = [];
	for (let i = 0; i < input.length; i++) {
		let even = false;
		if (i % 2 === 0) {
			even = true;
			fileBlocks += input[i];
		}
		for (let j = 0; j < input[i]; j++) {
			if (even) {
				filesystem.push(i / 2);
			}
			else {
				filesystem.push(".");
			}
		}
	}
	for (let i = filesystem.length - 1; i > 0; i--) {
		let blockSize = 0;
		let char = 0;
		if (filesystem[i] !== ".") {
			char = filesystem[i];
			while (filesystem[i] === char) {
				i--;
				blockSize++;
			}
			i++;
			out: for (let j = 0; j < i; j++) {
				let memorySize = 0;
				while (filesystem[j] === ".") {
					j++;
					memorySize++;
				}
				if (memorySize >= blockSize) {
					for (let k = 0; k < blockSize; k++) {
						filesystem[j - memorySize + k] = filesystem[i + k];
						filesystem[i + k] = ".";
					}
					break out;
				}
			}
		}
	}
	return checksum(filesystem);
}

console.log("Solution Part 1: " + solutionPart1());
console.log("Solution Part 2: " + solutionPart2());