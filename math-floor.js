// In Roman Urdu, "math.floor" can be explained as:

// "Math.floor" ek function hai jo kisi bhi decimal number ko neeche ke nearest integer tak round down kar deta hai. Matlab, 
// agar aapke paas koi number, jaise 4.7 hai, to math.floor usay 4 bana dega. Agar aapke paas -4.7 hai, to yeh -5 bana dega,
//  kyunki yeh number neeche ki taraf round karte hue nearest integer tak jata hai.

// Example:

// math.floor(4.7) → 4
// math.floor(-4.7) → -5
// Yeh function generally programming languages mein use hota hai, jaise Python, JavaScript, etc.





// xample 1: Positive Decimal Number
// Agar aap ke paas decimal number hai, jese 4.7:

// python
// Copy code
// import math
// result = math.floor(4.7)
// print(result)
// Result: 4

// Explanation: math.floor(4.7) is ka matlab hai, 4.7 ko neeche round karna, jo ke 4 ke barabar hai. Matlab, aap ka result 4 ho ga, chaahe aap ka decimal 0.7 ho.

// Example 2: Negative Decimal Number
// Agar aap ke paas negative decimal number hai, jese -4.7:

// python
// Copy code
// import math
// result = math.floor(-4.7)
// print(result)
// Result: -5

// Explanation: math.floor(-4.7) yeh number ko neeche round karta hai, jo ke -5 ban jata hai. Yahan "neeche" ka matlab hai ke aap number ko negative side ki taraf round karenge,
//  jo ke -5 hai (kuch log sochte hain ke -4 ho ga, lekin math.floor negative numbers ko aur neeche round karta hai).



// ............................................................................................................................................................



// let people = 47;
// let seats = 10;

// let rows = Math.floor(people/seats)

// console.log(rows); // output.........4





// let people = -47;
// let seats = 10;

// let rows = Math.floor(people/seats)

// console.log(rows);  // output............ -5





// let people = 47;
// let seats = 10;

// let rows = Math.ceil(people/seats)

// console.log(rows); output.......... 5





// let people = -47;
// let seats = 10;

// let rows = Math.floor(people/seats)

// console.log(rows); // output ......... -5





// let people = 47;
// let seats = 10;

// let rows = Math.round(people/seats)

// console.log(rows); // output ............ 5




// let people = -47;
// let seats = 10;

// let rows = Math.round(people/seats)

// console.log(rows); output ......... -5
