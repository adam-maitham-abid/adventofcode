fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");
passphrases = input.split("\r\n");

function solution_part1() {
	valid_passphrases = 0;

	for (passphrase of passphrases) {
		valid_passphrases += 1; // Innocent until proven guilty
		words = passphrase.split(" ");
		word_instances = []
		for (word of words) {
			if (word_instances.includes(word)) {
				valid_passphrases -= 1;
				break;
			}
			word_instances.push(word);
		}
	}

	return valid_passphrases;
}

function solution_part2() {
	valid_passphrases = 0;

	for (passphrase of passphrases) {
		valid = true;
		words = passphrase.split(" ");
		words_to_compare = [];
		for (word of words) {
			for (compared_word of words_to_compare) {
				if (word.length != compared_word.length) continue;
				word_chars = word;
				for (char of compared_word) {
					word_chars = word_chars.replace(char, "");
				}
				if (word_chars.length == 0) {
					valid = false;
					break;
				}
			}
			if (!valid) break;
			words_to_compare.push(word);
		}
		if (valid) {
			valid_passphrases += 1;
		}
	}

	return valid_passphrases;
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());