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

/*
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

*/ //01-fundamentals-strings-template-literals

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2021;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines")

console.log(`String
with multiple
lines`)
*/ // 01-fundamentals-if-else

/*
const age = 15;

if (age >= 18) {
    console.log("Sarah can start getting a driving license 😉")
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);
*/ // 01-fundamentals-coding-challenge-2

/*
// test case 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// test case 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// let mutipleBMIMark = massMark / (heightMark ** 2);
// let mutipleBMIJohn = massJohn / (heightJohn * heightJohn);
// const BMIMark = (Number(Math.round(mutipleBMIMark + "e2") + "e-2"));
// const BMIJohn = (Number(Math.round(mutipleBMIJohn + "e2") + "e-2"));
// const markHigherBMI = BMIMark > BMIJohn;

// if (markHigherBMI) {
//     console.log(`Mark's BMI is ${BMIMark} and is higher than John's BMI that is ${BMIJohn}!`);
// }
// else {
//     console.log(`John's BMI is ${BMIJohn} and is higher than Mark's BMI that is ${BMIMark}!`);
// }

// solution

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

const BMIMark = (Number(Math.round((massMark / (heightMark ** 2)) + "e2") + "e-2"));
const BMIJohn = (Number(Math.round((massJohn / (heightJohn * heightJohn)) + "e2") + "e-2"));
// console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/ // 01-fundamentals-conversion-coercion

/*
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof (NaN));

console.log(String(23), 23);

// type coersion
console.log("I am " + 23 + " years old");
// console.log("I am " + String(23) + " years old"); // not needed with JS coersion
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // "11"
n = n - 1; // 11 -1 = 10
console.log(n);
*/ // 01-fundamentals-truthy-falsy

/*
// 5 falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
}
else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined");
}
else {
    console.log("Height is undefined");
}
*/ // 01-fundamentals-equality_operators

/*
const age = "18";
if (age === 18) console.log("You just became an adult ;D (strict)");
if (age == 18) console.log("You just became an adult ;D (loose)"); // avoid use

// const favourite = prompt("What's your favourite number?");
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

// if (favourite == 23) { // "23" == 23
//     console.log("Cool! 23 is an amazing number!");
// }
if (favourite === 23) { // "23" == 23
    console.log("Cool! 23 is an amazing number!");
}
else if (favourite === 9) {
    console.log("9 is also a cool number!");
}
else {
    console.log("Number is not 23, 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");
*/ // 01-fundamentals-logical-operators

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// }
// else {
//     console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
}
else {
    console.log("Someone else should drive...");
}
*/ // 01-fundamentals-coding-challenge-3

//test case 1
// dolphinsScore1 = 96;
// koalasScore1 = 88;
// //test case 2
// dolphinsScore2 = 108;
// koalasScore2 = 91;
// //test case 2
// dolphinsScore3 = 89;
// koalasScore3 = 110;

// if (dolphinsScore1 > koalasScore1) {
//     console.log("Dolphins win the trophy 🏆");
// }
// else if (koalasScore1 > dolphinsScore1) {
//     console.log("Koalas win the trophy 🏆");
// }
// else if (dolphinsScore1 === koalasScore1) {
//     console.log("Both win the trophy!");
// }
// if (dolphinsScore2 > koalasScore2) {
//     console.log("Dolphins win the trophy 🏆");
// }
// else if (koalasScore2 > dolphinsScore2) {
//     console.log("Koalas win the trophy 🏆");
// }
// else if (dolphinsScore2 === koalasScore2) {
//     console.log("Both win the trophy!");
// } if (dolphinsScore3 > koalasScore3) {
//     console.log("Dolphins win the trophy 🏆");
// }
// else if (koalasScore3 > dolphinsScore3) {
//     console.log("Koalas win the trophy 🏆");
// }
// else if (dolphinsScore3 === koalasScore3) {
//     console.log("Both win the trophy!");
// }

// const scoreDolphinsAverage = Number(Math.round(((dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3) + "e2") + "e-2");
// const scoreKoalasAverage = Number(Math.round(((koalasScore1 + koalasScore2 + koalasScore3) / 3) + "e2") + "e-2");
// console.log(scoreDolphinsAverage, scoreKoalasAverage);

// if (scoreDolphinsAverage > scoreKoalasAverage) {
//     console.log("Dolphins win the trophy 🏆");
// }
// else if (scoreDolphinsAverage < scoreKoalasAverage) {
//     console.log("Koalas win the trophy 🏆");
// }
// else if (scoreDolphinsAverage === scoreKoalasAverage) {
//     console.log("Both win the trophy!");
// }

// // Bonus 1
// const minimumScore = 100;

// // test case 1
// dolphinsScore1 = 97;
// koalasScore1 = 109;
// //test case 2
// dolphinsScore2 = 112;
// koalasScore2 = 95;
// //test case 2
// dolphinsScore3 = 101;
// koalasScore3 = 123;

// if (dolphinsScore1 > koalasScore1 && dolphinsScore1 >= minimumScore) {
//     console.log("Dolphins win the trophy 🏆");
// }
// else if (koalasScore1 > dolphinsScore1 && koalasScore1 >= minimumScore) {
//     console.log("Koalas win the trophy 🏆");
// }
// else if (dolphinsScore1 === koalasScore1 && dolphinsScore1 >= minimumScore) {
//     console.log("Both win the trophy!");
// }
// if (dolphinsScore2 > koalasScore2 && dolphinsScore2 >= minimumScore) {
//     console.log("Dolphins win the trophy 🏆");
// }
// else if (koalasScore2 > dolphinsScore2 && koalasScore2 >= minimumScore) {
//     console.log("Koalas win the trophy 🏆");
// }
// else if (dolphinsScore2 === koalasScore2 && dolphinsScore2 >= minimumScore) {
//     console.log("Both win the trophy!");
// } if (dolphinsScore3 > koalasScore3 && dolphinsScore3 >= minimumScore) {
//     console.log("Dolphins win the trophy 🏆");
// }
// else if (koalasScore3 > dolphinsScore3 && koalasScore3 >= minimumScore) {
//     console.log("Koalas win the trophy 🏆");
// }
// else if (dolphinsScore3 === koalasScore3 && dolphinsScore3 >= minimumScore) {
//     console.log("Both win the trophy!");
// }

// const scoreDolphins = Number(Math.round(((97 + 112 + 101) / 3) + "e2") + "e-2");
// const scoreKoalas = Number(Math.round(((109 + 95 + 123) / 3) + "e2") + "e-2");
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore) {
//     console.log("Dolphins win the trophy 🏆");
// }
// else if (scoreKoalas > scoreDolphins && scoreKoalas >= minimumScore) {
//     console.log("Koalas win the trophy 🏆");
// }
// else if (scoreDolphins === scoreKoalas && scoreDolphins >= minimumScore && scoreKoalas >= minimumScore) {
//     console.log("Both win the trophy! 🏆");
// }
// else {
//     console.log("No one wins the trophy 😥")
// }

// // Bonus 2
// const minimumScore = 100;

// // test case 1
// dolphinsScore1 = 97;
// koalasScore1 = 109;
// //test case 2
// dolphinsScore2 = 112;
// koalasScore2 = 95;
// //test case 2
// dolphinsScore3 = 101;
// koalasScore3 = 106;

// if (dolphinsScore1 > koalasScore1 && dolphinsScore1 >= minimumScore) {
//     console.log("Dolphins win the trophy 🏆");
// }
// else if (koalasScore1 > dolphinsScore1 && koalasScore1 >= minimumScore) {
//     console.log("Koalas win the trophy 🏆");
// }
// else if (dolphinsScore1 === koalasScore1 && dolphinsScore1 >= minimumScore) {
//     console.log("Both win the trophy!");
// }
// if (dolphinsScore2 > koalasScore2 && dolphinsScore2 >= minimumScore) {
//     console.log("Dolphins win the trophy 🏆");
// }
// else if (koalasScore2 > dolphinsScore2 && koalasScore2 >= minimumScore) {
//     console.log("Koalas win the trophy 🏆");
// }
// else if (dolphinsScore2 === koalasScore2 && dolphinsScore2 >= minimumScore) {
//     console.log("Both win the trophy!");
// } if (dolphinsScore3 > koalasScore3 && dolphinsScore3 >= minimumScore) {
//     console.log("Dolphins win the trophy 🏆");
// }
// else if (koalasScore3 > dolphinsScore3 && koalasScore3 >= minimumScore) {
//     console.log("Koalas win the trophy 🏆");
// }
// else if (dolphinsScore3 === koalasScore3 && dolphinsScore3 >= minimumScore) {
//     console.log("Both win the trophy!");
// }

// const scoreDolphins = Number(Math.round(((97 + 112 + 101) / 3) + "e2") + "e-2");
// const scoreKoalas = Number(Math.round(((109 + 95 + 106) / 3) + "e2") + "e-2");
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore) {
//     console.log("Dolphins win the trophy 🏆");
// }
// else if (scoreKoalas > scoreDolphins && scoreKoalas >= minimumScore) {
//     console.log("Koalas win the trophy 🏆");
// }
// else if (scoreDolphins === scoreKoalas && scoreDolphins >= minimumScore && scoreKoalas >= minimumScore) {
//     console.log("Both win the trophy! 🏆");
// }
// else {
//     console.log("No one wins the trophy 😥")
// }

// solution

// const scoreDolphins = Number(Math.round(((96 + 108 + 89) / 3) + "e2") + "e-2");
// const scoreKoalas = Number(Math.round(((88 + 91 + 110) / 3) + "e2") + "e-2");
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy 🏆");
// }
// else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy 🏆");
// }
// else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy!");
// }

// Bonus 1 & 2
const scoreDolphins = Number(Math.round(((97 + 112 + 101) / 3) + "e2") + "e-2");
const scoreKoalas = Number(Math.round(((109 + 95 + 106) / 3) + "e2") + "e-2");
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy 🏆");
}
else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas win the trophy 🏆");
}
else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy! 🏆");
}
else {
    console.log("No one wins the trophy 😥")
}

