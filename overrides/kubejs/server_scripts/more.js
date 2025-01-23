onEvent('recipes', event => {

	event.custom({
		type: 'lychee:item_burning',
		item_in: {
			tag: 'logs_that_burn'
		},
		post: {
			type: 'drop_item',
			item: 'charcoal'
		}
	})

	event.custom({
		type: 'lychee:item_burning',
		item_in: {
			item: 'minecraft:saddle'
		},
		post: {
			type: 'drop_item',
			item: 'minecraft:leather',
			count: 3
		}
	})

	event.custom({
		type: 'lychee:block_interacting',
		item_in: {
			item: 'kubejs:red_packet'
		},
		block_in: '*',
		post: [{
				type: 'drop_item',
				item: 'numismatic-overhaul:gold_coin',
				count: 1,
			},
			{
				type: 'drop_item',
				item: 'numismatic-overhaul:gold_coin',
				count: 4,
				"contextual": {
					"type": "chance",
					"chance": 0.01
				}
			}
		]
	})

	event.custom({
		type: 'lychee:block_interacting',
		item_in: {
			item: 'kubejs:firecracker'
		},
		block_in: '*',
		post: {
			type: 'execute',
			command: '/summon minecraft:tnt ~ ~ ~ {Fuse:60}'
		}
	})

	event.custom({
		type: 'lychee:item_burning',
		item_in: {
			item: 'minecraft:stick'
		},
		post: {
			type: 'drop_item',
			item: 'minecraft:torch'
		}
	})

	event.custom({
		type: 'lychee:item_inside',
		item_in: {
			item: 'minecraft:bucket'
		},
		block_in: {
			blocks: ['water_cauldron'],
			state: {
				level: 3
			}
		},
		post: [{
				type: 'drop_item',
				item: 'water_bucket'
			},
			{
				type: 'place',
				block: 'cauldron'

			}
		]
	})

	event.custom({
		"type": "lychee:lightning_channeling",
		"post": [{
			"type": "execute",
			"command": "fill ~-1 ~-1 ~-1 ~1 ~1 ~1 soulsweapons:crimson_obsidian replace minecraft:obsidian"
		}]
	})

	event.custom({

		"type": "spectrum:anvil_crushing",
		"ingredient": {
			"item": "minecraft:dragon_egg"
		},
		"crushedItemsPerPointOfDamage": 10,
		"experience": 0.0,
		"result": {
			"item": "dragonloot:dragon_scale",
			"count": 3
		},
		"particleEffectIdentifier": "dragon_breath",
		"particleCount": 3,
		"soundEventIdentifier": "block.stone.break"

	})
})