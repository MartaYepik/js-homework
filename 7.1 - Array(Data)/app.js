'use strict'
let tbody = document.querySelector('.tbody');
console.log(tbody);

const getPosts = async () => {
    const obj = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await obj.json();
    console.log(obj);
    if (obj.status == 200) {
        createTable(result);
    }
    
};

getPosts();

function createTable(result) {
    console.log(result[1]);

    for (let i = 0; i < result.length; i++){
        tbody.innerHTML += `
        <tr>
        <td data-label="id">${result[i].id}</td>
        <td data-label="user Id">${result[i].userId}</td>
        <td data-label="body">${result[i].body}</td>
        <td data-label="title">${result[i].title}</td>
        </tr>
        `;
    }


}