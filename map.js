const number = [1,2,3,4,5];
const newArr = number.map((num) => num * 2);

console.log(newArr);


const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" }
];

  const answers =users.map((user) => user.name);
  console.log(answers);


  const name = ["alice", "bob", "charlie"];
  const newNames = name.map((name) => name.toUpperCase());
  console.log(newNames);

  const name1 = ["alice", "bob", "charlie"];
  const newName = name1.map((name) => name.toLowerCase());
  console.log(newName);

  const fruity = ["apple", "banana", "cherry"];
  const output1 = fruity.map((fruit, index) => (index+1)+ ":" + fruit);
  console.log(output1);

  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 }
  ];
  const newProducts = products.map(product => ({
    ...products,
    discount:product.price*0.5
  }));
  console.log(newProducts);

  const fruits=["apple", "banana", "cherry","mango"];
  const value = fruits.map((fruit) => ({
    items:fruit,
    price:20
   }));
  console.log(value);

  const  stationaryItems =[
    {name:"pen",units:5,rate:10}, 
    {name:"pencil",units:6,rate:15}, 
    {name:"eraser",units:8,rate:20},
    {name:"sharpener",units:12,rate:25},
    {name:"scale",units:15,rate:30}
  ];
   const buyed = stationaryItems.map((item) => ({
    productName:item.name,
    price:item.units*item.rate 
  }));
    console.log(buyed);

   const numbers =[1,2,3,4,5];   //output: element:3index:0
   const output = numbers.map((num, index, array) => ({
    element:num+2,
    index:index,
    array
   }));
   console.log(output);

   const studentData = [
    {name: "jayashree" , scores:[80,90,87,93,52]},
    {name: "deepa" , scores:[82,92,87,70,62]},
    {name: "vinisha", scores:[97,82,87,77,64]},
    {name: "anika", scores:[94,82,99,67,71]},
    {name: "charu", scores:[94,78,67,52,92]}
   ];
   const getTotal = (scores) => scores[0]+scores[1]+scores[2]+scores[3]+scores[4];
  
   const ranks = studentData.map((value) => ({
       studentName:value.name,
       total : getTotal(value.scores)
   }));

   console.log(ranks);


 //totalMark:value.scores[0]+value.scores[1]+value.scores[2]+value.scores[3]+value.scores[4]

 const people1 = [
  {name:"raju",age:22},
  {name:"somu",age:24},         
];
//raju:22
const id1 = people1.map((element) => ({[element.name]:element.age}));

console.log(id1);

const peoples = [
  {name:"raju",age:22},
  {name:"somu",age:24},         
];
//1:raju:22
const id2 = peoples.map((element, index) => ({[index]:element.name}));

console.log(id2);

const student = [
  { name: "Jatin", marks: 85 },
  { name: "Jeni", marks: 90 },
  { name: "Thanush", marks: 76 }
];
const score = student.map((student) => ({
  ...student,
  grade: student.marks >= 90 ? "A" :student.marks >= 80 ? "B" : "c"}));

console.table(score);

//grade:marks>90 === "A" 

const students = [
  { name: "Jatin", marks: 50 },
  { name: "Jeni", marks: 30 },
  { name: "Thanush", marks: 70 }
];

const scores = students.map((student) => ({
  ...student,
  grade: student.marks >= 35 ? "pass" : "fail"
}));

console.table(scores);

const names = ["John", "", "Emma", "David", ""];

const id = names.map((value) => value? value : "unknown");
  
console.log(id);

const prices = [100,500,433,844,2467,2544,256];

const answer = prices.map((value) => value>1000 ? value*10 : value);

console.table(answer);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 }
];

const customer = people.map((person) => ({
  ...person,
  status: person.age >= 18 ? "major" : "minor"
}));

console.table(customer);

const shops = [
  { name: "Pencil", price: 10, category: "stationery", discount: 20 },
  { name: "Crayon", price: 30, category: "stationery" },
  { name: "Backpack", price: 50, category: "bags", discount: 10 },
  { name: "Water Bottle", price: 15, category: "kitchen" }
];

const getDiscount = (product) => product.discount ? product.price-(product.price*product.discount)/100 : product.price;

const result1 = shops.map((product) => ({
  item:product.name.toUpperCase(),
  finalPrice:getDiscount(product),
  tag:getDiscount(product) < 20 ? "cheap" : "expensive"
}));

console.log(result1);

let nums = [3, 5, 7];

const result = nums.map((num) => num+1);

console.log(result);

const square = nums.map((num) => num*num);
const total = square.reduce((acc,cur) => acc+cur , 0);
console.log(total);

/* square = [9, 25 , 49]
   acc:0, currentvalue:9, total:0+9=9
   acc:9, currentvalue:25, total:9+25=34
   acc:34, currentvalue:49, total:34+49=83*/

const datas = [2,9,3,4,10];
const evenDatas = datas.map((num) => num % 2 ===0 ? num+5 : num-1 );
console.log(evenDatas);

const cart = [
  { name: "Book", price: 200, quantity: 2 },
  { name: "Pen", price: 10, quantity: 5 },
  { name: "Notebook", price: 100, quantity: 1 }
];



const totalValue = cart.map((item) => {
  const total = item.price * item.quantity;
  const finalTotal = total > 100 ? total-total*0.02 : total;
  const taxApplied = finalTotal*0.10;
  const final = finalTotal+taxApplied;

  return {
    ...item,
    beforeDiscountAmount:total,
    afterDiscountAmount:finalTotal,
    tax:taxApplied,
    finalAmount:final

}});

const finalAmount = totalValue.reduce((acc,curr) => acc+curr.tax, 0);


console.table(totalValue);
console.log(finalAmount);



const employees = [
  { name: "Alice", role: "developer", age: 28, salary: 50000 },
  { name: "Bob", role: "designer", age: 35, salary: 40000 },
  { name: "Charlie", role: "developer", age: 32, salary: 60000 },
  { name: "David", role: "developer", age: 45, salary: 70000 },
  { name: "Eve", role: "tester", age: 29, salary: 35000 }
];

const developers = employees.filter((emp) => emp.role === 'developer' && emp.age > 30).reduce((acc,cur) => acc+cur.salary, 0);

//const totalSalary = developers.reduce((acc,cur) => acc+cur.salary, 0);

console.log(developers);
//console.log(totalSalary);

const expenses = [
  { category: "food", amount: 100 },
  { category: "travel", amount: 250 },
  { category: "food", amount: 50 },
  { category: "travel", amount: 100 }
];

const foodExpenses = expenses.filter((item) => item.category === 'food' && 'travel').reduce((acc,curr) => acc+curr.amount, 0);
//const travelExpenses = expenses.filter((item) => item.category === 'travel').reduce((acc,curr) => acc+curr.amount, 0);


console.log(foodExpenses);
//console.log(travelExpenses);












 

