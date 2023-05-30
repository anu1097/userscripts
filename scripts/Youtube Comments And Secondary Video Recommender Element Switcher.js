// ==UserScript==
// @name         Youtube Comments And Secondary Video Recommender Element Switcher
// @namespace    http://your-namespace.com
// @version      1.0.3
// @description  Switches the positions of two elements on a web page
// @match        *://*.youtube.com/*
// @grant        none
// @author       Anuraag Gupta
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    function switchElements(element1, element2) {
        // Get the parent node of both elements
        var parent1 = element1.parentNode;
        var parent2 = element2.parentNode;

        // Get the next sibling of both elements
        var next1 = element1.nextSibling;
        var next2 = element2.nextSibling;

        // Swap the positions of the elements by inserting them in their new positions
        parent1.insertBefore(element2, next1);
        parent2.insertBefore(element1, next2);
    }
    // Wait for the document to be fully loaded
    window.addEventListener('load', function() {
        console.log("testing anuraag's script");
        setTimeout(function() {
            var comments = document.getElementById('comments'); // Replace 'element1' with the ID of your first element
            var secondary = document.getElementById('secondary'); // Replace 'element2' with the ID of your second element

            if (comments && secondary) {
                switchElements(comments, secondary);
                secondary.style = "width:100%";
                // Youtube uses hardcoded px for video tags. This seemed easier for Mac's screeen
                comments.style = "width:426px; height: 100vh;overflow: auto;";

            } else {
                console.error('One or both of the elements could not be found.');
            }
        }, 1000); // Adjust the delay (in milliseconds) as needed
    })
})();