fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");
input = Number(input);

// Essentially this returns number of rings + how far value's position is from the midpoint of the side of the ring it is on.
function solution_part1() {
	if (input == 1) return 0;
	for (diameter = 3; diameter ** 2 < input; diameter += 2);

	perimeter_start = (diameter - 2) ** 2;
	perimeter_end = diameter ** 2;

	perimeter = perimeter_end - perimeter_start;

	radius = (diameter - 1) / 2;

	input_perimeter_offset = input - perimeter_start;

	input_midpoint_offset = ((input_perimeter_offset + perimeter / 8) % (perimeter / 4))

	solution = radius + input_midpoint_offset;

	return solution;
}

function solution_part2() {
	map = new Map();
	x = 0;
	y = 0;
	i = 2;
	map.set(`${x},${y}`, 1)
	next = 0;

	// directions = [ "right", "up", "left", "down" ];
	direction = 0;

	while (next < input) {
		next = 0;
		half_side_length = (i ** 0.5 - 1) / 2;
		i++;
		
		if (direction == 0) {
			x++;
		}
		else if (direction == 1) {
			y++;
		}
		else if (direction == 2) {
			x--;
		}
		else if (direction == 3) {
			y--;
		}

		next += map.get(`${x + 1},${y}`) ?? 0;
		next += map.get(`${x + 1},${y + 1}`) ?? 0;
		next += map.get(`${x + 1},${y - 1}`) ?? 0;
		
		next += map.get(`${x - 1},${y}`) ?? 0;
		next += map.get(`${x - 1},${y + 1}`) ?? 0;
		next += map.get(`${x - 1},${y - 1}`) ?? 0;

		next += map.get(`${x},${y + 1}`) ?? 0;
		next += map.get(`${x},${y - 1}`) ?? 0;

		map.set(`${x},${y}`, next);

		// Determine if we are at a corner and should change direction
		if (x > half_side_length) {
			direction = 1;
		}
		if (y > half_side_length) {
			direction = 2;
		}
		if (x < -half_side_length) {
			direction = 3;
		}
		if (y < -half_side_length) {
			direction = 0;
		}
	}
	return next;
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());