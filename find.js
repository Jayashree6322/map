const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];

  const result = users.find((user) => user.id == 2);

  console.log(result);
  
  //to find the even number
  const numbers = [5,12,19,27,33];

  const value = numbers.find((num) => num % 2 == 0);

  console.log(value);

  const nums = [1, 3, 5, 7,9,4];

  const output = nums.find((num) => num>8);

  console.log(output);
  
  const numbers1 = [10,20,30,40,50];

  const result1 = numbers1.find((num) => num>=40);

  const result2 = numbers1.filter((num) => num>=40);

  console.log(result1);
  console.log(result2);
  
  
  

