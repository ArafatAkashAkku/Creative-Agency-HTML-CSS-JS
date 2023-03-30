// navigation bar on scroll effect 

const navigationBar = document.getElementById('navigation-bar');
const logo = document.querySelector('#navigation-bar .left h1');

window.onscroll = () => {
    if (scrollY > 100) {
        navigationBar.style.backgroundColor = "darkorchid";
        logo.style.color = "white";
    }
    else {
        navigationBar.style.backgroundColor = "transparent";
    }
}

// right click disable 

document.oncontextmenu=(element)=>{
    element.preventDefault();
}
