"use strict"
const currentDate = document.querySelector('.current-date');
const date = new Date();
const toShow = date.toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' });
currentDate.innerHTML = toShow;

///////////////////////

const firstDate = document.querySelector("#firstDate");
const lastDate = new Date(); // рік/місяць/день
const result = document.querySelector(".result-1");
const btn = document.querySelector(".btn-1");
let first;
let second = lastDate;
firstDate.addEventListener("input", () => {
    first = new Date(firstDate.value);
});

btn.addEventListener("click", () => {
    dayCounting(first, second);
});

function dayCounting(firstDay, lastDay) {
    if (firstDay && lastDay) {
        let date = Math.abs(lastDay - firstDay);
        result.innerHTML = (Math.floor(date / 60 / 60 / 1000) + 2);
    } else {
        result.innerHTML = "enter date";
    }
    
}

/////////////////////////////////////////

let userBirthdayDay = document.querySelector("#userBirthdayDay");
let userBirthdayMonth = document.querySelector("#userBirthdayMonth");
const btn2 = document.querySelector(".btn-2");
let day;
let month;
let birthday;
let resultBirthday = document.querySelector(".result-2");
userBirthdayDay.addEventListener("input", () => {
    day = userBirthdayDay.value;
});
userBirthdayMonth.addEventListener("input", () => {
    month = userBirthdayMonth.value;
});

let today = new Date();

btn2.addEventListener("click", () => {
    daysLeft(day, month);
});

function daysLeft(day, month) {
    if (day && month) {
        birthday = [day, month];
        let bday = new Date(today.getFullYear(),birthday[1]-1,birthday[0]);
        if( today.getTime() > bday.getTime()) {
        bday.setFullYear(bday.getFullYear()+1);
        }
        let diff = bday.getTime()-today.getTime();
        let days = Math.floor(diff/(1000*60*60*24));
        resultBirthday.innerHTML = days + " days until birthday!";
    } else {
        resultBirthday.innerHTML = "enter date";
    }
    
}
////////////////////////


const currentDateCheck = document.querySelector('.current-date-check');
const conclusion = document.querySelector('.conclusion');
const dateCheck = new Date();
const toShowForUsers = dateCheck.toLocaleString('default', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
currentDateCheck.innerHTML = toShowForUsers;
let dayOfWeek = dateCheck.getDay();
let isWeekend = (dayOfWeek === 6) || (dayOfWeek === 0); 

if (isWeekend) {
    conclusion.innerHTML = "Вихідний";
} else {
    conclusion.innerHTML = "Робочий день";
}