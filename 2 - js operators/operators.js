"use strict";

// !Арифметичні Оператори 
let a = 5;
let b = 10;
console.group("Арифметичні Оператори ");
// Додавання
console.log(a + b, "Додавання двох змінних");

// Віднімання
console.log(b - a, "Відніімання двох змінних");

//Множення
console.log(b * a, "Множення двох змінних");

// Ділення
console.log(b / a, "Ділення двох змінних");

// Залишок від ділення (остача)
console.log(b % a, "Залишок від ділення (b % a), остача");

// Зведення до степеня
console.log(a ** 2, "Зведення до степеня");

//Інкремент
console.log(++a, "Інкремент");

//Декремент
console.log(--b, "Декремент");

// Порядок виконання математичних операцій
let result = 2 + 2 * 2;
console.log(result);

// Групування
let result2 = 2 / 2 - (3 + 4);
console.log(result2, "2 / 2 - (3 + 4)")

//Приведення типу, зміна типу даних з рядка на число
let stringExample = "45";
let number = +stringExample;
console.log(typeof number);

console.groupEnd();