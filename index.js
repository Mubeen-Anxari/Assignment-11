"use strict";
// Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
var str = ["Ali", "Mubeen ", "Talha", "Ammar", "haseeb"];
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
// Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”
var str1 = ["Mubeen"];
let message = `Hello ${str1} would you like to learn some python today?`;
console.log(message);
// Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
//following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var str4 = "Albert Einstein once said";
var str5 = "“A person who never made a mistake never tried anything new.”";
console.log(`${str4}: ${str5}`);
//Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var str1 = ["Mubeen"];
let message1 = `Hello ${str1} would you like to learn some python today?`;
console.log(message1);
// Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
//character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let name1 = "\t   John Doe\n";
let strippedName = name1.trim();
console.log(strippedName);
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
var addition = 4 + 4;
console.log("addition:", addition);
var substraction = 12 - 4;
console.log("Substraction:", substraction);
var multiplication = 4 * 2;
console.log("Substraction:", multiplication);
var division = 16 / 2;
console.log("division:", division);
//Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = 7;
var message2 = `My favorite number is: ${favoriteNumber}`;
console.log(message2);
//Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
//should be the same, but each message should be personalized with the person’s name.
var str = ["Ali", "Mubeen ", "Talha", "Ammar", "haseeb"];
for (let strs of str) {
    console.log(`Hello ${strs}! I hope you are well`);
}
//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
//to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportationList = [
    "Honda motorcycle",
    "Tesla Model 3",
    "Jeep Wrangler",
    "Toyota Prius",
    "BMW i8",
];
transportationList.forEach((item) => {
    console.log(`I would like to own a ${item}.`);
});
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
var Fruit = ["Apple", "Bnana", "Mango"];
if (Fruit.includes("Apple")) {
    console.log("Apple is my favourite");
}
if (Fruit.includes("Bnana")) {
    console.log("Bnana is my favourite");
}
if (Fruit.includes("Mango")) {
    console.log("Mango is my favourite");
}
//Think of at least three kinds of your favorite pizza. Store these
//pizza names in a array, and then use a for loop to print the name of each pizza.
var piz = ["Malae Boti", "Fajita", "Chicken Kbab"];
for (let pizza of piz) {
    console.log(pizza);
}
//: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
//after they log in to a website. Loop through the array, and print a greeting to each user:
const usernames = [
    "admin",
    "user1",
    "user2",
    "john_doe",
    "jane_smith",
];
for (const username of usernames) {
    if (username === "admin") {
        console.log(`Hello ${username}! Welcome back, administrator.`);
    }
    else {
        console.log(`Hello ${username}! Welcome to our website.`);
    }
}
function createCar(manufacturer, modelName, ...options) {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }
    return car;
}
const carInfo = createCar("Toyota", "Camry", "color", "blue", "year", 2023);
console.log(carInfo);
// Define a function to show magicians
function show_magicians(magicians) {
    // console.log("Magicians:");
    // for (const magician of magicians) {
    //   console.log(magician);
    // }
}
// Array of magician's names
const magicianNames = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
    "Criss Angel",
];
// Call the show_magicians function with the array of magician names
show_magicians(magicianNames);
