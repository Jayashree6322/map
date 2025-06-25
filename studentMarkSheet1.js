const students = [
    {name:"alice",language:90,maths:80,science:73,english:70,social:60},
    {name:"lily",language:95,maths:88,science:61,english:97,social:74},
    {name:"tom",language:92,maths:31,science:68,english:52,social:81},
    {name:"andrew",language:70,maths:90,science:70,english:73,social:70},
    {name:"merlin",language:87,maths:99,science:81,english:94,social:72},
    {name:"sherley",language:97,maths:98,science:72,english:82,social:87},
    {name:"william",language:80,maths:87,science:72,english:61,social:95},
    {name:"mark",language:36,maths:38,science:39,english:40,social:41},
    {name:"luna",language:39,maths:44,science:40,english:49,social:36}
];

const getTotal = (student) => student.language+student.maths+student.science+student.english+student.social;
const getGrade = (student) => Math.min(student.language,student.maths,student.science,student.english,student.social) <35 ? "fail" : "pass" ;

const result = students.map((student) => ({
    ...student,
    total:getTotal(student),
    grade:getGrade(student)
}));

const totalSort = result.sort((a,b) => b.total - a.total);
//let rank = 0;

/*const finalRank = totalSort.map((result) => ({
    ...result,
    rank:result.grade === "pass" ? rank+=1 : "-"
}));*/

let rank = 0;
let prevTotal = -1;

const finalRank = totalSort.map((student, index) => ({
  ...student,
  rank: student.total === prevTotal ? rank : (rank = index + 1)
}));

let lastRank = 1;
const adjustedRanks = finalRank.map((student, index) => ({
    ...student,
    rank: finalRank[index].total !== finalRank[index - 1]?.total ? lastRank = student.rank : lastRank
}));

console.table(adjustedRanks);
