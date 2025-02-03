onEvent('item.modification', event => {
	event.modify('twilightforest:ice_sword', item => {
		item.maxDamage = 600
	})

	event.modify('twilightforest:block_and_chain', item => {
		item.maxDamage = 1000
	})

	event.modify('twilightforest:glass_sword', item => {
		item.maxDamage = 120
		item.setAttackDamage(28)
		item.fireResistant = true
	})

	event.modify('twilightforest:ore_magnet', item => {
		item.maxDamage = 500
		item.fireResistant = true
	})

	event.modify(["twilightforest:giant_sword", "twilightforest:giant_pickaxe"], item => {
		item.maxDamage = 4000
		item.fireResistant = true
	})

	event.modify(["twilightforest:fiery_sword", "twilightforest:fiery_pickaxe"], item => {
		item.maxDamage = 2000
		item.fireResistant = true
	})

	event.modify(["twilightforest:triple_bow", "twilightforest:seeker_bow"], item => {
		item.maxDamage = 6000
		item.fireResistant = true
	})

	event.modify(["mcdw:sword_frost_slayer", "mcdw:spear_whispering_spear", "mcdw:sickle_skull_scythe",
			"mcdw:sword_masters_katana"
		],
		item => {
			item.maxDamage = 3000
		})
	event.modify(["mcdw:sword_obsidian_claymore", "mcdw:sword_dark_katana", "mcdw:sword_sinister",
			"mcdw:hammer_suns_grace", "mcdw:sickle_skull_scythe", "mcdw:spear_grave_bane", "mcdw:sickle_soul_scythe"
		],
		item => {
			item.maxDamage = 4000
		})
	event.modify(["mcdw:sword_the_starless_night", "mcdw:dagger_swift_striker", "mcdw:dagger_the_beginning",
			"mcdw:dagger_the_end"
		],
		item => {
			item.maxDamage = 6900
		})

	event.modify('mcdw:crossbow_burst_crossbow', item => {
		item.maxDamage = 900
	})
	event.modify('mcdw:crossbow_shadow_crossbow', item => {
		item.maxDamage = 1900
	})
	event.modify('mcdw:crossbow_soul_hunter_crossbow', item => {
		item.maxDamage = 1900
	})
	event.modify('mcdw:crossbow_corrupted_crossbow', item => {
		item.maxDamage = 3000
	})
	event.modify('mcdw:crossbow_veiled_crossbow', item => {
		item.maxDamage = 5900
	})

	event.modify('mcdw:crossbow_dual_crossbow', item => {
		item.maxDamage = 800
	})
	event.modify('mcdw:crossbow_spellbound_crossbow', item => {
		item.maxDamage = 1750
	})
	event.modify('mcdw:crossbow_baby_crossbow', item => {
		item.maxDamage = 2700
	})
	event.modify('mcdw:crossbow_lightning_harp_crossbow', item => {
		item.maxDamage = 5450
	})

	event.modify('mcdw:crossbow_heavy_crossbow', item => {
		item.maxDamage = 700
	})
	event.modify('mcdw:crossbow_slayer_crossbow', item => {
		item.maxDamage = 1600
	})
	event.modify('mcdw:crossbow_doom_crossbow', item => {
		item.maxDamage = 2400
	})
	event.modify(["mcdw:crossbow_imploding_crossbow", "mcdw:crossbow_pride_of_the_piglins"], item => {
		item.maxDamage = 5000
	})

	event.modify(["gobber2:gobber2_helmet_dragon", "gobber2:gobber2_chestplate_dragon", "gobber2:gobber2_leggings_dragon", "gobber2:gobber2_boots_dragon"], item => {
		item.maxDamage = 9999
	})
	event.modify('botania:terra_sword', item => {
		item.maxDamage = 50000
		item.fireResistant = true
	})
})