
// Math.round() ek built-in JavaScript function hai jo kisi number ko nearest integer (sab se qareebi pura number) tak round (gol karna) karta hai.


// Syntax:
// javascript

// agar .5 s zyadah value hgi to wh round krega agr .4 b hua to round nh krega

// Math.round(number)


// number: Wo number jo aap round karna chahte hain.


// Kaise kaam karta hai:

// Agar decimal part 0.5 ya usse zyada hai, toh number ko upar ki taraf round kar diya jata hai (next integer tak).

// Agar decimal part 0.4 ya usse kam hai, toh number ko neeche ki taraf round kar diya jata hai (pichla integer).

// Example 1: Round karna 1.5 ko


// let result = Math.round(1.5);
// console.log(result);  // Output: 2


// Yahan par, 1.5 ko round karte hue 2 ban gaya kyun ke decimal part 0.5 se zyada tha.




//..................................////////////////////////////////////////////..........................................................................

// Summary:
// Math.round() function kisi bhi number ko uske nearest integer tak round kar deta hai, chahe wo positive ho ya negative.
//  Agar decimal part 0.5 ya usse zyada ho, toh number ko upar round kiya jata hai,
//   aur agar decimal part 0.4 ya usse kam ho, toh neeche round kiya jata hai.



//1 

// console.log(Math.round(4.7));

// Output: ............ 5


// 2

// let num2 = 6.85;
// let rounded2 = Math.round(num2);
// console.log(rounded2);  // Output: 7
// Explanation: 6.85 ko round kiya gaya to 7 kyunki decimal part 0.85 hai, jo 0.5 se zyada hai.


//3

// let num5 = 10;
// let rounded5 = Math.round(num5);
// console.log(rounded5);  // Output: 10
// Explanation: Jab number already pura integer ho, toh Math.round() usse change nahi karta. Is case mein 10 ko round karke 10 hi rahega.


//4 

// let num7 = 1234567.891234;
// let rounded7 = Math.round(num7);
// console.log(rounded7);  // Output: 1234568
// Explanation: 1234567.891234 ko round kiya gaya to 1234568, kyunki decimal part 0.891234 hai, jo 0.5 se zyada hai.


//5 

// let num8 = 0.0;
// let rounded8 = Math.round(num8);
// console.log(rounded8);  // Output: 0
// Explanation: Jab decimal part 0.0 ho, toh number ko round karke wahi number (0) milta hai.
//........................................................................


// 1 

// console.log(Math.round(4.4));

// Output: ............ 4



//2 

// let result = Math.round(1.4);
// console.log(result);  // Output: 1
// Yahan par, 1.4 ko round karte hue 1 ban gaya kyun ke decimal part 0.4 se kam tha.


//3 

// let num6 = 4.4999;
// let rounded6 = Math.round(num6);
// console.log(rounded6);  // Output: 4
// Explanation: 4.4999 ko round kiya gaya to 4, kyunki decimal part 0.4999 hai, jo 0.5 se kam hai




// ..............................................................................................................................................


// Round Negative Numbers

// 3
// -value 

// let num3 = -2.3;
// let rounded3 = Math.round(num3);
// console.log(rounded3); // Output: -2
// Explanation: -2.3 ko round kiya gaya to -2 kyunki decimal part 0.3 hai, jo 0.5 se kam hai.


// 4

// let num4 = -5.7;
// let rounded4 = Math.round(num4);
// console.log(rounded4);  // Output: -6
// Explanation: -5.7 ko round kiya gaya to -6 kyunki decimal part 0.7 hai, jo 0.5 se zyada hai.



// 5

// let num9 = -3.1;
// let rounded9 = Math.round(num9);
// console.log(rounded9);  // Output: -3
// Explanation: -3.1 ko round kiya gaya to -3 kyunki decimal part 0.1 hai, jo 0.5 se kam hai.



// ........................................................................................................................................




// ROUNDING TO CALCULATE DISCOUNT 


// let price = 49.99;
// let discount = 15;

// let amount = (price * discount) / 100

// let rounded1 = Math.round(amount);
// console.log("rounder :" , rounded1 );  // output rounder : 7