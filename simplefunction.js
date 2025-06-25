function add(a, b) {
   return a+b;
}
console.log(add(10, 50));

function sub(a, b) {
    return a-b;
 }
 console.log(sub(600, 50));

 function multiply(a, b) {
    return a*b;
 }
 console.log(multiply(50, 9));

 function div(a, b) {
    return a/b;
 }
 console.log(div(40, 8));

  function main() {
    console.log(add(10, 50));
    console.log(sub(600, 50));
    console.log(multiply(50, 9));
    console.log(div(40, 8));
 }
 main();

 //ARROW FUNCTION
 const addition = (a,b) => a+b;
 console.log(addition(10,15));


 const subtraction = (a,b) => {
    return a-b;
    }
 console.log(subtraction(60,25));

 const multiplication = (a,b) => {
    return a*b;
    }
 console.log(multiplication(200,2));

 const division = (a,b) => {
    return a/b;
    }
 console.log(division(12,8));

 const main = () => {
    console.log(addition(10, 50));
    console.log(subtraction(600, 50));
    console.log(multiplication(50, 9));
    console.log(division(40, 8));
 }
 console.log(main());

 //even or odd funcion
 const even = (num) => num % 2;
 console.log(even(10));

 //to find the length of an array
 const lengthOfArray=(args) => args.length;
 console.log(lengthOfArray([0,1,2,3,4,5,6,7,8,9,10]));

 //minutes to seconds convertion
 const seconds=(minutes) => minutes*60;
 console.log(seconds(5));

 //sum of an array
 const array=[0,1,2,3,4,5];
 let sum=0;
 for (i=0;i<array.length;i++) {
     sum += array[i];
 }
 console.log(sum);

 //using arrow function
 const arr=[0,1,2,3,4,5] ;
 const sumOfTheArray = (arr) => {
    let sum=0;
 for (i=0;i<arr.length;i++) {
     sum += arr[i];
 }
 return sum;
}
console.log(sumOfTheArray(arr));

//access object dynamically
const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
const person1 = person.name;
console.log(person1);
console.log(person["city"]);

const arr1=[0,1,2,3,4,5,6,7,8,9,10];
const  arr2=arr1[8];
console.log(arr2);

//To check equality
 const check = (num) => num ===10;                
 console.log(check(10));

 function equal (num) {
   return num === 10
 }
 console.log(check(10)); 



 












 
 


 
 
 