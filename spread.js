const person1 = {name:"alice",age:23,gender:"female"};
const person2 = {name:"richard",age:37,gender:"male"};
const person3 = {name:"william",age:18,gender:"male"};

const addedInformation = {occupation:"engineer",city:"chennai"};

const result = { ...person1,...person2,...person3,...addedInformation,state:"tamilnadu"};

console.log(result);

const array1 = [1,2,3,4,5];
const array2 = [6,7,8,9,10];

const array = [...array1,...array2];

console.log(array);
