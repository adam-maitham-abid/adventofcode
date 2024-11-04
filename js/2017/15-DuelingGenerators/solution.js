fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");

const a = 0;
const b = 1;

const den = 2147483647;

factor = [ 16807, 48271 ];

function solution_part1() {
	value = [ 512, 191 ];
	matches = 0;
	for (i = 0; i < 40000000; i++) {
		value[a] = value[a] * factor[a] % den;
		value[b] = value[b] * factor[b] % den;
		if ((value[a] & 0xFFFF) === (value[b] & 0xFFFF)) {
			matches++;
		}
	}
	return matches;
}

function solution_part2() {
	value = [ 512, 191 ];
	matches = 0;
	for (i = 0; i < 5000000; i++) {
		do value[a] = value[a] * factor[a] % den;
		while (value[a] % 4 !== 0);

		do value[b] = value[b] * factor[b] % den;
		while (value[b] % 8 !== 0);

		if ((value[a] & 0xFFFF) === (value[b] & 0xFFFF)) {
			matches++;
		}
	}
	return matches;
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());