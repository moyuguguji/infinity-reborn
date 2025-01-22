onEvent('recipes', event => {
	event.shaped(Item.of('kubejs:kreska').withNBT('{swa3:{POISON:{bonusDmg:16.5f,dur:16.5f},FIRE:{bonusDmg:12f,dur:15f},COLD:{bonusDmg:9f,freezeDur:15f,slowDur:15f}}}').enchant("extra_enchantments:reach", 1).enchant("spectrum:pest_control", 1), [
		' DB',
		' AE',
		'C E'
	], {
		A: 'gobber2:gobber2_rod_nether',
		B: 'minecraft:nether_star',
		C: 'bosses_of_mass_destruction:charged_ender_pearl',
		D: 'minecraft:netherite_ingot',
		E: 'mythicmetals:metallurgium_ingot'
	})
})



onEvent("lootjs", (event) => {
	event
		.addBlockLootModifier("#c:ores")
		.matchMainHand(Item.of("kubejs:kreska").ignoreNBT())
		.not(n => n.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')))
		.randomChance(0.05)
		.addWeightedLoot([1, 2], [
			Item.of("mythicmetals:metallurgium_nugget").withChance(0.0005),
			Item.of("mythicmetals:celestium_nugget").withChance(0.0005),
			Item.of("mythicmetals:hallowed_nugget").withChance(1),
			Item.of("mythicmetals:kyber_nugget").withChance(5),
			Item.of("mythicmetals:durasteel_nugget").withChance(5),
			Item.of("mythicmetals:banglum_nugget").withChance(5),
			Item.of("mythicmetals:adamantite_nugget").withChance(15),
			Item.of("mythicmetals:aquarium_nugget").withChance(15),
			Item.of("mythicmetals:bronze_nugget").withChance(15),
			Item.of("mythicmetals:carmot_nugget").withChance(15),
			Item.of("mythicmetals:copper_nugget").withChance(15),
			Item.of("mythicmetals:manganese_nugget").withChance(15),
			Item.of("mythicmetals:midas_gold_nugget").withChance(15),
			Item.of("mythicmetals:mythril_nugget").withChance(15),
			Item.of("mythicmetals:orichalcum_nugget").withChance(15),
			Item.of("mythicmetals:palladium_nugget").withChance(15),
			Item.of("mythicmetals:platinum_nugget").withChance(15),
			Item.of("mythicmetals:prometheum_nugget").withChance(15),
			Item.of("mythicmetals:quadrillum_nugget").withChance(15),
			Item.of("mythicmetals:runite_nugget").withChance(15),
			Item.of("mythicmetals:silver_nugget").withChance(15),
			Item.of("mythicmetals:star_platinum_nugget").withChance(15),
			Item.of("mythicmetals:steel_nugget").withChance(15),
			Item.of("mythicmetals:stormyx_nugget").withChance(15),
			Item.of("mythicmetals:stormyx_nugget").withChance(15),
		])
})