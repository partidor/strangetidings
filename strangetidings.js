import {strangetidings} from "./module/config.js"
import StrangeTidingsItemSheet from "./module/sheets/strangetidings-item-sheet.js";
import StrangeTidingsEntitySheet from "./module/sheets/strangetidings-entity-sheet.js";

async function preloadHandlebarTemplates() {
    const templatePaths = [
        "./templates/partials/character-info-box.html",
        "./templates/partials/character-class-box.html",
        "./templates/partials/character-stats-box.html",
        "./templates/partials/character-skills-box.html",
        "./templates/partials/character-resources-box.html",
        "./templates/partials/character-actions-box.html",
        "./templates/partials/character-spells-box.html",
        "./templates/partials/character-boons-box.html",
        "./templates/partials/character-inventory-box.html",
    ];
};

Hooks.once("init", function(){
    console.log("strangetidings - Initializing Strange Tidings System");

    CONFIG.strangetidings = strangetidings;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("strangetidings", StrangeTidingsItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("strangetidings", StrangeTidingsEntitySheet, { makeDefault: true });
    
    preloadHandlebarTemplates();
});
