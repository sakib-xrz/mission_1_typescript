const course = "level two web development"; // implicit

const myName: string = "Md Sakibul Islam"; // explicit

const myAge: number = 26;

const isMarried: boolean = true;

const dateFirstBike: undefined = undefined;

const gpa: null = null;

const skills: string[] = ["JavaScript", "React", "Next.js", "Tailwind"];
const confidencePercentage: number[] = [60, 70, 85, 90];
const isProSkills: boolean[] = [false, false, true, true];

const ageWithHight: [number, string] = [26, "5 feet 6 inch"];

const profile: {
  readonly name: string; // assess modifier
  age: number;
  isMarried: boolean;
  wifeName?: string; // optional type
  companyName: string;
} = {
  name: "Md Sakibul Islam",
  age: 26,
  isMarried: true,
  wifeName: "Nusrat Jahan",
  companyName: "Flexpoint",
};

function addNormalFn(num1: number, num2: number): string {
  return `The sum of ${num1} and ${num2} is: ${num1 + num2}`;
}

const addArrowFn = (num1: number, num2: number): string => {
  return `The sum of ${num1} and ${num2} is: ${num1 + num2}`;
};

const account = {
  user: "Md Sakibul Islam",
  balance: 0,
  addBalance(depositAmount: number): string {
    return `${this.user} account balance is: ${this.balance + depositAmount}`;
  },
};

/*
  * Today's learning 

  1. string, number, boolean, array, tuple, object, function [Complete video 1.6]

*/
