//to filter the users having age>20
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 18 }
  ];

const newUsers = users.filter((user) => user.age>20);

console.log(newUsers);

//to filter odd numbers
const numbers = [10, 15, 20, 25, 30, 35];

const oddNumbers = numbers.filter((num) => num%2 !==0);

console.log(oddNumbers);

//
const names = ["alice", "charlie", "andrew", "harry", "adeline"];

const output = names.filter((name) => name.startsWith("a"));

console.log(output);

const output1 = names.filter((name) => name.endsWith("e"));

console.log(output1);

