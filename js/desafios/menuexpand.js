const nav = document.querySelector("nav");
    ToggleBtn = nav.querySelector(".toggle-btn");

    ToggleBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

function onDrag({movimentY})
{
    const navStyle = window.getComputedStyle(nav),
          navTop = parseInt(navStyle.top),
          navHeight = parseInt(navStyle.Height),
          windHeight = window.innerHeight;

    nav.style.top = navTop > 0 ? `${navTop + movimentY}px` : "1px";
    if(navTop > windHeight - navHeight){
        nav.style.top `${windHeight - windHeight}px`;
    }
}

nav.addEventListener("mousedown", () => {
    nav.addEventListener("mousemove", onDrag);
});

nav.addEventListener("mouseup", () => {
    nav.removeEventListener("mousemove", onDrag);
});

nav.addEventListener("mouseleave", () => {
    nav.removeEventListener("mousemove", onDrag);
});