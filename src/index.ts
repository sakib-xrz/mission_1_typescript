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
  * Today's learning (30-10-24)

  * string, number, boolean, array, tuple, object, function [Complete video 1.6]

*/

const friendList: string[] = ["Nusrat", "Ibrahim", "Taz", "Mohsin"];
const colleagueList: string[] = ["Muntasir", "Sanoth", "Sazzad", "Imran"];

const friendAndColleagueList: string[] = [...friendList, ...colleagueList]; // spread operator

const person1: {
  husbandName: string;
  husbandAge: number;
} = {
  husbandName: "Sakibul Islam",
  husbandAge: 26,
};

const person2: {
  wifeName: string;
  wifeAge: number;
} = {
  wifeName: "Nusrat Jahan",
  wifeAge: 24,
};

// implicitly taken the type
const couple = {
  ...person1,
  ...person2,
};

const sayGoodMorning = (...colleagues: string[]): void => {
  // rest parameters
  console.log(`Good Morning ${colleagues.join(", ")}`);
};
sayGoodMorning("Ashik vai", "Ashraf vai", "Sojib vai", "Tarique vai");

// this is called type alias
type Product = {
  title: string;
  desc?: string;
  price: number;
  isStock: boolean;
};

const product1: Product = {
  title: "iPhone 11",
  desc: "This is a description of iPhone 11, This is the best phone in the world.",
  price: 50000,
  isStock: true,
};

const product2: Product = {
  title: "iPhone 12",
  price: 60000,
  isStock: true,
};

type Add = (num1: number, num2: number) => number;

const sumArrowFn: Add = (num1, num2) => {
  return num1 + num2;
};

type FrontendDeveloper = {
  designation1:
    | "Junior Frontend Developer"
    | "Mid Frontend Developer"
    | "Senior Frontend Developer";
  skills: string[];
  knowUiUx: boolean;
};

type BackendDeveloper = {
  designation2:
    | "Junior Backend Developer"
    | "Mid Backend Developer"
    | "Senior Backend Developer";
  skills: string[];
  knowSQL: boolean;
};

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const developer1: FrontendDeveloper = {
  designation1: "Junior Frontend Developer",
  skills: ["JavaScript", "React", "Next.js"],
  knowUiUx: false,
};

const developer2: BackendDeveloper = {
  designation2: "Junior Backend Developer",
  skills: ["Express.js", "MongoDB", "Mongoose"],
  knowSQL: false,
};

const developer3: FullstackDeveloper = {
  designation1: "Mid Frontend Developer",
  designation2: "Junior Backend Developer",
  skills: [
    "JavaScript",
    "React",
    "Next.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
  ],
  knowUiUx: true,
  knowSQL: false,
};

/*
  * Today's learning (31-10-24)

  * spread operator, rest parameter, destructuring array and object, type alias, un0ion and intersection types [Complete video 1.10]

*/
