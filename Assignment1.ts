// Exercise 1: Define Typed Arrays
// Define the following arrays with proper types and initialize them with values.
// An array of numbers.
let num1:number[] = [1,2,3,4]
console.log("Number: ", num1);
// An array of strings.
let cars:string[] = ["BMW", "VW", "Merc", "Audi"]
console.log("String: ", cars);
// An array of booleans.
let bol1:boolean[] = [true, false, false, true]
console.log("Boolean: ", bol1);
// A mixed array containing numbers and strings.
let mix:(number|string)[] = [1,2,3,4,"BMW", "VW", "Merc", "Audi"]
console.log("Number and String: ", mix);


// Exercise 2: Array Manipulation
// Perform the following operations on the given array:
let fruits1:string[] = ["apple", "banana", "mango"];
console.log("Fruits: ", fruits1);
// Add "grapes" at the end.
fruits1.push("grapes");
console.log("Fruits: ", fruits1);
// Remove the first element.
fruits1.shift();
console.log("Fruits: ", fruits1);
// Insert "pineapple" at index 2.
fruits1.splice(2,0,"pineapple");
console.log("Fruits: ", fruits1);
// Reverse the array.
fruits1.reverse();
console.log("Fruits: ", fruits1);



// Exercise 3: Map, Filter, and Reduce
// Using the given array, perform the following:
let numbers: number[] = [10, 20, 30, 40, 50, 60];
console.log("numbers: ", numbers);
// Create a new array that doubles each number.
let double = numbers.map(i=>i*i);
console.log("Doubled numbers: ", double);
// Filter out numbers greater than 50.
const result = numbers.filter(check);
console.log("Filtered numbers: ", result);

function check(n:number) {
  return n >= 50;
}
// Find the sum of all numbers.
let sum = numbers.reduce(getSum, 0);
function getSum(total:number, num) {
    return total + Math.round(num);
  }
console.log("Sum: ", sum);


// Exercise 4: Find and FindIndex
// Using the given array:
let values: number[] = [10, 20, 30, 40, 50];
function checkValue(value:number) {
    return value > 25;
  }
// Find the first number greater than 25.
let val:number = values.find(checkValue);
console.log("First number > 25:", val);
// Get the index of the number 40.
let index:number = values.indexOf(val);
console.log("Index of 40:", index);


// Exercise 5: Sorting an Array
// Sort the following array in ascending and descending order.
let scores: number[] = [55, 23, 87, 12, 99, 38];
let ascending:number[] = scores.sort(function(a,b) {return a - b});
console.log("Ascending order:", ascending);
let descending:number[] = scores.sort(function(a,b) {return b - a});
console.log("Descending order:", descending);


// Exercise 6: Tuple Types
// Create a tuple that holds the following information about a student:
let student: [string, number, boolean] = ["John", 21, true];
console.log(student);

// Exercise 7: Working with includes() and some()
// Given an array of roles, check:
let roles: string[] = ["User", "Editor", "Admin", "Moderator"];
let hasAdmin:boolean = roles.includes("Admin");
console.log("Contains Admin:", hasAdmin);
function checkSuper(role:string) {
  return role.startsWith("Super");
}
let hasSuper:boolean = roles.some(checkSuper);
console.log("Has Super role:", hasSuper);



// Exercise 8: Flattening an Array
// Flatten the following nested array using the flat() method.
let nestedArray: (number | number[])[] = [1, [2, 3], [4, [5, 6]]];
console.log("nestedArray",nestedArray);
console.log("flattenedArray",nestedArray.flat(2));



// Exercise 9: Merging and Removing Duplicates
// Merge the two arrays and remove duplicates.

let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5, 6];
let s  = new Set([ ...arr1, ...arr2] ); //let s = new Set(a1.concat(a2));
let a = [...s];
console.log("uniqueArray", a);


// Exercise 10: Interface with Arrays
// Define an interface Employee with the following properties:

// name (string)
// age (number)
// position (string)
// Then, create an array of employees and filter those older than 30.

interface Employee {
    name: string;
    age: number;
    position: string;
}

// // Create an array of employees and filter employees older than 30
const employees: Employee[] = [
    { name: "Dinesh", age: 27, position: "Developer" },
    { name: "Bharathi", age: 26, position: "Manager" },
    { name: "Priya", age: 32, position: "Designer" },
    { name: "Varinder", age: 35, position: "Senior Developer" },
    { name: "Dhiyanash", age: 31, position: "Product Owner" }
];
const filteredEmployees = employees.filter(employee => employee.age > 30);
console.log(filteredEmployees);
