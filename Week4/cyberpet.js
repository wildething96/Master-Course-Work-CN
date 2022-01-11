var readline = require("readline-sync");
class Pet {
  constructor(fname, lname, type) {
    this.fname = fname;
    this.lname = lname;
    this.type = type;
  }

  energy = 20;
  happiness = 10;
  hunger = 5;
  thurst = 5;

  play() {
    console.log(`${this.fname} is playing!`);
    this.hunger -= 1;
    this.thurst -= 2;
    this.energy -= 2;
    this.happiness += 2;
  }

  feed() {
    console.log(`${this.fname} is eating!`);
    this.hunger += 5;
    this.happiness += 1;
    this.energy += 3;
  }

  drink() {
    console.log(`${this.fname} is drinking!`);
    this.thurst += 2;
  }

  get check() {
    console.log(
      `${this.fname} ${this.lname} has ${this.energy} energy, ${this.happiness} happiness, ${this.hunger} hunger level and ${this.thurst} thurst level`
    );
  }
}

let pet = new Pet(
  readline.question("Fist Name: "),
  readline.question("Last Name: "),
  readline.question("Type of Animal: ")
);

while (true) {
  let action = readline.question(
    "What action would you now like to take (1 - play, 2 - feed, 3 - give drink or 4 - check on wellbeing)\n :"
  );
  action == 1
    ? pet.play()
    : action == 2
    ? pet.feed()
    : action == 3
    ? pet.drink()
    : action == 4
    ? pet.check
    : console.log("Not a vlid choice");

  pet.hunger <= 0 || pet.thurst <= 0
    ? console.log(
        `Ohh no!!!, you didn't take proper care of your pet and sadly ${pet.fname} has ran away to find a better owner`
      )
    : 0;
}
