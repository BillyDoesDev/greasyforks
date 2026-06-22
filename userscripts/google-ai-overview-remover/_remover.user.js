// ==UserScript==
// @name         Google AI Overview Remover
// @namespace    http://tampermonkey.net/
// @version      2026-06-22
// @description  Remove the annoying google AI Overview
// @author       BillyDoesDev
// @match        https://www.google.com/search?*
// @updateURL    https://raw.githubusercontent.com/BillyDoesDev/greasyforks/main/userscripts/google-ai-overview-remover/meta.js
// @downloadURL  https://raw.githubusercontent.com/BillyDoesDev/greasyforks/main/userscripts/google-ai-overview-remover/_remover.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("🐒 at ", location.href)
    const timer = setInterval(() => {
        const aiOverviews = document.querySelectorAll("div[data-mcp]")
        if (aiOverviews.length > 0) {
            clearInterval(timer)
            aiOverviews.forEach(e=>{
                // e.style.display = "none"
                e.remove()
                console.log("🐒 nuked", e)
            })
        }
    }, 500)

})();
