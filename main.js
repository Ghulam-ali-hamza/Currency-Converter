import inquirer from "inquirer";
const currency = {
    USE: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 200
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USE", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter From Currency",
        type: "list",
        choices: ["USE", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter From Currency",
        type: "number"
    }
]);
let fromamount = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamount;
console.log(convertedamount);
