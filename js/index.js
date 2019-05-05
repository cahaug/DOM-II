// Your code goes here

// document.querySelector('.form-submit').addEventListener('click', (e)=>{e.preventDefault();});

document.querySelector('h2').addEventListener('mouseover', (event)=>{console.log('user mouseover title text');});

window.document.addEventListener('keydown', (event)=>{console.log('user is typing');});

window.document.addEventListener('wheel', (event)=>{console.log('user is scrolling');});

document.querySelector('h1').addEventListener('mouseover', (event)=>{console.log('user mouseover header'); event.target.style.fontSize = '4.2rem'});

window.addEventListener('load', (event) => {console.log('page is fully loaded');});




// other code


