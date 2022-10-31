"use strict";

console.log("%c ---FOR ---", themeStyle);
console.log("%c ---example - 1 ---", exampleStyle);

// for(ініціалізація змінної, умова, крок циклу)

for (let i = 1; i <= 3; i++) {
    console.log(i);
}
// console.log(i);

console.log("%c ---example - 2 ---", exampleStyle);
for (let i = 1; i > 5; i++) console.log(i, "for");
// якщо умова false, цикл не буде працювати

console.log("%c ---example - 3 ---", exampleStyle);
let j = 0;
console.log(j, "before loop");
for (; j <= 5; j++){
    console.log(j);
}
console.log(j, "after loop");

console.log("%c ---example - 4 ---", exampleStyle);
let k = 0;
console.log(k, "before loop");
for (; k <= 5;){
    console.log(k);
    k++;
}
console.log(k, "after loop");

console.log("%c ---example - 5 ---", exampleStyle);
let m = 0;
console.log(m, "before loop");
//for може бути без аргументів
for (;;){
    console.log(m);
    m++;
    if (m > 4) break;
}
console.log(m, "after loop");

console.log("%c ---example - 6 ---", exampleStyle);

let y, x;
for (y = 0, x = 10; y !== x; y++, x--) console.log(x, y);

console.log("%c ---example - 7 ---", exampleStyle);

for (let a = 0; a < 10; a++){
    let random = Math.round((Math.random() * 6) + 1);
    if (random === 4) break;
    console.log(random);
}
//*break - припииняє виконання циклу і виконується код нижче
console.log("%c ---example - 8 ---", exampleStyle);
let n = 0;
while (n < 10) {
    let random = Math.round((Math.random() * 6) + 1);
    if (random == 4) continue;
    console.log(random);
    n++;

}
//*continue - пропускає частину циклу, яка не відповідає нашій умові на наступний крок виконання
/*
console.log("%c ---example - 9 ---", exampleStyle);
let myNumber = 10;
for (let i = 1; i <= 5; i++){
    myNumber == 4 ? console.log("number == 4") : continue
    myNumber == 4 ? console.log("number == 4") : break
} */
//* break і continue не працюють із тернарними операторами

