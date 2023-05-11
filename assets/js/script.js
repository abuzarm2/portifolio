// scrollup
const scrollup = document.getElementById("scroll-up")
scrollup.addEventListener("click", ()=>
{
    window.scrollTo({
        top:0,
        bottom:0,
        behavior:"smooth"
    })
})

// burger menu
const burger = document.querySelector("#burger-menu")
const ul = document.querySelector("nav ul")
const nav = document.querySelector("nav")

burger.addEventListener("click", ()=>{
    ul.classList.toggle("show")
})

const navlink = document.querySelectorAll(".nav-link")

navlink.forEach((link) => {
    link.addEventListener("click",()=>{
        ul.classList.remove("show")
    })
});