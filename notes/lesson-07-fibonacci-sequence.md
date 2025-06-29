# Lesson 6: Fibonacci Sequence

_**What is Fibonacci Sequence?**_
The Fibonacci Sequence is a series of numbers where each term is the sum of the two preceding ones. It begins with 0 and 1, continues as follows:

_0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377..._

**The general formula is:**

$$
Fn = Fn - 1 + Fn - 2
$$

**Where:**

- **Fn** is the current fibonacci number,
- **Fn-1** is the previous number, and
- **Fn-2** is the number before that.

**For Example:**

- 1 + 1 = 2
- 2 + 3 = 5
- 5 + 8 = 13
- ... and so on.

This pattern doesn't just occur in math textbooks, it appears in nature, art, and architecture. A striking trait of the sequence is that as the number increase, the ratio between terms (**Fn / Fn - 1**) approaches the **Golden Ratio**, approximately **1.618**, This ratio is symbolized by the Greek letter **phi (φ)** and is often associated with balance and aesthetic harmony.

Interestingly, **every third number** in the Fibonacci Sequence is even, and the pattern exhibits a deep mathematical elegance that continues to inspire mathematicians, scientists, and artist alike.

---

## Fibonacci Sequence in Programming (Mathematical Algorithm)

In computer science, the **Fibonacci Sequence** is a recursive algorithm used to generate a series where each number is the sum of the proceding numbers, typically starting from `0` and `1`. It is formally defined as:

$$
F(n) =
\begin{cases}
0 & \text{if } n = 0 \\
1 & \text{if } n = 1 \\
F(n-1) + F(n-2) & \text{if } n > 1
\end{cases}
$$

This recurrence relation models as wide range of computational problems, such as dynamic programming, recursion trees, and algorithm optimization.

---

_**💡 Key Points in Programming Context:**_

- **Input:** A non-negative integer `n`.
- **Output:** The $n-th$ Fibonacci number.
- **Base Cases:** $F(0) = 0$, $F(1) = 1$.
- **Recursive Case:** For $n > 1$, $F(n) = F(n-1) + F(n-2)$.

_**Example JavaScript Implementation:**_

```javascript
function fibonacci(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7)); // Output: 13
```

</br>

_**Algorithm Complexity:**_

- **Naive recursive version:**
  - Time: `O(2^n)` (exponential)
  - Space: `O(n)` (due to call stack)
- **Optimized with Memoization or Dynamic Programming:**
  - Time: `O(n)`
  - Space: `O(n)` or `O(1)` (with iterative approach)

</br>

_**In Summary:**_

_The **Fibonacci Sequence serves as a foundational example in computer science for teaching recursion, algorithmic thinking, and even complexity analysis**. It's a golden tool - not just a golden ratio._

---

## Lesson 7 - Begin

_**Fibonacci Sequence**_

**Problem** - Give a number `'n'` find the first `'n'` elements of the Fibonacci Sequence.

In mathematics, the Fibonacci Sequence is a sequence in which each number is the sum of the two proceding ones.

The first two numbers in the sequence is `0` and `1`.
For example:

- n = `2` - [0, 1]
- n = `3` - [0, 1, 1]
- n = `13` - [0, 1, 1, 2, 3, 5, 8]

---

Fibonacci Sequence

- n = `2 ->` [0, 1]
- n = `3` - [0, 1, 1]
- n = `4` - [0, 1, 1, 2]
- n = `5` - [0, 1, 1, 2, 3]
- n = `8` - [0, 1, 1, 2, 3, 5]
- n = `13` - [0, 1, 1, 2, 3, 5, 8]
- n = `21` - [0, 1, 1, 2, 3, 5, 8, 13]
- n = `34` - [O, 1, 1, 2, 3, 5, 8, 13, 21]
- n = `55` - [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
- n = `89` - [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
- n = `144` - [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

---

_**Solution:**_

The solution is implemented at this file path:
`./src/lesson-07-fibonacci-sequence.js`

**Overview:**

```javascript
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
```

## Determine the Big-O

Next it's time to determine the Big-O from our implemented solution of fibonacci function.

You can determine how many times each step is executed and then, approximate like we've learned before or you can use sort of thumb rule which accelerates the process

Here is a cheat sheet which can be used as a guide. You shouldn't completely rely on this but it does help most of the time

**Big-O Guide:**
Calculate not dependent on input size - O(1)

1. Loop - `O(n)`
2. Nested Loops - `O(n^2)`

Input size reduced by half - O(logn)

**Determining:**
Big-O = O(n)
