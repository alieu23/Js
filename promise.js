
 let data =[];
async function getUsers(){
    const res =fetch('https://jsonplaceholder.typicode.com/users');
    data.push((await res).json());
    //console.log(data)
    let output ='';
    data.forEach((element)=> {
        //console.log('data', element);
        output +=`<li>${element.username}</li>`;
        
    });
    document.body.innerHTML=output;
}
function addUser(user){
    data.push(user);
    getUsers();
}
//addUser({id:12, name:"Alieu samateh",username:"tom"});

getUsers();
console.log(data)