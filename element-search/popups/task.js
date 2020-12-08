const modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");
const modalClose = document.getElementsByClassName("modal__close");

addEventListener("click", function(event) {
    if (event.target.className.includes("modal__close")) modalMain.classList.remove("modal_active");
});

const modalSuccess = document.getElementById("modal_success");

modalClose[1].onclick = function() {
    modalSuccess.classList.add("modal_active");
}