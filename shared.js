const backdrop = document.querySelector(".backdrop")
const modal = document.querySelector(".modal")
const buttons = document.querySelectorAll(".plan button")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        backdrop.style.display = "block"
        modal.style.display = "block"

    })
}

const modal_action = document.querySelector(".modal__action--negative")

modal_action.addEventListener("click", function () { modal.style.display = "none"; backdrop.style.display = "none" })

backdrop.addEventListener("click", function () { backdrop.style.display = "none"; modal.style.display = "none" })

const sidebar_toggle = document.querySelector(".toggle-button")
const sidebar = document.querySelector(".mobile-nav");

const open_sidebar = () => {
    backdrop.style.background = "transparent"

    sidebar.classList.add("toggle-button-on")
    // sidebar.style.display = "block";
    backdrop.classList.add("toggle-button-on");


}

const close_sidebar = () => {
    sidebar.classList.remove("toggle-button-on")
    backdrop.classList.remove("toggle-button-on")
    backdrop.style.background = "rgba(0, 0, 0, 0.5)"
}

backdrop.addEventListener("click", close_sidebar)

// sidebar toggle
sidebar_toggle.addEventListener("click", open_sidebar

)




