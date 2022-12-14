"use strict";
import { headings, users } from "./data.js";

const headerTable = document.querySelector("#headerTable");
const bodyTable = document.querySelector("#tbody");
let colIndex = -1;

const setHeader = headings
  .map(
    (elem) =>
      `<th 
    scope="col"
    class="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-red-700 select-none cursor-pointer"
    data-type=${elem.dataType}
    >
    ${elem.value}
    </th>`
  )
  .join("");
let userId = 0;

const setTableBody = users
  .map(
    (elem) =>
      `
    <tr class="bg-gray-200 border-b cursor-pointer even:bg-slate-50 hover:bg-cyan-500">
    <td
    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
    >
    ${userId += 1} 
    </td>
    <td
    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
    >
    ${elem.profile.name} 
    </td>
    <td
    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
    >
    ${elem.email} 
    </td>
    <td
    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
    >
    ${elem.profile.dob} 
    </td>
    <td
    class=" text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap  hover:animated-ping">
    <a href="https://www.latlong.net/c/?lat=${elem.profile.location.lat}&long=${elem.profile.location.long}" target="_blank" class="flex">
    ${elem.profile.company}
     <svg xmlns="http://www.w3.org/2000/svg" 
    fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

</a>

    </td>
    <td
    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
    >
    ${new Date(elem.createdAt).toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric", time: "numeric", hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })} 
    </td>
    </tr>`
  )
  .join("");

headerTable.innerHTML = setHeader;
bodyTable.innerHTML = setTableBody;

const sortTable = (colNum, type, id, isSorted) => {
  let elem = document.getElementById(id);
  let tbody = elem.querySelector('tbody');
  let rowsArray = Array.from(tbody.rows);
  let compare;

  switch (type) {
    case 'number':
      compare = (rowA, rowB) => {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case 'string':
      compare = (rowA, rowB) => {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
      };
      break;
    case 'date':
      compare = (rowA, rowB) => {
        return new Date(rowB.cells[colNum].innerHTML) - new Date(rowA.cells[colNum].innerHTML);
      };
      break;
  }
  
  rowsArray.sort(compare);
  if (isSorted) rowsArray.reverse();
  tbody.append(...rowsArray);
};

headerTable.onclick = (e) => {
  if (e.target.tagName !== "TH") return;

  //?????????????????????? ??????????
  const th = e.target;
  const index = th.cellIndex;
  //! ?????????????????????? cellIndex ???????????????? ?????????????? ???????????????? ?? ???????????????? ???????????????? ?????????? ??????????????.
  // ?? ?????????????? 6 ??????????????, ???????????????? ???????????????? ?????? 0 ???? 5
  const type = th.dataset.type; // dataset ?????? HTML ??????????????????

  sortTable(index, type, 'table', colIndex === index);
  // index (cell number) | type (data-type) | 'table' (id) |  colIndex (false/true)
  colIndex = colIndex === index ? -1 : index;
}

