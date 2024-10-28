import os

with open("input.txt", "r") as file:
	input = file.read()

passphrases = input.splitlines()

def solution_part1():
	valid_passphrases = 0

	for passphrase in passphrases:
		valid_passphrases += 1 # Innocent until proven guilty
		words = passphrase.split(" ")
		word_instances = []
		for word in words:
			if word in word_instances:
				valid_passphrases -= 1
				break
			word_instances.append(word)
	return valid_passphrases

def solution_part2():
	valid_passphrases = 0

	for passphrase in passphrases:
		valid = True
		words = passphrase.split(" ")
		words_to_compare = []
		for word in words:
			for compared_word in words_to_compare:
				if len(word) != len(compared_word):
					continue
				word_chars = word
				for char in compared_word:
					word_chars = word_chars.replace(char, "", 1)
				if len(word_chars) == 0:
					valid = False
					break
			if not valid:
				break
			words_to_compare.append(word)
		if valid:
			valid_passphrases += 1
	return valid_passphrases


print("Solution Part 1:", solution_part1())
print("Solution Part 2:", solution_part2())