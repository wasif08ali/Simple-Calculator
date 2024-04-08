#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Choose the operation",
        type: "list",
        name: "operation",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Modulus",
            "Exponentiation",
        ],
    },
]);
if (answer.operation === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operation === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operation === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operation === "Modulus") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else if (answer.operation === "Exponentiation") {
    console.log(answer.firstNumber * answer.firstNumber);
}
else {
    console.log("INVALID OPERATION");
}
