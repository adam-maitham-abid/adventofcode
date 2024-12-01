const fs = require("fs");
let input = fs.readFileSync("input.txt", "ascii");
input = input.split(/\r?\n/).map(line => line.split("   ").map(Number));

let listOne = [];
let listTwo = [];

for (let i = 0; i < input.length; i++) {
	listOne.push(input[i][0]);
	listTwo.push(input[i][1]);
}

listOne = listOne.sort();
listTwo = listTwo.sort();

function solutionPart1() {
	let solution = 0;
	for (let i = 0; i < listOne.length; i++) {
		solution += Math.abs(listOne[i] - listTwo[i]); 
	}
	return solution;
}

function solutionPart2() {
	let solution = 0;
	let times = 0;
	for (let i = 0; i < listOne.length; i++) {
		times = 0;
		console.log(i);
		for (let j = listTwo.indexOf(listOne[i]); listTwo[j] === listOne[i]; j++) times++;
		solution += listOne[i] * times;
	}
	return solution;
}

console.log("Solution Part 1: " + solutionPart1());
console.log("Solution Part 2: " + solutionPart2());