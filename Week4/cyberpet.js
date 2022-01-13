let inquirer = require("inquirer");
let { questions, gameLoop } = require("./questions");

let petDetails;
class Pet {
  constructor(petName, type) {
    this.petName = petName;
    this.type = type;
  }

  energy = 20;
  happiness = 10;
  hunger = 5;
  thurst = 5;

  play() {
    console.log(`${this.petName} is playing!`);
    this.hunger -= 1;
    this.thurst -= 2;
    this.energy -= 2;
    this.happiness += 2;
  }

  feed() {
    console.log(`${this.petName} is eating!`);
    this.hunger += 5;
    this.happiness += 1;
    this.energy += 3;
  }

  drink() {
    console.log(`${this.petName} is drinking!`);
    this.thurst += 2;
  }

  sleep() {
    console.log(`${this.petName} is drinking!`);
    this.thurst -= 2;
    this.hunger -= 2;
    this.energy += 5;
  }

  get check() {
    console.log(
      `${this.petName} has ${this.energy} energy, ${this.happiness} happiness, ${this.hunger} hunger level and ${this.thurst} thurst level`
    );
  }
}

// while (true) {
//   let action = readline.question(
//     "What action would you now like to take (1 - play, 2 - feed, 3 - give drink or 4 - check on wellbeing)\n :"
//   );
//   action == 1
//     ? pet.play()
//     : action == 2
//     ? pet.feed()
//     : action == 3
//     ? pet.drink()
//     : action == 4
//     ? pet.check
//     : console.log("Not a vlid choice");

//   pet.hunger <= 0 || pet.thurst <= 0
//     ? console.log(
//         `Ohh no!!!, you didn't take proper care of your pet and sadly ${pet.fname} has ran away to find a better owner`
//       )
//     : 0;
// }

let pet;

const starter = async () => {

  let answers = await inquirer.prompt(questions);

  choice = answers;
  pet = new Pet(answers.petName, answers.petType);
  
  loop();
};

const loop = async () => {
  let answers = await inquirer.prompt(gameLoop);
    console.log(answers.action)
  answers.action == 1
    ? pet.play()
    : answers.action == 2
    ? pet.feed()
    : answers.action == 3
    ? pet.drink()
    : answers.action == 4
    ? pet.check
    : console.log("Not a valid choice");

    loop();
};

starter();
