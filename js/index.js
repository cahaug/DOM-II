// Your code goes here

// document.querySelector('.form-submit').addEventListener('click', (e)=>{e.preventDefault();});

document.querySelector('h2').addEventListener('mouseover', (event)=>{console.log('user mouseover title text');});

window.document.addEventListener('keydown', (event)=>{console.log('user is typing');});

window.document.addEventListener('wheel', (event)=>{console.log('user is scrolling');});

window.document.addEventListener('copy', (event)=>{console.log('user is copying data from our site')});

document.querySelector('h1').addEventListener('mouseenter', (event)=>{console.log('user mouseover header'); event.target.style.fontSize = '4.2rem'});
document.querySelector('h1').addEventListener('mouseleave', (event)=>{event.target.style.fontSize = '4rem'});


const h2Arr = document.querySelectorAll('h2');
h2Arr[0].addEventListener('mouseenter', (event)=>{console.log('user at welcome'); event.target.style.borderBottom = '2px solid black'});
h2Arr[0].addEventListener('mouseleave', (event)=>{event.target.style.borderBottom = '0'});
h2Arr[1].addEventListener('mouseenter', (event)=>{console.log('user at lets go'); event.target.style.borderBottom = '2px solid black'});
h2Arr[1].addEventListener('mouseleave', (event)=>{event.target.style.borderBottom = '0'});
h2Arr[2].addEventListener('mouseenter', (event)=>{console.log('user at adventure awaits');event.target.style.borderBottom = '2px solid black'});
h2Arr[2].addEventListener('mouseleave', (event)=>{event.target.style.borderBottom = '0'});
h2Arr[3].addEventListener('mouseenter', (event)=>{console.log('user at pick destination');event.target.style.borderBottom = '2px solid black'});
h2Arr[3].addEventListener('mouseleave', (event)=>{event.target.style.borderBottom = '0'});

const navAarr = document.querySelectorAll('a');
navAarr[0].addEventListener('mouseenter', (event)=>{event.target.style.fontSize = '1.8rem'});
navAarr[0].addEventListener('mouseleave', (event)=>{event.target.style.fontSize = '1.6rem'});
navAarr[1].addEventListener('mouseenter', (event)=>{event.target.style.fontSize = '1.8rem'});
navAarr[1].addEventListener('mouseleave', (event)=>{event.target.style.fontSize = '1.6rem'});
navAarr[2].addEventListener('mouseenter', (event)=>{event.target.style.fontSize = '1.8rem'});
navAarr[2].addEventListener('mouseleave', (event)=>{event.target.style.fontSize = '1.6rem'});
navAarr[3].addEventListener('mouseenter', (event)=>{event.target.style.fontSize = '1.8rem'});
navAarr[3].addEventListener('mouseleave', (event)=>{event.target.style.fontSize = '1.6rem'});

window.addEventListener('load', (event) => {console.log('page is fully loaded');});

document.querySelector('.intro').addEventListener('mouseenter', (event)=>{event.target.style.backgroundColor='whitesmoke'});
document.querySelector('.intro').addEventListener('mouseleave', (event)=>{event.target.style.backgroundColor='white'});
document.querySelector('.content-section').addEventListener('mouseenter', (event)=>{event.target.style.backgroundColor='whitesmoke'});
document.querySelector('.content-section').addEventListener('mouseleave', (event)=>{event.target.style.backgroundColor='white'});
document.querySelector('.inverse-content').addEventListener('mouseenter', (event)=>{event.target.style.backgroundColor='whitesmoke'});
document.querySelector('.inverse-content').addEventListener('mouseleave', (event)=>{event.target.style.backgroundColor='white'});
document.querySelector('.content-destination').addEventListener('mouseenter', (event)=>{event.target.style.backgroundColor='whitesmoke'});
document.querySelector('.content-destination').addEventListener('mouseleave', (event)=>{event.target.style.backgroundColor='white'});
document.querySelector('.content-pick').addEventListener('mouseenter', (event)=>{event.target.style.backgroundColor='whitesmoke'});
document.querySelector('.content-pick').addEventListener('mouseleave', (event)=>{event.target.style.backgroundColor='white'});


// other code
