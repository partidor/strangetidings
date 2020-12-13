import {strangetidings} from "./module/config.js"
import StrangeTidingsItemSheet from "./module/sheets/strangetidings-item-sheet.js";
import StrangeTidingsEntitySheet from "./module/sheets/strangetidings-entity-sheet.js";

async function preloadHandlebarTemplates() {
    const templatePaths = [
        "systems/strangetidings/templates/partials/character-info-box.html",
        "systems/strangetidings/templates/partials/character-class-box.html",
        "systems/strangetidings/templates/partials/character-stats-box.html",
        "systems/strangetidings/templates/partials/character-skills-box.html",
        "systems/strangetidings/templates/partials/character-resources-box.html",
        "systems/strangetidings/templates/partials/character-actions-box.html",
        "systems/strangetidings/templates/partials/character-spells-box.html",
        "systems/strangetidings/templates/partials/character-boons-box.html",
        "systems/strangetidings/templates/partials/character-inventory-box.html",
    ];
};

Hooks.once("init", function(){
    console.log("strangetidings - Initializing Strange Tidings System");

    CONFIG.strangetidings = strangetidings;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("strangetidings-item-sheet", StrangeTidingsItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("strangetidings-actor-sheet", StrangeTidingsEntitySheet, { makeDefault: true });
    
    preloadHandlebarsTemplates();
});
