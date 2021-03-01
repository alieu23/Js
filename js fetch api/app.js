async function getUsers(){
    
    let url = 'https://jsonplaceholder.typicode.com/users';
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log  
        return data; 
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers(){
    let  users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment  =`<ul class="collection with-header">
        <li class="collection-header"><h4>${user.name}</h4></li>
        <li class="collection-header">${user.username}</li>
        <li class="collection-item"><a href="email:${user.email}">${user.email}</a></li>
      </ul>`;
      
        html +=htmlSegment;
    });
    let container = document.querySelector('.container');
    container.innerHTML=html;
}
let usrs = [];
console.log('usrs array', usrs);

 async function addUsers(){
     
    let users = await getUsers()
    users.forEach(user => {
        usrs.push(user);
        console.log(usrs);
        
    });
}
addUsers();
51860247
 
renderUsers();