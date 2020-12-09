/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class StrangeTidingsActor extends Actor {

  /**
   * Augment the basic actor data with additional dynamic data.
   */
  prepareData() {
    super.prepareData();

    const actorData = this.data;
    const data = actorData.data;
    const flags = actorData.flags;

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    if (actorData.type === 'entity') this._prepareCharacterData(actorData);
  }

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
    const data = actorData.data;

    // Make modifications to data here. For example:

    // Set hitpoint max based off of hitdie count
    data.resources.hitpoints.max = data.resources.hitdie.size *
    data.resources.hitdie.value;

    for (let [key, core] of Object.entries(data.core)) {
        switch (key) {
            case "vulnerabilities":
                break;
            case "resistances":
                break;
            case "weaponsize":
                break;
            case "speed":
                break;
            case "critrange":
                break;
            case "ac":
                core.mod = Math.floor((data.skills.stealth.mod +
                data.skills.survival.mod) / 2) + 10 + core.bonus;
                break;
            case "bc":
                core.mod = data.skills.perception.mod + 10 + core.bonus;
                break;
            case "wc":
                core.mod = data.skills.nature.mod + 10 + core.bonus;
                break;
            case "guardbonus":
                if (data.stats.grit.mod > 2)
                {
                    core.mod = data.stats.grit.mod + core.bonus;
                }
                else
                {
                    core.mod = 2 + core.bonus;
                }
                break;
            case "parrybonus":
                if (data.stats.grit.mod > 2)
                {
                    core.mod = data.stats.grit.mod + core.bonus;
                }
                else
                {
                    core.mod = 2 + core.bonus;
                }
                break;
            case "attackbonus":
                if (data.stats.brawn.mod > 0 && data.stats.guile.mod > 0)
                {
                    core.mod = data.stats.brawn.mod + data.stats.guile.mod + core.bonus;
                }
                else if (data.stats.guile.mod > data.stats.brawn.mod)
                {
                    core.mod = data.stats.guile.mod + core.bonus;
                }
                else
                {
                    core.mod = data.stats.brawn.mod + core.bonus;
                }
                break;
            case "initiative":
                core.mod = data.skills.chicanery.mod + core.bonus;
                break;
            case "sneakattack":
                break;
        }
    }

    for (let [key, stat] of Object.entries(data.stats)) {
      // Do nothing for now.
    }

    for (let [key, skill] of Object.entries(data.skills)) {
        switch (key) {
            case "athletics":
                skill.mod = data.stats.brawn.mod + data.stats.guile.mod +
                skill.bonus;
                break;
            case "charisma":
                skill.mod = data.stats.grit.mod + data.stats.weird.mod +
                skill.bonus;
                break;
            case "chicanery":
                skill.mod = data.stats.guile.mod + data.stats.weird.mod +
                skill.bonus;
                break;
            case "investigation":
                skill.mod = data.stats.brain.mod + data.stats.grit.mod +
                skill.bonus;
                break;
            case "lore":
                skill.mod = data.stats.brain.mod + data.stats.weird.mod +
                skill.bonus;
                break;
            case "nature":
                skill.mod = data.stats.brawn.mod + data.stats.weird.mod +
                skill.bonus;
                break;
            case "perception":
                skill.mod = data.stats.guile.mod + data.stats.brain.mod +
                skill.bonus;
                break;
            case "stealth":
                skill.mod = data.stats.guile.mod + data.stats.grit.mod +
                skill.bonus;
                break;
            case "survival":
                skill.mod = data.stats.brawn.mod + data.stats.grit.mod +
                skill.bonus;
                break;
            case "talent":
                skill.mod = data.stats.brawn.mod + data.stats.brain.mod +
                skill.bonus;
                break;
        }
    }
  }

}
