let questions = [
  {
    type: "input",
    name: "playerName",
    message: "what is your name?",
  },
  {
    type: "list",
    name: "petType",
    message: "what type of Animal do you want you pet to be?",
    choices: ["Dog", "Cat", "Penguin", "Lion"],
  },
  {
    type: "input",
    name: "petName",
    message: "what is your pets name?",
  },
];

let gameLoop = [
  {
    type: "choice",
    name: "action",
    message: "what action would you like to take?",
    choices: ["1 - play", "2 - eat", "3 - drink", "4 - sleep"],
  },
];

module.exports = {
  questions,
  gameLoop
}