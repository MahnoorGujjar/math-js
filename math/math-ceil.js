// Math.ceil()
//  ek built-in JavaScript function hai jo kisi number ko next integer tak round karta hai, chahe uska decimal part kuch bhi ho. Ceiling
//  ka matlab hota hai "upar ki taraf round karna," yani agar number me fractional part ho, toh wo hamesha next higher integer tak round ho jata hai.

// Syntax:

// Math.ceil(number)

// number: Wo number jise aap round karna chahte hain.
// Kaise kaam karta hai:

// Agar number me fractional part hai (decimal part), toh Math.ceil() us number ko next greater integer tak round kar dega.
// Agar number already integer hai, toh Math.ceil() usse change nahi karega.


// Example 1: Basic Ceil


// let num1 = 3.1;
// let result1 = Math.ceil(num1);
// console.log(result1);  // Output: 4
// Explanation: 3.1 ko round kiya gaya to 4 kyunki fractional part (0.1) hai, jo next higher integer tak round karne par 4 ho jata hai.


// Example 2: Number with Decimal Part


// let num2 = 7.4;
// let result2 = Math.ceil(num2);
// console.log(result2);  // Output: 8
// Explanation: 7.4 ko round kiya gaya to 8 kyunki decimal part 0.4 hai aur Math.ceil() number ko next integer (8) tak round karta hai.




// ......................................................................................................................................................





// Summary of Key Points:
// Math.ceil(): Har number ko next integer tak round karta hai.
// Agar number fractional (decimal) hai, toh next greater integer milta hai.
// Agar number already integer hai, toh koi change nahi hota.
// Negative numbers ko less negative (ya higher) integer tak round karta hai.
// For example:

// Math.ceil(3.1) ➡ 4
// Math.ceil(7.4) ➡ 8
// Math.ceil(-2.3) ➡ -2
// Math.ceil(5) ➡ 5
// Math.ceil() useful hota hai jab aapko hamesha number ko upar ki taraf round karna ho, chahe decimal part kuch bhi ho.




//.........................................................................................................................................................


// Round Negative Numbers

// Example 1: Basic Ceil



// let num1 = 3.1;
// let result1 = Math.ceil(num1);
// console.log(result1);  // Output: 4
// Explanation: 3.1 ko round kiya gaya to 4 kyunki fractional part (0.1) hai, jo next higher integer tak round karne par 4 ho jata hai.



// Example 2: Number with Decimal Part
// let num2 = 7.4;
// let result2 = Math.ceil(num2);
// console.log(result2);  // Output: 8
// Explanation: 7.4 ko round kiya gaya to 8 kyunki decimal part 0.4 hai aur Math.ceil() number ko next integer (8) tak round karta hai.





// let num6 = -9.8;
// let result6 = Math.ceil(num6);
// console.log(result6);  // Output: -9
// Explanation: -9.8 ko round karke -9 ho gaya. Yahan, next higher integer -9 hai, jo less negative hai.
//......................................................................................................................................................




//  Already an Integer




// let num4 = 5;
// let result4 = Math.ceil(num4);
// console.log(result4);  // Output: 5
// Explanation: Jab number already integer ho, toh Math.ceil() usse change nahi karta. Yahan pe 5 ko round karke 5 hi raha.



//....................................................................................................................................................



// Number Just Below an Integer


// let num5 = 8.01;
// let result5 = Math.ceil(num5);
// console.log(result5);  // Output: 9
// Explanation: 8.01 ko round karke 9 ho gaya kyunki decimal part 0.01 hai, jo next higher integer (9) tak round ho gaya.