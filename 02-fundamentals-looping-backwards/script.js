"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 543;

// const if = 23;
*/

///////////// 02-fundamentals-functions
/*
function logger() {
    console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/

////////////// 02-fundamentals-function_declarations
/*
// function declaration
function calcAge1(birthYear) {
    return (2037 - birthYear);
}

const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
    return (2037 - birthYear)
}

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

////////////// 02-fundamentals-arrow-functions
/*
// Arrow function
const calcAge3 = birthYear => (2037 - birthYear);
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

/////////////////02-fundamentals-functions_call_other functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/////////////////02-fundamentals-reviewing-functions
/*
const calcAge = function (birthYear) {
    return (2037 - birthYear)
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    }
    else {
        console.log(`${firstName} has allready retired`);
        return -1;
    }

    return retirement;
}
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

////////////////02-fundamentals-coding-challenge-1
/*
// const calcAverage = (score1, score2, score3) => {
//     return ((score1 + score2 + score3) / 3);
// }

// function isWinner(winningTeam, teamPointsD, teamPointsK) {
//     return `${winningTeam} win (${teamPointsD} vs. ${teamPointsK})`;
// }

// // test data 1
// const avgDolphins1 = calcAverage(44, 23, 71);
// const avgKoalas1 = calcAverage(65, 54, 49);

// // test data 2
// const avgDolphins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);

// checkWinner(avgDolphins1, avgKoalas1);
// checkWinner(avgDolphins2, avgKoalas2);

// function checkWinner(avgDolphins, avgKoalas) {

//     if (avgDolphins > avgKoalas && avgDolphins > (avgKoalas * 2)) {
//         console.log(isWinner("Dolphins", avgDolphins, avgKoalas));
//     }
//     else if (avgDolphins < avgKoalas && avgKoalas > (avgDolphins * 2)) {
//         console.log(isWinner("Koalas", avgKoalas, avgDolphins));
//     }
//     else {
//         console.log("There is no winner!");
//     }
// }

// solution
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    }
    else {
        console.log("No team wins...");
    }
}

checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(575, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

///////////////////02-fundamentals-intro-arrays
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2017 - 1991, "teacher", friends];
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return (2037 - birthYear)
}
const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years));
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

//////////////02-fundamentals-array-operations
/*
const friends = ["Michael", "Steven", "Peter"];

// add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// remove elements
friends.pop() // last
const popped = friends.pop()
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends)

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}
*/

///////////////02-fundamentals-coding-challenge-2
/*
// function calcTip(billValue) {
//     if (billValue >= 50 && billValue <= 300) {
//         return billValue * 0.15;
//     }
//     else {
//         return billValue * 0.20;
//     }
// }

// const bills = [125, 555, 44];
// console.log(bills);

// let tips = new Array(0.15, 0.15, 0.15);
// tips[0] = calcTip(bills[0]);
// tips[1] = calcTip(bills[1]);
// tips[2] = calcTip(bills[2]);
// console.log(tips);

// const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
// console.log(total);

// solution
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
*/

///////////////02-fundamentals-intro-objects
/*
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};
*/

///////////////02-fundamentals-dot-vs-bracket
/*
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jones."last" + nameKey);

const interestedIn = prompt("What do you want \
to know about Jonas? Choose between firstName, \
lastName, age, job and friends");

console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}
else {
    console.log("Wrong request! Choose \
    between firstName, lastName, age, job \
    and friends");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend
// is called Michael"
console.log(`${jonas.firstName} has \
${jonas.friends.length} friends, and his \
best friend is called ${jonas.friends[0]}`);
*/

//////////////02-fundamentals-object_methods
/*
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     //console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a \
${this.calcAge()}-year old ${jonas.job}, \
and he has ${this.hasDriversLicense ? "a" : "no"} \
driver's license.`;
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he
// has a driver's license"
console.log(jonas.getSummary());
*/

////////////////02-fundamentals-coding-challenge-3
/*
// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = Number(Math.round(this.mass / (this.height * this.height) + "e2") + "e-2");
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = Number(Math.round(this.mass / (this.height * this.height) + "e2") + "e-2");
//         return this.bmi;
//     }
// };

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI \
// (${mark.bmi}) is higher than \
// ${john.fullName}'s (${john.bmi})`);
// }
// else {
//     console.log(`${john.fullName}'s BMI \
//     (${john.calcBMI()}) is higher than \
//     ${mark.fullName}'s (${mark.calcBMI()})`);
// }

// solution
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = Number(Math.round(this.mass / (this.height * this.height) + "e2") + "e-2");
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = Number(Math.round(this.mass / (this.height * this.height) + "e2") + "e-2");
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI \
(${mark.bmi}) is higher than \
${john.fullName}'s (${john.bmi})`);
}
else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI \
    (${john.bmi}) is higher than \
    ${mark.fullName}'s (${mark.bmi})`);
}
*/

/////////////////02-fundamentals-object_methods
/*
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/

/////////////////02-fundamentals-looping-arrays
/*
const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];
const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);
// jonas[5] does not exist

for (let i = 0; i < jonas.length; i++) {
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("----- ONLY STRINGS -----");
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log("----- BREAK WITH NUMBER -----");
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === "number") break;

    console.log(jonas[i], typeof jonas[i]);
}
*/

/////////////////////02-fundamentals-looping-backwards

const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];

// 0, 1, 2, ..., 4
// 4, 3, 2, ..., 1

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}