import {strangetidings} from "./module/config.js"
import StrangeTidingsItemSheet from "./module/sheets/strangetidings-item-sheet.js";

Hooks.once("init", function(){
    console.log("strangetidings - Initializing Strange Tidings System");

    CONFIG.strangetidings = strangetidings;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("strangetidings", StrangeTidingsItemSheet, { makeDefault: true });
});
