first = { 'name': 'first', 'age': 20, 'gender': 'male' }
a = 97
console.log('first', first)
a = 89
console.log('a', a)
first['age'] = 21
console.log('first', first)
// o/p // first { name: 'first', age: 20, gender: 'male }
// a 97
// first { name: 'first', age: 21, gender: 'male }
// In the above code, we have created an object 'first' with properties 'name', 'age', and 'gender. We also created a variable 'a' and assigned it the value 97. We then printed the object and the variable. After that, we changed the value of 'a' to 89 and updated the 'age' property of the 'first' object to 21. Finally, we printed the object and the variable again to see the changes.
// this is called mutability in JavaScript. Objects are mutable, which means that their properties can be changed after they have been created. On the other hand, primitive data types like numbers and strings are immutable, which means that their values cannot be changed once they have been assigned. When we assign a new value to a variable that holds a primitive data type, it creates a new value in memory rather than modifying the existing value.
name = 'first'
console.log('name', name)
name = 'second'
console.log('name', name)
// o/p // name first
// name second