// ==UserScript==
// @name         Pixelplace++ Lite
// @namespace    pxp_pp-lite-bababoy
// @version      1.0
// @description  Lite version of Pixelplace++
// @author       Bababoy
// @match        https://pixelplace.io/7-pixels-world-war
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pixelplace.io
// @grant        none
// @run-at       document-start
// ==/UserScript==

const parse = window.JSON.parse;
window.JSON.parse = function(str) {
    const parsed = parse(str);
    if (parsed.user) {
        parsed.user.premium.active = true;
        parsed.user.premium.expire_at = Number.MAX_SAFE_INTEGER;
        parsed.user.rainbowTime = Number.MAX_SAFE_INTEGER;
    }
    return parsed;
}
