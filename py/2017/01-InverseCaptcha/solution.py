import os

with open("input.txt", "r") as file:
	input = file.read()

def solution_part1():
	solution = 0
	for i in range(0, len(input)):
		char = input[i]
		next = input[(i + 1) % len(input)]
		if char is next:
			solution += int(char)
	return solution

def solution_part2():
	solution = 0
	for i in range(0, len(input)):
		char = input[i]
		next = input[int(i + len(input) / 2) % len(input)]
		if char is next:
			solution += int(char)
	return solution

print("Solution Part 1:", solution_part1())
print("Solution Part 2:", solution_part2())