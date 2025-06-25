//sum of an array
/*const numbers = [1,2,3,4,5,6,7,8,9,10];

const sum = numbers.reduce((acc,crr) => acc+crr,0);

console.log(sum);

//to find the total
const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 76 },
    { name: "Charlie", marks: 90 },  
    { name: "David", marks: 65 },
    { name: "Emma", marks: 50 }
];
const total = students.reduce((acc,student)=> acc+student.marks,0);

console.table(total);

//to get total marks
const students = [
    { name: "Alice", marks: [85, 90, 78, 88] }, // English, Maths, Science, SS
    { name: "Bob", marks: [80, 85, 82, 79] },
    { name: "Charlie", marks: [78, 76, 80, 72] },
    { name: "David", marks: [92, 88, 85, 90] },
    { name: "Eve", marks: [70, 75, 72, 68] }
];

const ranks = students.map((value) => ({
    studentName:value.name,
    total : value.marks.reduce((acc,student) => acc+student,0)
}));

console.log(ranks);

//to change object into array of object and getting their total
const students = [
    { name: "Alice", marks: { English: 85, Maths: 90, Science: 78, SS: 88 } },
    { name: "Bob", marks: { English: 80, Maths: 85, Science: 82, SS: 79 } },
    { name: "Charlie", marks: { English: 78, Maths: 76, Science: 80, SS: 72 } },
    { name: "David", marks: { English: 92, Maths: 88, Science: 85, SS: 90 } },
    { name: "Eve", marks: { English: 70, Maths: 75, Science: 72, SS: 68 } }
];

const ranks = students.map((value) => ({
    studentName:value.name,
   total : Object.values(value.marks).reduce((acc,student) => acc+student,0)
}));

console.log(ranks);*/

//to get the item and their product as price * quality
const cart = [
    { item: "Laptop", price: 1000, quantity: 2 },
    { item: "Phone", price: 500, quantity: 3 },
    { item: "Tablet", price: 300, quantity: 4 }
];

const billing = cart.map((data) => ({
    product:data.item,
    total:data.price*data.quantity,
    }));
console.log(billing);

const totalCost = billing.reduce((acc,value) => acc+value.total,0);
console.log(totalCost);

const prices = [100, 200, 300, 400, 500];

const discounted = prices.map((price) => price*0.9);

const totalPrice = discounted.reduce((acc, price) => acc+price,0);

console.log(totalPrice);

const words = ["hello", "world", "javascript", "map", "reduce"];

const eachLength = words.map((word) => word.length);

const totalLength = eachLength.reduce((acc,word) => acc+word,0)

console.log(eachLength);

console.log(totalLength);

