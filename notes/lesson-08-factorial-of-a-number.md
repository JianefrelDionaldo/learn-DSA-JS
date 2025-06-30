# Lesson 8: Factorial of a number

_**What is Factorial in Computer Science (Mathematical Algorithm)?**_
In computer science, the **factorial of a number** `n` (denoted as `n!`) is a **mathematical algorithm that multiplies a given positive integer by all the positive integers less than it**. Foundational in solving problems related to **recursion**, **combinatorics**, **probability**, and **algorithm analysis**.

**Mathematical Definition:**

$$n! = n × (n - 1) × (n - 2) × ⋯ × 1$$

With a special base case:

$$0! = 1$$

**Why it matters in Computer Science:**
Factorial plays a big role in:

- Permutations & combinations `n!` is used to calculate the number of ways item can be arranged.
- Recursion practice: It's a classic example to teach base and recursive cases.
- Algorithm complexity: Some brute-force algorithms run in O(n!) time — a red flag for inefficiency!

**Example:**

if `n = 5`, then: $$5! = 5 × 4 × 3 × 2 × 1 = 120$$

so,factorial of $$5! = 120$$

**Code Implementations:**
Recursive Version (JavaScript):

```javascript
// Recursive version
function factoria(n) {
	if (n === 0) return 1;
	return n * factorial(n - 1);
}
```

Iterative Version (JavaScript):

```javascript
// Iterative version
function factorial(n) {
	let result = 1;
	for (let i = 2; i <= n; i++) {
		reselt *= i;
	}
	return result;
}
```

**Fun Fact:**
The growth of `n!` is super-exponential — it grows faster than any polynomial or exponential function. That's why factorial time complexity is considered computationally expensive and often a sign that an algorithm needs optimization.

**Summary:**
_"The factorial `n` is a product of all positive integers <= `n`, essential in solving recursive and combinatorial problems, but a dangerous beast in algorithmic complexity."_

---

## Problem Statement

**Problem:** Give an integer `n`, find the factorial of that integer.

In mathematics, the factorial of a non-negative integer `n`, denoted `n!`, is the product of all positive integers less than or equal to `n`.

**Keep that in mind:**

- Factorial of **zero** is `1`. $$0! = 1$$

**For example:**

1. Factorial of four | **n = 4:** $$4! = 4 × 3 × 2 × 1 = 24$$
2. Factorial of five | **n = 5:** $$5! = 5 × 4 × 3 × 2 × 1 = 120$$

---

_**Solution:**_

The solution is implemented at this file path:
`./src/lesson-08-factorial-of-a-number.js`

**PREVIEWS:**

_**Recursion approach** (JavaScript):_

```javascript
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
```

</br>

_**Iterative approach** (JavaScript):_

```javascript
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
```

---

## Determine Big-O Complexity

**Big-O Guide:**
Calculate not dependent on input size - O(1)

1. Loop - `O(n)`
2. Nested Loops - `O(n^2)`

Input size reduced by half - O(logn)

**Answer:**

- **Recursive:**
  - Time Complexity: **O(n) - linear time complexity.**
  - Space COcomplexity: **O(n) - linear time complexity.**
- **Iterative:**
  - Time Complexity: **O(n) - linear time complexity.**
  - Space Complexity: **O(1) - constant space complexity.**

---

### Big-O Analysis: Recursive vs Iterative Facrtorial

1. Recursive Factorial - `factorial(n)`

- **Time Complexity: O(n)**
- **Analysis**
  - **Function calls:** Makes exactly `n` recursive calls
    - factorial(n) `->` factorial(n - 1) `->` factorial(n - 2) `->` factorial(0)
  - **Operations per call:** O(1) - just miltiplication and comparison
  - **Total:**

```cmd
factorial(5) → factorial(4) → factorial(3) → factorial(2) → factorial(1) → factorial(0)
     ↑             ↑             ↑             ↑             ↑             ↑
   5 calls total = O(n)
```

- **Space Complexity: O(n)**
- **Analysis:**
  - **Call stack:** Each recursive call adds a frame to the call stack.
  - **Memory per frame:** O(1) stores parameter `n` and return address.
  - **Total:** n fraes × O(1) per frame = **O(n)**

\*\*Stack visualization for factorial(4):

```cmd
┌─────────────┐ ← factorial(0) - Top of stack
├─────────────┤ ← factorial(1)
├─────────────┤ ← factorial(2)
├─────────────┤ ← factorial(3)
└─────────────┘ ← factorial(4) - Bottom of stack
    4 frames = O(n) space
```

\*\*

2. Iterative Factorial - `factorialIterative(n)`

- Time complexity: **O(n)**
- Analysis:
  - **Loop iterations:** Runs from `i = 2` to `i = n`
  - **Total iterations:** `n - 2 + 1 = n - 1` iterations ≈ **O(n)**
  - **Operations per iteration:** O(1) - multiplication and increment
  - **Total:** (n - 1) iterations × O(1) per iteration = **O(n)**

\*\*Loop sequence for factorialIterative(5):

```cmd
i=2: result = 1 * 2 = 2
i=3: result = 2 * 3 = 6
i=4: result = 6 * 4 = 24
i=5: result = 24 * 5 = 120
   4 iterations = O(n)
```

- **Space Complexity: O(1)**
- **Analysis:**
  - **Variables:** Only `result` and `i` are stored
  - **No recursion:** No call stack buildup
  - **Memory usage:** Constant regardless of input size
  - **Total:** **O(1)**

---

_**Complexity Comparison Table**_

|   Approach    | Time complexity | Space Complexity | Call Stack Depth | Memory Efficiency |
| :-----------: | :-------------: | :--------------: | :--------------: | :---------------: |
| **Recursive** |      O(n)       |       O(n)       |     n frames     |      ❌ Poor      |
| **Iterative** |      O(n)       |       O(1)       |     1 frame      |   ✅ Excellent    |

_**Performance Analysis**_
Memory Usae Comparison

```cmd
Input (n):        5      10     100     1000
Recursive Space:  5      10     100     1000    O(n)
Iterative Space:  1      1      1       1       O(1)
```

Stack Overflow Risk

```cmd
// Recursive - Risk of stack overflow
factorial(10000); // Likely to cause stack overflow

// Iterative - No stack overflow risk
factorialIterative(10000); // Runs fine (if result fits in memory)
```

_**Why the Difference in Space Complexity?**_
Recursuve Approach - **O(n) Space**

```cmd
Each function call creates a new stack frame:
┌─────────────┐ ← factorial(0): stores n=0, return address
├─────────────┤ ← factorial(1): stores n=1, return address
├─────────────┤ ← factorial(2): stores n=2, return address
├─────────────┤ ← factorial(3): stores n=3, return address
└─────────────┘ ← factorial(4): stores n=4, return address
```

Iterative Approach - **O(1) Space**

```cmd
Only two variables throughout execution:
┌─────────────┐
│ result = ?  │ ← Same memory location reused
│ i = ?       │ ← Same memory location reused
└─────────────┘
```

_**Big-O Summary**_

Time Complexity: **Both O(n)**

- Both approaches must perform `n` multiplications
- Same fundamental mathematical operations
- Linear time growth with input size

Space Complexity: **Different!**

- **Recursive:** O(n) - due to call stack
- **Iterative:** O(1) - constant space usage

_**Which is better?**_

**Iterative Version Wins** for:

✅ Memory efficiency: O(1) vs O(n) space
✅ Stack safety: No stack overflow risk
✅ Performance: Less function call overhead
✅ Large inputs: Can handle bigger numbers

**Recursive Version Wins** for:
✅ Readability: Matches mathematical definition
✅ Elegance: More intuitive to understand
✅ Educational: Great for learning recursion

_**Recommendation**_
For **production code:** Use **Iterative** approach

- Better performance and memory usage
- No stack overflow concerns

For **learning recursion:** Use **recursive** approach

- Excellent educational example
- Demonstrates recursive thinking

_**Big-O Complexity Summary**_

_"Both have the same time complexity O(n), but the iterative version's O(1) space complexity makes it significantly more practical for real-world applications!"_
