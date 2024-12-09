const fs = require("fs");
const input = fs.readFileSync("input.txt", "ascii");
const grid = input.split(/\r?\n/).map(line => line.split(""));

function solutionPart1() {
	let antennas = [];
	for (let y = 0; y < grid.length; y++) {
		for (let x = 0; x < grid[0].length; x++) {
			if (grid[y][x] !== ".") antennas.push([grid[y][x], y, x]);
		}
	}
	let antinodes = [];
	for (let i = 0; i < antennas.length; i++) {
		for (let j = i + 1; j < antennas.length; j++) {
			if (antennas[j][0] === antennas[i][0]) {
				const offset = [ antennas[i][1] - antennas[j][1], antennas[i][2] - antennas[j][2] ];
				const antenna1y = (antennas[i][1] + offset[0]);
				const antenna1x = (antennas[i][2] + offset[1]);
				const antenna2y = (antennas[j][1] - offset[0]);
				const antenna2x = (antennas[j][2] - offset[1]);
				if (antenna1x >= 0 && antenna1y >= 0 && antenna1x < grid[0].length && antenna1y < grid.length) {
					let temp = `${antenna1y},${antenna1x}`;
					if (!antinodes.includes(temp)) antinodes.push(temp);
				}
				if (antenna2x >= 0 && antenna2y >= 0 && antenna2x < grid[0].length && antenna2y < grid.length) {
					let temp = `${antenna2y},${antenna2x}`;
					if (!antinodes.includes(temp)) antinodes.push(temp);
				}
			}
		}
	}
	return antinodes.length;
}

function solutionPart2() {
	let antennas = [];
	for (let y = 0; y < grid.length; y++) {
		for (let x = 0; x < grid[0].length; x++) {
			if (grid[y][x] !== ".") antennas.push([grid[y][x], y, x]);
		}
	}
	let antinodes = [];
	for (let i = 0; i < antennas.length; i++) {
		for (let j = i + 1; j < antennas.length; j++) {
			if (antennas[j][0] === antennas[i][0]) {
				let temp = `${antennas[i][1]},${antennas[i][2]}`;
				if (!antinodes.includes(temp)) antinodes.push(temp);
				temp = `${antennas[j][1]},${antennas[j][2]}`;
				if (!antinodes.includes(temp)) antinodes.push(temp);
				const offset = [ antennas[i][1] - antennas[j][1], antennas[i][2] - antennas[j][2] ];
				let k = 0;
				while (true) {
					k++;
					const antenna1y = (antennas[i][1] + offset[0] * k);
					const antenna1x = (antennas[i][2] + offset[1] * k);
					if (antenna1x >= 0 && antenna1y >= 0 && antenna1x < grid[0].length && antenna1y < grid.length) {
						let temp = `${antenna1y},${antenna1x}`;
						if (!antinodes.includes(temp)) antinodes.push(temp);
					}
					else break;
				}
				k = 0;
				while (true) {
					k++;
					const antenna2y = (antennas[j][1] - offset[0] * k);
					const antenna2x = (antennas[j][2] - offset[1] * k);
					if (antenna2x >= 0 && antenna2y >= 0 && antenna2x < grid[0].length && antenna2y < grid.length) {
						let temp = `${antenna2y},${antenna2x}`;
						if (!antinodes.includes(temp)) antinodes.push(temp);
					}
					else break;
				}
			}
		}
	}
	console.log(antennas);
	console.log(antinodes);
	return antinodes.length;
}

console.log("Solution Part 1: " + solutionPart1());
console.log("Solution Part 2: " + solutionPart2());