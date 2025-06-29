// Lesson 07 - Fibonacci Sequence

/*
 * Problem Statement:
 * Give a number n, find the first n elements of the Fibonacci Sequence.
 * - F(2) = [0, 1]
 * - F(3) = [0, 1, 1]
 * - F(7) = [0, 1, 1, 2, 3, 5, 8]
 */

function generateFibonacci(n) {
	const fib = [0, 1];
	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib.slice(0, n);
}

console.log(generateFibonacci(2)); // [0, 1]
console.log(generateFibonacci(3)); // [0, 1, 1]
console.log(generateFibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
