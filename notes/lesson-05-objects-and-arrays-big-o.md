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
