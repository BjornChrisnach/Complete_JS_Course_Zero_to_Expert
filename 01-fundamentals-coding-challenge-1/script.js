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

/*
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

console.log(nowYear - 1991 > nowYear - 2018);

*/ // 01-fundamentals-operators-precedence
/*
const nowYear = 2037;
const ageJonas = nowYear - 1991;
const ageSarah = nowYear - 2020;

console.log(nowYear - 1991 > nowYear - 2018);

// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10 (y is put to 10 first, from right to left)
console.log(x, y);

const avarageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avarageAge);

*/ // 01-fundamentals-coding-challenge-1

let markMass, markHeight, johnMass, johnHeight;
let bmi;
let markHigherBmi = false;

markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;
markBmi = markMass / (markHeight * markHeight);
// markBmi = Math.round(markBmi * 100) / 100;
// let roundAccurately = (number, decimalPlaces) --> Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces)
markBmi = (Number(Math.round(markBmi + "e2") + "e-2"));
johnBmi = johnMass / (johnHeight * johnHeight);
// johnBmi = Math.round(johnBmi * 100) / 100;
johnBmi = (Number(Math.round(johnBmi + "e2") + "e-2"));

if (markBmi > johnBmi) {
    markHigherBmi = true;
}
else {
    markHigherBmi = false;
}
console.log(markBmi, johnBmi, "is Mark's BMI higher: " + markHigherBmi)

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBmi = markMass / (markHeight * markHeight);
// markBmi = Math.round(markBmi * 100) / 100;
markBmi = (Number(Math.round(markBmi + "e2") + "e-2"));
johnBmi = johnMass / (johnHeight * johnHeight);
// johnBmi = Math.round(johnBmi * 100) / 100;
johnBmi = (Number(Math.round(johnBmi + "e2") + "e-2"));

if (markBmi > johnBmi) {
    markHigherBmi = true;
}
else {
    markHigherBmi = false;
}
console.log(markBmi, johnBmi, "is Mark's BMI higher: " + markHigherBmi);

// solution coding challenge 1

// test case 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// test case 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn
if (BMIMark > BMIJohn) {
    markHigherBmi = true;
}
else {
    markHigherBmi = false;
}
console.log(BMIMark, BMIJohn, markHigherBMI);
