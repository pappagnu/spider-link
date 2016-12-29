// jshint esversion:6

// MOBILE NAVBAR
function myFunction() {
    var x = document.getElementById("myTopnav");
    var logo = document.getElementsByClassName('logo')[0];
    if (x.className === "topnav") {
        x.className = "responsive-nav";
    } else {
        x.className = "topnav";
    }
    if (logo.style.display === "none") {
        logo.style.display = 'block';
    } else {
        logo.style.display = 'none';
    }

}

//SCROLL EFFECTS
window.onscroll = function() {
    changeMenu();
};

function changeMenu() {
    const scrollBarPosition = window.pageYOffset | document.body.scrollTop;
    const scroller = document.getElementById('scroller');
    const navLinks = document.getElementsByClassName('nav-links');
    const topnav = document.getElementById("myTopnav");
    const mq = window.matchMedia("(min-width: 600px)");
    const mobile = window.matchMedia("(max-width: 600px)");

    if (scrollBarPosition > 0 && mq.matches) {
        topnav.style.backgroundColor = "black";
    } else {
        topnav.style.backgroundColor = "transparent";

    }

    if (scrollBarPosition => 0) {
        navLinks[0].style.backgroundColor = 'rgba(223, 72, 89, 0.5)';
        for (let i = 0; i < navLinks.length; i++) {
            if (i !== 0) {
                navLinks[i].style.backgroundColor = 'transparent';
            }
        }
    }

    if (scrollBarPosition > 610) {
        navLinks[1].style.backgroundColor = 'rgba(223, 72, 89, 0.5)';
        for (let i = 0; i < navLinks.length; i++) {
            if (i != 1) {
                navLinks[i].style.backgroundColor = 'transparent';
            }
        }
    }

    if (scrollBarPosition > 1650) {
        navLinks[2].style.backgroundColor = 'rgba(223, 72, 89, 0.5)';
        for (let i = 0; i < navLinks.length; i++) {
            if (i !== 2) {
                navLinks[i].style.backgroundColor = 'transparent';
            }
        }
    }

    if (scrollBarPosition > 2750) {
        navLinks[3].style.backgroundColor = 'rgba(223, 72, 89, 0.5)';
        for (let i = 0; i < navLinks.length; i++) {
            if (i !== 3) {
                navLinks[i].style.backgroundColor = 'transparent';
            }
        }
    }
    if (scrollBarPosition > 3100) {
        navLinks[4].style.backgroundColor = 'rgba(223, 72, 89, 0.5)';
        for (let i = 0; i < navLinks.length; i++) {
            if (i !== 4) {
                navLinks[i].style.backgroundColor = 'transparent';
            }
        }
    }

    if (mobile.matches) {
        if (scrollBarPosition => 0) {
            scroller.style.display = "none";
        }
        if (scrollBarPosition > 830) {
            scroller.style.display = "block";
        }

    } else {
        scroller.style.display = "none";
    }
}
