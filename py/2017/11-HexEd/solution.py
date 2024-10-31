import os

with open("input.txt", "r") as file:
	input = file.read()

moves = input.split(",")

def solution_part1():
	x = 0
	y = 0

	for move in moves:
		if "n" in move: y += 1
		if "s" in move: y -= 1
		if "e" in move: x += 1
		if "w" in move: x -= 1
	
	x = abs(x)
	y = abs(y)

	return max(x, y)

def solution_part2():
	x = 0
	y = 0
	
	furthest = 0

	for move in moves:
		if "n" in move: y += 1
		if "s" in move: y -= 1
		if "e" in move: x += 1
		if "w" in move: x -= 1
		
		furthest = max(furthest, abs(x), abs(y))

	return furthest

print("Solution Part 1:", solution_part1())
print("Solution Part 2:", solution_part2())