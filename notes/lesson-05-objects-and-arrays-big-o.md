# Objects and Arrays - Big-O Notation

In **JavaScript**, understanding how `Objects` and `Arrays` work in relation to Big-O Notation is essential for writting efficient and scalable code.

**Objects**, often used as hash maps, provide constant time `O(1)` operations for **accessing**, **inserting**, and **deleting** properties, making them ideal for quick lookups.

**Arrays**, on the other hand, often constant time access via index, but operations like `shift()`, `unshift()`, or `splice()` can have linear time complexity `O(n)` due to element reindexing.

Learning **Big-O Notation** in the context of these strucures equips developers with the ability to evaluate the cost of their code, optimize performance for large-scale applications, and write algorithms that handle growing data efficiently. Skills that are critical for both real-world development and acing technical interviews.

## Objects

In JavaScript, objects are a fundamental data type used to store collection of data and more complex entities. They are essentially collections of properties, which are `key-value pairs` where the key is a string (or symbol) and the value can be any JavaScript data type, including other objects, functions, or primitive values.

_**Key Characteristics of JavaScript Objects:**_

**Key-Value Pairs:**
Objects organize data into named properties, allowing access to specific values using their corresponding keys.

**Dynamic:**
Properties can be `added`, `modified`, or `deleted` from an object their its creation.

**Methods:**
Functions can be stored as property values within an object, known as methods. These methods define actions or behaviours associated with the object.

**Prototypes:**
Objects in JavaScript inherit properties and methods from their prototype, forming a prototype chain. This enables object-oriented programming concepts like inheritance.

---

**Big-O Notation** describes the performance or complexity of an algorithm, specifically how its runtime or space requirements grow as the input increases. In the context of _**JavaScript Objects**_, Big-O Notation helps analyze the efficiency of common operations performed on them.

_**Key Operations and their Big-O Complexity for JavaScript Objects:**_

**Accesing a property (by key): O(1) - Constant Time:**
Retrieving a value associated with a specific key in a JavaScript object is generally a constant-time operation. This means, the time taken to access a property does not significantly increase regardless of the number of properties in the object, as the engine can directly locate the key-value pair.

**Inserting or Removing a property: O(1) - Constant Time:**
Adding a new key-value pair or deleting an existing one also typically operates in constant time. Similar to access, the operation is efficient regardless of the object's size.

**Searching for a value (not by key): O(n) - Linear Time:**
If you need to find a specific value within an object without knowing its corresponding key, you will likely need to operate through all the object's values. This makes the search operation linear, meaning the time required grows proportionally with the number of key-value pairs (n) in the object. Methods like `Object.values()`, `Object.keys()`, or `Object.entries()` followed by iteration would fall into this category.

_**In Summary:**_
Big O notation provides a framework for understanding the scalability of operations on JavaScript objects. While direct access, insertion, and deletion are highly efficient (O(1)), operations requiring iteration through the object's contents will exhibit linear time complexity (O(n)). This understanding is crucial for writing performant JavaScript code, especially when dealing with large datasets or complex applications.

---

## Actual Notes: Objects

Let's start with Objects. An `object` is a collection of key value pairs.

E.g.:

```javascript
const person {
  firstName: 'Jianefrel',
  lastName: 'Dionaldo'
}
```

</br>

**Insert | Remove - O(1)**
If you want to `insert or remove` a new property, the time complexity is **constant**. No matter how many properties exist in an object, it takes the `same amount` of `time` to insert or remove a property.

```javascript
// Insert a new property - O(1)
person.age = 21;
console.log('After Insert: ', person);

// Output:
// { firstName: 'Jianefrel', lastName: 'Dionaldo', age: 21 }
```

```javascript
// Remove a property - O(1)
delete person.lastName;
console.log('After Delete: ', person);

// Output:
// { firstName: 'Jianefrel', age: 21 }
```

**Accessing - O(1)**
If you want to access the value of a given key, the time complexity is **constant**.

```javascript
// Accessing a property - O(1)
console.log(person.firstName);

// Output: Jianefrel
```

Accessing `person . firstName` does not depend on other properties present in the object.

**Search - O(n)**
However, if you want to search for a value in an object the time complexity is linear.

So to search for the value `Dionaldo` in the worst case scenario you might have to search all the properties present in the object.

```javascript
// JavaScript Search
const person {
  firstName: 'Jianefrel',
  lastName: 'Dionaldo',
  age: '22',
  liveAt: 'Philippines',
  Occupation: 'Developer'
}

// Search for the value 'Dionaldo` O(n)
function searchValueObject(obj, valueToFind) {
  for (const key in obj) {
    if (obj[key] === valueToFind) {
      return `Value ${valueToFind} found at key "${key}"` ;
    }
  }
  return `value "${valueToFind} not found in the object.`;
}

// Execute the search
console.log(searchValueObject(person, 'Dionaldo'));
// Output: Value "Dionaldo" found at key 'Dionaldo'

console.log(searchValueObject(person, 'Enginner'));
// Output: Value "Engineer" not found in the object.
```

</br>

_**Next let's take a look at few methods on object**_

```javascript
const person {
  firstName: 'Jianefrel',
  lastName: 'Dionaldo',
  age: '22',
  liveAt: 'Philippines',
  Occupation: 'Developer'
}
```

**Object.keys(obj) - O(n)**
Returns an array of object's keys. `O(n)` because it must iterate through all keys.

```javascript
// 📌 Object.keys() - O(n)
// Returns an array of all keys in the object
const keys = Object.keys(person);
console.log('Keys:', keys);
// Output: ['firstName', 'lastName', 'age', 'city']
```

**Object.values(obj) - O(n)**
Returns an array of the object's values. `O(n)` as it visit every property.

```javascript
// 📌 Object.values() - O(n)
// Returns an array of all values in the object
const values = Object.values(person);
console.log('Values:', values);
// Output: ['Jianefrel', 'Dionaldo', 21, 'Manila']
```

**Object.entries(obj) - O(n)**
Returns an array of `[key, value]` pairs. `O(n)` due to traversing all properties.

```javascript
// 📌 Object.entries() - O(n)
// Returns an array of key-value pairs as nested arrays
const entries = Object.entries(person);
console.log('Entries:', entries);
// Output: [['firstName', 'Jianefrel'], ['lastName', 'Dionaldo'], ['age', 21], ['city', 'Manila']]
```

They all have a linear complexity.

_**Addtional: Here are some methods associated with JavaScript objects:**_

- **Object.assign()**
  - Copies enumerable own properties from one or more source object to a target object. It's often used for shallow copying or merging objects

```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source); // target is now: {a: 1, b: 2, c: 3}
```

- **Object.freeze()**
  - Freezes an object, preventing new properties from being added to it, existing properties from being removed, and existing properties or their enumerability, configurability, or writability from being changed.

```javascript
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // No effect
```

- **Object.create()**
  - Create a new object, using an existing object as the prototype of the newly created object.

```javascript
const proto =  { greet(): { return 'Hello!' } };
const obj = Object.create(proto);
obj.greet(); // Returns 'Hello!'
```

- **Custom Method**
  - Objects can also define their own custom methods as properties that are functions, allowing them to perform specific related to their internal data.

```javascript
const person = {
	firstName: 'Jianefrel',
	lastName: 'Dionaldo',
	fullName: function () {
		return this.firstName + ' ' + this.lastName;
	},
};

person.fullName(); // Returns 'Jianefrel Dionaldo'
```

---

## Array Big-O

In JavaScrit, an arraay is a global object used to store ordered collection of data.

_**Key Characteristics of JavaScript arrays include:**_

**Ordered List of Values:**
Arrays store values in a specific sequence, and each value is called an element.

**Zero-indexed:**
Elements are accessed using a numeric index, starting from `0` for the first element, `1` for the second, and so on.

**Dynamic Size:**
Arrays are resizable, meaning their length can change dynamically as elements are added or removed.

**Heterogeneous:**
Arrays can contain elements of different data types within the same array (e.g., numbers, strings, objects, or even other arrays).

**Object-like Behaviour:**
Array are special type of object and inherit properties and methods from the `Array.prototype`.

_**Creating Arrays:**_

- **Array Literal Notation:** This is the most common and prefered method.

```javascript
const myArray = [1, 'hello', true];
const emtyArray = [];
```

_**Array constructor:**_

```javascript
const anotherArray = new Array(1, 2, 3);
const fixedLengthArray = new Array(5); // Creates an array with 5 empty slot.
```

_**Accessing and Modifying Elements:**_
Elements are accessed and modified using bracket notation with their index:

```javascript
const fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[0]); // Output: 'Apple'
fruits[1] = 'Grape'; // Modifies the second element
console.log(fruits); // Output: ["Apple", "Grape", "Orange"]
```

_**Common Array Methods:**_

JavaScript provides numerous built-in merthods for manipulating arrays, including:

- **Adding Elements:** `push()` (adds to end), `unshift()` (adds to beginning), `splice()` (adds to a specific index).
- **Removing Elements:** `pop()` (removes from end), `shift()` (removes from beginning), `splice()` (removes from a specific index).
- **Copying/Slicing:** `slice()`, `concat()`.
- **Iteration:** `forEach()`, `map()`, `filter()`, `reduce()`.
- **Searching:** `indexOf()`, `findIndex()`, `includes()`.
- **Sorting:** `sort()`.

_**Big-O Notataion in JavaScript Array**_
Big-O Notation in JavaScript descries the efficiency of array operations in terms of how execution time or space requirements scale with the size of the array (denoted as 'n'). It focuses on the worst-case scenario.

**Here are the Big-O complexities for common Javascript array operations:**

**O(1) - Constant Time:**
Operations that take the same amout of time regardless of the array's size.

- `push()` : Adding an element to the end of an array.
- `pop()` : Removing an element from the end of an array.
- Accessing an element by its index (e.g., arr[index]).

**O(n) - Linear Time:**
Operations where the time taken grows proportionally with the size of the array.

- `shift()` : Removing an element from the beginning of an array (requirs re-indexing all subsequent elements).
- `unshift()` : Adding an element to the beginning of an array (requires re-indexing all subsequent elements).
- `splice()` : Inserting or deleting elements at an arbitrary index (requires shifting elements).
- `concat()` : Creating a shallow copy of a porting of an array.
- `includes()`, `indexOf()`, `forEach()`, `map()`, `filter()`, `reduce()` : Iterating through all elements.

**O(n log n) - Log-linear Time:**
Operations commonly associated with efficient sorting algorithms.

- `sort()` : Sorting an array.

**O(n^2) - Quadratic Time:**
Operations involving nested loops where each loop iterates through the entire array, leading to a significant performance degradation with large inputs.

- Nested loops for comparisons or transformations on all pairs of elements within an array.

_**Key Considerations:**_

**Space Complexity:**
Big-O also applies to space complexity, measuring how much memory an opeartion uses. For example, `slice()`, or `concat()` have **O(n)** space complexity because they create new array proportional to the input size.

**Amortize Time:**
Some operations, like `push()` in certain implementations, might have an amortized O(1) complexity, meaning that while individual operations might occasionally be slower due to memory reallocations, the average time over many operations remains constant.

---

An array is an ordered collection of values.

The difference when compared to objects, arrays are prdered.
We start at intex 0 and increment by 1. It is very important to maintain the appropriate index, anytime we perform an operation.

**Add / Remove at the end - O(1)**
If you insert or remove the element from the end of the array, the time complexity is **constant**.

**Add / Remove at the beginning - O(n)**
If you insert or remove the lement from the biginning of the array, the time complexity is **linear**. This is because the index has to be reset from remaining element in the array

**Accessing - O(1)**
Accessing an element is **constant** time complexity. As fetching the first element is no different from fetching an element at position one hundred thousand.

**Searching - O(n)**
Searching for an element is still **linear** time complexity. As the lement can be the last one in the array.

_**Here's a list of the common array method with their time complexity**_

**`push()` / `pop()` - O(1)**
Push abnd pop methods are **constant**.

**`shift()` / `unshift()` / `contat()` / `slice()` / `splice()` / `forEach()` / `map()` / `filter()` / `reduce()` - O(n)**
These methods are linear time complexity.

This is very important, when solving a problem you might use `arr.forEach()` or `arr.filter()`, and the callback function would also contain a for loop.
In such a scenario, your time complexity is quadratic and the interviewer might not be with that.

So that was a quick overview of the time complexity of **objects**, **arrays**, and **their methods**.

We finally ready to start looking at solving a few problems.
Let's start with **Math Algorithms** in the next lesson.
