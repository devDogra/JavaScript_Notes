let btns = document.querySelectorAll("button");
btns = Array.from(btns);

btns.forEach((btn, idx) => {
    btn.addEventListener("click", (e) => {
        btn.dataset.btnClicks++;
    });
});
