// Comment Your JavaScript Code

// This is an in-line comment

/* This is a multi-line comment */

// Declare JavaScript Variables

var myName;

var firstName;

var middleName;

var lastName;

var fullName;

var fullName = firstName + middleName + lastName;

// Storing Values with the Assignment Operator

var a;

a = 7;

// Assigning the Value of One Variable to Another

// example

var myVar;
myVar = 5;
var myNum;
myNum = myVar;

// problem

var a;
a = 7;
var b;
b = a;

// Initializing Variables with the same Assignment Operator

var myVar = 0;

// problem

var a = 9;

// Declare String Variables

var myName;

var myName = "your name";

// "your name" is called a string literal. A string literal, or string, is a series of zero or more characters enclosed in single or double quotes.

// problem

var myFirstName = "Hemanth";

var myLastName = "Panditi";

// Understanding Uninitialized Variables

// problem

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Understanding Case Sensitivity in Variables

// example

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

// problem

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Explore Differences Between the var and let Keywords

var camper = "James";
var camper = "David";
console.log(camper);

let camper = "James";
let camper = "David";

// problem

let catName = "Oliver";
let catSound = "Meow!";

// Declare a Read-Only Variable with the const Keyword

// problem

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// Add Two Numbers with JavaScript

const myVar = 5 + 10;

// problem

const sum = 10 + 10;

// Subtract One Number from Another with JavaScript

const myVar = 12 - 6;

// problem

const difference = 45 - 33;

// Multiply Two Numbers with JavaScript

const myVar = 13 * 13;

// problem

const product = 8 * 10;

// Divide One Number by Another with JavaScript

const myVar = 16 / 12;

// problem

const quotient = 66 / 33;

// Increment a Number with JavaScript

// problem

let myVar = 87;

// Only change code below this line
myVar++;

// Decrement a Number with JavaScript

// problem

let myVar = 11;

// Only change code below this line
myVar--;

// Create Decimal Numbers with JavaScript

// problem

const ourDecimal = 5.7;

// Only change code below this line

var myDecimal = 1.2;

// Multiply Two Decimals with JavaScript

// problem

const product_two = 2.0 * 2.5;

// Divide One Decimal by Another with JavaScript

const quotient_two = 4.4 / 2.0;

// Finding a Remainder in JavaScript

// problem

const remainder_two = 11 % 3;

// Compound Assignment with Augmented Addition

myVar = myVar + 5;

let myVar = 1;
myVar += 5;
console.log(myVar);

// problem

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// Compound Assignment With Augmented Subtraction

myVar -= 5;

// problem

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// Compound Assignment With Augmented Multiplication

myVar *= 5;

// problem

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

// Compound Assignment with Augmented Division

myVar /= 5;

// problem

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

// Escaping Literal Quotes in Strings

const sampleStr = 'Alan said, "Peter is learning JavaScript".';

// problem

const myStr_two = 'I am a "double quoted" string inside "double quotes".'; // Change this line

// Quoting Strings with Single Quotes

const doubleQuoteStr = "This is a string";
const singleQuoteStr = "This is also a string";

// problem

const myStr_one = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings

const myStr_three = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// Concatenating Strings with Plus Operator

// example

const ourStr = "I come first. " + "I come second.";

// problem

const myStr = "This is the start. " + "This is the end."; // Change this line
