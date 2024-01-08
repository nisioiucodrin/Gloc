(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */const f=[{stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry",stylers:[{visibility:"on"},{color:"#fcfcfc"}]},{featureType:"water",elementType:"geometry",stylers:[{visibility:"on"},{color:"#bfd4ff"}]}];let r,a=Number.MAX_VALUE,c=-Number.MAX_VALUE;function m(){r=new google.maps.Map(document.getElementById("map"),{center:{lat:40,lng:-100},zoom:4,styles:f}),r.data.setStyle(b),r.data.addListener("mouseover",v),r.data.addListener("mouseout",h);const t=document.getElementById("census-variable");google.maps.event.addDomListener(t,"change",()=>{g(),y(t.options[t.selectedIndex].value)}),p()}function p(){r.data.loadGeoJson("https://storage.googleapis.com/mapsdevsite/json/states.js",{idPropertyName:"STATE"}),google.maps.event.addListenerOnce(r.data,"addfeature",()=>{google.maps.event.trigger(document.getElementById("census-variable"),"change")})}function y(t){const n=new XMLHttpRequest;n.open("GET",t+".json"),n.onload=function(){const i=JSON.parse(n.responseText);i.shift(),i.forEach(l=>{const e=parseFloat(l[0]),o=l[1];e<a&&(a=e),e>c&&(c=e);const s=r.data.getFeatureById(o);s&&s.setProperty("census_variable",e)}),document.getElementById("census-min").textContent=a.toLocaleString(),document.getElementById("census-max").textContent=c.toLocaleString()},n.send()}function g(){a=Number.MAX_VALUE,c=-Number.MAX_VALUE,r.data.forEach(t=>{t.setProperty("census_variable",void 0)}),document.getElementById("data-box").style.display="none",document.getElementById("data-caret").style.display="none"}function b(t){const n=[5,69,54],i=[151,83,34],l=(t.getProperty("census_variable")-a)/(c-a),e=[];for(let d=0;d<3;d++)e.push((i[d]-n[d])*l+n[d]);let o=!0;(t.getProperty("census_variable")==null||isNaN(t.getProperty("census_variable")))&&(o=!1);let s=.5,u=1;return t.getProperty("state")==="hover"&&(s=u=2),{strokeWeight:s,strokeColor:"#fff",zIndex:u,fillColor:"hsl("+e[0]+","+e[1]+"%,"+e[2]+"%)",fillOpacity:.75,visible:o}}function v(t){t.feature.setProperty("state","hover");const n=(t.feature.getProperty("census_variable")-a)/(c-a)*100;document.getElementById("data-label").textContent=t.feature.getProperty("NAME"),document.getElementById("data-value").textContent=t.feature.getProperty("census_variable").toLocaleString(),document.getElementById("data-box").style.display="block",document.getElementById("data-caret").style.display="block",document.getElementById("data-caret").style.paddingLeft=n+"%"}function h(t){t.feature.setProperty("state","normal")}window.initMap=m;