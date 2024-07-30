// ==UserScript==
// @name         Widepornium
// @description Widens the Emponium page
// @version      0.2.1
// @author       Allebady
// @match http://*.empornium.me/*
// @match https://*.empornium.me/*
// @match http://empornium.me/*
// @match https://empornium.me/*
// @match http://*.empornium.is/*
// @match https://*.empornium.is/*
// @match http://empornium.is/*
// @match https://empornium.is/*
// @match http://*.empornium.sx/*
// @match https://*.empornium.sx/*
// @match http://empornium.sx/*
// @match https://empornium.sx/*
// @exclude /https?://www\.empornium\.(me|sx|is)/upload\.php.*/
// @grant       GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('#content { max-width: 2560px; width: 95%; !important; }');
addGlobalStyle('#wrapper { max-width: 2560px; width: 95%; !important; }');
addGlobalStyle('.thin { width: 98% !important; }');
addGlobalStyle('.details.thin { width: 98% !important; }');
addGlobalStyle('.main_column { width: 69% !important; }');
addGlobalStyle('.details .main_column, #requests .main_column { width: 100% !important; }');
addGlobalStyle('.middle_column { width: 69% !important; }');
addGlobalStyle('.sidebar { max-width: 450px; width: 30% !important; }');


})();
