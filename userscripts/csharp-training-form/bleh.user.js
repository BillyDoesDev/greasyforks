// ==UserScript==
// @name         C# Form Filler Thingy
// @namespace    https://github.com/BillyDoesDev
// @version      2025-05-26
// @description  try to take over the world!
// @author       BillyDoesDev
// @match        https://docs.google.com/forms*
// @updateURL    https://raw.githubusercontent.com/BillyDoesDev/greasyforks/main/userscripts/csharp-training-form/meta.js
// @downloadURL  https://raw.githubusercontent.com/BillyDoesDev/greasyforks/main/userscripts/csharp-training-form/bleh.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    addEventListener("load", main() )

})();

function main() {

    if (!document.querySelector("form").querySelector("div[role=heading]").textContent.includes("C# & .NET Training")) return;

    const config = {
        "name": "John Doe",
        "email": "johndoe@email.com",
        "mob": "69696969",
        "college": "PissPot Uni",
        "stream": "B.Tech., CSE",
        "loc": "Ross Island",
        "feed": "Get Help.",
    }

    const form_items = document.querySelector("form").querySelectorAll("div[role=listitem]")

    for (const item of form_items) {
        let heading = item.querySelector("div[role=heading]").textContent.toLowerCase()
        let input = item.querySelector("input") || item.querySelector("textarea")

        for (const key in config) {
            if (heading.includes(key)) {
                input.value = config[key]
                input.dispatchEvent(new Event('input', {bubbles: true}));
                continue;
            }
        }

        let radio = item.querySelector("div[role=radiogroup]")
        if (radio) {
            let rating = radio.querySelectorAll("div[role=radio]")[3]
            rating.ariaDisabled = false
            rating.ariaChecked = true
            rating.click()
            console.log(rating)
            rating.dispatchEvent( new Event("change", {bubbles: true}) )
        }
    }
    console.log("Form filled! :D")

}
