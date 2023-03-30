// navigation bar on scroll effect and scroll progress bar

const navigationBar = document.getElementById('navigation-bar');
const container = document.querySelector("body");
const highlight = document.getElementById("bar-highlight");

window.onscroll = () => {
    if (scrollY > 80) {
        navigationBar.style.backgroundColor = "black";
    }
    else {
        navigationBar.style.backgroundColor = "transparent";
    }

    let cheight = container.offsetHeight - window.innerHeight;
    let cpos = container.getBoundingClientRect();
    let diff = cheight + cpos.top;
    let progress = diff/cheight*100;
    let csswidth = Math.floor(100-progress);
    highlight.style.width=csswidth + "%";
}

// right click disable 

document.oncontextmenu=(element)=>{
    element.preventDefault();
}
