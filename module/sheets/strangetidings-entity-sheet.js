export default class StrangeTidingsEntitySheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "systems/strangetidings/templates/sheets/entity-sheet.html",
            classes: ["strangetidings", "sheet", "entity"]
        });
    }
}
