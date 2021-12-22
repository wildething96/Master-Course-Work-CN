var readline = require("readline-sync");

// TASK 1 //

// let age = readline.question("What is your age: ");
// let favouriteColour = readline.question("What is your favourite colour: ");

// console.clear();

// console.log(
//   `\n\nSo your age is ${age} and your favorite colour is ${favouriteColour}\n\n`
// );

// console.clear;
// age = readline.question("Update your age: ");
// favouriteColour = readline.question("Update your favourite colour: ");

// console.log(
//   `\n\nSo your age is now ${age} and your favorite colour is now ${favouriteColour}\n\n`
// );

// TASK 2 //

// let breakfast = readline.question("What did you have for breakfast?: ");
// let lunch = readline.question("What did you have for lunch?: ");
// let dinner = readline.question("What did you have for dinner?: ");

// console.clear();

// console.log(
//   `\n\nSo you had ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner\n\n`
// );

// breakfast = readline.question("What will you have for breakfast tomorrow?: ");
// lunch = readline.question("What will you have for dinner tomorrow?: ");
// dinner = readline.question("What will you have for lunch tomorrow?: ");

// console.log(
//   `\n\nSo you're going to have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner tomorrow\n\n`
// );

// TASK 3 //

// let oneDay = 24 * 60 * 60 * 1000;
// let now = new Date();
// let day = readline.question("What day were you born: ");
// let month = readline.question("What month were you born: ");
// let year = readline.question("What year were you born: ");

// const bday = new Date(year, month - 1, day);

// const nextBday = new Date(now.getFullYear() + 1, month - 1, day);

// const diffDays = Math.round(Math.ceil((nextBday - now) / oneDay));
// console.log(`${diffDays} days till next birthday`);

// TASK 4 //

// let symbols = [" ", "x", "o"];
// let structure = ["   |   |   ", , "------------"];

// function random() {
//   return symbols[Math.round(Math.random() * 2)];
// }

// for (i = 0; i < 11; i++) {
//   structure[1] = ` ${random()} | ${random()} | ${random()} `;
//   i % 4 === 3
//     ? console.log(structure[2])
//     : i % 2 === 0
//     ? console.log(structure[0])
//     : console.log(structure[1]);
// }

// TASK 1 //

// let age2 = readline.question("Please enter your age: ");
// let location = readline.question("Please enter your location: ").toUpperCase();

// age2 >= 18 && location === "UK"
//   ? console.log("Yes I can serve you")
//   : location === "UK"
//   ? console.log("Sorry you're too young for me to serve you")
//   : console.log("You need a valid british passport to be served here, sorry");

// TASK 2 //

// let topping = readline
//   .question("Please enter a topping of your choice: ")
//   .toLowerCase();

// switch (true) {
//   case topping == "sausage":
//   case topping == "chicken":
//     console.log("\n\nOh yes, my favorite topping");
//     break;
//   case topping == "pinneappple":
//     console.log("\n\nNahh, just chuck it away!");
//     break;
//   default:
//     console.log(`\n\nI can make do with ${topping} I guess`);
// }

// TASK 3 //

// let password;
// let end = true;

// while (end) {
//   password = readline.question("Please enter a password: ");
//   password.length < 9
//     ? console.log("Sorry too short try again")
//     : console.log("Password saved successfully!") + (end = false);
// }

// TASK 4 //

// num = parseInt(readline.question("Please enter a number: "));

// num % 3 === 0 || num % 5 === 0
//   ? console.log("This number is divisible by 3 or 5")
//   : console.log("Not divisible");

// TASK 5 //

// num1 = parseInt(readline.question("Please enter a number: "));

// num1 % 3 === 0 && num1 % 5 === 0
//   ? console.log("FizzBuzz")
//   : num1 % 3 === 0
//   ? console.log("Fizz")
//   : num1 % 5 === 0
//   ? console.log("Buzz")
//   : console.log(num1);

// TASK 6 //

// function reverse(number) {
//   return number.split("").reverse().join("");
// }

// num2 = readline.question("Please enter a number: ");
// num3 = reverse(num2);

// num2 == num3 ? console.log("It's a Palindrome") : console.log("Not Palindrome");

// TASK 7 //

// let time = parseInt(readline.question("Please enter a number: "));

// switch (true) {
//   case time < 9:
//   case time >= 22 && time <= 24:
//   case time >= 18 && time < 20:
//     console.log("At Home");
//     break;
//   case time >= 9 && time < 12:
//   case time >= 13 && time < 18:
//     console.log("At Work");
//     break;
//   case time >= 20 && time < 22:
//     console.log("Out for food");
//     break;
//   case time == 12:
//     console.log("On my break");
//     break;
//   default:
//     console.log("not a valid times, please choose a time between 0 and 24");
//     break;
// }

// TASK 8 //

// let text =
//   "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

// function reverse(text) {
//   return text.split("").reverse().join("");
// }
// reversedText = reverse(text);

// const vowels = /[aeiou]/;
// console.log(`The last vowel is ${reversedText[reversedText.search(vowels)]}`);

// TASK 9 //
// let word2 = readline.question("Please enter a word: ");

// word2[0] === word2.slice(-1) ? console.log(true) : console.log(false);

// TASK 10 //

// let num4 = parseInt(readline.question("Please enter number 1: "));
// let num5 = parseInt(readline.question("Please enter a number 2: "));

// let sum = num4 + num5;

// sum % 2 == 0 ? console.log("Even") : console.log("Odd, like you");
