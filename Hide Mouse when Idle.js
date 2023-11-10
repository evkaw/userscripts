// ==UserScript==
// @name         Hide Mouse when Idle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides your cursor when a given amount of time passes while your mouse is idle on any website. Get rid of a simple distraction if you have no reason to be using it. Useful for reading, watching content, etc.
// @author       evkaw
// @match        
// @icon         
// @grant        none
// ==/UserScript==

// The number of milliseconds your mouse has to be idle before it is hidden
// Default: 500
var WAIT_TIME = 1000;

// The number of milliseconds between each time the script checks if you are idle
// (This can probably stay at the default honestly)
// Default: 100
var CHECK_FREQ = 100;

(function() {
    var lastmove;
    window.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        lastmove = +new Date();
        document.body.style.cursor = 'auto';
    }
    setInterval(function() {
        if (+new Date() - lastmove >= WAIT_TIME) {
            document.body.style.cursor = 'none';
        }
    }, CHECK_FREQ);
})();