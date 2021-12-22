// 1 //

// let coffeeIsGrinding = false;

// const pressGrindBeans = (drink) => {
//   if (coffeeIsGrinding) {
//     console.log(`Making ${drink} for 20 seconds`);
//     coffeeIsGrinding = false;
//   } else {
//     console.log(`Making ${drink} is about to begin`);
//     coffeeIsGrinding = true;
//   }
// };

// pressGrindBeans("tea");
// pressGrindBeans("smoothie");

// 2 //

// const cashWithdrawal = (amount, accnum) => {
//   console.log(`Withdrawing ${amount} from account ${accnum}`);
// };

// cashWithdrawal(300, 68734332);
// cashWithdrawal(800, 46544654);
// cashWithdrawal(10000000, 1319869);

// TASK 1 //

// const factorial = (n) => {
//   let value;

//   n === 0 || n === 1 ? (value = 1) : (value = n * factorial(n - 1));

//   return value;
// };

// console.log(factorial(33));

// TASK 2 //
// var readline = require("readline-sync");

// let orderCount = 1;
// const getItem = (type) => {
//   return readline.question(`What ${type} would you like to order: `);
// };

// const takeOrder = (topping, base, crust) => {
//   console.log(
//     `Your pizza is ${base} base with a ${crust} crust and ${topping} as a topping, you will be order number ${orderCount}`
//   );
//   orderCount++;
// };

// takeOrder(getItem("topping"), getItem("base"), getItem("crust"));

// TASK 3 //

var readline = require("readline-sync");
let lastUserId = 0;

class Environment {
  constructor() {
    this.clientNumber;
    this.clients = [];
    this.states = [
      [0, 1],
      [0, 1, 2, 3, 4, 5],
    ];
    this.reference = [
      {
        1: () => this.signIn(),
        2: () => person.addUser(),
      },
      {
        1: () => this.checkBalance(),
        2: () => this.sendMoney(),
        3: () => this.withdraw(),
        4: () => this.deposit(),
        5: () => this.change(),
        6: () => (this.state = 0) + this.menu(),
      },
    ];
    this.state = 0;
    this.substate = 0;
    this.menuHeaders = [
      ["Main Menu", "Sign in", "Create Account"],
      [
        "Account Details",
        "View Balance",
        "Transfer Money to Another Account",
        "Withdraw",
        "Deposit",
        "Update Account Details",
        "Log out",
      ],
    ];
  }

  seedData() {
    console.log("running");
    let firstNames = ["John", "Terry", "Marge", "Victor", "Dorris"];
    let lastNames = ["Owens", "Smith", "Davies", "McTavish", "Candle"];
    let balances = [3456, 131, 1000, 342, 2385];
    let usernames = [
      "xXQuickScopezXx",
      "ArrestedElephant123",
      "vapidity",
      "mick_miller97",
      "AsdaFan",
    ];
    let passwords = [
      "password2",
      "9ae06e97d2",
      "maga2020",
      "jklasjdklajhf",
      "password1234567",
    ];

    let num = 5;
    let data = [firstNames, lastNames, balances, usernames, passwords];

    for (let i = 0; i < 3; i++) {
      let id = lastUserId + 1;
      let personData = [];

      for (let j = 0; j < 5; j++) {
        let item = data[j][Math.floor(Math.random() * num)];
        data[j].splice(data[j].indexOf(item), 1);

        personData.push(item);
      }
      let person = new Person(id, ...personData);

      this.clients.push(person);
      num--;
      lastUserId++;
    }

    this.clients.forEach((element) => console.log(element));
  }

  menu() {
    let choice;
    console.clear();

    for (let i = 0; i < this.menuHeaders[this.state].length; i++) {
      i == 0
        ? console.log(this.menuHeaders[this.state][i] + "\n")
        : console.log(i + ". " + this.menuHeaders[this.state][i]);
    }
    choice = checkIsNumber(this.states[this.state].length);
    this.reference[this.state][choice]();
  }

  signIn() {
    let pass;
    let password;
    let matchFound = false;
    console.log(this.clients);
    console.log("\n\nSign In\n\n");

    let username = readline.question("Please enter your username: ");

    for (let i of this.clients) {
      if (i.username === username) {
        console.log("Match Found"), (matchFound = true);
        this.clientNumber = i.id;
        pass = i.password;
        console.log();
      }
    }
    matchFound
      ? (password = readline.question("Please enter your password: "))
      : this.menu();
    password === pass
      ? (environment.state = 1)
      : readline.question("Incorrect Password");

    this.menu();
  }

  checkBalance() {
    console.clear();

    console.log(
      `Your Current Balance is: £${
        this.clients[this.clientNumber - 1]["balance"]
      }`
    );

    readline.question("\n\nPress Enter to return to account menu: ");
    this.menu();
  }

  sendMoney() {
    let recipent = readline.question(
      "\n\nPlease enter the id of the person you would like to send money: "
    );

    let amount = validate();

    this.clients[recipent - 1]["balance"] += amount;
    this.menu();
  }

  withdraw() {
    validate();
    this.menu();
  }

  deposit() {
    validate(true);
    this.menu();
  }

  change() {
    let options = ["First Name", "Last name", "Username", "Password", "Exit"];
    let actualName = ["firstName", "lastName", "username", "password"];
    let choice;
    let change;

    console.log("Choose the number of the detail you would like to update\n\n");

    for (let i in options) {
      console.log(parseInt(i) + 1 + ". " + options[i]);
    }

    choice = checkIsNumber(5);
    choice == 5 ? this.menu() : 0;

    console.clear();

    change = readline.question("What would like to update it to: ");

    this.clients[this.clientNumber - 1][actualName[choice - 1]] = change;

    this.menu();
  }
}

let environment = new Environment();

class Person {
  constructor(id, firstName, lastName, balance, username, password) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
    this.username = username;
    this.password = password;
  }

  addUser() {
    console.clear();

    let id = lastUserId + 1;
    let firstName = readline.question("Please enter your first name: ");
    let lastName = readline.question("Please enter your last name: ");
    console.log("How much would you like to deposit: ");
    let balance = checkIsNumber(1000000, true);
    let username = readline.question("Please enter your username: ");
    let password = readline.question("Please enter your password: ");

    let person = new Person(
      id,
      firstName,
      lastName,
      balance,
      username,
      password
    );

    environment.clients.push(person);
    lastUserId++;
    environment.menu();
  }
}

function validate(deposit = false) {
  while (true) {
    try {
      let successful = false;
      let value = readline.question(
        "Please enter an amount or type exit to go back: "
      );
      let amount;
      value == "exit" ? environment.menu() : (amount = parseInt(value));

      if (!isNaN(amount)) {
        amount >= environment.clients[environment.clientNumber - 1]["balance"]
          ? console.log("Sorry, not enough funds!")
          : amount <= 0
          ? console.log("Amount must be above 0!")
          : deposit === true
          ? (environment.clients[environment.clientNumber - 1]["balance"] +=
              amount) + (successful = true)
          : (environment.clients[environment.clientNumber - 1]["balance"] -=
              amount) + (successful = true);

        if (successful === true) {
          return amount;
        }
      } else {
        console.log("Please enter only numbers!");
      }
    } catch (e) {
      if (e instanceof TypeError) {
        console.log("Please enter only numbers!");
      }
    }
  }
}

function checkIsNumber(range = 10000000, money = false) {
  while (true) {
    let num;
    money === true
      ? parseInt((num = readline.question("\n: ")))
      : (num = readline.question("\n: "));
    if (!isNaN(num) && num <= range && num > 0 && num % 1 === 0) {
      return num;
    } else {
      console.log("Please choose only valid numbers!");
    }
  }
}

let person = new Person();
environment.seedData();

readline.question(
  "\n\nHi and Welcome to the Hippy Bank!\n\nPress Enter to continue\n"
);

environment.menu();
