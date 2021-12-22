var readline = require("readline-sync");

// TASK 1//

// music = ["a", "b", "c"];

// function displaySongs() {
//   for (let i in music) {
//     console.log(music[i]);
//   }
// }

// displaySongs();

// for (let i = 0; i < 2; i++) {
//   song = readline.question("add a Song: ");
//   music.push(song);
// }

// displaySongs();

// let remove = readline.question("Which song would you like to remove?: ");
// music.splice(remove, remove);

// displaySongs();

// TASK 2//

// let numbers = [];

// for (let i = 0; i < 3; i++) {
//   let number = readline.question("choose a number: ");
//   numbers.push(number);
// }

// function displayNumbers() {
//   for (let i in numbers) {
//     console.log(`${numbers[i]} square rooted is ${sqrtNumbers[i]}`);
//   }
// }

// let sqrtNumbers = numbers.map(Math.sqrt);

// displayNumbers();

// let lettersArray = ["a", "b", "c"];
// let letters = lettersArray.join("");

// console.log(letters);

// TASK 1 //

// let favouriteFilms = [
//   "Star Trek: The Motion Picture",
//   "Star Trek: The Voyage Home",
//   "Star Trek: First Contact",
//   "Star Trek: The Undiscovered Country",
//   "Star Trek: Generations",
// ];

// progLoop = true;

// while (progLoop) {
//   console.log("Here is a list of your current favourite films:\n");

//   let count = 0;
//   for (film in favouriteFilms) {
//     count++;
//     console.log(`${count}. ${favouriteFilms[film]}`);
//   }

//   addFilms = readline
//     .question("\nWould you like to add another film: (Y/N)")
//     .toUpperCase();
//   if (addFilms == "Y") {
//     newFilm = readline.question("Please type your new favourite film: ");
//     favouriteFilms.push(newFilm);
//   } else if (addFilms == "N") {
//     console.log("\nLive Long and Prosper, \nPeace and Long Life!\n");
//     progLoop = false;
//   }
// }

// TASK 2 //

// let run = true;

// while (run) {
//   for (let i = 1; i < 7; i++) {
//     let num = Math.round(Math.random() * 50);
//     console.log(num);
//   }

//   let answer = readline
//     .question("Would you like 6 more random numbers? (Y): ")
//     .toUpperCase();

//   answer === "Y" ? 0 : console.log("Goodbye") + (run = false);
// }

// TASK 3 //

// let seedNum = readline.question("Enter a whole number to count down from: ");

// if (!isNaN(seedNum) && seedNum % 1 == 0) {
//   while (seedNum >= 0) {
//     console.log(seedNum);
//     seedNum--;
//   }
// } else {
//   console.log(
//     "\nAre you over-cooked bacon by any chance? Whole numbers only.\n"
//   );
// }

// Task 4 //

// let films = [
//   "Star Trek: First Contact",
//   "Star Trek: The Voyage Home",
//   "Ghostbusters",
//   "Team America: World Police",
// ];
// let count = 0;
// films.forEach((film) => {
//   count++;
//   if (film == "Ghostbusters") {
//     console.log(
//       `Film ${count}(${film}) is Ghostbusters, bring out the Kettle!\n`
//     );
//   } else {
//     console.log(
//       `Film ${count}(${film}) is NOT Ghostbusters, bring out the sad depressive noises\n`
//     );
//   }
// });

// Task 5 //

// let upperNum = 30;
// let ranNum = Math.round(Math.random() * upperNum);

// if (ranNum % 7 == 0) {
//   console.log(`${ranNum} is divisible by 7`);
// } else {
//   console.log(`${ranNum} is NOT divisible by 7`);
// }

// Task 6 //

// let bobsFollowers = [
//   "Steve",
//   "Nancy",
//   "Dracula",
//   "Dorris",
//   "Charles",
//   "Matt",
//   "Damon",
// ];

// let hannahsFolowers = [
//   "Michael",
//   "Frederick",
//   "Margaret",
//   "Vicky",
//   "Matt",
//   "Damon",
//   "Billybob",
// ];

// bobsFollowers.forEach((bobsFollower) => {
//   hannahsFolowers.forEach((hannahsFollower) => {
//     if (bobsFollower == hannahsFollower) {
//       console.log(`Mutual Friend: ${bobsFollower}`);
//     }
//   });
// });

// Task 7 //

// let start = 0;
// let finish = 10;

// console.log(`Start[${start}] : finish[${finish}]`);
// for (let i = start; i < finish; i++) {
//   console.log(`i[${i}]`);
// }

// console.log("For loops have a defined start and end\n");

// let gameLoop = true;

// let ranI = Math.round(Math.random() * 12);
// let ranJ = Math.round(Math.random() * 12);

// console.log(`${ranI} x ${ranJ} = ?`);
// while (gameLoop) {
//   let input = readline.question("Please enter your answer here: ");

//   if (ranI * ranJ == input) {
//     gameLoop = false;
//   } else {
//     console.log("Incorrect. Please try again.\n");
//   }
// }

// console.log(`Congratulations! ${ranI} x ${ranJ} = ${ranI * ranJ}\n`);

// console.log(
//   "Unlike for loops, while loops can theoretically run indefinitely until a certain condition is met\n"
// );

// let i = 0;

// console.log(`Start Number = ${i}\n`);
// do {
//   i += 1;
//   console.log(`${i} is less than or equal to 10`);
// } while (i >= 0 && i < 10);

// console.log(
//   "A do...while loop will execute the code at least once, before checking the conditions, even if that initial condition is false"
// );
