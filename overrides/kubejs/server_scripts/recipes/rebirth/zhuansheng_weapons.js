onEvent('recipes', event => {
    Ingredient.of('#c:axes').getItemIds().forEach(element => {
        event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:13f,freezeDur:13f,slowDur:13f}}}'), 'kubejs:upgrade_frost', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{POISON:{bonusDmg:14f,dur:14f}}}'), 'kubejs:upgrade_poison', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_fire', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{CRIT:{critChance:1f}}}'), 'kubejs:upgrade_crit', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{LIFESTEAL:{lifesteal:25f}}}'), 'kubejs:upgrade_lifesteal', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:15f,freezeDur:15f,slowDur:15f},POISON:{bonusDmg:15f,dur:15f},FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_yuan', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{CRIT:{critChance:1f},LIFESTEAL:{lifesteal:30f}}}'), 'kubejs:upgrade_ren', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:20f,freezeDur:20f,slowDur:20f},POISON:{bonusDmg:20f,dur:20f},FIRE:{bonusDmg:20f,dur:20f},CRIT:{critChance:2f},LIFESTEAL:{lifesteal:50f}}}'), 'kubejs:upgrade_liuren', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#c:swords').getItemIds().forEach(element => {
        event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:13f,freezeDur:13f,slowDur:13f}}}'), 'kubejs:upgrade_frost', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{POISON:{bonusDmg:14f,dur:14f}}}'), 'kubejs:upgrade_poison', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_fire', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{CRIT:{critChance:1f}}}'), 'kubejs:upgrade_crit', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{LIFESTEAL:{lifesteal:25f}}}'), 'kubejs:upgrade_lifesteal', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:15f,freezeDur:15f,slowDur:15f},POISON:{bonusDmg:15f,dur:15f},FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_yuan', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{CRIT:{critChance:1f},LIFESTEAL:{lifesteal:30f}}}'), 'kubejs:upgrade_ren', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:20f,freezeDur:20f,slowDur:20f},POISON:{bonusDmg:20f,dur:20f},FIRE:{bonusDmg:20f,dur:20f},CRIT:{critChance:2f},LIFESTEAL:{lifesteal:50f}}}'), 'kubejs:upgrade_liuren', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:1weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:13f,freezeDur:13f,slowDur:13f}}}'), 'kubejs:upgrade_frost', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{POISON:{bonusDmg:14f,dur:14f}}}'), 'kubejs:upgrade_poison', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_fire', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{CRIT:{critChance:1f}}}'), 'kubejs:upgrade_crit', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{LIFESTEAL:{lifesteal:25f}}}'), 'kubejs:upgrade_lifesteal', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:15f,freezeDur:15f,slowDur:15f},POISON:{bonusDmg:15f,dur:15f},FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_yuan', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{CRIT:{critChance:1f},LIFESTEAL:{lifesteal:30f}}}'), 'kubejs:upgrade_ren', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:20f,freezeDur:20f,slowDur:20f},POISON:{bonusDmg:20f,dur:20f},FIRE:{bonusDmg:20f,dur:20f},CRIT:{critChance:2f},LIFESTEAL:{lifesteal:50f}}}'), 'kubejs:upgrade_liuren', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:2weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:13f,freezeDur:13f,slowDur:13f}}}'), 'kubejs:upgrade_frost', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{POISON:{bonusDmg:14f,dur:14f}}}'), 'kubejs:upgrade_poison', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_fire', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{CRIT:{critChance:1f}}}'), 'kubejs:upgrade_crit', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{LIFESTEAL:{lifesteal:25f}}}'), 'kubejs:upgrade_lifesteal', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:15f,freezeDur:15f,slowDur:15f},POISON:{bonusDmg:15f,dur:15f},FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_yuan', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{CRIT:{critChance:1f},LIFESTEAL:{lifesteal:30f}}}'), 'kubejs:upgrade_ren', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:20f,freezeDur:20f,slowDur:20f},POISON:{bonusDmg:20f,dur:20f},FIRE:{bonusDmg:20f,dur:20f},CRIT:{critChance:2f},LIFESTEAL:{lifesteal:50f}}}'), 'kubejs:upgrade_liuren', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:3weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:13f,freezeDur:13f,slowDur:13f}}}'), 'kubejs:upgrade_frost', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{POISON:{bonusDmg:14f,dur:14f}}}'), 'kubejs:upgrade_poison', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_fire', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{CRIT:{critChance:1f}}}'), 'kubejs:upgrade_crit', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{LIFESTEAL:{lifesteal:25f}}}'), 'kubejs:upgrade_lifesteal', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:15f,freezeDur:15f,slowDur:15f},POISON:{bonusDmg:15f,dur:15f},FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_yuan', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{CRIT:{critChance:1f},LIFESTEAL:{lifesteal:30f}}}'), 'kubejs:upgrade_ren', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:20f,freezeDur:20f,slowDur:20f},POISON:{bonusDmg:20f,dur:20f},FIRE:{bonusDmg:20f,dur:20f},CRIT:{critChance:2f},LIFESTEAL:{lifesteal:50f}}}'), 'kubejs:upgrade_liuren', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:4weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:13f,freezeDur:13f,slowDur:13f}}}'), 'kubejs:upgrade_frost', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{POISON:{bonusDmg:14f,dur:14f}}}'), 'kubejs:upgrade_poison', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_fire', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{CRIT:{critChance:1f}}}'), 'kubejs:upgrade_crit', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{LIFESTEAL:{lifesteal:25f}}}'), 'kubejs:upgrade_lifesteal', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:15f,freezeDur:15f,slowDur:15f},POISON:{bonusDmg:15f,dur:15f},FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_yuan', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{CRIT:{critChance:1f},LIFESTEAL:{lifesteal:30f}}}'), 'kubejs:upgrade_ren', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:20f,freezeDur:20f,slowDur:20f},POISON:{bonusDmg:20f,dur:20f},FIRE:{bonusDmg:20f,dur:20f},CRIT:{critChance:2f},LIFESTEAL:{lifesteal:50f}}}'), 'kubejs:upgrade_liuren', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:5weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:13f,freezeDur:13f,slowDur:13f}}}'), 'kubejs:upgrade_frost', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{POISON:{bonusDmg:14f,dur:14f}}}'), 'kubejs:upgrade_poison', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_fire', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{CRIT:{critChance:1f}}}'), 'kubejs:upgrade_crit', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{LIFESTEAL:{lifesteal:25f}}}'), 'kubejs:upgrade_lifesteal', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:15f,freezeDur:15f,slowDur:15f},POISON:{bonusDmg:15f,dur:15f},FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_yuan', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{CRIT:{critChance:1f},LIFESTEAL:{lifesteal:30f}}}'), 'kubejs:upgrade_ren', Item.of(element).ignoreNBT())
		event.smithing(Item.of(element).withNBT('{Tiered:{Tier:"tiered:legendary"},swa3:{COLD:{bonusDmg:20f,freezeDur:20f,slowDur:20f},POISON:{bonusDmg:20f,dur:20f},FIRE:{bonusDmg:20f,dur:20f},CRIT:{critChance:2f},LIFESTEAL:{lifesteal:50f}}}'), 'kubejs:upgrade_liuren', Item.of(element).ignoreNBT())
    });
	Ingredient.of('#kubejs:mu_jian').getItemIds().forEach(item => {
		event.smithing(Item.of(item).withNBT('{swa3:{COLD:{bonusDmg:13f,freezeDur:13f,slowDur:13f}}}'), 'kubejs:upgrade_frost', Item.of(item).ignoreNBT())
		event.smithing(Item.of(item).withNBT('{swa3:{POISON:{bonusDmg:14f,dur:14f}}}'), 'kubejs:upgrade_poison', Item.of(item).ignoreNBT())
		event.smithing(Item.of(item).withNBT('{swa3:{FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_fire', Item.of(item).ignoreNBT())
		event.smithing(Item.of(item).withNBT('{swa3:{CRIT:{critChance:1f}}}'), 'kubejs:upgrade_crit', Item.of(item).ignoreNBT())
		event.smithing(Item.of(item).withNBT('{swa3:{LIFESTEAL:{lifesteal:25f}}}'), 'kubejs:upgrade_lifesteal', Item.of(item).ignoreNBT())
		event.smithing(Item.of(item).withNBT('{swa3:{COLD:{bonusDmg:15f,freezeDur:15f,slowDur:15f},POISON:{bonusDmg:15f,dur:15f},FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_yuan', Item.of(item).ignoreNBT())
		event.smithing(Item.of(item).withNBT('{swa3:{CRIT:{critChance:1f},LIFESTEAL:{lifesteal:30f}}}'), 'kubejs:upgrade_ren', Item.of(item).ignoreNBT())
		event.smithing(Item.of(item).withNBT('{swa3:{COLD:{bonusDmg:20f,freezeDur:20f,slowDur:20f},POISON:{bonusDmg:20f,dur:20f},FIRE:{bonusDmg:20f,dur:20f},CRIT:{critChance:2f},LIFESTEAL:{lifesteal:50f}}}'), 'kubejs:upgrade_liuren', Item.of(item).ignoreNBT())
	});
	Ingredient.of('#kubejs:s_weapon').getItemIds().forEach(item => {
		event.smithing(Item.of(item).withNBT('{swa3:{COLD:{bonusDmg:13f,freezeDur:13f,slowDur:13f}}}'), 'kubejs:upgrade_frost', Item.of(item).ignoreNBT())
		event.smithing(Item.of(item).withNBT('{swa3:{POISON:{bonusDmg:14f,dur:14f}}}'), 'kubejs:upgrade_poison', Item.of(item).ignoreNBT())
		event.smithing(Item.of(item).withNBT('{swa3:{FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_fire', Item.of(item).ignoreNBT())
		event.smithing(Item.of(item).withNBT('{swa3:{CRIT:{critChance:1f}}}'), 'kubejs:upgrade_crit', Item.of(item).ignoreNBT())
		event.smithing(Item.of(item).withNBT('{swa3:{LIFESTEAL:{lifesteal:25f}}}'), 'kubejs:upgrade_lifesteal', Item.of(item).ignoreNBT())
		event.smithing(Item.of(item).withNBT('{swa3:{COLD:{bonusDmg:15f,freezeDur:15f,slowDur:15f},POISON:{bonusDmg:15f,dur:15f},FIRE:{bonusDmg:15f,dur:15f}}}'), 'kubejs:upgrade_yuan', Item.of(item).ignoreNBT())
		event.smithing(Item.of(item).withNBT('{swa3:{CRIT:{critChance:1f},LIFESTEAL:{lifesteal:30f}}}'), 'kubejs:upgrade_ren', Item.of(item).ignoreNBT())
		event.smithing(Item.of(item).withNBT('{swa3:{COLD:{bonusDmg:20f,freezeDur:20f,slowDur:20f},POISON:{bonusDmg:20f,dur:20f},FIRE:{bonusDmg:20f,dur:20f},CRIT:{critChance:2f},LIFESTEAL:{lifesteal:50f}}}'), 'kubejs:upgrade_liuren', Item.of(item).ignoreNBT())
	});
})