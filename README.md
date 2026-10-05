# SpendWise - JavaScript Foundation

## Project Description

SpendWise is a personal budgeting application designed to help users keep track of their budget and expenses. This version of the project introduces JavaScript to make the application process budgeting data.

## JavaScript Concepts Implemented

The project demonstrates the following JavaScript concepts:

* Variables
* Data types
* User input
* Number conversion
* Arithmetic calculations
* Functions
* Console output

## How Variables Are Used

Variables are used to store important budgeting information.

For example:

```javascript
let budget = 0;
let expenses = 0;
let remainingBalance = 0;
```

The `budget` variable stores the user's budget, while `expenses` stores the total amount spent. The `remainingBalance` variable stores the result of the budget calculation.

## How User Input Is Collected

The application uses the JavaScript `prompt()` function to collect information from the user.

```javascript
budget = Number(prompt("Enter your monthly budget:"));
expenses = Number(prompt("Enter your total expenses:"));
```

The `Number()` function converts the user's input into numbers so that calculations can be performed.

## How Calculations Are Performed

SpendWise calculates the remaining balance by subtracting expenses from the budget.

```javascript
remainingBalance = budget - expenses;
```

For example, if the budget is KSh 50,000 and expenses are KSh 15,000:

```text
50,000 - 15,000 = 35,000
```

The remaining balance is KSh 35,000.

## How Functions Organize the Code

A reusable function is used to perform the balance calculation:

```javascript
function calculateBalance(budget, expenses) {
    return budget - expenses;
}
```

The function accepts the budget and expenses as parameters and returns the remaining balance. Functions make the code easier to organize, reuse, and maintain.

## Displaying Results

The calculated information is displayed in the browser console using `console.log()`.

The console displays:

* Monthly budget
* Total expenses
* Remaining balance

## Project Files

* `index.html` - Contains the structure of the SpendWise webpage.
* `style.css` - Contains the styling of the webpage.
* `script.js` - Contains the JavaScript logic and calculations.
* `README.md` - Provides information about the project.

## How to Run the Project

1. Open the project folder in Visual Studio Code.
2. Make sure `index.html`, `style.css`, `script.js`, and `README.md` are present.
3. Open `index.html` in a browser.
4. Enter your budget and expenses when prompted.
5. Open the browser Developer Tools.
6. Select the **Console** tab to view the calculated results.
