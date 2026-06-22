window.addEventListener("load", () => {
document.getElementById("loader").style.display = "none";
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){
topBtn.style.display = "block";
}
else{
topBtn.style.display = "none";
}

revealSections();
});

topBtn.addEventListener("click", () => {
window.scrollTo({
top:0,
behavior:"smooth"
});
});

function revealSections(){

const reveals = document.querySelectorAll(
".section,.card,.service-card"
);

reveals.forEach(el => {

const windowHeight = window.innerHeight;
const revealTop = el.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){
el.classList.add("active");
el.classList.add("reveal");
}
});
}

revealSections();

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("show");
});