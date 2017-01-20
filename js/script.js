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
var image = 'https://github.com/JazzBrotha/spider-link/blob/master/icons/cobweb.png?raw=true';
var beachMarker = new google.maps.Marker({
  position: {lat: 59.3279808, lng: 18.05849},
  map: map,
  icon: image,
  title: 'Akta dig för spindeln'
});



}
//
// // var map;
// //       function initMap() {
// //         map = new google.maps.Map(document.getElementById('map'), {
// //           zoom: 16,
// //           center: new google.maps.LatLng(-33.91722, 151.23064),
// //           mapTypeId: 'roadmap'
// //         });
// //
// //         var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
// //         var icons = {
// //           parking: {
// //             icon: iconBase + 'parking_lot_maps.png'
// //           },
// //           library: {
// //             icon: iconBase + 'library_maps.png'
// //           },
// //           info: {
// //             icon: iconBase + 'info-i_maps.png'
// //           }
// //         };
// //
// //         function addMarker(feature) {
// //           var marker = new google.maps.Marker({
// //             position: feature.position,
// //             icon: icons[feature.type].icon,
// //             map: map
// //           });
// //         }
// //
// //         var features = [
// //           {
// //             position: new google.maps.LatLng(-33.91721, 151.22630),
// //             type: 'info'
// //           }, {
// //             position: new google.maps.LatLng(-33.91539, 151.22820),
// //             type: 'info'
// //           }, {
// //             position: new google.maps.LatLng(-33.91747, 151.22912),
// //             type: 'info'
// //           }, {
// //             position: new google.maps.LatLng(-33.91910, 151.22907),
// //             type: 'info'
// //           }, {
// //             position: new google.maps.LatLng(-33.91725, 151.23011),
// //             type: 'info'
// //           }, {
// //             position: new google.maps.LatLng(-33.91872, 151.23089),
// //             type: 'info'
// //           }, {
// //             position: new google.maps.LatLng(-33.91784, 151.23094),
// //             type: 'info'
// //           }, {
// //             position: new google.maps.LatLng(-33.91682, 151.23149),
// //             type: 'info'
// //           }, {
// //             position: new google.maps.LatLng(-33.91790, 151.23463),
// //             type: 'info'
// //           }, {
// //             position: new google.maps.LatLng(-33.91666, 151.23468),
// //             type: 'info'
// //           }, {
// //             position: new google.maps.LatLng(-33.916988, 151.233640),
// //             type: 'info'
// //           }, {
// //             position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
// //             type: 'parking'
// //           }, {
// //             position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
// //             type: 'parking'
// //           }, {
// //             position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
// //             type: 'parking'
// //           }, {
// //             position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
// //             type: 'parking'
// //           }, {
// //             position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
// //             type: 'parking'
// //           }, {
// //             position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
// //             type: 'parking'
// //           }, {
// //             position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
// //             type: 'parking'
// //           }, {
// //             position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
// //             type: 'library'
// //           }
// //         ];
// //
// //         for (var i = 0, feature; feature = features[i]; i++) {
// //           addMarker(feature);
// //         }
//       }
