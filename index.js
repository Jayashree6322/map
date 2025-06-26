//stringify method
const names = ["Alice" , "Henry" , "Charlie" , "Victoria"];
const person = {
    "name" : "Alice" ,
    "age" : 24 ,
    "city" : "London" ,
    "hobbies" : ["Swimming" , "Dancing" , "Cooking"]
};
const peoples = [{
    "name" : "Alice" ,
    "age" : 24 ,
    "city" : "London"
},
{
    "name" : "Henry" ,
    "age" : 28 ,
    "city" : "Newyork"
},
{
    "name" : "Charlie" ,
    "age" : 22 ,
    "city" : "Europe"
},
{
    "name" : "Victoria" ,
    "age" : 31 ,
    "city" : "Veitnam"
}];

const jsonString = JSON.stringify(peoples);


console.log(jsonString);

//parse method
const jsonNames = '["Alice","Henry","Charlie","Victoria"]';
const jsonPerson = '{"name":"Alice","age":24,"city":"London","hobbies":["Swimming","Dancing","Cooking"]}';
const jsonPeoples = '[{"name":"Alice","age":24,"city":"London"},{"name":"Henry","age":28,"city":"Newyork"},{"name":"Charlie","age":22,"city":"Europe"},{"name":"Victoria","age":31,"city":"Veitnam"}]';

const parsedData = JSON.parse(jsonPeoples);

console.log((parsedData));


