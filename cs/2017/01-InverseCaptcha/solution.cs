using System;
using System.IO;

public static class Solution
{
	public static int Part1(string input)
	{
		int solution = 0;
		for (int i = 0; i < input.Length; i++)
		{
			char curr = input[i];
			char next = input[(i + 1) % input.Length];
			if (curr == next)
				solution += (curr - 48); // Quick conversion from ASCII encoding to numbers (48..57 map to 0..9)
		}
		return solution;
	}

	public static int Part2(string input)
	{
		int solution = 0;
		for (int i = 0; i < input.Length; i++)
		{
			char curr = input[i];
			char next = input[(i + input.Length / 2) % input.Length];
			if (curr == next)
				solution += (curr - 48); // Quick conversion from ASCII encoding to numbers (48..57 map to 0..9)
		}
		return solution;
	}

	public static void Main()
	{
		string input = File.ReadAllText("input.txt");
		Console.WriteLine("Solution Part 1: " + Part1(input));
		Console.WriteLine("Solution Part 2: " + Part2(input));
	}
}