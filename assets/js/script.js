const scrollup = document.getElementById("scroll-up")

scrollup.addEventListener("click", ()=>
{
    window.scrollTo({
        top:0,
        bottom:0,
        behavior:"smooth"
    })
})