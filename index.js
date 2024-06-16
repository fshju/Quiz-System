import inquirer from "inquirer";
import chalk from "chalk";
let personName = await inquirer.prompt({
    type: "input",
    name: "fullname",
    message: "What is your Name?",
});
console.log(`Welcome to the Quiz ${personName.fullname} !!`);
let point = 0;
// Question 1 //
let ans1 = await inquirer.prompt([
    {
        type: "list",
        name: "one",
        message: "Typescript is a superset off?",
        choices: ["C+", "JavaScript", "Phython"],
    },
]);
if (ans1.one === "JavaScript") {
    console.log("Correct Answer");
    point++;
}
else {
    console.log("Wrong Answer!");
}
// Question 2 //
let ans2 = await inquirer.prompt([
    {
        type: "list",
        name: "two",
        message: "What is the capital of Pakistan?",
        choices: ["Karachi", "Islamabad", "lahore"],
    },
]);
if (ans2.two === "Islamabad") {
    console.log("Correct Answer");
    point++;
}
else {
    console.log("Wrong Answer!");
}
// Question 3 //
let ans3 = await inquirer.prompt([
    {
        type: "list",
        name: "three",
        message: "What is the fullform of IDE?",
        choices: [
            "Internal Device Enviroment",
            "Internet Development Enviroment",
            "Integreted Development Enviroment",
        ],
    },
]);
if (ans3.three === "Integreted Development Enviroment") {
    console.log("Correct Answer");
    point++;
}
else {
    console.log("Wrong Answer!");
}
if (point >= 3) {
    console.log(chalk.blue.bold(`Congratulation ${personName.fullname} your Answers is correct.`));
    console.log(chalk.blue.bold(`Your got ${point} points`));
}
else {
    console.log(chalk.red.bold(`Sorry ${personName.fullname} your Answers is incorrect.`));
    console.log(chalk.red.bold(`You points is : ${point}`));
}
