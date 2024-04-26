import inquirer from "inquirer";
let currency: any = {
  USD: 1,
  EUR: 0.97,
  CHF: 0.93,
  GBP: 0.79,
  CAD: 1.28,
};
let userAns = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    message: "Enter your from currency",
    choices: ["USD", "EUR", "CHF", "GBP", "CAD"],
  },
  {
    name: "to",
    type: "list",
    message: "Enter your to currency",
    choices: ["USD", "EUR", "CHF", "GBP", "CAD"],
  },
  {
    name: "Amount",
    type: "number",
    message: "Enter your Amount",
  },
]);
let fromAmount = currency[userAns.from];
let toAmount = currency[userAns.to];
let amount = userAns.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(convertedAmount);
