function initMap() {
    const Regreen = { lat: -6.082320, lng: 106.608352 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: Regreen,
    });
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Regreen</h1>' +
      '<div id="bodyContent">' +
      "<b>ReGreen<b> is a digital information system service in the organic waste logistics " +
      "chain which aims to increase the efficiency of the entire organic waste management process. " +
      "With the main focus on distributing organic waste from various sources such as housing, restaurants and others." +
      "ReGreen facilitates accurate monitoring and tracking of organic waste flows from starting point to final destination.  " +
      "Information regarding the volume, type and location of origin of organic waste can be accessed easily, " +
      "thereby enabling better decision making in managing the organic waste chain.  " +
      "</div>" +
      "</div>";
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "Regreen",
    });
    const marker = new google.maps.Marker({
      position: Regreen,
      map,
      title: "Regreen",
    });
  
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  }
  
  window.initMap = initMap;