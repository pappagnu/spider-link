// jshint esversion:6
// TOGGLE NAVBARS
const hamburger = document.getElementById('hamburger');
hamburger.onclick = function() {
    const desktopNav = document.getElementById("desktop-nav");
    const logo = document.getElementsByClassName('logo')[0];
    if (desktopNav.className !== "responsive-nav") {
        desktopNav.className = "responsive-nav";
    }
    else {
      desktopNav.className -= "responsive-nav";
    }
    if (logo.style.display === "none") {
        logo.style.display = 'block';
    } else {
        logo.style.display = 'none';
    }
};

// SCROLL EFFECTS
window.onscroll = function() {
    scrollEffects();
};

function scrollEffects() {
    const scrollBarPosition = window.pageYOffset | document.body.scrollTop;
    const scroller = document.getElementById('scroller');
    const navLinks = document.getElementsByClassName('nav-links');
    const desktopNav = document.getElementById("desktop-nav");
    const logo = document.getElementById("logo");
    const desktop = window.matchMedia("(min-width: 1024px)");
    const mobile = window.matchMedia("(max-width: 600px)");

    if (scrollBarPosition > 0 && desktop.matches) {
        desktopNav.style.backgroundColor = "black";
        desktopNav.style.padding = "12px";
        logo.style.padding = "8px";
        logo.style.width = "115%";
        for (let i = 0; i < navLinks.length; i++) {
          navLinks[i].style.fontSize = "24px";
        }
    } else if (scrollBarPosition === 0 && desktop.matches) {
        desktopNav.style.backgroundColor = "transparent";
        desktopNav.style.padding = "5px";
        logo.style.padding = "0px";
        for (let i = 0; i < navLinks.length; i++) {
          navLinks[i].style.fontSize = "19.2px";
          logo.style.width = "100%";
        }

    }

    if (scrollBarPosition > 0 && desktop.matches === false && mobile.matches === false) {
        desktopNav.style.backgroundColor = "black";
      }

      else if (scrollBarPosition === 0 && desktop.matches === false && mobile.matches === false) {
          desktopNav.style.backgroundColor = "transparent";
        }

    if (scrollBarPosition => 0) {
        navLinks[0].style.backgroundColor = 'rgba(223, 72, 89, 0.5)';
        for (let i = 0; i < navLinks.length; i++) {
            if (i !== 0) {
                navLinks[i].style.backgroundColor = 'transparent';
            }
        }
    }

    if (scrollBarPosition > 600) {
        navLinks[1].style.backgroundColor = 'rgba(223, 72, 89, 0.5)';
        for (let i = 0; i < navLinks.length; i++) {
            if (i != 1) {
                navLinks[i].style.backgroundColor = 'transparent';
            }
        }
    }

    if (scrollBarPosition > 1850) {
        navLinks[2].style.backgroundColor = 'rgba(223, 72, 89, 0.5)';
        for (let i = 0; i < navLinks.length; i++) {
            if (i !== 2) {
                navLinks[i].style.backgroundColor = 'transparent';
            }
        }
    }

    if (scrollBarPosition > 3070) {
        navLinks[3].style.backgroundColor = 'rgba(223, 72, 89, 0.5)';
        for (let i = 0; i < navLinks.length; i++) {
            if (i !== 3) {
                navLinks[i].style.backgroundColor = 'transparent';
            }
        }
    }
    if (scrollBarPosition > 3950) {
        navLinks[4].style.backgroundColor = 'rgba(223, 72, 89, 0.5)';
        for (let i = 0; i < navLinks.length; i++) {
            if (i !== 4) {
                navLinks[i].style.backgroundColor = 'transparent';
            }
        }
    }

    if (mobile.matches) {
        if (scrollBarPosition > 1500) {
            scroller.style.display = "block";
        }
        else if (scrollBarPosition < 1500) {
        scroller.style.display = "none";
      }
  }
}

// CONTACT MAP
function initMap() {
  let mapCanvas = document.getElementById("map");
  let cord = new google.maps.LatLng(33.1791817, -81.0961495);
  let mapOptions = {
    center: cord,
    zoom: 13,
    scrollwheel: false
  };
  let map = new google.maps.Map(mapCanvas, mapOptions);
  let marker = new google.maps.Marker({
  position: cord,
  title:"Vi finns på Spider Road"
  });
  marker.setMap(map);
}
