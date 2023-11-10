// ==UserScript==
// @name         Move IMDB Ratings to the Bottom of the Page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Moves the IMDB score to the bottom of the page. Don't judge movies and/or TV shows by their ratings, and form your own opinion instead.
// @author       evkaw
// @match        https://www.imdb.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=imdb.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to move the element to the bottom
    function moveElementToBottom() {
        const targetElement = document.querySelector('.sc-bde20123-1.iZlgcd');
        if (targetElement) {
            // Detach the element from its current position
            const parentElement = targetElement.parentElement;
            parentElement.removeChild(targetElement);

            // Append the element to the bottom of the document's body
            document.body.appendChild(targetElement);
        }
    }

    // Call the moveElementToBottom function
    moveElementToBottom();
})();
