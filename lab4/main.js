const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll(".nac-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}))

const parentContainer = document.querySelector(".main2");
parentContainer.addEventListener("click", event=>{
    const current = event.target;
    const isReadMoreBtn = current.className.includes("read_more_btn");
    if (!isReadMoreBtn) return;
    const currentText = event.target.parentNode.querySelector(".read_more_text");
    currentText.classList.toggle("read_more_text--show");
    current.textContent = current.textContent.includes("Read More") ? "Read Less" : "Read More"
})