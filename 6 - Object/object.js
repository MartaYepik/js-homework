"use strict";

let btn = document.querySelector("#obj");

//! Object

//Приклад створення об"єкту
let person = new Object();

let person2 = {};

console.log(person, person2);

//*1 приклад додавання ключ  - значення
person['name'] = 'Alex';
person['age'] = 23;
person['sex'] = 'male';

console.log(person);
console.log(person["name"]);

//*2 приклад додавання ключ  - значення
person2.name = 'Sergiy';
person2.age = 19;
person2.sex = 'male';
console.log(person2);
console.log(person2.name);

//*3 приклад додавання ключ  - значення
let user = {
    name: 'Kyrylo',
    age: 25,
    sex: "male",
};
console.log(user);

//*4 - приклад додавання значення
let carName = "Audi";
let color = "gray";
let model = 80;
let years = 1990;

let car = {};
car.name = carName;
car.color = color;
car.model = model;
car.years = years;

console.log(car);

//? - приклад видалення значення
delete person["age"];
console.log(person);


delete car["years"];
console.log(car);

//* Перевірка наявності властивості всередині обєкта
let userName = {};
userName.name = "Marta";
userName.car = car;
console.log(userName);
userName.age = "18";

if ('age' in userName) {
    console.log("ключ age існує");
} else {
    console.log("ключ age НЕ існує");
}

//? Перегляд властивостей об"єкта

let programmingLanguage = {
    name: 'JavaScript',
    paradigm: '  Multi-paradigm: event-driven, functional, imperative, procedural, object-oriented programming',
    designed: 'Brendan Eich of Netscape initially; others have also contributed to the ECMAScript standard',
    previewRelease: 'ECMAScript 2022',
}

for (let key in programmingLanguage) {

    // console.log(key);
    // console.log(programmingLanguage[key]);

    console.log(key,":", programmingLanguage[key]);
}