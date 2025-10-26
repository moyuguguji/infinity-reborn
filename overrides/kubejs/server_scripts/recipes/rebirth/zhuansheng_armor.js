onEvent('recipes', event => {
	Ingredient.of('#c:armor').getItemIds().forEach(element => {
        event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{MAX_HEALTH:{bonusMaxHP:5f}}}'), 'kubejs:upgrade_life', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:15f}}}'), 'kubejs:upgrade_defence', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:20f},MAX_HEALTH:{bonusMaxHP:10f}}}'), 'kubejs:upgrade_nami', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:1armor').getItemIds().forEach(element => {
       event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{MAX_HEALTH:{bonusMaxHP:5f}}}'), 'kubejs:upgrade_life', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:15f}}}'), 'kubejs:upgrade_defence', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:20f},MAX_HEALTH:{bonusMaxHP:10f}}}'), 'kubejs:upgrade_nami', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:2armor').getItemIds().forEach(element => {
       event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{MAX_HEALTH:{bonusMaxHP:5f}}}'), 'kubejs:upgrade_life', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:15f}}}'), 'kubejs:upgrade_defence', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:20f},MAX_HEALTH:{bonusMaxHP:10f}}}'), 'kubejs:upgrade_nami', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:3armor').getItemIds().forEach(element => {
       event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{MAX_HEALTH:{bonusMaxHP:5f}}}'), 'kubejs:upgrade_life', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:15f}}}'), 'kubejs:upgrade_defence', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:20f},MAX_HEALTH:{bonusMaxHP:10f}}}'), 'kubejs:upgrade_nami', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:4armor').getItemIds().forEach(element => {
       event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{MAX_HEALTH:{bonusMaxHP:5f}}}'), 'kubejs:upgrade_life', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:15f}}}'), 'kubejs:upgrade_defence', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:20f},MAX_HEALTH:{bonusMaxHP:10f}}}'), 'kubejs:upgrade_nami', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:5armor').getItemIds().forEach(element => {
       event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{MAX_HEALTH:{bonusMaxHP:5f}}}'), 'kubejs:upgrade_life', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:15f}}}'), 'kubejs:upgrade_defence', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:20f},MAX_HEALTH:{bonusMaxHP:10f}}}'), 'kubejs:upgrade_nami', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:5helmet').getItemIds().forEach(element => {
       event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{MAX_HEALTH:{bonusMaxHP:5f}}}'), 'kubejs:upgrade_life', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:15f}}}'), 'kubejs:upgrade_defence', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:20f},MAX_HEALTH:{bonusMaxHP:10f}}}'), 'kubejs:upgrade_nami', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:5chestplate').getItemIds().forEach(element => {
       event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{MAX_HEALTH:{bonusMaxHP:5f}}}'), 'kubejs:upgrade_life', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:15f}}}'), 'kubejs:upgrade_defence', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:20f},MAX_HEALTH:{bonusMaxHP:10f}}}'), 'kubejs:upgrade_nami', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:5leggings').getItemIds().forEach(element => {
       event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{MAX_HEALTH:{bonusMaxHP:5f}}}'), 'kubejs:upgrade_life', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:15f}}}'), 'kubejs:upgrade_defence', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:20f},MAX_HEALTH:{bonusMaxHP:10f}}}'), 'kubejs:upgrade_nami', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:5boots').getItemIds().forEach(element => {
       event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{MAX_HEALTH:{bonusMaxHP:5f}}}'), 'kubejs:upgrade_life', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:15f}}}'), 'kubejs:upgrade_defence', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:unique_armor"},saa1:{DMG_REDUCTION:{dmgReduc:20f},MAX_HEALTH:{bonusMaxHP:10f}}}'), 'kubejs:upgrade_nami', Item.of(element).ignoreNBT())
    });

})