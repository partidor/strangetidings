export default class StrangeTidingsItemSheet extends ItemSheet {

    get template()
    {
        return `systems/strangetidings/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData()
    {
        const data = super.getData();

        data.config = CONFIG.strangetidings;

        return data;
    }
}
