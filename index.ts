#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter number", type: "number", name: "firstNumber" },
    { message: "Enter number", type: "number", name: "secondNumber" },
       { message: "Choose the operation",
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
