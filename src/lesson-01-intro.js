// This code defines a simple greeting function that prints "Hello, World!" to the console.

const greetings = 'Hello, World!';

function greet() {
	console.log(greetings);
}

greet();

// command to run:
// node src/lesson-01-intro.js

// Expected output:
// Hello, World!

function processData(data) {
	let calculation = data + 10;
	console.log('This is the result:', calculation);
}

processData(5); // Example usage of processData function
// Expected output for processData(5):
// This is the result: 15
