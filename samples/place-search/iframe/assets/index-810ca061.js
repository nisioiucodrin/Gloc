(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let i,l,a;function f(){const o=new google.maps.LatLng(-33.867,151.195);a=new google.maps.InfoWindow,i=new google.maps.Map(document.getElementById("map"),{center:o,zoom:15});const r={query:"Museum of Contemporary Art Australia",fields:["name","geometry"]};l=new google.maps.places.PlacesService(i),l.findPlaceFromQuery(r,(n,s)=>{if(s===google.maps.places.PlacesServiceStatus.OK&&n){for(let e=0;e<n.length;e++)m(n[e]);i.setCenter(n[0].geometry.location)}})}function m(o){if(!o.geometry||!o.geometry.location)return;const r=new google.maps.Marker({map:i,position:o.geometry.location});google.maps.event.addListener(r,"click",()=>{a.setContent(o.name||""),a.open(i)})}window.initMap=f;