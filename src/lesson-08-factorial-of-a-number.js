// Lesson 8: Factorial of a Number
// This function calculates the factorial of a given number using recursion.
// 1. Factorial of four | n = 4: 4! = 4 × 3 × 2 × 1 = 24
// 2. Factorial of five | n = 5: 5! = 5 × 4 × 3 × 2 × 1 = 120

// Recursion is a technique where a function calls itself to solve a problem.
// This approach is elegant and straightforward, but it can lead to performance issues for large values of `n` due to the overhead of multiple function calls and stack depth limitations.
function factorial(n) {
	if (n === 0) {
		return 1;
	}

	if (n < 0) {
		console.log('Factorial is not defined for negative numbers.');
		return undefined;
	}
	return n * factorial(n - 1);
}

console.log('Recursive Version:');
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// Iterative Version Solution
// The iterative approach is generally more efficient in terms of memory usage and performance.
function factorialIterative(n) {
	let result = 1;
	for (let i = 2; i <= n; i++) {
		result *= i;
	}
	return result;
}

console.log('Iterative Version:');
console.log(factorialIterative(0)); // 1
console.log(factorialIterative(1)); // 1
console.log(factorialIterative(4)); // 24
console.log(factorialIterative(5)); // 120
