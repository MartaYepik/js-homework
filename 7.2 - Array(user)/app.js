'use strict'
const RANDOM_USER_URL = ('https://randomuser.me/api/portraits/men/');

    let userInfo = document.querySelector('.cards');
    console.log(userInfo);
    const getUsers = async () => {
        const objUsers = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await objUsers.json();
        console.log(objUsers);
        if (objUsers.status == 200) {
            createUser(result);
        }
    };

    getUsers();

    function createUser(result) {
        console.log(result[1]);
        for (let i = 0, id = 0; i < result.length; id++, i++) {
        userInfo.innerHTML += `
        <div class="card">
            <div class="card-header">
                <div class="card-img">
                    <img style="width:120px" src='${RANDOM_USER_URL}${id}.jpg' alt="" />
                </div>
            </div>
        <div style="color:black" class="user-info">
            <div class="data"><span>name: </span> ${result[i].name}</div>
            <div class="data"><span>username: </span> ${result[i].username}</div>
            <div class="data"><span>email: </span> ${result[i].email}</div>
            <div class="data"><span>address: </span> <span class="more-info">street: </span>${result[i].address.street}<br>
            <span class="more-info" style="padding-left:66px"> city: </span> ${result[i].address.city}<br>
            <span class="more-info" style="padding-left:66px"> suite: </span> ${result[i].address.suite}<br>
            </div>
            <div class="data"><span>phone: </span> ${result[i].phone}</div>
            <div class="data"><span>website: </span> ${result[i].website}</div>
            <div class="data"><span>company: </span> ${result[i].company.name}</div>
        </div>
        </div>
        `;
        }
    }


