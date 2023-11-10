// ==UserScript==
// @name         (WIP) Permanently Block Netflix for the day after Given Amount of Time
// @match        *://www.netflix.com/*
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Displays the Netflix website as a blank page if more than a given amount of time is spent on the website.
// @author       evkaw
// @icon         https://www.google.com/s2/favicons?sz=64&domain=netflix.com
// @grant        none
// ==/UserScript==

const start = Date.now();

function blockNetflix() {
    const elements = document.getElementsByTagName('h2');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.textContent === 'Home') {
            element.parentElement.style.display = 'none';
            break;
        }
    }
}

if (Date.now() - start >= 20) { // 1 hour in milliseconds
    blockNetflix();
}
