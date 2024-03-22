const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear()
yearEl.textContent = currentYear

const menuToggleEl = document.querySelector(".toggle-menu");
const headerEl = document.querySelector(".header")
menuToggleEl.addEventListener("click", function(){
    headerEl.classList.toggle("nav-open")
})

const allLink = document.querySelectorAll("a:link")
allLink.forEach(function (link) {
    link.addEventListener("click", function(el) {
        const href = link.getAttribute("href")

        if(link.classList.contains("nav-link")) {
            headerEl.classList.toggle("nav-open")
        }
    })
})

const sectionHeroEl = document.querySelector(".section-hero")
const obs = new IntersectionObserver(function (entries) {
    const entry = entries[0]
    if(!entry.isIntersecting){
        document.body.classList.add("sticky")
    }

    if(entry.isIntersecting){
        document.body.classList.remove("sticky")
    }
}, 
{
    root:null,
    threshold:0,
    rootMargin:"-80px"
})
obs.observe(sectionHeroEl)