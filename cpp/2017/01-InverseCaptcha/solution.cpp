#include <iostream>
#include <fstream>

#define INPUT_BUFFER_SIZE 2134

int solution_part1(char (&input)[INPUT_BUFFER_SIZE]) {
	int solution = 0;
	for (int i = 0; i < INPUT_BUFFER_SIZE; i++) {
		char& byte = input[i];
		char& next = input[(i + 1) % INPUT_BUFFER_SIZE];
		if (byte == next) {
			solution += byte - 48;
		}
	}
	return solution;
}

int solution_part2(char (&input)[INPUT_BUFFER_SIZE]) {
	int solution = 0;
	for (int i = 0; i < INPUT_BUFFER_SIZE; i++) {
		char& byte = input[i];
		char& next = input[(i + (INPUT_BUFFER_SIZE / 2)) % INPUT_BUFFER_SIZE];
		if (byte == next) {
			solution += byte - 48;
		}
	}
	return solution;
}

int main() {
	std::ifstream file("input.txt");
	char buffer[INPUT_BUFFER_SIZE];
	file.read(buffer, INPUT_BUFFER_SIZE);
	file.close();

	std::cout << "Solution Part 1: " << solution_part1(buffer) << "\n";
	std::cout << "Solution Part 2: " << solution_part2(buffer) << "\n";
}