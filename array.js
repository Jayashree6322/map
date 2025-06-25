const students = [
    {name : "jayashree" , age : 23 , city : "kkdi" , height : 154 , weight : 65 , bloodGroup : "A1"},
    {name : "Madhu" , age : 25 , city : "chennai" , height : 160 , weight : 60 , bloodGroup  : "O"},
    {name : "sindhu" , age : 24 , city : "madurai" , height : 150 , weight : 55 , bloodGroup : "B"},
    {name : "Brindha" , age : 20 , city : "Trichy" , height : 162 , weight : 59 , bloodGroup : "A"},
    {name : "Bharathi" , age : 26 , city : "coimbatore" , height : 157 , weight : 64 , bloodGroup : "AB"}
    ];
    console.table(students);

    /*let text = "HELLO WORLD";
    let code = text.charCodeAt(1);
    console.log(code);*/

    let text = "HELLO WORLD";
    let code = text.charAt(1);
    console.log(code);

    let word = String.fromCharCode(72, 69, 76, 76, 79);
    console.log(word);

    let char = String.fromCharCode(55);
    console.log(char);

    function randomString() {
        let result = " ";
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i=0;i<10;i++) {
               const randomChars = Math.floor(Math.random() * chars.length);
        result += chars[randomChars];
    }
    return result;
    }
    console.log(randomString());
      
    
    





