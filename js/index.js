// Your code goes here

// document.querySelector('.form-submit').addEventListener('click', (e)=>{e.preventDefault();});

document.querySelector('h2').addEventListener('mouseover', (event)=>{console.log('user mouseover title text');});

window.document.addEventListener('keydown', (event)=>{console.log('user is typing');});
window.document.addEventListener('keyup', (event)=>{console.log('user is typing');});


window.document.addEventListener('wheel', (event)=>{console.log('user is scrolling');});

window.document.addEventListener('copy', (event)=>{console.log('user is copying data from our site')});

document.querySelector('header').addEventListener('resize', (event)=>{console.log('user resized the window')});

window.addEventListener('load', (event) => {console.log('page is fully loaded');});

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

const btnArr = document.querySelectorAll('.btn');
btnArr[0].addEventListener('dblclick', (event)=>{console.log('user likes fun in the sun');});
btnArr[1].addEventListener('dblclick', (event)=>{console.log('user likes mountain excursion')});
btnArr[2].addEventListener('dblclick', (event)=>{console.log('user likes island getaway')});
btnArr[0].addEventListener('click', (event)=>{event.stopPropagation(); console.log('user would like to sign up for fun in the sun'); alert(`Congratulations, You're in!`);});
btnArr[1].addEventListener('click', (event)=>{event.stopPropagation(); console.log('user would like to sign up for mountain excursion'); alert(`Congratulations, You're in!`);});
btnArr[2].addEventListener('click', (event)=>{event.stopPropagation(); console.log('user would like to sign up for island getaway'); alert(`Congratulations, You're in!`);});

const navLinkArr = document.querySelectorAll('.nav-link');
navLinkArr[0].addEventListener('click', (event)=>{console.log('user clicked nav-home'); event.preventDefault();});
navLinkArr[1].addEventListener('click', (event)=>{console.log('user clicked nav-about'); event.preventDefault();});
navLinkArr[2].addEventListener('click', (event)=>{console.log('user clicked nav-blog'); event.preventDefault();});
navLinkArr[3].addEventListener('click', (event)=>{console.log('user clicked nav-contact'); event.preventDefault();});

const imgArr = document.querySelectorAll('img');
imgArr[0].addEventListener('click', (event)=>{if (imgArr[0].style.display === "none") {imgArr[0].style.display = "block";} else {console.log('user collapsed img1'); imgArr[0].style.display = "none";}});
imgArr[1].addEventListener('click', (event)=>{if (imgArr[1].style.display === "none") {imgArr[1].style.display = "block";} else {console.log('user collapsed img2'); imgArr[1].style.display = "none";}});
imgArr[2].addEventListener('click', (event)=>{if (imgArr[2].style.display === "none") {imgArr[2].style.display = "block";} else {console.log('user collapsed img3'); imgArr[2].style.display = "none";}});
imgArr[3].addEventListener('click', (event)=>{if (imgArr[3].style.display === "none") {imgArr[3].style.display = "block";} else {console.log('user collapsed img4'); imgArr[3].style.display = "none";}});

const destinationsArr = document.querySelectorAll('.destination');
destinationsArr[0].addEventListener('click', (event)=>{alert(`Fun in the Sun!`)});
destinationsArr[1].addEventListener('click', (event)=>{alert(`Mountain Excursion!`)});
destinationsArr[2].addEventListener('click', (event)=>{alert(`Island Getaway!`)});