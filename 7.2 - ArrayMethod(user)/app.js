'use strict'
const RANDOM_USER_URL = ['https://randomuser.me/api/portraits/men/'];
let id = 1;
let userInfo = document.querySelector('.cards');
const getUsers = async () => {
const objUsers = await fetch('https://jsonplaceholder.typicode.com/users');
const result = await objUsers.json();
console.log(objUsers);
    if (objUsers.status == 200) {
        userInfo.innerHTML = result.map((user) =>
        `
        <div class="card">
            <div class="card-header">
                <div class="card-img">
                    <img style="width:120px" src='${RANDOM_USER_URL}${id++}.jpg' alt="" />
                </div>
            </div>
            <div style="color:black" class="user-info">
                <div class="data"><span>name: </span> ${user.name}</div>
                <div class="data"><span>username: </span> ${user.username}</div>
                <div class="data"><span>email: </span> ${user.email}</div>
                <div class="data"><span>address: </span> <span class="more-info">street: </span>${user.address.street}<br>
                <span class="more-info" style="padding-left:66px"> city: </span> ${user.address.city}<br>
                <span class="more-info" style="padding-left:66px"> suite: </span> ${user.address.suite}<br>
                </div>
                <div class="data"><span>phone: </span> ${user.phone}</div>
                <div class="data"><span>website: </span> https://${user.website}</div>
                <div class="data"><span>company: </span> ${user.company.name}</div>
            </div>
        </div>
        `
        ).join("");
        }
    };
getUsers();

   


