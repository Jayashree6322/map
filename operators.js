//TO FIND ADULT OR MINOR
const age=40;
const person = age>=18 ? "adult" : "minor";
console.log(person);

//TO FIND EVEN OR ODD
const number=10;
const answer = number % 2 ? "even" : "odd";
console.log(answer);

//TO FIND PASS OR FAIL
const mark=40;
const result = mark >= 35 ? "pass" : "fail";
console.log(result);

//TO FIND THE LARGEST NUMBER
const a=10;
const b=20;
const largeNum = a > b ? a : b;
console.log(largeNum);

//TO FIND POSITIVE OR NEGATIVE
const value= -9;
const check = value>0 ? "positive" : "negative";
console.log(check);

// to generate number from 1 to 100
const genNum = Math.floor(Math.random()*10);
console.log(genNum);

const randomNum = (max,min)=> Math.floor(Math.random()*(max-min));
console.log(randomNum(50,30));

let char = String.fromCharCode(55);
console.log(char);


