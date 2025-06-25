const numbers = [20,34,8,51,69];

const result = numbers.some((num) => num < 10);

console.log(result); 

const output = numbers.every((num) => num >= 8);

console.log(output);

const products = [
    {name:"productA",category:"electronics",price:100},
    {name:"productB",category:"clothing",price:100},
    {name:"productC",category:"electronics",price:150},
    {name:"productD",category:"clothing",price:200}
];

const user1 = products.some((product) => product.price > 100);

console.log(user1);

const user2 = products.every((product) => product.price >= 100);

console.log(user2);


