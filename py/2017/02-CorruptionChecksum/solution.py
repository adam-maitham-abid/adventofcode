import os

with open("input.txt", "r") as file:
	input = file.read()

lines = input.splitlines()

rows = []

for line in lines:
	numbers = []
	buffer = ""
	for i in range(0, len(line)):
		char = line[i]
		if char != "\t":
			buffer += char
			if i != len(line) - 1:
				continue
		numbers.append(int(buffer))
		buffer = ""
	rows.append(numbers)

def solution_part1():
	differences = []
	for row in rows:
		largest = row[0]
		smallest = row[0]
		for column in row:
			if column > largest:
				largest = column
			elif column < smallest:
				smallest = column
		differences.append(largest - smallest)
	solution = sum(differences)
	return solution

def solution_part2():
	divisible_results = []
	for row in rows:
		found = False
		for i in range(0, len(row)):
			for j in range (0, len(row)):
				if i == j:
					continue
				if (row[i] % row[j] == 0):
					divisible_results.append(row[i] / row[j])
					found = True
					break
			if found:
				break
	solution = sum(divisible_results)
	return int(solution)

print("Solution Part 1:", solution_part1())
print("Solution Part 2:", solution_part2())