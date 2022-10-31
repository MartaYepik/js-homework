"use strict";

console.log("%c ---WHILE ---", themeStyle);
console.log("%c ---example - 1 ---", exampleStyle);
/*
let i = 1;
while (i <= 4) {
    console.log(i);
    document.write(i, " next ")
    i++;
}
*/
console.log("%c ---example - 2 ---", exampleStyle);

// *let a = 1e6;
// *let b = 1000000;
// *let c = 1_000_000;

/*
let b = 0;
console.log(Boolean(b)); //явне перетворення типів
*/


/*
let depositAccount = +prompt("Enter how many money you are able to give us");

if (depositAccount && depositAccount < 1e6 && depositAccount > 0) {

let years = 0;
while (depositAccount < 1e6) {
    years++;
    depositAccount += depositAccount * 0.1; // 10% 
    
}
console.log(years, "needed years");
} else if (depositAccount >= 1e6) {
    console.log("you are millioner");
} else {
    console.log("not a number");
}
*/

console.log("%c ---example - 3 ---", exampleStyle);
let i = 1;
while (i <= 4) {
    console.log(i, "i in loop");
    i++;
}
console.log(i, "i out loop");

console.log("%c ---example - 4 ---", exampleStyle);
while (false) {
    console.log("false - false - false - false");
}


console.log("%c ---DO WHILE ---", themeStyle);
console.log("%c ---example - 1 ---", exampleStyle);

let count = 1;
do {
    console.log(count);
    count++;
} while (count < 1);


console.log("%c ---example - 2 ---", exampleStyle);

let text;
do {
    text = prompt("YES or NO")
} while (text !== "yes" && text !== "no");