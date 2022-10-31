"use strict";

//! Чисті ф-ції - це будь-які ф-ції, вихідні дані яких
//! отримані виключно з вхідних даних і не викликають
//! ніяких побічних ефектів у додатку

//! 1. Pure
function multiplacation(n) {
    return n ** 2;
}

console.log(multiplacation(4));
console.log(multiplacation(4));
console.log(multiplacation(-4));

//! 2. Impure бо змінюємо змінну

let count = 0;
function myCount() {
    return count++;
}
// console.log(myCount());
// console.log(myCount());
// console.log(myCount());
// console.log(myCount());
// console.log(myCount());


//! 3. - alert побічна дія, бо зупиняє виконання коду
function showalert() {
    alert("Hello");
}
// showalert();

//! 4. Impure
function randomPseudo(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let i = 5;
while (i) {
    console.log(randomPseudo(5, 20));
    i--;
}


// - побічних ефектів немає
// - приймає аргументи
// - виводить один і той же результат
