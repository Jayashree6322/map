const words = ["Banana", "Apple", "Mango", "Orange"];

const result = words.sort();

console.log(result);

const numbers = [10, 2, 5, 8, 1];

const ascend = numbers.sort((a,b) => a-b);

console.log(ascend);

const descend = numbers.sort((a,b) => b-a);

console.log(descend);


const users = [
    { name: "Alice", age: 25,occupation:"developer" },
    { name: "Bob", age: 30 ,occupation:"tester"},
    { name: "Charlie", age: 20,occupation:"designer" }
  ];

const output = users.sort((a, b) => a.age-b.age);

console.log(output);

const output1 = users.sort((a,b) => a.occupation-b.occupation);

console.log(output1);

