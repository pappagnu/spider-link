// jshint esversion:6
window.onscroll = function() {
    scrollEffects();
};

const desktop = window.matchMedia("(min-width: 1024px)");
const tablet = window.matchMedia("(min-width: 768px)");
const mobile = window.matchMedia("(max-width: 600px)");

function scrollEffects() {
    const scrollBarPosition = window.pageYOffset | document.body.scrollTop;
    const scroller = document.getElementById('scroller');
    const navLinks = document.getElementsByClassName('nav-links');
    const desktopNav = document.getElementById("desktop-nav");
    const logo = document.getElementById("logo");
    const aboutUsBox = document.getElementsByClassName('circle-img');

    if (tablet.matches){
        if (scrollBarPosition > 3100){
            for (let y = 0; y < aboutUsBox.length; y++) {
                aboutUsBox[y].className = 'circle-img mb-10 slideUp';
            }
        }
    }

    if (mobile.matches){
        if (scrollBarPosition > 2840){
            for (let y = 0; y < aboutUsBox.length; y++) {
                aboutUsBox[y].className = 'circle-img mb-10 slideUp';
            }
        }
    }

    if (desktop.matches) {
        if (scrollBarPosition < 600) {
            desktopNav.style.backgroundColor = "transparent";
            desktopNav.style.height = "6rem";
            logo.style.width  = "115%";
            logo.style.padding  = "1rem";
            for (let i = 4; i < navLinks.length; i++) {
                navLinks[i].style.transform  = "scale(1)";
                navLinks[i].style.padding = "0.8em";
                navLinks[i].className = "nav-links";

            }
        }
        if (scrollBarPosition > 600) {
            desktopNav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
            desktopNav.style.height = "4rem";
            logo.style.width  = "90%";
            logo.style.padding  = "0";
            for (let i = 4; i < navLinks.length; i++) {
                navLinks[i].style.transform  = "scale(0.7)";
                navLinks[i].style.padding  = "0";
                navLinks[i].className += " small-links";
            }
        }

        if (scrollBarPosition < 1300) {
            navLinks[4].style.color = 'rgb(223, 72, 89)';
            for (let i = 4; i < navLinks.length; i++) {
                if (i !== 4) {
                    navLinks[i].style.color = 'white';
                }
            }
        }

        if (scrollBarPosition > 1300) {
            navLinks[5].style.color = 'rgb(223, 72, 89)';
            for (let i = 4; i < navLinks.length; i++) {
                if (i != 5) {
                    navLinks[i].style.color = 'white';

                }

            }
        }

 if (scrollBarPosition > 2500) {
        navLinks[6].style.color = 'rgb(223, 72, 89)';
        for (let i = 4; i < navLinks.length; i++) {
            if (i !== 6) {
                navLinks[i].style.color = 'white';
            }
        }
  }
        if (scrollBarPosition > 3370) {
            for (let y = 0; y < aboutUsBox.length; y++) {
                aboutUsBox[y].className = 'circle-img mb-10 slideUp';
            }
            navLinks[7].style.color = 'rgb(223, 72, 89)';
            for (let i = 4; i < navLinks.length; i++) {
                if (i !== 7) {
                    navLinks[i].style.color = 'white';
                }
            }
        }

        if (scrollBarPosition > 4400) {
            navLinks[8].style.color = 'rgb(223, 72, 89)';
            for (let i = 4; i < navLinks.length; i++) {
                if (i !== 8) {
                    navLinks[i].style.color = 'white';
                }
            }
        }
    }
    if (mobile.matches) {
        if (scrollBarPosition > 1600) {
            scroller.style.display = "block";
        }
        if (scrollBarPosition < 1600) {
            scroller.style.display = "none";
        }
    }
    if (mobile.matches) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            scroller.style.bottom = "2rem";
        } else {
            scroller.style.bottom = "0";
        }
    }

    if (!desktop.matches && !mobile.matches) {
        if (scrollBarPosition < 50) {
            desktopNav.style.backgroundColor = "transparent";
        }

        if (scrollBarPosition > 50) {
            desktopNav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        }

    }
}
//ABOUT US CLICKER
if (desktop.matches) {
    const circle = document.getElementsByClassName('circle-img');
    for (let i = 0; i < circle.length; i++) {
        circle[i].addEventListener('click', circleClicked);
    }
}

function circleClicked() {
    let name = this.id;
    if (name === 'matte') {
        const aboutPersonBox = document.getElementById('popup-matte');
        return render(aboutPersonBox, name);
    } else if (name === 'andreas') {
        const aboutPersonBox = document.getElementById('popup-andreas');
        return render(aboutPersonBox, name);
    } else {
        const aboutPersonBox = document.getElementById('popup-nico');
        return render(aboutPersonBox, name);
    }
}

function render(aboutPersonBox, name) {
    const renderAboutPersonBox = document.getElementById('overlay');
    renderAboutPersonBox.appendChild(aboutPersonBox);
    aboutPersonBox.className += ` img-clicked overlay-${name}`;
    aboutPersonBox.style = 'display:block;';

    const btn = document.getElementsByClassName('btnClose');
    for (let i = 0; i < btn.length; i++){
        btn[i].addEventListener('click', closeAboutPersonBox);
    }

    const circle = document.getElementsByClassName('circle-img');
    for (let y = 0; y < circle.length; y++){
        circle[y].className += ' pointer-event';
    }
}

function closeAboutPersonBox(aboutPersonBox, name) {
    this.parentElement.className -= ` img-clicked overlay-${name}`;
    this.parentElement.style = 'display:none;';
    const circle = document.getElementsByClassName('circle-img');
    for (let i = 0; i < circle.length; i++){
        circle[i].className = 'circle-img mb-10 slideUp';
    }
}

// LOGO ANIMATION
const logoAnim = document.getElementById('logo');
logoAnim.addEventListener('click', function() {
    this.className += ' hatch';
});
