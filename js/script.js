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
      if (scrollBarPosition < 700) {
        desktopNav.style.backgroundColor = "transparent";
        desktopNav.style.padding = "12px";
        logo.style.padding = "8px";
        logo.style.width = "115%";
            navLinks[4].style.color = 'rgb(223, 72, 89)';
            for (let i = 4; i < navLinks.length; i++) {
                if (i !== 4) {
                    navLinks[i].style.color = 'white';
                }
             }
        for (let i = 0; i < navLinks.length; i++) {
          navLinks[i].style.fontSize = "24px";
        }
      }
        if (scrollBarPosition > 700) {
              navLinks[5].style.color = 'rgb(223, 72, 89)';
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
        navLinks[6].style.color = 'rgb(223, 72, 89)';
        for (let i = 4; i < navLinks.length; i++) {
            if (i !== 6) {
                navLinks[i].style.color = 'white';
            }
        }
    } if (scrollBarPosition > 4000) {
        navLinks[7].style.color = 'rgb(223, 72, 89)';
        for (let i = 4; i < navLinks.length; i++) {
            if (i !== 7) {
                navLinks[i].style.color = 'white';
            }
        }
    } if (scrollBarPosition > 4900) {
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
  }
  else {
    scroller.style.bottom = "0";
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
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 59.3279808, lng: 18.05849},
          zoom: 13,
          scrollwheel: false,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#E48E98;'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#DF4859'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
      }
