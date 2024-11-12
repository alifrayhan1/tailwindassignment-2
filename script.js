let navicon = document.getElementById("navicon");
let navlink = document.getElementById("navlink");
navicon.addEventListener("click", () => {
    navlink.classList.toggle('hidden')
})