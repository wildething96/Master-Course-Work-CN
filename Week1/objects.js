let offer = "none";
let time = 1200;

const cafe = {
  name: "Whitesheep",
  seatingCapacity: 100,
  hasSpecialOffers: true,
  drinks: ["Cappuccino", "Latte", "Tea", "Coffee"],

  breakfastOffer: "Free croissant with coffe",
  lunchOffer: "Free drink with surprisingly priced sandwich",
  noOffer: "Sorry no offer",

  openCafe() {
    this.hasSpecialOffers ? console.log("Time for a sepcial") : 0;
  },
  closedCafe() {
    console.log("We are closed, sorry!");
  },
};

// cafe.openCafe();
// cafe.closedCafe();

// time < 1100
//   ? (offer = cafe.breakfastOffer + console.log(cafe.breakfastOffer))
//   : time < 1500
//   ? (offer = cafe.lunchOffer + console.log(cafe.lunchOffer))
//   : 0;

// let day = readline.question("Enter the day for the alarm: ").toLowerCase();

// const alarms = {
//   weekendAlarm: "No alarm needed",
//   weekdayAlarm: "Get up at 0700",
//   weekends: ["saturday", "sunday"],
// };

// alarms.weekends.includes(day)
//   ? console.log(alarms.weekendAlarm)
//   : console.log(alarms.weekdayAlarm);

// TASK 1 //

// var readline = require("readline-sync");

// const person = {
//   name: "ben",
//   age: 25,
//   songs: [
//     "Pink Floyd: Money",
//     "Flettwood Mac: The Chain",
//     "Childish Gambino: Redbone",
//   ],

//   sayHi() {
//     console.log(`Hi my name is ${this.name}\n`);
//   },
// };

// let input = readline.question("What is your name?: ").toLowerCase();
// console.clear();

// person.sayHi();

// input == person.name ? console.log(...person.songs) : console.log("Not user!");

// TASK 2 //

// const pet = {
//   name: "Dennis",
//   typeOfPet: "Dog",
//   age: 13,
//   colour: "brown",

//   eat() {
//     console.log(`${this.name} is eating`);
//   },

//   drink() {
//     console.log(`${this.name} is drinking`);
//   },
// };

// pet.eat();
// pet.drink();

// TASK 3 //

const coffeShop = {
  branch: ["Manchester", "Liverpool", "Chester"],
  drinks: { tea: 1.49, coffee: 2 },
  food: { sanwich: 2, crips: 0.5 },

  drinksOrdered() {
    let total = this.drinks.tea * 2 + this.drinks.coffee;
    console.log(
      `\nThe total cost of your drinks comes to £${total.toFixed(2)}\n`
    );
  },

  foodOrdered() {
    let total = this.food.crips * 3 + this.food.sanwich * 2;
    console.log(`The total cost of your food comes to £${total.toFixed(2)}\n`);
  },
};

coffeShop.drinksOrdered();
coffeShop.foodOrdered();
