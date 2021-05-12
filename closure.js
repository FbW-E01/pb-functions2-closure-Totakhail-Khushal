
// ### Closure

// 1. In your own words, define closure(1 - 2 sentences).

console.log("Closure is a function where inside function has access to the outside function.");

console.log("==========================================================");

// 2. Study the following code, then answer the questions below.it is giving access to outer functions.

// ```js

function personalDice(name) {
    return function () {
        // generate random number between 1 and 6
        const newRoll = Math.floor(Math.random() * 6);
        console.log(`${name} rolled a ${newRoll} `)
    }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
zoesRoll();


console.log("===============================================================");


//     * a.Where is closure used in this code ? How can you tell ?
console.log("closure is where the return start in line no 16!");
console.log("===============================================================");


// * b.Compare and contrast calling`dansRoll` the first and second time.What is always the same ? What could change ?
console.log("The first and second time just Dan is rolling the Dice, and the numbers are always changing!. We have to change zoesRoll instead of dansRoll in end.");


console.log("===============================================================");

// * c.What is the lexical scope of`newRoll` ? this might help https://stackoverflow.com/questions/1047454
console.log(" Lexical scope of newRoll is 6 ");

console.log("===============================================================");


// 3. Write a function that would allow you to do this using a closure.


var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase(anything) {
    const addSeven = anything;
    return function (anyNumber) {
        // console.log(addSeven + anyNumber);
        return (addSeven + anyNumber)
    }

}