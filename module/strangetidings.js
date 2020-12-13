import {strangetidings} from "./module/config.js"
import StrangeTidingsItemSheet from "./sheets/strangetidings-item-sheet.js";

Hooks.once("init", function(){
    console.log("strangetidings - Initializing Strange Tidings System");

    CONFIG.strangetidings = strangetidings;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("strangetidings", StrangeTidingsItemSheet, { makeDefault: true });
});
