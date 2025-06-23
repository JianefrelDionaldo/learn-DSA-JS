/*
 * Lesson 04: Big O Notation
 * This file contains examples and explanations of Big O Notation.
 * It is part of a series of lessons on algorithm analysis.
 *
 */

/*
 * The algorithm: Is to find the sum of first n natural numbers.
 * We have an input n, and the functions returns the sum of all the natural numbers from 1 to n.
 * For exammple: Summation when called with n = 4, will return 10.
 * E.g.:
 * summation(4) = 10
 * 1 + 2 + 3 + 4 = 10
 */

function timeComplexityExample(n) {
	let sum = 0;
	for (let i = 0; i <= n; i++) {
		sum += i;
	}
	return sum;
}

bigONotationExample(4); // Returns 10

// Explanation:
// The function iterates from 0 to n, performing a constant time operation (addition) for each iteration.
// Therefore, the time complexity is O(n), where n is the input value.
// This means that as n increases, the time taken by the function increases linearly.
