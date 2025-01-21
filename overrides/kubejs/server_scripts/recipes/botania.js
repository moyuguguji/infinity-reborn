onEvent('recipes', event => {

	event.custom({
		type: "botania:terra_plate",
		"mana": 10000,
		"ingredients": [{
				"item": 'soulsweapons:crimson_obsidian'
			},
			{
				"item": 'spirit:soul_powder'
			},
			{
				"item": 'botania:mana_powder'
			},
			{
				"item": 'kibe:cursed_droplets'
			},
			{
				"item": 'kubejs:spectral_silt'
			},
			{
				"item": 'waystones:warp_dust'
			}
		],
		"result": {
			"item": 'infinity:special_handlingof_glowing_obsidian'
		}


	})

	event.shaped('explorerscompass:explorerscompass', [
		'BAB',
		'ACA',
		'BAB'
	], {
		A: 'botania:elementium_ingot',
		B: 'botania:mana_string',
		C: 'the_bumblezone:honey_compass'
	})

	event.custom({
		type: "botania:terra_plate",
		"mana": 1000000,
		"ingredients": [{
				"item": 'bosses_of_mass_destruction:charged_ender_pearl'
			},
			{
				"item": 'adventurez:prime_eye'
			},
			{
				"item": 'twilightforest:naga_trophy'
			},
			{
				"item": 'twilightforest:lich_trophy'
			},
			{
				"item": 'twilightforest:minoshroom_trophy'
			},
			{
				"item": 'twilightforest:hydra_trophy'
			},
			{
				"item": 'twilightforest:knight_phantom_trophy'
			},
			{
				"item": 'twilightforest:ur_ghast_trophy'
			},
			{
				"item": 'twilightforest:alpha_yeti_trophy'
			},
			{
				"item": 'twilightforest:snow_queen_trophy'
			},
			{
				"item": 'twilightforest:cube_talisman'
			}
		],
		"result": {
			"item": 'soulsweapons:chaos_orb'
		}
	})

	onEvent('recipes', event => {
		event.custom({
			type: "botania:runic_altar",
			"output": {
				"item": 'kubejs:shining_star'
			},
			"mana": 100000,
			"ingredients": [{
					"item": 'minecraft:nether_star'
				},
				{
					"item": 'soulsweapons:lord_soul_void'
				},
				{
					"item": 'soulsweapons:lord_soul_rose'
				},
				{
					"item": 'soulsweapons:lord_soul_purple'
				},
				{
					"item": 'soulsweapons:lord_soul_dark'
				},
				{
					"item": 'soulsweapons:lord_soul_red'
				},
				{
					"item": 'soulsweapons:lord_soul_white'
				},
				{
					"item": 'gobber2:dragon_star'
				},
				{
					"item": 'mythicmetals:celestium_ingot'
				}
			]
		})
	})
})

onEvent('recipes', event => {
	event.custom({
		type: "botania:runic_altar",
		"output": {
			"item": 'botania:terra_sword'
		},
		"mana": 100000,
		"ingredients": [{
				"item": 'botania:terrasteel_ingot'
			},
			{
				"item": 'botania:terrasteel_ingot'
			},
			{
				"item": 'minecraft:nether_star'
			},
			{
				"item": 'gobber2:gobber2_ingot'
			},
			{
				"item": 'terrarianslimes:king_slime_ball'
			},
			{
				"item": 'botania:gaia_ingot'
			}
		]
	})

})
onEvent('recipes', event => {
	event.custom({
		type: "botania:runic_altar",
		"output": {
			"item": 'botania:gaia_ingot'
		},
		"mana": 50000,
		"ingredients": [{
				"item": 'botania:terrasteel_ingot'
			},
			{
				"item": 'botania:life_essence'
			},
			{
				"item": 'botania:life_essence'
			}
		]
	})

})
onEvent('recipes', event => {
	event.custom({
		id: "botania:petal_apothecary/entropinnyum",
		type: "botania:petal_apothecary",
		"output": {
			"item": 'botania:entropinnyum'
		},
		"ingredients": [{
				"item": 'botania:rune_wrath'
			},
			{
				"item": 'botania:rune_fire'
			},
			{
				"item": 'botania:rune_mana'
			},
			{
				"item": 'mythicmetals:banglum_tnt'
			},
			{
				"item": 'mythicmetals:banglum_tnt'
			},
			{
				"item": 'botania:red_petal'
			},
			{
				"item": 'botania:red_petal'
			}
		]
	})

})
onEvent('recipes', event => {
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:orange_log"
		},
		"output": {
			"item": "spectrum:orange_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:white_log"
		},
		"output": {
			"item": "spectrum:white_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:magenta_log"
		},
		"output": {
			"item": "spectrum:magenta_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:light_blue_log"
		},
		"output": {
			"item": "spectrum:light_blue_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:yellow_log"
		},
		"output": {
			"item": "spectrum:yellow_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:lime_log"
		},
		"output": {
			"item": "spectrum:lime_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:pink_log"
		},
		"output": {
			"item": "spectrum:pink_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:gray_log"
		},
		"output": {
			"item": "spectrum:gray_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:light_gray_log"
		},
		"output": {
			"item": "spectrum:light_gray_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:cyan_log"
		},
		"output": {
			"item": "spectrum:cyan_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:purple_log"
		},
		"output": {
			"item": "spectrum:purple_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:blue_log"
		},
		"output": {
			"item": "spectrum:blue_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:brown_log"
		},
		"output": {
			"item": "spectrum:brown_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:green_log"
		},
		"output": {
			"item": "spectrum:green_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:red_log"
		},
		"output": {
			"item": "spectrum:red_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "spectrum:black_log"
		},
		"output": {
			"item": "spectrum:black_pigment",
			"count": 2
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "staffofbuilding:infinite_builder_staff"
		},
		"output": {
			"item": "wands:creative_wand",
			"count": 1
		},
		"mana": 1000000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:spectral_shard_storage_block"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "minecraft:nether_star"
		},
		"output": {
			"item": "mythicmetals:unobtainium",
			"count": 1
		},
		"mana": 1000000,
		"catalyst": {
			"type": "block",
			"block": "botania:creative_pool"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "adventurez:source_stone"
		},
		"output": {
			"item": "mythicmetals:unobtainium",
			"count": 1
		},
		"mana": 1000000,
		"catalyst": {
			"type": "block",
			"block": "spectrum:cracked_end_portal_frame"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "minecraft:glass_bottle"
		},
		"output": {
			"item": "minecraft:dragon_breath",
			"count": 1
		},
		"mana": 1000,
		"catalyst": {
			"type": "block",
			"block": "minecraft:dragon_egg"
		}
	})
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
			"item": "minecraft:wheat_seeds"
		},
		"output": {
			"item": "kibe:cursed_seeds",
			"count": 1
		},
		"mana": 500,
		"catalyst": {
			"type": "block",
			"block": "kibe:cursed_dirt"
		}
	})
	event.custom({
		type: "spectrum:fusion_shrine",
		"time": 500,
		"experience": 5000.0,
		"fluid": "spectrum:liquid_crystal",
		"ingredients": [{
				"item": 'botania:fabulous_pool',
				"count": 1
			},
			{
				"item": 'botania:gaia_ingot',
				"count": 32
			},
			{
				"item": 'botania:dragonstone_block',
				"count": 32
			},
			{
				"item": 'botania:blacker_lotus',
				"count": 16
			},
			{
				"item": 'spectrum:spectral_shard_storage_block',
				"count": 32
			},
			{
				"item": 'botania:overgrowth_seed',
				"count": 16
			},
			{
				"item": 'botania:pixie_dust',
				"count": 64
			}
		],
		"result": {
			"item": 'botania:creative_pool'
		},
		"required_advancement": "spectrum:create_onyx_shard",
		"start_crafting_effect": "nothing",
		"during_crafting_effects": [
			"visual_explosions_on_shrine"
		],
		"finish_crafting_effect": "lightning_on_shrine",
	})
})