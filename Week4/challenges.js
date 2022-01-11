/* Challenge 1 */

let welcome = () => {
  console.log("Hello Code Nation");
};

let multiply = (func) => {
  for (let i = 0; i < 5; i++) {
    func();
  }
};

multiply(welcome);

/* Challenge 2 */

// let simpleFunction = (num1, num2) => {
//     return num1 + num2
// }

// let higherFunction = (func, num2, num3) => {
//     return num1 * 5 + num2 + num3
// }

// let answer = higherFunction(simpleFunction(2, 3), 3, 1)

// console.log(answer)

/* Challenge 3 */

// let array1 = [1,2,3,4,5]

// const map1 = array1.map(x => x * 5)

// console.log(map1)

/* Challenge 4 */

// const times = (a,b) => {
//     return a*b;
// }

// const add = (a,b) => {
//     return a+b;
// }

// const divide = (a,b) => {
//     return a/b;
// }

// const subtract = (a,b) => {
//     return a-b;
// }

// const doMath = (num1) => {
//     return (num2, fn) => {
//         return fn(num1, num2)
//     }
// }

// let getFucntion  = doMath(20)

// console.log(getFucntion(4, divide))
