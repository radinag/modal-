document.getElementById("button").addEventListener("click", () => {
    document.querySelector(".modal-bg").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".modal-bg").style.display = "none";
});