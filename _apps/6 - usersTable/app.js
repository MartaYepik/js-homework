"use strict";
import { headings, users } from "./data.js";
console.log(headings, users);

const title = document.querySelector('#title');

title.innerHTML = headings.map((elem) => 
    `<th 
    scope="col"
    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
    >
    ${elem.value}
    </th>`
).join('');

const data = document.querySelector('#data');
data.innerHTML = users.map((elem) =>
    `
    <tr class="bg-gray-100 border-b">
    <td
    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
    >
    ${elem.userId} 
    </td>
    <td
    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
    >
    ${elem.firstName} 
    </td>
    <td
    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
    >
    ${elem.lastName} 
    </td>
    <td
    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
    >
    ${elem.emailAddress} 
    </td>
    <td
    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
    >
    ${elem.gender} 
    </td>
    <td
    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
    >
    ${elem.phoneNumber} 
    </td>
    </tr>`
).join('');
