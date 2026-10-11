
const appName = "SpendWise";

let budget = 0;
let expenseName = "";
let expenseAmount = 0;

// Collect information from the user
function getBudgetInput() {
    budget = Number(prompt("Enter your total budget in KSh:"));

    expenseName = prompt("Enter your expense name:");

    expenseAmount = Number(
        prompt("Enter your expense amount in KSh:")
    );
}

// Calculate the remaining balance
function calculateRemainingBalance(totalBudget, totalExpense) {
    return totalBudget - totalExpense;
}

// Display the budget report
function displayResults() {
    const remainingBalance = calculateRemainingBalance(
        budget,
        expenseAmount
    );

    console.log("===== " + appName + " Budget Report =====");
    console.log("Total Budget: KSh " + budget);
    console.log("Expense Name: " + expenseName);
    console.log("Expense Amount: KSh " + expenseAmount);
    console.log("Remaining Balance: KSh " + remainingBalance);

    if (remainingBalance < 0) {
        console.log("Warning: You have exceeded your budget.");
    } else {
        console.log("You are within your budget.");
    }
}

// Start the application
getBudgetInput();

if (
    Number.isFinite(budget) &&
    Number.isFinite(expenseAmount) &&
    budget >= 0 &&
    expenseAmount >= 0 &&
    expenseName !== null &&
    expenseName.trim() !== ""
) {
    displayResults();
} else {
    console.log("Invalid input. Please try again.");
}
