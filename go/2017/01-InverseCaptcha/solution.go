package main

import (
	"fmt"
	"os"
)

func solution_part1(input []byte) int {
	solution := 0
	for i := 0; i < len(input); i++ {
		char := input[i]
		next := input[(i + 1) % len(input)]
		if char == next {
			solution += int(char - 48) // Quick conversion from ASCII encoding to numbers (48..57 map to 0..9)
		}
	}
	return solution
}

func solution_part2(input []byte) int {
	solution := 0
	for i := 0; i < len(input); i++ {
		char := input[i]
		next := input[(i + len(input) / 2) % len(input)]
		if char == next {
			solution += int(char - 48)
		}
	}
	return solution
}

func main() {
	input, err := os.ReadFile("input.txt")
	if err == nil {
		fmt.Println(fmt.Sprintf("Solution Part 1: %d", solution_part1(input)))
		fmt.Println(fmt.Sprintf("Solution Part 2: %d", solution_part2(input)))
	}
}