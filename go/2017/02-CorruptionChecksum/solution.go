package main

import (
	"fmt"
	"os"
)

func solution_part1(input []byte) int {
	input = append(input, '\n')
	buffer := 0
	largest := 0
	smallest := -1
	checksum := 0
	number := false
	for i := 0; i < len(input); i++ {
		char := input[i]
		if char >= '0' && char <= '9' {
			number = true
			buffer *= 10
			buffer += int(char - '0')
			continue;
		}
		if number {
			if smallest == -1 {
				largest = buffer
				smallest = buffer
			} else if buffer > largest {
				largest = buffer
			} else if buffer < smallest {
				smallest = buffer
			}
			buffer = 0
			number = false
		}
		if char == '\n' {
			checksum += largest - smallest
			largest = 0
			smallest = -1
		}
	}
	return checksum;
}

func solution_part2(input []byte) int {
	input = append(input, '\n')
	row := []int { }
	buffer := 0
	checksum := 0
	number := false
	for i := 0; i < len(input); i++ {
		char := input[i]
		if char >= '0' && char <= '9' {
			number = true
			buffer *= 10
			buffer += int(char - '0')
			continue;
		}
		if number {
			row = append(row, buffer)
			buffer = 0
			number = false
		}
		if char != '\n' {
			continue;
		}
		found := false
		for j := 0; j < len(row); j++ {
			for k := 0; k < len(row); k++ {
				if (j == k) {
					continue;
				}
				if (row[j] % row[k] == 0) {
					checksum += row[j] / row[k]
					found = true
					break
				}
			}
			if (found) {
				break
			}
		}
 		row = []int { }
	}
	return checksum;
}

func main() {
	input, err := os.ReadFile("input.txt");
	if err == nil {
		fmt.Printf("Solution Part 1: %d\n", solution_part1(input))
		fmt.Printf("Solution Part 2: %d\n", solution_part2(input))
	}
}