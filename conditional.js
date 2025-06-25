const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60];

const newArray = [...arr1, ...arr2];

console.log(newArray);

const total = newArray.reduce((acc,crr) => acc+crr,0);

console.log(total);

const nums = [15, 42, 8, 99, 34];

const maxNum = Math.max(...nums);
const minNum = Math.min(...nums);

console.log(maxNum);
console.log(minNum);

const user = {name:"alice", age:21};
const output = user.name||"anonymous";
const output1 = user.age&&18;
console.log(output);
console.log(output1);







