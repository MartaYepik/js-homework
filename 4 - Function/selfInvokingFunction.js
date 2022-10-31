"use strict";
//? Self Invoking Function

// ! 1. Синтаксис

(function () {
    console.log("Self Invoking Function");
})();


// ! 2. Синтаксис

(function (w, d) {
    //body
}(window, document));

//! example

const module = (
    function () {
        return "first"
    }
)();
console.log(module);