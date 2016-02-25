 $( document ).ready(function() {
//geoJSON either imported or manually entered
 L.mapbox.accessToken = 'pk.eyJ1IjoiYW1lZGkiLCJhIjoiY2lreXlhaHVyMGF1cXZ5bTN5ZjE5M2dobiJ9.MeI8P-vy_mt3dqxWl55YvA';
  var geojson = [
      {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -122.438027,
                37.792940
              ]
            },
            "properties": {
              "groupTitle": "Alan & Jillian",
              "leaders": "Alan & Jillian",
              "bestFit": "Co-Ed",
              "frequency": "Every Other Week",
              "meetingTime": "Wednesdays @ 7:30pm",
              "city": "Pac Heights, San Francisco",
              "groupImage": "Alan_Jillian_pac_heights_Co-Ed.jpg",
              "groupPage": "#"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -122.095851,
                37.390698
              ]
            },
            "properties": {
              "groupTitle": "Albert Liao",
              "leaders": "Albert Liao",
              "bestFit": "Young Adult Men",
              "frequency": "2nd & 4th Weeks",
              "meetingTime": "Wednesdays @ 7:30pm",
              "city": "Mountain View",
              "groupPage": "#"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -122.046107,
                37.322795
              ]
            },
            "properties": {
              "groupTitle": "Hunter Stanchick",
              "leaders": "Hunter Stanchick",
              "bestFit": "Young Adult Men",
              "frequency": "2nd & 4th Weeks",
              "meetingTime": "Wednesdays @ 7:30pm",
              "city": "Cupertino",
              "groupPage": "#"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -122.147598,
                37.426207
              ]
            },
            "properties": {
              "groupTitle": "Joanna Pham",
              "leaders": "Joanna Pham",
              "bestFit": "Young Adult Women",
              "frequency": "2nd & 4th Weeks",
              "meetingTime": "Thursdays @ 7:30pm",
              "city": "Palo Alto",
              "groupPage": "#"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -121.949942,
                37.287143
              ]
            },
            "properties": {
              "groupTitle": "Jon & Rachel Ochoa",
              "leaders": "Jon & Rachel Ochoa",
              "bestFit": "Co-Ed",
              "frequency": "2nd & 4th Weeks",
              "meetingTime": "Thursdays @ 7:30pm",
              "city": "Campbell",
              "groupPage": "#"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -121.898842,
                37.343110
              ]
            },
            "properties": {
              "groupTitle": "Pastor Adam & Amy Hahn",
              "leaders": "Pastor Adam & Amy Hahn",
              "bestFit": "Co-Ed",
              "frequency": "2nd & 4th Weeks",
              "meetingTime": "Wednesdays @ 7:30pm",
              "city": "Downtown San Jose",
              "groupPage": "#"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -121.892071,
                37.335470
              ]
            },
            "properties": {
              "groupTitle": "San Jose DT",
              "leaders": "Cat Miller",
              "bestFit": "Women",
              "frequency": "2nd & 4th Weeks",
              "meetingTime": "Wednesdays @ 7:00pm",
              "city": "Downtown San Jose",
              "groupPage": "#"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -121.874120,
                37.337617
              ]
            },
            "properties": {
              "groupTitle": "Ashley Dinger",
              "leaders": "Ashley Dinger",
              "bestFit": "Youth Girls",
              "frequency": "Varies",
              "meetingTime": "Varies",
              "city": "San Jose",
              "groupPage": "#"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -121.866056,
                37.265579
              ]
            },
            "properties": {
              "groupTitle": "Mehdi & Dora Hasan",
              "leaders": "Mehdi & Dora Hasan",
              "bestFit": "Co-Ed, Young Adults",
              "frequency": "2nd & 4th Weeks",
              "meetingTime": "Wednesdays @ 7:30pm",
              "city": "South San Jose",
              "groupPage": "#"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -122.141374,
                37.468521
              ]
            },
            "properties": {
              "groupTitle": "Martha & Jen",
              "leaders": "Martha & Jen",
              "bestFit": "Women",
              "frequency": "1st, 2nd & 4th Weeks",
              "meetingTime": "Wednesdays @ 7:30pm",
              "city": "Palo Alto",
              "groupPage": "#"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -122.325929,
                37.563054
              ]
            },
            "properties": {
              "groupTitle": "Jason & Angeline",
              "leaders": "Jason & Angeline",
              "bestFit": "Co-Ed",
              "frequency": "2nd & 4th Weeks",
              "meetingTime": "Wednesdays @ 7:30pm",
              "city": "San Mateo",
              "groupPage": "#"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -122.260198,
                37.507286
              ]
            },
            "properties": {
              "groupTitle": "Josiah & Jenny",
              "leaders": "Josiah & Jenny",
              "bestFit": "Co-Ed",
              "frequency": "2nd & 4th Weeks",
              "meetingTime": "Wednesdays @ 7:00pm",
              "city": "Downtown San Carlos",
              "groupPage": "#"
            }
          }
        ]
      }
  ];
  var map = L.mapbox.map('map', 'amedi.p832f103')
  .setView([37.423664, -122.103531], 11);

  map.scrollWheelZoom.disable();

  var listings = document.getElementById('listings');
  var locations = L.mapbox.featureLayer().addTo(map);

  locations.setGeoJSON(geojson);

  function setActive(el) {
    var siblings = listings.getElementsByTagName('div');
    for (var i = 0; i < siblings.length; i++) {
      siblings[i].className = siblings[i].className
      .replace(/active/, '').replace(/\s\s*$/, '');
    }

    el.className += ' active';
  }

  locations.eachLayer(function(locale) {

    var prop = locale.feature.properties;

    // Pop up
    var popup = '<h3>' + prop.bestFit + '</h3><div>' + '<small class="quiet"> Leaders:</small><br />' + prop.leaders;

    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';

    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.innerHTML = '<h1>' + prop.bestFit + '</h1>';
    if (prop.groupTitle) {
      link.innerHTML += '<br /><small class="quiet"> Leaders:</small><br />';
    //D-group pop up contents
      popup += '<br /><br /><small class="quiet">Location:</small><br />' + prop.city + '<br /><br /><small class="quiet">Meeting Time:</small><br />' + prop.meetingTime + '<br /><br /><small class="quiet">Best Fit:</small><br />' + prop.bestFit + '<br /><br /><small class="quiet">Frequency:</small><br />' + prop.frequency + '<div></div>' + '<br /><br /><a class="group-page" href"'+ prop.groupPage +'">MORE DETAILS</a><br /><br />';
    }
    //D-group sidebar list contents
    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.leaders;
    if (prop.groupTitle) {
      details.innerHTML += '<br /><br /><small class="quiet"> Location:</small><br />' + prop.city +'<br /><br /><small class="quiet"> Meeting Time:</small><br />' + prop.meetingTime + '<br />';
    }

    link.onclick = function() {
      setActive(listing);

      // Center map upon click
      map.setView(locale.getLatLng(), 12);
      locale.openPopup();
      return false;
    };

    // Marker interaction
    locale.on('click', function(e) {
      // 1. center the map on the selected marker.
      map.panTo(locale.getLatLng());

      // 2. Set active the markers associated listing.
      setActive(listing);
    });

    popup += '</div>';
    locale.bindPopup(popup);

    locale.setIcon(L.icon({
      iconUrl: 'img/marker.png',
      iconSize: [56, 56],
      iconAnchor: [28, 28],
      popupAnchor: [0, -34]
    }));

})
});