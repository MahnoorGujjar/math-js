// Math.random() JavaScript ka ek built-in function hai jo random decimal numbers generate karta hai. 
// Yeh function 0 se le kar 1 ke beech ek random decimal number return karta hai (0 inclusive aur 1 exclusive). 
// Matlab, Math.random() kabhi bhi 0 ya 1 return nahi karega, sirf in dono ke beech ka koi bhi random number dega.

// Example:
// javascript
// Copy code
// let randomNumber = Math.random();
// console.log(randomNumber);
// Explanation:

// Har baar jab aap Math.random() ko call karte hain, 
// yeh ek naye random number generate karta hai jo 0 se le kar 1 ke beech hota hai. For example,
//  agar aap baar baar Math.random() call karte hain, to kuch outputs kuch is tarah ho sakte hain:
// 0.23456789
// 0.87654321
// 0.12345678



//.................................................................................................................................................................



// Example 3: Random Integer between 0 and 100
// Agar aap integer chahte hain (decimal nahi), to aap Math.floor() use kar sakte hain:



// let randomInteger = Math.floor(Math.random() * 100);
// console.log(randomInteger);
// Explanation:

// Is code mein Math.floor() use ho raha hai jo decimal number ko neeche round kar dega, jise aapko ek integer number milega jo 0 aur 99 ke beech hoga.
// Sample Output:


// 57
// Ya phir:


// 21




//.....................................................................................................................................................................

// same code ko 2 trha s kiya 





// let coinToss = Math.random() < 0.5 ?  "head" : "tails";
// document.write(coinToss);




// let coinToss = Math.random();
// if (coinToss < 0.5){
//     document.write("heads")
// }else{
//     document.write("tails")
// }


//...................................................................................................................................................................




let colors = [ "yellow" , "green" , "red" , "black" , "white"]

let randomColor = colors[Math.floor(Math.random() * colors.length) ]

document.write(randomColor)

