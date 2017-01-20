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
        if (scrollBarPosition > 600) {
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




//ABOUT US CLICKER
var matte = 'Halloj, mitt namn är JavaScript!';
var andreas = 'Jag älskar warpar! Andreas Engström här...';
var nico = 'WARPKUNGEN HÄR! NICOLAS FUENTES!';

var circle = document.getElementsByClassName('circle-img');
for (var i = 0; i < circle.length; i++){
  circle[i].addEventListener('click', circleClicked);
}

function circleClicked(text){
  var name = this.id;
  var img = this.src;
  if (name === 'matte'){
    text = matte;
  } else if (name === 'andreas'){
    text = andreas;
  } else {
    text = nico;
  }
  return render(text, name, img);
}

function render(text, name, img){
  var renderAboutPersonBox = document.getElementById('overlay');
  var textToRender = document.createTextNode(text);
  var aboutPersonBox = document.createElement('div');
  aboutPersonBox.appendChild(textToRender);
  var textForBtn = document.createTextNode('Stäng');
  var btn = document.createElement('span');
  btn.appendChild(textForBtn);
  var image = document.createElement('img');
  image.style.width = '25%';
  image.src = img;
  aboutPersonBox.appendChild(image);

  if (name === 'matte') {
    aboutPersonBox.className = "img-clicked overlay-matte";
    btn.className = "btnClose";
  } else if (name === 'andreas') {
    aboutPersonBox.className = "img-clicked overlay-andreas";
    btn.className = "btnClose";
  } else {
    aboutPersonBox.className = "img-clicked overlay-nico";
    btn.className = "btnClose";
  }
  var borderbox = document.getElementsByClassName('about-border-box');
  for (var i = 0; i < borderbox.length; i++){
    borderbox[i].className += ' pointer-event';
  }
  aboutPersonBox.appendChild(btn);
  renderAboutPersonBox.appendChild(aboutPersonBox);
  btn.addEventListener('click', closeAboutPersonBox);
}

function closeAboutPersonBox(){
  var borderbox = document.getElementsByClassName('about-border-box');
  for (var i = 0; i < borderbox.length; i++){
    borderbox[i].className = 'col-t-4 about-border-box flex-center flex-column';
  }
  var clicked = event.target;
  var parent = clicked.parentElement;
  parent.parentNode.removeChild(parent);
}