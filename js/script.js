// jshint esversion:6
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
    if (desktop.matches) {
      if (scrollBarPosition < 900) {
        desktopNav.style.backgroundColor = "transparent";
        desktopNav.style.padding = "12px";
        logo.style.padding = "8px";
        logo.style.width = "115%";
            navLinks[4].style.color = 'rgba(223, 72, 89, 0.5)';
            for (let i = 4; i < navLinks.length; i++) {
                if (i !== 4) {
                    navLinks[i].style.color = 'white';
                }
            }
            for (let i = 0; i < navLinks.length; i++) {
              navLinks[i].style.fontSize = "24px";
            }
        }
        if (scrollBarPosition > 900) {
              navLinks[5].style.color = 'rgba(223, 72, 89, 0.5)';
              desktopNav.style.backgroundColor = "black";
              desktopNav.style.padding = "5px";
              logo.style.padding = "0px";
              logo.style.width = "90%";
              for (let i = 4; i < navLinks.length; i++) {
                  if (i != 5) {
                      navLinks[i].style.color = 'white';
                  }
              }
              for (let i = 0; i < navLinks.length; i++) {
                navLinks[i].style.fontSize = "19.2px";
                }
            }

 if (scrollBarPosition > 2700) {
        navLinks[6].style.color = 'rgba(223, 72, 89, 0.5)';
        for (let i = 4; i < navLinks.length; i++) {
            if (i !== 6) {
                navLinks[i].style.color = 'white';
            }
        }
    } if (scrollBarPosition > 4000) {
        navLinks[7].style.color = 'rgba(223, 72, 89, 0.5)';
        for (let i = 4; i < navLinks.length; i++) {
            if (i !== 7) {
                navLinks[i].style.color = 'white';
            }
        }
    } if (scrollBarPosition > 4900) {
        navLinks[8].style.color = 'rgba(223, 72, 89, 0.5)';
        for (let i = 4; i < navLinks.length; i++) {
            if (i !== 8) {
                navLinks[i].style.color = 'white';
            }
        }
    }
  }
  if (mobile.matches) {
      if (scrollBarPosition > 1500) {
          scroller.style.display = "block";
      }
      if (scrollBarPosition < 1500) {
      scroller.style.display = "none";
    }
  }

if (!desktop.matches && !mobile.matches) {
  if (scrollBarPosition < 50) {
      desktopNav.style.backgroundColor = "transparent";
    }

    if (scrollBarPosition > 50) {
        desktopNav.style.backgroundColor = "black";
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
