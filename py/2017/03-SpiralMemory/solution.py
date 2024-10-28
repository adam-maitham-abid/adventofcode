import os

with open("input.txt", "r") as file:
	input = int(file.read())

# Essentially this returns number of rings + how far value's position is from the midpoint of the side of the ring it is on.
def solution_part1():
	if input == 1:
		return 0
	
	diameter = 3
	while diameter ** 2 < input:
		diameter += 2
	
	perimeter_start = (diameter - 2) ** 2
	perimeter_end = diameter ** 2

	perimeter = perimeter_end - perimeter_start

	radius = (diameter - 1) / 2

	input_perimeter_offset = input - perimeter_start

	input_midpoint_offset = ((input_perimeter_offset + perimeter / 8) % (perimeter / 4))

	solution = radius + input_midpoint_offset

	return int(solution)

def solution_part2():
	map = {}
	x = 0
	y = 0
	i = 2
	map[(0, 0)] = 1
	next = 0

	# directions = [ "right", "up", "left", "down" ]
	direction = 0

	while next < input:
		next = 0
		half_side_length = (i ** 0.5 - 1) / 2
		i += 1

		if direction == 0:
			x += 1
		elif direction == 1:
			y += 1
		elif direction == 2:
			x -= 1
		elif direction == 3:
			y -= 1
		
		if (x + 1, y) in map:
			next += map[(x + 1, y)]
		if (x + 1, y + 1) in map:
			next += map[(x + 1, y + 1)]
		if (x + 1, y - 1) in map:
			next += map[(x + 1, y - 1)]
		
		if (x - 1, y) in map:
			next += map[(x - 1, y)]
		if (x - 1, y + 1) in map:
			next += map[(x - 1, y + 1)]
		if (x - 1, y - 1) in map:
			next += map[(x - 1, y - 1)]

		if (x, y + 1) in map:
			next += map[(x, y + 1)]
		if (x, y - 1) in map:
			next += map[(x, y - 1)]
		
		map[(x, y)] = next

		# Determine if we are at a corner and should change direction
		if x > half_side_length:
			direction = 1
		if y > half_side_length:
			direction = 2
		if x < -half_side_length:
			direction = 3
		if y < -half_side_length:
			direction = 0
		
	return next

print("Solution Part 1:", solution_part1())
print("Solution Part 2:", solution_part2())