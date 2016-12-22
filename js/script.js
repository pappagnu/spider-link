// jshint esversion:6

// MOBILE NAVBAR
function myFunction() {
    var x = document.getElementById("myTopnav");
    var logo = document.getElementsByClassName('logo')[0];
    //var mq = window.matchMedia( "(min-width: 500px)" );
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
    // if (mq.matches) {
    //
    // }

}

// CONTACT MAP
function initMap() {
    var uluru = {
        lat: -25.363,
        lng: 131.044
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

//SCROLL FADE IN EFFECT
window.onscroll = function() {
    changeMenu();
};

function changeMenu() {
    let scrollBarPosition = window.pageYOffset | document.body.scrollTop;
    let services = document.getElementById('services');
    let about = document.getElementById('about');
    let contact = document.getElementById('contact');
    if (scrollBarPosition > 30) {
        services.style.animationName = 'fadeIn';
        services.style.WebkitAnimationName = 'fadeIn';
        services.style.animationDuration = '2s';
        services.style.WebkitAnimationDuration = '2s';
    }

    if (scrollBarPosition > 750) {
        about.style.animationName = 'fadeIn';
        about.style.WebkitAnimationName = 'fadeIn';
        about.style.animationDuration = '2s';
        about.style.WebkitAnimationDuration = '2s';
      }

    if (scrollBarPosition > 1080) {
            contact.style.animationName = 'fadeIn';
            contact.style.WebkitAnimationName = 'fadeIn';
            contact.style.animationDuration = '2s';
            contact.style.WebkitAnimationDuration = '2s';
    }
}
