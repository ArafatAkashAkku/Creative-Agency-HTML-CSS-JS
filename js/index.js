// navigation bar on scroll effect and scroll progress bar

const navigationBar = document.getElementById('navigation-bar');
const container = document.querySelector("body");
const highlight = document.getElementById("bar-highlight");

window.onscroll = () => {
    // scroll effect navbar
    if (scrollY > 80) {
        navigationBar.style.backgroundColor = "white";
    }
    else {
        navigationBar.style.backgroundColor = "transparent";
    }

    // scroll progress bar
    let cheight = container.offsetHeight - window.innerHeight;
    let cpos = container.getBoundingClientRect();
    let diff = cheight + cpos.top;
    let progress = diff / cheight * 100;
    let csswidth = Math.floor(100 - progress);
    highlight.style.width = csswidth + "%";

    // animation counter scrolling
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerHTML;
            // Lower inc to slow and higher to slow
            const inc = Math.floor(target / speed);
            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerHTML = count + inc;
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        if (projects.getBoundingClientRect().top + projects.getBoundingClientRect().height < window.innerHeight) {
            updateCount();
        } else {
            counter.innerHTML = "0";
        }
    });

}

// navigation bar on click effect 

const phoneBar = document.getElementById('phone-bar');
const phoneNav = document.querySelector('header .right');

phoneBar.onclick = () => {
    phoneNav.classList.toggle("active")

    if (phoneNav.classList.contains("active")) {
        phoneBar.classList.replace("fa-bars", "fa-xmark")
    } else {
        phoneBar.classList.replace("fa-xmark", "fa-bars")

    }
}

// navigation bar links on click effect 

const navLinks = document.querySelectorAll('header .right ul li a');
// const phoneNav = document.querySelector('header .right');
// const phoneBar = document.getElementById('phone-bar');

navLinks.forEach((element) => {
    element.onclick = () => {
        phoneNav.classList.remove("active")
        phoneBar.classList.replace("fa-xmark", "fa-bars")
    }
})

// right click disable 

document.oncontextmenu = (element) => {
    element.preventDefault();
}

// cookie set 

const cookieBox = document.querySelector(".cookie");
const acceptBtn = document.querySelector(".cookie .right .accept");
const rejectBtn = document.querySelector(".cookie .right .reject");

setTimeout(() => {
    cookieBox.style.visibility = "visible"
}, 5000);

rejectBtn.onclick = () => {
    cookieBox.style.visibility = "hidden";
    setTimeout(() => {
        cookieBox.style.visibility = "visible"
    }, 60000);
}

acceptBtn.onclick = () => {
    document.cookie = "fname=Arafat; max-age=" + 60 * 60 * 24 * 30;
    document.cookie = "lname=Akash; max-age=" + 60 * 60 * 24 * 30;
    if (document.cookie) {
        cookieBox.classList.add("hide");
    }
    else {
        alert("Cookie can't be set");
    }
}

let check = document.cookie.indexOf("fname=Arafat");
check != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");

// counter animation 

const projects = document.getElementById("projects");
const counters = document.querySelectorAll('.counter');
const speed = 80; // The lower the slower //digit value depends on data target value //always choose the low data target value

// console.log(scrollY) // same value but changes on scroll
// console.log(window.scrollY) // same as console.log(scrollY)
// console.log(window.innerHeight) // fixed value screen
// console.log(projects.getBoundingClientRect().top) // for user perspective changing to lower value ex. scrolly = 0 top 100; scrolly 80 top 95
// console.log(projects.getBoundingClientRect().height) // normal height of dedicated part
// console.log(projects.offsetTop); // from window scrolly 0, if scrolly 100 but no change in offset value

// window.onscroll = () => {
//     counters.forEach(counter => {
//         const updateCount = () => {
//             const target = +counter.getAttribute('data-target');
//             const count = +counter.innerHTML;
//             // Lower inc to slow and higher to slow
//             const inc = Math.floor(target / speed);
//             // Check if target is reached
//             if (count < target) {
//                 // Add inc to count and output in counter
//                 counter.innerHTML = count + inc;
//                 // Call function every ms
//                 setTimeout(updateCount, 1);
//             } else {
//                 counter.innerText = target;
//             }
//         };
//         if (projects.getBoundingClientRect().top + projects.getBoundingClientRect().height < window.innerHeight) {
//             updateCount();
//         }else{
//             counter.innerHTML="0";
//         }
//     });
// }
