const posts =[
    {title: 'Post One', body:'This is post one'},
    {title: 'Post Two', body:'This is post two'}
];
function getPosts(){
    setTimeout(() =>{
        let output ='';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}
getPosts();
//callback function
/** 
function createPost(post, callback){
    setTimeout(() =>{
        posts.push(post);
        callback();
    }, 3000);
}*/

//promise function
function addNew(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);

            let error =false;
            if(!error){
                resolve();
            }else{
                reject('something went wrong');
            }
        },500);

    });
    
}

// Async/ Await
/** 
async function init(){
    await addNew({title:'Post Three', body:'This is post three'});
    getPosts();
}
init();
*/
// Async / Await / Fetch
async function getUsers(){
    const res =fetch('https://jsonplaceholder.typicode.com/users');
    const data =  (await res).json();
    let users ='';
    users +=`<li>${users.resolve}</li>;`
    document.body.innerHTML=users;
    console.log(data);
}
getUsers();
/** 
addNew({title:'Post Three', body:'This is post three'})
.then(getPosts)
.catch(err=>console.log(err));*/
/**

const prom1 = Promise.resolve('hello, world');
const prom2 = 10;
const prom3 = new Promise((resolve, reject)=>
    setTimeout(resolve, 2000, 'Goodbye')
);
const prom4 = fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json());

Promise.all([prom1,prom2,prom3,prom4])
.then(values=>console.log(values));
*/