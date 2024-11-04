fs = require("fs");
input = fs.readFileSync("input.txt", "ascii");

layers = []

function reset_layers() {
	layers = input.split("\r\n").map(line => {
		[depth, range] = line.split(": ").map(Number);
		return { depth: depth, range: range, position: 0, velocity: -1 };
	});
}

function update_layers() {
	for (layer of layers) {
		if (layer.position + layer.velocity >= layer.range) {
			layer.velocity = -1;
		}
		else if (layer.position + layer.velocity < 0) {
			layer.velocity = 1;
		}
		layer.position += layer.velocity;
	}
}

function solution_part1() {
	reset_layers();
	const last_layer = layers[layers.length - 1];

	severity = 0;

	for (packet = 0; packet <= last_layer.depth; packet++) {
		collision = layers.find(layer => layer.depth == packet && layer.position == 0);
		if (collision) {
			console.log(collision);
			severity += collision.depth * collision.range;
		}
		update_layers();
	}

	return severity;
}

function is_safe_when_passing({depth, range, position, velocity}) {
	// depth == steps until we get there
	const states = (range - 1) * 2
	temp = depth;
	if (velocity < 0) {
		temp += states - position;
	}
	else {
		temp += position;
	}
	return temp % states !== 0;
}

function solution_part2() {
	reset_layers();
	delay = 0
	while (true) {
		it_is_time = true;
		for (layer of layers) {
			if (!is_safe_when_passing(layer)) {
				it_is_time = false;
				break;
			}
		}
		if (it_is_time == true) {
			return delay;
		}
		update_layers();
		delay++;
	}
}

console.log("Solution Part 1: " + solution_part1());
console.log("Solution Part 2: " + solution_part2());