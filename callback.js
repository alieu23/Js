const posts = [
    {title:'title one', body:'body one'},
    {title: 'title two', body:'body two'}
];

function getPost(){
    let output = '';
    //const myposts =posts.map(post=>post);
    //console.log('posts', myposts);
    posts.forEach((myposts)=>{
    output += `<li>${myposts.title +`  `+ myposts.body}</li>`;
    console.log('post', myposts)
    });
    document.body.innerHTML=output;
}
function addPost(post){
    posts.push(post);
    getPost();
}
addPost({title:'title three', body:'body three'});
addPost({title:'title four', body:'body four'});
//getPost()