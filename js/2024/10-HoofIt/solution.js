const fs = require("fs");
const input = fs.readFileSync("input.txt", "ascii");
const topography = input.split(/\r?\n/).map(line => line.split("").map(Number));

function solutionPart1() {
	let trails = [];
	for (let y = 0; y < topography.length; y++) {
		for (let x = 0; x < topography[0].length; x++) {
			if (topography[y][x] === 0) {
				trails.push([[y, x]]);
			}
		}
	}
	for (let t = 1; t <= 9; t++) {
		for (let i = 0; i < trails.length; i++) {
			const next_tiles = [];
			for ([y, x] of trails[i]) {
				if (topography[y + 1]?.[x] === t) next_tiles.push([y + 1, x]);
				if (topography[y - 1]?.[x] === t) next_tiles.push([y - 1, x]);
				if (topography[y]?.[x + 1] === t) next_tiles.push([y, x + 1]);
				if (topography[y]?.[x - 1] === t) next_tiles.push([y, x - 1]);
			}
			trails[i] = next_tiles;
		}
	}
	let solution = 0;
	for (let i = 0; i < trails.length; i++) {
		let set = new Set(trails[i].map(pair => `${pair}`));
		solution += set.size;
	}
	return solution;
}

function solutionPart2() {
	let trails = [];
	for (let y = 0; y < topography.length; y++) {
		for (let x = 0; x < topography[0].length; x++) {
			if (topography[y][x] === 0) {
				trails.push([[y, x]]);
			}
		}
	}
	for (let t = 1; t <= 9; t++) {
		for (let i = 0; i < trails.length; i++) {
			const next_tiles = [];
			for ([y, x] of trails[i]) {
				if (topography[y + 1]?.[x] === t) next_tiles.push([y + 1, x]);
				if (topography[y - 1]?.[x] === t) next_tiles.push([y - 1, x]);
				if (topography[y]?.[x + 1] === t) next_tiles.push([y, x + 1]);
				if (topography[y]?.[x - 1] === t) next_tiles.push([y, x - 1]);
			}
			trails[i] = next_tiles;
		}
	}
	let solution = 0;
	for (let i = 0; i < trails.length; i++) {
		solution += trails[i].length;
	}
	return solution;
}

console.log("Solution Part 1: " + solutionPart1());
console.log("Solution Part 2: " + solutionPart2());