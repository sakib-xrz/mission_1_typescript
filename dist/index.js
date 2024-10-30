"use strict";
const course = "level two web development"; // implicit
const myName = "Md Sakibul Islam"; // explicit
const myAge = 26;
const isMarried = true;
const dateFirstBike = undefined;
const gpa = null;
const skills = ["JavaScript", "React", "Next.js", "Tailwind"];
const confidencePercentage = [60, 70, 85, 90];
const isProSkills = [false, false, true, true];
const ageWithHight = [26, "5 feet 6 inch"];
const profile = {
    name: "Md Sakibul Islam",
    age: 26,
    isMarried: true,
    wifeName: "Nusrat Jahan",
    companyName: "Flexpoint",
};
function addNormalFn(num1, num2) {
    return `The sum of ${num1} and ${num2} is: ${num1 + num2}`;
}
const addArrowFn = (num1, num2) => {
    return `The sum of ${num1} and ${num2} is: ${num1 + num2}`;
};
const account = {
    user: "Md Sakibul Islam",
    balance: 0,
    addBalance(depositAmount) {
        return `${this.user} account balance is: ${this.balance + depositAmount}`;
    },
};
account.addBalance(500);
console.log(account);
