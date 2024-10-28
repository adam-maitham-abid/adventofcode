import os

with open("input.txt", "r") as file:
	input = file.read()

def solution_part1():
	instructions = list(map(int, input.splitlines()))

	cursor = 0
	steps = 0

	while cursor < len(instructions):
		steps += 1
		instructions[cursor] += 1
		cursor += instructions[cursor] - 1
	
	return steps

def solution_part2():
	instructions = list(map(int, input.splitlines()))

	cursor = 0
	steps = 0

	while cursor < len(instructions):
		steps += 1
		adjustment = 1 if instructions[cursor] < 3 else -1
		instructions[cursor] += adjustment
		cursor += instructions[cursor] - adjustment
	
	return steps

print("Solution Part 1:", solution_part1())
print("Solution Part 2:", solution_part2())