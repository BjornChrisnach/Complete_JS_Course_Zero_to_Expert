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
        console.log(`Dolphins win ???? (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win ???? (${avgKoalas} vs. ${avgDolphins})`);
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