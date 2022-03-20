// Set timeout
// setTimeout(()=> {
//     let nameInput = prompt("Enter your name: ")
//     console.log(nameInput);
// }, 0);

// let a = 1;
// let b = 2;
// console.log(a + b)

// Promise
// let myPromise = new Promise(function(resolve, reject){
// setTimeout(() => {
//     let diLayNuoc = true;
//     // let diLayNuoc = false; => bi reject nen se catch => ko co nuoc
//     if (diLayNuoc){
//         resolve('Nuoc ve roi')
//     } else {
//         reject('Khong co nuoc')
//     }
// }, 3000);
// });

// console.log('quet nha')
// console.log('danh cau long');

// myPromise
// .then(function(data) {
// // console.log(data) // gia tri ham resolve tra ve
// // console.log('Nau com') 
// return data + 'Di nau com'
// }) // data return cua .then truoc = tham so dau vao .then sau
// .then(function(res){
// console.log(res)
// })
// .catch(function (error){
//     console.log(error)
// })

// VD
const getData = () => {
const request = fetch('https://reqres.in/api/users?page=2');
request
.then ((response) => {
    return response.json();
})
.then((data)=> {
   let users = data.data;
   renderUser(users)
   console.log(users)
})
.catch((error) => {
    console.log(error)
    alert(error)
})
}
const renderUser = (users) => {
    let result = '';
    for (let i = 0; i < users.length; i++){
        console.log(users[i])
        const getContainer = document.getElementById('root')
        const getCard = document.createElement('div')
        const avatar = document.createElement('img')
        const name = document.createElement('h1')
        const email = document.createElement('a')
        name.innerHTML = users[i].first_name + ' ' + users[i].last_name
        email.innerHTML = users[i].email
        avatar.src = users[i].avatar
        getCard.className = 'card'
        getCard.appendChild(avatar)
        getCard.appendChild(name)
        getCard.appendChild(email)
        getContainer.appendChild(getCard)
    }
}
getData();


/*{ <div class="card">
        <img src="https://reqres.in/img/faces/7-image.jpg" alt="" id="avatar">
        <div class="fullName">
            <h1 id="name">Michael Lawson</h1>
        </div>
        <div class="email">
            <h3 id="email">michael.lawson@reqres.in</h3>
        </div>
    </div> }*/
