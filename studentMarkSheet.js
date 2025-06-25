const students = [
    {name:"jaya",language:90,maths:80,science:33,english:70,social:60},
    {name:"priya",language:95,maths:88,science:61,english:97,social:74},
    {name:"kali",language:92,maths:31,science:68,english:52,social:81},
    {name:"preethi",language:87,maths:84,science:77,english:69,social:99}
];

//const getTotal = ({language,maths,science,english,social}) => language+maths+science+english+social;
//const getGrade = ({language,maths,science,english,social}) => Math.min(language,maths,science,english,social) <35 ? "Fail" : "pass";

const getTotal = (student) => student.language+student.maths+student.science+student.english+student.social;
const getGrade = (student) => Math.min(student.language,student.maths,student.science,student.english,student.social) <35 ? "fail" : "pass" ;
const result = students.map((student) => ({
    ...student,
    total:getTotal(student),
    grade : getGrade(student)
}));

const totalSort = result.sort((a, b) => b.total - a.total);
let rank = 0;
const finalRank = totalSort.map((result) => ({
    ...result,
    rank:result.grade==="pass"? rank+=1 : "-"
}));

console.table(finalRank); 



 
 


