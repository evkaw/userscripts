// ==UserScript==
// @name         Disable Mouse Inputs for BilingualManga
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disabling mouse inpuits except if hovering over OCR text. Essential to not accidentally changing pages on an accidental click.
// @author       evka#3365
// @match        https://bilingualmanga.net/manga/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilingualmanga.net
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function disableMouseInputs(event) {
    const targetElement = event.target;
    const isHoveredOverOCRText = targetElement.classList.contains('ocrtext');

    if (isHoveredOverOCRText || targetElement.closest('.ocrtext')) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  function attachEventListeners() {
    document.addEventListener('mousedown', disableMouseInputs, true);
    document.addEventListener('mouseup', disableMouseInputs, true);
    document.addEventListener('click', disableMouseInputs, true);
    document.addEventListener('contextmenu', disableMouseInputs, true);
    document.addEventListener('dblclick', disableMouseInputs, true);
    document.addEventListener('wheel', disableMouseInputs, true);
  }

  function enableMouseover(event) {
    const targetElement = event.target;
    const isHoveredOverOCRText = targetElement.classList.contains('ocrtext');

    if (!isHoveredOverOCRText && !targetElement.closest('.ocrtext')) {
      targetElement.style.pointerEvents = 'auto';
    }
  }

  function attachMouseoverListener() {
    document.addEventListener('mouseover', enableMouseover, true);
  }

  attachEventListeners();
  attachMouseoverListener();
})();