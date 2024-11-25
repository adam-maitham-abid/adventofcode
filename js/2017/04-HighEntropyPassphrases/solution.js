const fs = require("fs");
const input = fs.readFileSync("input.txt", "ascii");
const passphrases = input.split(/\r?\n/);

function solution_part1() {
	let valid_passphrases = passphrases.length; // Innocent until proven guilty

	for (passphrase of passphrases) {
		let words = passphrase.split(" ");
		for (let i = 0; i < words.length; i++) {
			// Check if first occurance of word is at a different index
			if (words.indexOf(words[i]) !== i) {
				valid_passphrases--;
				break;
			}
		}
	}

	return valid_passphrases;
}

function is_anagram(first, second) {
	if (first.length !== second.length) return false;
	// JS's string.prototype.replace() replaces only the first instance, making it suitable for this.
	for (char of first) second = second.replace(char, "");
	return second.length === 0;
}

function solution_part2() {
	let valid_passphrases = passphrases.length;

	outer: for (passphrase of passphrases) {
		let words = passphrase.split(" ");
		for (let i = 0; i < words.length; i++) {
			for (let j = 0; j < words.length; j++) {
				if (i === j) continue;
				if (is_anagram(words[i], words[j])) {
					valid_passphrases--;
					continue outer;
				}
			}
		}
	}

	return valid_passphrases;
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());