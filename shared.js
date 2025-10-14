const backdrop = document.querySelector(".backdrop")
const sidebar_toggle = document.querySelector(".toggle-button")
const sidebar = document.querySelector(".mobile-nav");

const open_sidebar = () => {
    backdrop.style.background = "transparent"
    sidebar.classList.add("toggle-button-on")
    backdrop.classList.add("toggle-button-on");


}

const close_sidebar = () => {
    sidebar.classList.remove("toggle-button-on")
    backdrop.classList.remove("toggle-button-on")
    backdrop.style.background = "rgba(0, 0, 0, 0.5)"
}
//sidebar toggle off
backdrop.addEventListener("click", close_sidebar)

// sidebar toggle on
sidebar_toggle.addEventListener("click", open_sidebar

)




