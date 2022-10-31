"use strict"
//? Планування SetTimeOut SetInterval
//? SetTimeOut викликає ф-цію один раз через певний проміжок часу
//? SetInterval - викликає ф-цію постійно через певний проміжок часу


//? 1
const showDate = (day, month, year) => {
    if (day && month && year) {
        console.log(`Введена дата ${day}.${month}.${year}`);
    }
};

// setTimeout(showDate, 3000, "06", "10", "2022");
// setInterval(showDate, 3000, "06", "10", "2022");


//? 2

let text = document.querySelector("#log");
// console.log(text);
// console.log(typeof text);

function countNumber(number) {
    text.innerHTML = number;
    setTimeout(countNumber, 1000, ++number);

}
// setTimeout(countNumber, 1000, 1);

// i++ обчислює, а потім
// ++i збільшує, а потім обчислює

//? 3 clearTimeout

function countNumberClear(number) {
    text.innerHTML = number;
    let id = setTimeout(countNumberClear, 100, ++number);
    console.log(id, " - setTimeout id")
    if (number === 10) {
        clearTimeout(id);
    }
}

// setTimeout(countNumberClear, 100, 1);


//?4

let result = 0;
const showNumber = (num) => {
    result += num;
    // result = result + num;
    console.log(result); 
    if (result === 10) {
        clearInterval(timeId);
    }
};

let timeId = setInterval(showNumber, 1000, 1);