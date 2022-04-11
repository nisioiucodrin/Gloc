/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_disable_zoom_and_pan]
function initMap() {
  const locationRio = { lat: -22.915, lng: -43.197 };
  // [START maps_disable_zoom_and_pan_script_snippet]
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: locationRio,
    gestureHandling: "none",
    zoomControl: false,
  });

  // [END maps_disable_zoom_and_pan_script_snippet]
  new google.maps.Marker({
    position: locationRio,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;
// [END maps_disable_zoom_and_pan]
