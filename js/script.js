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
            scroller.style.bottom = "2.4rem";
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
    console.log(this.parentElement);
    this.parentElement.className -= ` img-clicked overlay-${name}`;
    this.parentElement.style = 'display:none;';
    const circle = document.getElementsByClassName('circle-img');
    for (let i = 0; i < circle.length; i++){
        circle[i].className = 'circle-img mb-10';
    }
}

// Styles a map in night mode.
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 59.3279808,
            lng: 18.05849
        },
        zoom: 13,
        scrollwheel: false,
        styles: [{
            elementType: 'geometry',
            stylers: [{
                color: '#242f3e'
            }]
        }, {
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#242f3e'
            }]
        }, {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#E48E98;'
            }]
        }, {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        }, {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        }, {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{
                color: '#263c3f'
            }]
        }, {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#6b9a76'
            }]
        }, {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                color: '#38414e'
            }]
        }, {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#212a37'
            }]
        }, {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9ca5b3'
            }]
        }, {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
                color: '#DF4859'
            }]
        }, {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#1f2835'
            }]
        }, {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#f3d19c'
            }]
        }, {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{
                color: '#2f3948'
            }]
        }, {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        }, {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
                color: '#17263c'
            }]
        }, {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#515c6d'
            }]
        }, {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#17263c'
            }]
        }]
    });

    const image = {
        url: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjQ1Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojMjczQjdBOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMTIxMTQ5OyIgZD0iTTUxMS42OTgsMjY4LjM0TDM0OS4yMDUsMTA0LjY5NmwtMzAuOTgsMzIuOTNIMTg5LjAzOGw1LjE3Miw1LjMxNWgtMTQuMDYybC02MS4xNDIsMTE2Ljc0Mw0KCWwtMzkuODE1LDIuMzYyTDE5MS4yNDcsMzc1LjEzbC0yNC44OSwzNi4xMzVsMTAwLjQ5LDEwMC40OWMxNy41MTEtMC43MzEsMzQuNTY2LTMuMjE3LDUwLjk5NS03LjI5NGwxLjM2OS0xLjM2OWwwLjgzMSwwLjgzMQ0KCWM0NC42MDgtMTEuNDksODQuNTAxLTM0LjcwNiwxMTYuMjE1LTY2LjE1OGwxLjUxLTEuNTFDNDgwLjk0OSwzOTIuNzEzLDUwOC41OTQsMzMzLjc0MSw1MTEuNjk4LDI2OC4zNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkVEQjU7IiBkPSJNNDI2LjY2NywyNDcuMzhoLTIzLjQ2OGwtNjYuMTM0LTExNC41NDhsMTEuNzM1LTIwLjMyM2MyLjM4MS00LjEyNCwwLjk2OS05LjM5NC0zLjE1NS0xMS43NzQNCgljLTQuMTI3LTIuMzg4LTkuMzk1LTAuOTY3LTExLjc3NCwzLjE1NWwtMTEuNzMzLDIwLjMyM2gtMTMyLjI3bC0xMS43MzMtMjAuMzIzYy0yLjM4MS00LjEyNC03LjY1Mi01LjU0Mi0xMS43NzQtMy4xNTUNCgljLTQuMTI0LDIuMzgxLTUuNTM1LDcuNjUxLTMuMTU1LDExLjc3NGwxMS43MzUsMjAuMzIzTDEwOC44MDEsMjQ3LjM4SDg1LjMzM2MtNC43NjEsMC04LjYyLDMuODU4LTguNjIsOC42Mg0KCWMwLDQuNzYxLDMuODU4LDguNjIsOC42Miw4LjYyaDIzLjQ2OGw2Ni4xMzQsMTE0LjU0OEwxNjMuMiwzOTkuNDkxYy0yLjM4MSw0LjEyNC0wLjk2OSw5LjM5NCwzLjE1NSwxMS43NzQNCgljMS4zNTcsMC43ODQsMi44MzksMS4xNTcsNC4zMDEsMS4xNTdjMi45ODEsMCw1Ljg3Ny0xLjU0Niw3LjQ3My00LjMxMWwxMS43MzMtMjAuMzIzaDEzMi4yN2wxMS43MzMsMjAuMzIzDQoJYzEuNTk2LDIuNzY1LDQuNDkzLDQuMzExLDcuNDczLDQuMzExYzEuNDYyLDAsMi45NDQtMC4zNzIsNC4zMDEtMS4xNTdjNC4xMjQtMi4zODEsNS41MzUtNy42NTEsMy4xNTUtMTEuNzc0bC0xMS43MzUtMjAuMzIzDQoJbDY2LjEzNC0xMTQuNTQ4aDIzLjQ3M2M0Ljc2MSwwLDguNjItMy44NTgsOC42Mi04LjYyQzQzNS4yODYsMjUxLjIzOSw0MzEuNDI4LDI0Ny4zOCw0MjYuNjY3LDI0Ny4zOHogTTM4My4yOTMsMjQ3LjM4aC00NS40MDMNCglsLTMzLjQ4LTU3Ljk5bDIyLjctMzkuMzE5TDM4My4yOTMsMjQ3LjM4eiBNMjQxLjA3MSwyNDcuMzhoLTQ3LjA1NmwyMy41MjgtNDAuNzUxTDI0MS4wNzEsMjQ3LjM4eiBNMjMyLjQ3MiwxOTguMDFoNDcuMDU2DQoJTDI1NiwyMzguNzYxTDIzMi40NzIsMTk4LjAxeiBNMjQxLjA3MSwyNjQuNjJsLTIzLjUyOCw0MC43NTFsLTIzLjUyOC00MC43NTFIMjQxLjA3MXogTTI1NiwyNzMuMjM5bDIzLjUyOCw0MC43NTFoLTQ3LjA1Ng0KCUwyNTYsMjczLjIzOXogTTI3MC45MjksMjY0LjYyaDQ3LjA1NmwtMjMuNTI4LDQwLjc1MUwyNzAuOTI5LDI2NC42MnogTTI3MC45MjksMjQ3LjM4bDIzLjUyOC00MC43NTFsMjMuNTI4LDQwLjc1MUgyNzAuOTI5eg0KCSBNMzEyLjE4MiwxNDEuNDUybC0yMi43MDIsMzkuMzIxaC02Ni45NjJsLTIyLjctMzkuMzIxSDMxMi4xODJ6IE0xODQuODg5LDE1MC4wNzFsMjIuNywzOS4zMTlsLTMzLjQ4LDU3Ljk5aC00NS40MDINCglMMTg0Ljg4OSwxNTAuMDcxeiBNMTI4LjcwNywyNjQuNjJoNDUuNDAybDMzLjQ4LDU3Ljk5bC0yMi43LDM5LjMxOUwxMjguNzA3LDI2NC42MnogTTE5OS44MTgsMzcwLjU0OGwyMi43MDItMzkuMzIxaDY2Ljk2Mg0KCWwyMi43MDIsMzkuMzIxSDE5OS44MTh6IE0zMjcuMTExLDM2MS45MjlsLTIyLjctMzkuMzE5bDMzLjQ4LTU3Ljk5aDQ1LjQwM0wzMjcuMTExLDM2MS45Mjl6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkVFMTg3OyIgZD0iTTQyNi42NjcsMjQ3LjM4aC0yMy40NjhsLTY2LjEzNC0xMTQuNTQ4bDExLjczNS0yMC4zMjNjMi4zODEtNC4xMjQsMC45NjktOS4zOTQtMy4xNTUtMTEuNzc0DQoJYy00LjEyNy0yLjM4OC05LjM5NS0wLjk2Ny0xMS43NzQsMy4xNTVsLTExLjczMywyMC4zMjNoLTY2LjcwOHYxNy4yMzloNTYuNzU2bC0yMi43MDIsMzkuMzIxaC0zNC4wNTR2MTcuMjM5aDI0LjEwMkwyNTYsMjM4Ljc2MQ0KCWwtMC41NzQtMC45OTV2MzYuNDY2bDAuNTc0LTAuOTk1bDIzLjUyOCw0MC43NTFoLTI0LjEwMnYxNy4yMzloMzQuMDU0bDIyLjcwMiwzOS4zMjFoLTU2Ljc1NnYxNy4yMzloNjYuNzA4bDExLjczMywyMC4zMjMNCgljMS41OTYsMi43NjUsNC40OTMsNC4zMTIsNy40NzMsNC4zMTJjMS40NjIsMCwyLjk0NC0wLjM3Miw0LjMwMS0xLjE1N2M0LjEyNC0yLjM4MSw1LjUzNS03LjY1MSwzLjE1NS0xMS43NzRsLTExLjczNS0yMC4zMjMNCglsNjYuMTM0LTExNC41NDhoMjMuNDcxYzQuNzYxLDAsOC42Mi0zLjg1OCw4LjYyLTguNjJDNDM1LjI4NiwyNTEuMjM5LDQzMS40MjgsMjQ3LjM4LDQyNi42NjcsMjQ3LjM4eiBNMjk0LjQ1NywyMDYuNjI5DQoJbDIzLjUyOCw0MC43NTFoLTQ3LjA1NkwyOTQuNDU3LDIwNi42Mjl6IE0yNzAuOTI5LDI2NC42Mmg0Ny4wNTZsLTIzLjUyOCw0MC43NTFMMjcwLjkyOSwyNjQuNjJ6IE0zMjcuMTExLDM2MS45MjlsLTIyLjctMzkuMzE5DQoJbDMzLjQ4LTU3Ljk5aDQ1LjQwM0wzMjcuMTExLDM2MS45Mjl6IE0zMzcuODkxLDI0Ny4zOGwtMzMuNDgtNTcuOTlsMjIuNy0zOS4zMTlsNTYuMTgyLDk3LjMwOUgzMzcuODkxeiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
    };


    const marker = new google.maps.Marker({
        position: {
            lat: 59.3279808,
            lng: 18.05849
        },
        map: map,
        icon: image,
        title: 'Välkommen in på en bira!'
    });

}

// LOGO ANIMATION
const logoAnim = document.getElementById('logo');
logoAnim.addEventListener('click', function() {
    this.className += ' hatch';
});
