let modal = document.getElementById("modal");

document.getElementById("button").addEventListener("click", () => {
    document.querySelector(".modal-bg").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".modal-bg").style.display = "none";
});

window.onclick = function(event) {
    if (event.target.className == "modal-bg") {
        modal.style.display = "none";
    }
}
