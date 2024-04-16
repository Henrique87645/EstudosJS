const drop_btn = document.querySelector(".drop-btn span");
const tooltip = document.querySelector(".tooltip");
const menu_wrapper = document.querySelector(".wrapper");
const menu_bar = document.querySelector(".menu-bar");
const setting_drop = document.querySelector(".setting-drop");
const help_drop = document.querySelector(".help-drop");
const setting_item = document.querySelector(".setting-item");
const help_item = document.querySelector(".help-item");
const setting_bnt = document.querySelector(".back-setting-bnt");
const help_bnt = document.querySelector(".back-help-bnt");

drop_btn.addEventListener('click',()=>{
    menu_wrapper.classList.toggle("show")
    tooltip.classList.toggle("show")
})

setting_item.onclick = (() => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(()=> {
    setting_drop.style.display = "block";
    }, 100);
});

help_item.onclick = (() => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(()=> {
    help_drop.style.display = "block";
    }, 100);
});

setting_bnt.onclick = (() => {
    menu_bar.style.marginLeft = "0px";
    setting_drop.style.display = "none";
});

help_bnt.onclick = (() => {
    help_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
});

