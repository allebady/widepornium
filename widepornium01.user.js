// ==UserScript==
// @name         Widepornium 0.1
// @description Widens the Emponium page
// @version      0.1.1
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

addGlobalStyle('#content { max-width: 1920px; !important; }');
addGlobalStyle('#wrapper { max-width: 1920px; !important; }');
addGlobalStyle('.details.thin { width: 98% !important; }');
addGlobalStyle('.main_column { width: 75% !important; }');
addGlobalStyle('.details .main_column, #requests .main_column { width: 98% !important; }');
addGlobalStyle('.middle_column { width: 75% !important; }');
addGlobalStyle('.sidebar { width: 23% !important; }');


})();
