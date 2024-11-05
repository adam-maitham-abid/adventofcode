fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");

instructions = input.split("\r\n").map(line => line.split(" "));

function solution_part1() {
	registers = {};
	cursor = 0;
	last_sound = 0;

	function get(value) {
		if (!isNaN(Number(value))) return Number(value);
		else return registers[value] ?? 0;
	}

	function instruct(args) {
		switch (args[0]) {
			case "snd":
				last_sound = get(args[1]);
				break;
			case "set":
				registers[args[1]] = get(args[2]);
				break;
			case "add":
				registers[args[1]] += get(args[2]);
				break;
			case "mul":
				registers[args[1]] *= get(args[2]);
				break;
			case "mod":
				registers[args[1]] %= get(args[2]);
				break;
			case "rcv":
				if (get(args[1]) !== 0) {
					return last_sound;
				}
				break;
			case "jgz":
				if (get(args[1]) > 0) cursor += get(args[2]) - 1;
				break;
		}
	}
	for (cursor = 0; cursor < instructions.length; cursor++) {
		rcv = instruct(instructions[cursor]);
		if (rcv) return rcv;
	}
}

function solution_part2() {
	registers = [{ p: 0 }, { p: 1 }];
	queues = [[], []];
	cursors = [0, 0];

	solution = 0;

	function get(program, value) {
		if (!isNaN(Number(value))) return Number(value);
		else return registers[program][value] ?? 0;
	}

	deadlock = false;

	function instruct(program) {
		args = instructions[cursors[program]];
		if (cursors[program] >= instructions.length) return;
		switch (args[0]) {
			case "snd":
				queues[program].push(get(program, args[1]));
				if (program === 1) solution++;
				break;
			case "set":
				registers[program][args[1]] = get(program, args[2]);
				break;
			case "add":
				registers[program][args[1]] += get(program, args[2]);
				break;
			case "mul":
				registers[program][args[1]] *= get(program, args[2]);
				break;
			case "mod":
				registers[program][args[1]] %= get(program, args[2]);
				break;
			case "rcv":
				const queue = queues[1 - program];
				if (queue.length > 0) registers[program][args[1]] = queue.shift();
				else return;
				break;
			case "jgz":
				if (get(program, args[1]) > 0) cursors[program] += get(program, args[2]) - 1;
				break;
		}
		deadlock = false;
		cursors[program]++;
	}
	while (true) {
		deadlock = true;
		instruct(0);
		instruct(1);
		if (deadlock) break;
	}
	return solution;
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());