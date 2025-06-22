# Time and Space Complexity

In computer Science, time and space complexity are measures of an algorithm's efficiency.

Time complexity quantifies the amount of time an algorithm takes to run as function of the input size, while space complexity measures the amount of space the algorithm requires.

## Algorithm Analysis

There are multiple ways to solve one problem.
Ex: There are multiple algorithms to sort a list of numbers.

How do we analyze each one of them is the most efficient algorithm?

Generally, when we talk about **performance**, we use an `absolute measure`. E.g., If i can run 100 meters in 12 seconds, I'm faster than someone who takes 15 seconds.

The absolute running time of an algorithm cannot be predicted, since it depends on number of factors.

- Programming language used to implement the algorithm.
- The computer program runs on.
- Other program running simultaneously.
- Quality of the operating system
- And many other factors.

**_Keeping these points in mind._**

We `evaluate the performance` of an **algorithm** in terms of its `input size`.

**The Evaluation had two types:**

1. **Time Complexity** - Amount of time taken by an algorithm to run, as a function of input size.
1. **Space Complexity** - Amount of memory taken by an algorithm to run, as a function of input size.

By evaluation by its `input size`, the analysis is not only independent but the comparison is also more appropriate.

Imagine, if one algorithm is faster than the other for a small input size, but slower for a larger input size. We would never be able to accurately judge which is more efficient.

**_Keep in mind._**

> There is no one solution that works every single time. It is always good to know multiple ways to solve the problem and use the best solution, given your constraints.

If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity. On the other hand,

If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space.

## How To Represent the Time and Space Complexity of an Algorithm?

Well, we wil do that using `asymptotic notations`

**_Asymptotic Notations_** — Are Mathematical tools to represent time and space complexity.

**_There are mainly three (3) asymptotic notation_**

1. Big-0 Notation (O - notation) — Worst case complexity
2. Omega Notation (Ω - notation) — Best case complexity
3. Theta Notation (Θ - notation) — Average case complexity

Now at this point, if i were to explain their theoretical definitions it would unnecessarily confuse you.

Instead, i want to make this more practical and easier to understand as a beginner.

Once you get a fundamental understanding of these concepts you can then on your own time refer to articles that dive deeper.

Now, the first step being practical is to **not worry** about the _`best`_ and _`average case complexity`_

As you deal with problems, you'll realize that we are primarily concerned with the worst case scenario of an algorith.

And to be honest, it is what is asked during job interviews as well.

You'll likely to be asked. E.g., "Can you tell me the big-O or the worst-case complexity of the algorithm you've just written.

And for that reason, our focus as well, will be on the worst case complexity in this course.
