// ==UserScript==
// @name         Go Fullscreen on YouTube Automatically
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Goes fullscreen whenever you click on a YouTube video. Sit back and enjoy!
// @author       evkaw
// @match        https://www.youtube.com/watch*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
setTimeout(function(){
var refreshBtn = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-fullscreen-button.ytp-button")
var clickEvent = document.createEvent ('MouseEvents');
clickEvent.initEvent ('click', true, true);
refreshBtn.dispatchEvent (clickEvent);
}, 5000);
}, false);