/* // 01-fundamentals-brief-intro
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

// let firstName = "Jonas";
// let firstName = "Bob";
let firstName = "Matilda";
let first = "Jonas";
let firstNamePerson = "Bjorn"; // standard
// let first_name_person = "Bjorn";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3years = 3;
// Jonas&Matilda = "JM";
// let new = 27;
// let function = 27;
// let name instead use ex firstName;

/* // 01-fundamentals_linking_jsfile
// commenting
// Variable name conventions
Jonas_Matilda = "JM";

let person = "Jonas";
let PI = 3.1415; // const uppercase


// let myFirstJob = "programmer";
let myFirstJob = "coder";
let myCurrentJob = "teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/* // 01-fundamentals-data-types
// true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23)
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/* // 01-fundamentals-let-const-var

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; // error assignment to constant variable

// const job; // error missing initializing value

var job = "programmer"; // use should be avoided
job = "teacher";

lastName = "Schmedtmann"; // creates it on global scope, use let or const
console.log(lastName);

*/ //01-fundamentals-operators

const nowYear = 2037;
const ageJonas = nowYear - 1991;
const ageSarah = nowYear - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10  --> 25
x *= 4; // x = x * 4 --> 100
x++; // x = x + 1 --> 101;
x = 100;
x--; // x = x - 1 --> 99;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(nowYear - 1991, nowYear - 2018);
