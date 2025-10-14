const modal = document.querySelector(".modal")
const buttons = document.querySelectorAll(".plan button")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        backdrop.classList.add("toggle-button-on")
        modal.classList.add("toggle-button-on")

    })
}
const modal_action_negative = document.querySelector(".modal__action--negative")
const close_modal = () => {
     modal.classList.remove("toggle-button-on"),
      backdrop.classList.remove("toggle-button-on")
     }

modal_action_negative.addEventListener("click", close_modal)

backdrop.addEventListener("click", close_modal)