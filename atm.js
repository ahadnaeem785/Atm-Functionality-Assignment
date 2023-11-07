#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
figlet.textSync("ATM");
let person = [
    {
        username: "ahadnaeem785",
        userpin: "123456"
    },
    {
        username: "abdullah786",
        userpin: "990099"
    }
];
console.log(figlet.textSync("ATM"));
// let cashcheck = faker.string.numeric(6);
// let transaction = faker.string.numeric(5);
let cashcheck = Math.floor(Math.random() * 1000000);
let transaction = Math.floor(Math.random() * 100000);
while (true) {
    let user = await inquirer.prompt([
        {
            name: "Username",
            type: "string",
            message: chalk.cyanBright("Enter your username :")
        },
        {
            name: "Userpin",
            type: "number",
            message: chalk.cyanBright("Enter your PIN :")
        }
    ]);
    let login = false;
    for (let i = 0; i < person.length; i++) {
        if (person[i].username == user.Username && person[i].userpin == user.Userpin) {
            login = true;
            // break;
        }
    }
    if (login) {
        console.log(chalk.green.bold.italic("Login Successfull!"));
        break;
    }
    else {
        console.log(chalk.red.bold("Login Failed"));
    }
}
while (true) {
    let options = await inquirer.prompt([{
            name: "select",
            type: "list",
            message: "Select Option: ",
            choices: ["Cash Check", "Cash Withdraw", "Transaction Record", "Exit"]
        }]);
    if (options.select == "Cash Check") {
        console.log(chalk.green.bold(`Current Cash : ${cashcheck}`));
    }
    if (options.select == "Cash Withdraw") {
        let cash = await inquirer.prompt([{
                name: "wdc",
                type: "number",
                message: chalk.cyanBright("How much you want to withdraw? ")
            }]);
        if (cash.wdc < 500) {
            console.log(chalk.red("Sorry,minimum withdraw limit is 500!"));
        }
        else if (cash.wdc >= 500 && cash.wdc <= 20000) {
            console.log(chalk.green.bold.italic(`Rs ${cash.wdc} Withdraw Successfuly!`));
        }
        else if (cash.wdc > 20000) {
            console.log(chalk.red.bold("Daily Withdraw Limit Exceed"));
        }
    }
    if (options.select == "Transaction Record") {
        console.log(chalk.green.bold(`Transaction : ${transaction}`));
    }
    if (options.select == "Exit") {
        console.log(chalk.green.bold.italic("Thanks for the use!"));
        break;
    }
}
// console.log(firstName);
// let lastName = faker.person.lastName();
// // console.log(`Employee: ${firstName} ${lastName}`);
// console.log(chalk.green.bold(`Account Balance : ${accountbalance}`));
//     console.log(chalk.green.bold(`Withdraw Fund : ${withdrawfunds}`));
//     console.log(chalk.green.bold(`T
// ransaction Fund : ${transactionfund}`));
// //     console.log(chalk.green.bold(`Transaction History : ${transactionhistory}`));   
