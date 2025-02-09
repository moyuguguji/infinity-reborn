onEvent('recipes', event => {
	event.shapeless('minecraft:flint', ['minecraft:gravel', 'minecraft:gravel', 'minecraft:gravel']) //燧石
	event.shapeless('kibe:angel_ring', ['ringsofascension:ring_flight'])
	event.shapeless('9x minecraft:nether_wart', ['minecraft:nether_wart_block'])
	event.shapeless('4x minecraft:amethyst_shard', ['minecraft:amethyst_block'])
	event.shapeless('4x spectrum:topaz_shard', ['spectrum:topaz_block'])
	event.shapeless('4x spectrum:citrine_shard', ['spectrum:citrine_block'])
	event.shapeless('kubejs:jiushu_heart', ['4x kubejs:jiushu_heart_shard'])

	//event.smithing(Item.of('kubejs:infinity_sword').withNBT('{Unbreakable:1}') ,'kubejs:infinity_sword_a', 'kubejs:infinity_sword_b')

	let multiSmelt = (output, input, includeBlasting) => {
		event.smelting(output, input).xp(0.5)

		if (includeBlasting) {
			event.blasting(output, input).xp(0.5)
		}
	}

	let armorBurning = (output, input, num) => {
		event.custom({
			type: 'lychee:item_burning',
			item_in: {
				item: input
			},
			post: {
				type: 'drop_item',
				item: output,
				count: num
			}
		})
	}

	armorBurning('minecraft:iron_ingot', 'minecraft:iron_helmet', 1)
	armorBurning('minecraft:iron_ingot', 'minecraft:iron_chestplate', 2)
	armorBurning('minecraft:iron_ingot', 'minecraft:iron_leggings', 2)
	armorBurning('minecraft:iron_ingot', 'minecraft:iron_boots', 1)
	armorBurning('minecraft:iron_ingot', 'minecraft:bucket', 1)
	armorBurning('minecraft:iron_nugget', 'minecraft:iron_bars', 1)
	armorBurning('minecraft:iron_ingot', 'minecraft:anvil', 4)
	armorBurning('minecraft:iron_ingot', 'minecraft:chipped_anvil', 3)
	armorBurning('minecraft:iron_ingot', 'minecraft:damaged_anvil', 2)
	armorBurning('minecraft:iron_ingot', 'minecraft:iron_door', 1)
	armorBurning('minecraft:iron_ingot', 'minecraft:iron_trapdoor', 1)
	armorBurning('minecraft:iron_ingot', 'minecraft:iron_sword', 1)
	armorBurning('minecraft:iron_nugget', 'minecraft:iron_shovel', 4)
	armorBurning('minecraft:iron_ingot', 'minecraft:iron_pickaxe', 1)
	armorBurning('minecraft:iron_ingot', 'minecraft:iron_axe', 1)
	armorBurning('minecraft:iron_ingot', 'minecraft:iron_hoe', 1)
	armorBurning('minecraft:iron_ingot', 'minecraft:iron_horse_armor', 1)

	armorBurning('minecraft:gold_ingot', 'minecraft:golden_helmet', 1)
	armorBurning('minecraft:gold_ingot', 'minecraft:golden_chestplate', 2)
	armorBurning('minecraft:gold_ingot', 'minecraft:golden_leggings', 2)
	armorBurning('minecraft:gold_ingot', 'minecraft:golden_boots', 1)
	armorBurning('minecraft:gold_ingot', 'minecraft:golden_sword', 1)
	armorBurning('minecraft:gold_nugget', 'minecraft:golden_shovel', 4)
	armorBurning('minecraft:gold_ingot', 'minecraft:golden_pickaxe', 1)
	armorBurning('minecraft:gold_ingot', 'minecraft:golden_axe', 1)
	armorBurning('minecraft:gold_ingot', 'minecraft:golden_hoe', 1)
	armorBurning('minecraft:gold_ingot', 'minecraft:golden_horse_armor', 1)
	armorBurning('minecraft:gold_ingot', 'minecraft:golden_apple', 1)
	armorBurning('minecraft:gold_block', 'minecraft:enchanted_golden_apple', 1)


	armorBurning('minecraft:diamond', 'minecraft:diamond_helmet', 1)
	armorBurning('minecraft:diamond', 'minecraft:diamond_chestplate', 2)
	armorBurning('minecraft:diamond', 'minecraft:diamond_leggings', 2)
	armorBurning('minecraft:diamond', 'minecraft:diamond_boots', 1)
	armorBurning('minecraft:diamond', 'minecraft:diamond_sword', 1)
	armorBurning('kubejs:diamond_shard', 'minecraft:diamond_shovel', 4)
	armorBurning('minecraft:diamond', 'minecraft:diamond_pickaxe', 1)
	armorBurning('minecraft:diamond', 'minecraft:diamond_axe', 1)
	armorBurning('minecraft:diamond', 'minecraft:diamond_hoe', 1)
	armorBurning('minecraft:diamond', 'minecraft:diamond_horse_armor', 1)

	armorBurning('minecraft:copper_ingot', 'treeaxe:copper_treeaxe', 3)
	armorBurning('minecraft:gold_ingot', 'treeaxe:gold_treeaxe', 3)
	armorBurning('minecraft:iron_ingot', 'treeaxe:iron_treeaxe', 3)
	armorBurning('minecraft:emerald', 'treeaxe:emerald_treeaxe', 3)
	armorBurning('minecraft:diamond', 'treeaxe:diamond_treeaxe', 3)

	armorBurning('minecraft:leather', 'minecraft:leather_helmet', 1)
	armorBurning('minecraft:leather', 'minecraft:leather_chestplate', 2)
	armorBurning('minecraft:leather', 'minecraft:leather_leggings', 2)
	armorBurning('minecraft:leather', 'minecraft:leather_boots', 1)

	armorBurning('minecraft:iron_ingot', 'minecraft:chainmail_helmet', 1)
	armorBurning('minecraft:iron_ingot', 'minecraft:chainmail_chestplate', 2)
	armorBurning('minecraft:iron_ingot', 'minecraft:chainmail_leggings', 2)
	armorBurning('minecraft:iron_ingot', 'minecraft:chainmail_boots', 1)

	armorBurning('minecraft:leather', 'minecraft:rotten_flesh', 1)

	armorBurning('minecraft:iron_ingot', 'gateofbabylon:iron_dagger', 1)
	armorBurning('minecraft:iron_ingot', 'gateofbabylon:iron_spear', 1)
	armorBurning('minecraft:iron_ingot', 'gateofbabylon:iron_broadsword', 2)
	armorBurning('minecraft:iron_ingot', 'gateofbabylon:iron_rapier', 1)
	armorBurning('minecraft:iron_ingot', 'gateofbabylon:iron_haladie', 1)
	armorBurning('minecraft:iron_ingot', 'gateofbabylon:iron_waraxe', 1)
	armorBurning('minecraft:iron_ingot', 'gateofbabylon:iron_katana', 1)
	armorBurning('minecraft:iron_ingot', 'gateofbabylon:iron_bow', 1)
	armorBurning('minecraft:iron_ingot', 'gateofbabylon:iron_shield', 2)
	armorBurning('minecraft:iron_ingot', 'gateofbabylon:iron_boomerang', 2)

	armorBurning('minecraft:gold_ingot', 'gateofbabylon:golden_dagger', 1)
	armorBurning('minecraft:gold_ingot', 'gateofbabylon:golden_spear', 1)
	armorBurning('minecraft:gold_ingot', 'gateofbabylon:golden_broadsword', 2)
	armorBurning('minecraft:gold_ingot', 'gateofbabylon:golden_rapier', 1)
	armorBurning('minecraft:gold_ingot', 'gateofbabylon:golden_haladie', 1)
	armorBurning('minecraft:gold_ingot', 'gateofbabylon:golden_waraxe', 1)
	armorBurning('minecraft:gold_ingot', 'gateofbabylon:golden_katana', 1)
	armorBurning('minecraft:gold_ingot', 'gateofbabylon:golden_bow', 1)
	armorBurning('minecraft:gold_ingot', 'gateofbabylon:golden_shield', 2)
	armorBurning('minecraft:gold_ingot', 'gateofbabylon:golden_boomerang', 2)

	armorBurning('minecraft:diamond', 'gateofbabylon:diamond_dagger', 1)
	armorBurning('minecraft:diamond', 'gateofbabylon:diamond_spear', 1)
	armorBurning('minecraft:diamond', 'gateofbabylon:diamond_broadsword', 1)
	armorBurning('minecraft:diamond', 'gateofbabylon:diamond_rapier', 1)
	armorBurning('minecraft:diamond', 'gateofbabylon:diamond_haladie', 1)
	armorBurning('minecraft:diamond', 'gateofbabylon:diamond_waraxe', 1)
	armorBurning('minecraft:diamond', 'gateofbabylon:diamond_katana', 1)
	armorBurning('minecraft:diamond', 'gateofbabylon:diamond_bow', 1)
	armorBurning('minecraft:diamond', 'gateofbabylon:diamond_shield', 2)
	armorBurning('minecraft:diamond', 'gateofbabylon:diamond_boomerang', 2)

	multiSmelt('minecraft:netherite_scrap', 'gateofbabylon:netherite_dagger', true)
	multiSmelt('minecraft:netherite_scrap', 'gateofbabylon:netherite_spear', true)
	multiSmelt('minecraft:netherite_scrap', 'gateofbabylon:netherite_broadsword', true)
	multiSmelt('minecraft:netherite_scrap', 'gateofbabylon:netherite_rapier', true)
	multiSmelt('minecraft:netherite_scrap', 'gateofbabylon:netherite_haladie', true)
	multiSmelt('minecraft:netherite_scrap', 'gateofbabylon:netherite_waraxe', true)
	multiSmelt('minecraft:netherite_scrap', 'gateofbabylon:netherite_katana', true)
	multiSmelt('minecraft:netherite_scrap', 'gateofbabylon:netherite_bow', true)
	multiSmelt('minecraft:netherite_scrap', 'gateofbabylon:netherite_shield', true)
	multiSmelt('minecraft:netherite_scrap', 'gateofbabylon:netherite_boomerang', true)


	multiSmelt('minecraft:netherite_scrap', 'treeaxe:netherite_treeaxe', true)

	event.shaped('morevillagers:purpur_altar', [
		'ADA',
		'BCB',
		'BBB'
	], {
		A: 'minecraft:purpur_block',
		B: 'betterend:flavolite_bricks',
		C: 'minecraft:dragon_head',
		D: 'enderscape:nebulite'
	})

	event.shaped('minecraft:amethyst_cluster', [
		' A ',
		'ABA',
		'   '
	], {
		A: 'minecraft:amethyst_shard',
		B: 'the_bumblezone:honey_crystal_shards'
	})

	event.shaped('farmersdelight:cooking_pot', [
		'ABA',
		'CDC',
		'CCC'
	], {
		A: 'minecraft:brick',
		B: Item.of('minecraft:iron_shovel').ignoreNBT(),
		C: 'minecraft:iron_ingot',
		D: 'minecraft:water_bucket'
	})
	event.remove({
		output: 'farmersdelight:cooking_pot'
	})

	event.shaped('kubejs:skill_bottle', [
		' B ',
		'BAB',
		' B '
	], {
		A: 'minecraft:experience_bottle',
		B: 'minecraft:lapis_lazuli'
	})

	event.shaped('minecraft:experience_bottle', [
		'CBC',
		'BAB',
		'CBC'
	], {
		A: 'minecraft:glass_bottle',
		B: 'minecraft:lapis_block',
		C: 'minecraft:honeycomb'
	})

	event.shaped('botania:thunder_sword', [
		'  D',
		'BC ',
		'AB '
	], {
		A: 'gobber2:gobber2_rod_end',
		B: 'spectrum:lightning_stone',
		C: 'botania:mana_diamond',
		D: 'botania:elementium_ingot'
	})
})

onEvent('recipes', event => {
	event.shaped(Item.of('kubejs:crude_pickaxe', '{Damage:0}'), [
		'AAA',
		' B ',
		' B '
	], {
		A: 'minecraft:flint',
		B: 'minecraft:stick'
	})

	event.shaped(Item.of('kubejs:crude_axe', '{Damage:0}'), [
		' AA',
		' BA',
		' B '
	], {
		A: 'minecraft:flint',
		B: 'minecraft:stick'
	})

	event.shaped(Item.of('kubejs:crude_spade', '{Damage:0}'), [
		' A ',
		' B ',
		' B '
	], {
		A: 'minecraft:flint',
		B: 'minecraft:stick'
	})

	event.shaped('origins:orb_of_origin', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: 'minecraft:nether_star',
		B: 'botania:ender_air_bottle',
		C: 'botania:gaia_ingot',
		D: 'minecraft:dragon_egg'
	})

	event.custom({
		type: "botania:runic_altar",
		"output": {
			"item": 'minecraft:elytra'
		},
		"mana": 10000,
		"ingredients": [{
				"item": 'minecraft:phantom_membrane'
			},
			{
				"item": 'minecraft:phantom_membrane'
			},
			{
				"item": 'minecraft:phantom_membrane'
			},
			{
				"item": 'minecraft:phantom_membrane'
			},
			{
				"item": 'botania:mana_pearl'
			},
			{
				"item": 'botania:mana_powder'
			},
			{
				"item": 'botania:mana_powder'
			},
			{
				"item": 'botania:terrasteel_ingot'
			}

		]
	})

	event.shaped('kibe:iron_spikes', [
		' A ',
		'ABA',
		'   '
	], {
		A: Item.of('minecraft:iron_sword').ignoreNBT(),
		B: 'minecraft:iron_block'
	})

	event.shaped('things:hardening_catalyst', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: 'spectrum:bedrock_dust',
		B: 'mythicmetals:unobtainium',
		C: 'enderscape:nebulite',
		D: 'minecraft:nether_star'
	})

	event.shaped('infinity:sculk_core', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: 'kubejs:spectral_silt',
		B: 'soulsweapons:lord_soul_void',
		C: 'bosses_of_mass_destruction:void_thorn',
		D: 'mcda:upgrade_core'
	})

	event.shaped('heartytrinkets:wither_rib', [
		' AB',
	], {
		A: 'kibe:cursed_droplets',
		B: 'minecraft:bone'
	})

	event.shaped('victus:golden_heart_aspect', [
		'CBC',
		'BAB',
		'CBC'
	], {
		A: 'victus:blank_heart_aspect',
		B: 'minecraft:enchanted_golden_apple',
		C: 'minecraft:gold_ingot'
	})
	event.shaped('the_bumblezone:honey_compass', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: 'minecraft:compass',
		B: 'the_bumblezone:pollen_puff',
	})
	event.shaped('terrarianslimes:slime_crown', [
		' A ',
		'CBC',
		'CCC'
	], {
		A: 'terrarianslimes:gold_crown',
		B: 'kubejs:paolude_xiaxin',
		C: '#c:slime_blocks'
	})
	event.shaped('kubejs:paolude_xiaxin', [
		' B ',
		'AAA',
		'AAA'
	], {
		A: 'minecraft:porkchop',
		B: 'botania:cosmetic_cat_ears',
	})

	event.shaped('kubejs:snowstormcane', [
		' A ',
		'CAB',
		' A '
	], {
		A: 'minecraft:iron_ingot',
		B: 'minecraft:snowball',
		C: 'minecraft:blue_ice'
	})

	event.custom({
		type: 'alloy_forgery:forging',
		'inputs': [{
				'item': 'minecraft:copper_ingot'
			},
			{
				'item': 'soulsweapons:lost_soul'
			}
		],
		'output': {
			'id': 'xps:soul_copper_ingot',
			'count': 1
		},
		'min_forge_tier': 1,
		'fuel_per_tick': 100
	})
	event.custom({
		type: 'alloy_forgery:forging',
		'inputs': [{
				'item': 'twilightforest:fiery_blood'
			},
			{
				'item': 'twilightforest:fiery_ingot'
			},
			{
				'item': 'botania:blaze_block'
			}
		],
		'output': {
			'id': 'soulsweapons:crimson_ingot',
			'count': 1
		},
		'min_forge_tier': 2,
		'fuel_per_tick': 200
	})
})


onEvent('recipes', event => {
	event.shaped('kubejs:disintegration_tablet', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'mythicmetals:adamantite_ingot',
		B: 'minecraft:gold_ingot',
		C: 'minecraft:redstone_block'
	})
	event.shaped('things:empty_agglomeration', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'terrarianslimes:king_slime_ball',
		B: 'things:gleaming_compound',
		C: 'minecraft:netherite_block'
	}).id('things:empty_agglomeration')
})

onEvent('recipes', event => {
	event.shapeless('kubejs:bloody_tear', ['minecraft:ghast_tear', 'twilightforest:fiery_blood'])
})