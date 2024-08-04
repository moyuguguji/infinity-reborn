onEvent('recipes', event => {
event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "minecraft:blast_furnace",
    "count": 1
    },
    {
    "item": "mythicmetals:adamantite_block",
    "count": 2
    },
    {
    "item": "twilightforest:fiery_ingot",
    "count": 8
    },
    {
    "item": "mythicmetals:adamantite_ingot",
    "count": 10
    },
    ],
    'output': {
    'id': 'alloy_forgery:adamantite_block_forge_controller',
    'count': 1
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 120
})
event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "minecraft:ancient_debris",
    "count": 2
    },
    ],
    'output': {
    'id': 'minecraft:netherite_scrap',
    'count': 2
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 120
})
event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "mythicmetals:carmot_nuke_core",
    "count": 1
    },
    {
    "item": "mythicmetals:metallurgium_block",
    "count": 1
    },
    {
    "item": "mythicmetals:hallowed_block",
    "count": 3
    },
    {
    "item": "dragonloot:dragon_scale",
    "count": 4
    },
    {
    "item": "minecraft:end_stone_bricks",
    "count": 32
    },
    ],
    'output': {
    'id': 'alloy_forgery:end_stone_bricks_forge_controller',
    'count': 1
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 500
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "alloy_forgery:adamantite_block_forge_controller",
    "count": 1
    },
    {
    "item": "mythicmetals:carmot_nuke_core",
    "count": 1
    },
    {
    "item": "mythicmetals:unobtainium_block",
    "count": 3
    },
    {
    "item": "mythicmetals:aquarium_pearl",
    "count": 10
    },
    {
    "item": "minecraft:obsidian",
    "count": 64
    },
    ],
    'output': {
    'id': 'alloy_forgery:unobtainium_block_forge_controller',
    'count': 1
    },
    'min_forge_tier': 4,
    'fuel_per_tick': 3000
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "minecraft:deepslate_bricks",
    "count": 32
    },
    {
    "item": "twilightforest:raw_ironwood",
    "count": 8
    },
    {
    "item": "mythicmetals:raw_adamantite_block",
    "count": 1
    },
    ],
    'output': {
    'id': 'kubejs:adamantite_brick',
    'count': 8
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 100
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "minecraft:deepslate_bricks",
    "count": 8
    },
    {
    "item": "twilightforest:raw_ironwood",
    "count": 1
    },
    {
    "item": "mythicmetals:raw_adamantite",
    "count": 2
    },
    ],
    'output': {
    'id': 'kubejs:adamantite_brick',
    'count': 1
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 60
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "mythicmetals:raw_banglum_block",
    "count": 64
    },
    ],
    'output': {
    'id': 'mythicmetals:banglum_chunk',
    'count': 1
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 800
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "mythicmetals:aquarium_block",
    "count": 50
    },
    ],
    'output': {
    'id': 'mythicmetals:aquarium_pearl',
    'count': 1
    },
    'min_forge_tier': 4,
    'fuel_per_tick': 1500
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "mythicmetals:raw_stormyx_block",
    "count": 40
    },
    ],
    'output': {
    'id': 'mythicmetals:stormyx_shell',
    'count': 1
    },
    'min_forge_tier': 5,
    'fuel_per_tick': 5000
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "minecraft:coal",
    "count": 64
    },
    ],
    'output': {
    'id': 'minecraft:diamond',
    'count': 1
    },
    'min_forge_tier': 5,
    'fuel_per_tick': 100
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "minecraft:amethyst_shard",
    "count": 1
    },
    {
    "item": "mythicmetals:silver_ingot",
    "count": 1
    },
    {
    "item": "minecraft:gold_ingot",
    "count": 1
    },
    ],
    'output': {
    'id': 'kubejs:ametrine_crystal',
    'count': 1
    },
    'overrides': {
    "3": {
      "id": 'kubejs:ametrine_crystal',
      "count": 2
    },
    "4": {
      "id": 'kubejs:ametrine_crystal',
      "count": 4
    },
    "5+": {
     "id": 'kubejs:ametrine_crystal',
     "count": 8
    }
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 2
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "mythicmetals:morkite",
    "count": 6
    },
    {
    "item": "minecraft:amethyst_shard",
    "count": 3
    },
    {
    "item": "minecraft:diamond",
    "count": 2
    },
    {
    "item": "minecraft:emerald",
    "count": 1
    },
    ],
    'output': {
    'id': 'kubejs:strong_fossil',
    'count': 1
    },
    'overrides': {
    "3": {
      "id": 'kubejs:strong_fossil',
      "count": 2
    },
    "4": {
      "id": 'kubejs:strong_fossil',
      "count": 4
    },
    "5+": {
     "id": 'kubejs:strong_fossil',
     "count": 8
    }
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 6
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "minecraft:redstone",
    "count": 4
    },
    {
    "item": "minecraft:lapis_lazuli",
    "count": 3
    },
    {
    "item": "minecraft:diamond",
    "count": 1
    },
    {
    "item": "mythicmetals:raw_banglum",
    "count": 1
    },
    ],
    'output': {
    'id': 'kubejs:crystal_tiered',
    'count': 1
    },
    'overrides': {
    "3": {
      "id": 'kubejs:crystal_tiered',
      "count": 2
    },
    "4": {
      "id": 'kubejs:crystal_tiered',
      "count": 4
    },
    "5+": {
     "id": 'kubejs:crystal_tiered',
     "count": 8
    }
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 6
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "dragonloot:dragon_scale",
    "count": 5
    },
    {
    "item": "mythicmetals:unobtainium_block",
    "count": 4
    },
    {
    "item": "adventurez:stone_golem_heart",
    "count": 2
    },
    {
    "item": "bosses_of_mass_destruction:obsidian_heart",
    "count": 1
    },
    {
    "item": "minecraft:stone_sword",
    "count": 1
    },
    {
    "item": "gateofbabylon:stone_broadsword",
    "count": 1
    },
    {
    "item": "gateofbabylon:stone_katana",
    "count": 1
    },
    {
    "item": "gateofbabylon:stone_rapier",
    "count": 1
    },
    {
    "item": "gateofbabylon:stone_dagger",
    "count": 1
    },
    {
    "item": "gateofbabylon:stone_haladie",
    "count": 1
    },

    ],
    'output': {
    'id': 'kubejs:putong_stone_sword',
    'count': 1
    },
    'min_forge_tier': 5,
    'fuel_per_tick': 10000
})
event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "twilightforest:glass_sword",
    "count": 1
    },
    {
    "item": "mcdw:sword_dark_katana",
    "count": 1
    },
    {
    "item": "kubejs:bloody_tear",
    "count": 16
    },
    {
    "item": "kubejs:upgrade_lifesteal",
    "count": 2
    },
    {
    "item": "kubejs:upgrade_life",
    "count": 5
    },
    {
    "item": "mythicmetals:metallurgium_ingot",
    "count": 16
    },
    {
    "item": "spectrum:scarlet_gem",
    "count": 16
    },
    {
    "item": "spectrum:bloodboil_syrup",
    "count": 16
    },
    {
    "item": "ringsofascension:ring_health",
    "count": 1
    },
    {
    "item": "artifacts:crystal_heart",
    "count": 1
    },

    ],
    'output': {
    'id': 'kubejs:jian_li',
    'count': 1
    },
    'min_forge_tier': 5,
    'fuel_per_tick': 50000
})
event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "kubejs:spectral_silt",
    "count": 16
    },
    {
    "item": "minecraft:nether_star",
    "count": 8
    },
    {
    "item": "gobber2:gobber2_medallion_nether",
    "count": 6
    },
    {
    "item": "bosses_of_mass_destruction:blazing_eye",
    "count": 4
    },
    {
    "item": "soulsweapons:lord_soul_white",
    "count": 1
    },
    ],
    'output': {
    'id': 'kubejs:upgrade_defence',
    'count': 1
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 1000
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "kubejs:spectral_silt",
    "count": 16
    },
    {
    "item": "minecraft:nether_star",
    "count": 8
    },
    {
    "item": "gobber2:gobber2_medallion_nether",
    "count": 6
    },
    {
    "item": "bosses_of_mass_destruction:crystal_fruit",
    "count": 8
    },
    {
    "item": "soulsweapons:lord_soul_red",
    "count": 1
    },
    ],
    'output': {
    'id': 'kubejs:upgrade_lifesteal',
    'count': 1
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 1000
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "kubejs:spectral_silt",
    "count": 16
    },
    {
    "item": "minecraft:nether_star",
    "count": 8
    },
    {
    "item": "gobber2:gobber2_medallion_nether",
    "count": 6
    },
    {
    "item": "bosses_of_mass_destruction:ancient_anima",
    "count": 4
    },
    {
    "item": "soulsweapons:lord_soul_void",
    "count": 1
    },
    ],
    'output': {
    'id': 'kubejs:upgrade_crit',
    'count': 1
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 1000
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "kubejs:spectral_silt",
    "count": 4
    },
    {
    "item": "gobber2:gobber2_medallion",
    "count": 4
    },
    {
    "item": "twilightforest:ice_bomb",
    "count": 10
    },
    {
    "item": "twilightforest:alpha_yeti_trophy",
    "count": 1
    },
    {
    "item": "twilightforest:snow_queen_trophy",
    "count": 1
    },
    ],
    'output': {
    'id': 'kubejs:upgrade_frost',
    'count': 1
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 400
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "kubejs:spectral_silt",
    "count": 4
    },
    {
    "item": "gobber2:gobber2_medallion",
    "count": 4
    },
    {
    "item": "twilightforest:fiery_ingot",
    "count": 8
    },
    {
    "item": "twilightforest:ur_ghast_trophy",
    "count": 1
    },
    {
    "item": "twilightforest:hydra_trophy",
    "count": 1
    },
    ],
    'output': {
    'id': 'kubejs:upgrade_fire',
    'count': 1
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 400
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "kubejs:spectral_silt",
    "count": 4
    },
    {
    "item": "gobber2:gobber2_medallion",
    "count": 4
    },
    {
    "item": "twilightforest:naga_scale",
    "count": 10
    },
    {
    "item": "twilightforest:naga_trophy",
    "count": 1
    },
    {
    "item": "twilightforest:lich_trophy",
    "count": 1
    },
    ],
    'output': {
    'id': 'kubejs:upgrade_poison',
    'count': 1
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 400
})

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
    {
    "item": "kubejs:spectral_silt",
    "count": 4
    },
    {
    "item": "gobber2:gobber2_medallion",
    "count": 4
    },
    {
    "item": "twilightforest:ironwood_ingot",
    "count": 16
    },
    {
    "item": "twilightforest:knight_phantom_trophy",
    "count": 1
    },
    {
    "item": "twilightforest:minoshroom_trophy",
    "count": 1
    },
    ],
    'output': {
    'id': 'kubejs:upgrade_life',
    'count': 1
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 400
})

})