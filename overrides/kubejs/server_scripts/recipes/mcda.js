onEvent('recipes', event => {
    event.remove({output:'mcda:green_mystery_armor_helmet'})
    event.remove({output:'mcda:green_mystery_armor_chestplate'})
    event.remove({output:'mcda:green_mystery_armor_leggings'})
    event.remove({output:'mcda:green_mystery_armor_boots'})

    event.remove({output:'mcda:purple_mystery_armor_helmet'})
    event.remove({output:'mcda:purple_mystery_armor_chestplate'})
    event.remove({output:'mcda:purple_mystery_armor_leggings'})
    event.remove({output:'mcda:purple_mystery_armor_boots'})

    event.remove({output:'mcda:red_mystery_armor_helmet'})
    event.remove({output:'mcda:red_mystery_armor_chestplate'})
    event.remove({output:'mcda:red_mystery_armor_leggings'})
    event.remove({output:'mcda:red_mystery_armor_boots'})

    event.remove({output:'mcda:blue_mystery_armor_helmet'})
    event.remove({output:'mcda:blue_mystery_armor_chestplate'})
    event.remove({output:'mcda:blue_mystery_armor_leggings'})
    event.remove({output:'mcda:blue_mystery_armor_boots'})

    event.remove({output:'mcda:white_mystery_armor_helmet'})
    event.remove({output:'mcda:white_mystery_armor_chestplate'})
    event.remove({output:'mcda:white_mystery_armor_leggings'})
    event.remove({output:'mcda:white_mystery_armor_boots'})

    event.remove({output:'mcda:heros_armor_helmet'})
    event.remove({output:'mcda:heros_armor_chestplate'})
    event.remove({output:'mcda:heros_armor_leggings'})
    event.remove({output:'mcda:heros_armor_boots'})

    event.remove({output:'mcda:sturdy_shulker_armor_helmet'})
    event.remove({output:'mcda:sturdy_shulker_armor_chestplate'})
    event.remove({output:'mcda:sturdy_shulker_armor_leggings'})
    event.remove({output:'mcda:sturdy_shulker_armor_boots'})

    event.remove({output:'mcda:archers_helmet'})
    event.remove({output:'mcda:archers_chestplate'})
    event.remove({output:'mcda:archers_leggings'})
    event.remove({output:'mcda:archers_boots'})

    event.remove({output:'mcda:shadow_walker_armor_helmet'})
    event.remove({output:'mcda:shadow_walker_armor_chestplate'})
    event.remove({output:'mcda:shadow_walker_armor_leggings'})
    event.remove({output:'mcda:shadow_walker_armor_boots'})

    event.remove({output:'mcda:black_wolf_armor_helmet'})
    event.remove({output:'mcda:black_wolf_armor_chestplate'})
    event.remove({output:'mcda:black_wolf_armor_leggings'})
    event.remove({output:'mcda:black_wolf_armor_boots'})

    event.remove({output:'mcda:arctic_fox_armor_helmet'})
    event.remove({output:'mcda:arctic_fox_armor_chestplate'})
    event.remove({output:'mcda:arctic_fox_armor_leggings'})
    event.remove({output:'mcda:arctic_fox_armor_boots'})

    event.remove({output:'mcda:gourdian_armor_helmet'})
    event.remove({output:'mcda:gourdian_armor_chestplate'})
    event.remove({output:'mcda:gourdian_armor_leggings'})
    event.remove({output:'mcda:gourdian_armor_boots'})

    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_green",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_helmet",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 2
        },
        ],
        'output': {
        'id': 'mcda:green_mystery_armor_helmet',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 400
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_green",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_chestplate",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 4
        },
        ],
        'output': {
        'id': 'mcda:green_mystery_armor_chestplate',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 600
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_green",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_leggings",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 3
        },
        ],
        'output': {
        'id': 'mcda:green_mystery_armor_leggings',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 500
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_green",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_boots",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 2
        },
        ],
        'output': {
        'id': 'mcda:green_mystery_armor_boots',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 400
    })

    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_purple",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_helmet",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 2
        },
        ],
        'output': {
        'id': 'mcda:purple_mystery_armor_helmet',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 400
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_purple",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_chestplate",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 4
        },
        ],
        'output': {
        'id': 'mcda:purple_mystery_armor_chestplate',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 600
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_purple",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_leggings",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 3
        },
        ],
        'output': {
        'id': 'mcda:purple_mystery_armor_leggings',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 500
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_purple",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_boots",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 2
        },
        ],
        'output': {
        'id': 'mcda:purple_mystery_armor_boots',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 400
    })

    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_white",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_helmet",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 2
        },
        ],
        'output': {
        'id': 'mcda:white_mystery_armor_helmet',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 400
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_white",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_chestplate",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 4
        },
        ],
        'output': {
        'id': 'mcda:white_mystery_armor_chestplate',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 600
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_white",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_leggings",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 3
        },
        ],
        'output': {
        'id': 'mcda:white_mystery_armor_leggings',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 500
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_white",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_boots",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 2
        },
        ],
        'output': {
        'id': 'mcda:white_mystery_armor_boots',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 400
    })

    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_blue",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_helmet",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 2
        },
        ],
        'output': {
        'id': 'mcda:blue_mystery_armor_helmet',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 400
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_blue",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_chestplate",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 4
        },
        ],
        'output': {
        'id': 'mcda:blue_mystery_armor_chestplate',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 600
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_blue",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_leggings",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 3
        },
        ],
        'output': {
        'id': 'mcda:blue_mystery_armor_leggings',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 500
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_blue",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_boots",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 2
        },
        ],
        'output': {
        'id': 'mcda:blue_mystery_armor_boots',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 400
    })

    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_red",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_helmet",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 2
        },
        ],
        'output': {
        'id': 'mcda:red_mystery_armor_helmet',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 400
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_red",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_chestplate",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 4
        },
        ],
        'output': {
        'id': 'mcda:red_mystery_armor_chestplate',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 600
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_red",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_leggings",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 3
        },
        ],
        'output': {
        'id': 'mcda:red_mystery_armor_leggings',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 500
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:gemstone_red",
        "count": 2
        },
        {
        "item": "mcda:full_metal_armor_boots",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 2
        },
        ],
        'output': {
        'id': 'mcda:red_mystery_armor_boots',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 400
    })

    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:upgrade_core_metal",
        "count": 2
        },
        {
        "item": "mcda:champions_armor_helmet",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot",
        "count": 2
        },
        ],
        'output': {
        'id': 'mcda:heros_armor_helmet',
        'count': 1
        },
        'min_forge_tier': 2,
        'fuel_per_tick': 400
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:upgrade_core_metal",
        "count": 2
        },
        {
        "item": "mcda:champions_armor_chestplate",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot",
        "count": 4
        },
        ],
        'output': {
        'id': 'mcda:heros_armor_chestplate',
        'count': 1
        },
        'min_forge_tier': 2,
        'fuel_per_tick': 600
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:upgrade_core_metal",
        "count": 2
        },
        {
        "item": "mcda:champions_armor_leggings",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot",
        "count": 3
        },
        ],
        'output': {
        'id': 'mcda:heros_armor_leggings',
        'count': 1
        },
        'min_forge_tier': 2,
        'fuel_per_tick': 500
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:upgrade_core_metal",
        "count": 2
        },
        {
        "item": "mcda:champions_armor_boots",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot",
        "count": 2
        },
        ],
        'output': {
        'id': 'mcda:heros_armor_boots',
        'count': 1
        },
        'min_forge_tier': 2,
        'fuel_per_tick': 400
    })

    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:upgrade_core_void",
        "count": 2
        },
        {
        "item": "mcda:shulker_armor_helmet",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_end",
        "count": 5
        },
        {
        "item": "minecraft:shulker_shell",
        "count": 10
        },
        ],
        'output': {
        'id': 'mcda:sturdy_shulker_armor_helmet',
        'count': 1
        },
        'min_forge_tier': 4,
        'fuel_per_tick': 1000
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:upgrade_core_void",
        "count": 2
        },
        {
        "item": "mcda:shulker_armor_chestplate",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_end",
        "count": 8
        },
        {
        "item": "minecraft:shulker_shell",
        "count": 16
        },
        ],
        'output': {
        'id': 'mcda:sturdy_shulker_armor_chestplate',
        'count': 1
        },
        'min_forge_tier': 4,
        'fuel_per_tick': 1600
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:upgrade_core_void",
        "count": 2
        },
        {
        "item": "mcda:shulker_armor_leggings",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_end",
        "count": 7
        },
        {
        "item": "minecraft:shulker_shell",
        "count": 14
            },
        ],
        'output': {
        'id': 'mcda:sturdy_shulker_armor_leggings',
        'count': 1
        },
        'min_forge_tier': 4,
        'fuel_per_tick': 1400
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:upgrade_core_void",
        "count": 2
        },
        {
        "item": "mcda:shulker_armor_boots",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_end",
        "count": 4
        },
        {
        "item": "minecraft:shulker_shell",
        "count": 8
        },
        ],
        'output': {
        'id': 'mcda:sturdy_shulker_armor_boots',
        'count': 1
        },
        'min_forge_tier': 4,
        'fuel_per_tick': 800
    })

    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "minecraft:leather_helmet",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 2
        },
        {
        "item": "mcda:fabric_bolt_brown",
        "count": 5
        },
        {
        "item": "gobber2:gobber2_ingot",
        "count": 1
        },
        {
        "item": "mcda:iron_scale",
        "count": 10
        },
        ],
        'output': {
        'id': 'mcda:archers_helmet',
        'count': 1
        },
        'min_forge_tier': 2,
        'fuel_per_tick': 50
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "minecraft:leather_chestplate",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 2
        },
        {
        "item": "mcda:fabric_bolt_brown",
        "count": 8
        },
        {
        "item": "gobber2:gobber2_ingot",
        "count": 2
        },
        {
        "item": "mcda:iron_scale",
        "count": 16
        },
        ],
        'output': {
        'id': 'mcda:archers_chestplate',
        'count': 1
        },
        'min_forge_tier': 2,
        'fuel_per_tick': 80
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "minecraft:leather_leggings",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 2
        },
        {
        "item": "mcda:fabric_bolt_brown",
        "count": 7
        },
        {
        "item": "gobber2:gobber2_ingot",
        "count": 2
        },
        {
        "item": "mcda:iron_scale",
        "count": 14
        },
        ],
        'output': {
        'id': 'mcda:archers_leggings',
        'count': 1
        },
        'min_forge_tier': 2,
        'fuel_per_tick': 70
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "minecraft:leather_boots",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 2
        },
        {
        "item": "mcda:fabric_bolt_brown",
        "count": 4
        },
        {
        "item": "gobber2:gobber2_ingot",
        "count": 1
        },
        {
        "item": "mcda:iron_scale",
        "count": 8
        },
        ],
        'output': {
        'id': 'mcda:archers_boots',
        'count': 1
        },
        'min_forge_tier': 2,
        'fuel_per_tick': 40
    })

    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "minecraft:leather_helmet",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 2
        },
        {
        "item": "mcda:fabric_bolt_black",
        "count": 5
        },
        {
        "item": "gobber2:gobber2_ingot",
        "count": 1
        },
        {
        "item": "mcda:iron_scale",
        "count": 10
        },
        ],
        'output': {
        'id': 'mcda:shadow_walker_armor_helmet',
        'count': 1
        },
        'min_forge_tier': 2,
        'fuel_per_tick': 50
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "minecraft:leather_chestplate",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 2
        },
        {
        "item": "mcda:fabric_bolt_black",
        "count": 8
        },
        {
        "item": "gobber2:gobber2_ingot",
        "count": 2
        },
        {
        "item": "mcda:iron_scale",
        "count": 16
        },
        ],
        'output': {
        'id': 'mcda:shadow_walker_armor_chestplate',
        'count': 1
        },
        'min_forge_tier': 2,
        'fuel_per_tick': 80
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "minecraft:leather_leggings",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 2
        },
        {
        "item": "mcda:fabric_bolt_black",
        "count": 7
        },
        {
        "item": "gobber2:gobber2_ingot",
        "count": 2
        },
        {
        "item": "mcda:iron_scale",
        "count": 14
        },
        ],
        'output': {
        'id': 'mcda:shadow_walker_armor_leggings',
        'count': 1
        },
        'min_forge_tier': 2,
        'fuel_per_tick': 70
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "minecraft:leather_boots",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 2
        },
        {
        "item": "mcda:fabric_bolt_black",
        "count": 4
        },
        {
        "item": "gobber2:gobber2_ingot",
        "count": 1
        },
        {
        "item": "mcda:iron_scale",
        "count": 8
        },
        ],
        'output': {
        'id': 'mcda:shadow_walker_armor_boots',
        'count': 1
        },
        'min_forge_tier': 2,
        'fuel_per_tick': 40
    })

    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:shadow_walker_armor_helmet",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 4
        },
        {
        "item": "twilightforest:alpha_yeti_fur",
        "count": 5
        },
        ],
        'output': {
        'id': 'mcda:arctic_fox_armor_helmet',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 150
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:shadow_walker_armor_chestplate",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 4
        },
        {
        "item": "twilightforest:alpha_yeti_fur",
        "count": 8
        },
        ],
        'output': {
        'id': 'mcda:arctic_fox_armor_chestplate',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 240
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:shadow_walker_armor_leggings",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 4
        },
        {
        "item": "twilightforest:alpha_yeti_fur",
        "count": 7
        },
        ],
        'output': {
        'id': 'mcda:arctic_fox_armor_leggings',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 210
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:shadow_walker_armor_boots",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 4
        },
        {
        "item": "twilightforest:alpha_yeti_fur",
        "count": 4
        },
        ],
        'output': {
        'id': 'mcda:arctic_fox_armor_boots',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 120
    })

    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:archers_helmet",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 4
        },
        {
        "item": "twilightforest:naga_scale",
        "count": 5
        },
        ],
        'output': {
        'id': 'mcda:black_wolf_armor_helmet',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 150
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:archers_chestplate",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 4
        },
        {
        "item": "twilightforest:naga_scale",
        "count": 8
        },
        ],
        'output': {
        'id': 'mcda:black_wolf_armor_chestplate',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 240
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:archers_leggings",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 4
        },
        {
        "item": "twilightforest:naga_scale",
        "count": 7
        },
        ],
        'output': {
        'id': 'mcda:black_wolf_armor_leggings',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 210
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:archers_boots",
        "count": 1
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 4
        },
        {
        "item": "twilightforest:naga_scale",
        "count": 4
        },
        ],
        'output': {
        'id': 'mcda:black_wolf_armor_boots',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 120
    })

    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:arctic_fox_armor_helmet",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 2
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 8
        },
        {
        "item": "mcda:black_wolf_armor_helmet",
        "count": 1
        },
        ],
        'output': {
        'id': 'mcda:gourdian_armor_helmet',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 300
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:arctic_fox_armor_chestplate",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 4
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 8
        },
        {
        "item": "mcda:black_wolf_armor_chestplate",
        "count": 1
        },
        ],
        'output': {
        'id': 'mcda:gourdian_armor_chestplate',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 480
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:arctic_fox_armor_leggings",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 3
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 8
        },
        {
        "item": "mcda:black_wolf_armor_leggings",
        "count": 1
        },
        ],
        'output': {
        'id': 'mcda:gourdian_armor_leggings',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 420
    })
    event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
        {
        "item": "mcda:arctic_fox_armor_boots",
        "count": 1
        },
        {
        "item": "gobber2:gobber2_ingot_nether",
        "count": 2
        },
        {
        "item": "mcda:upgrade_core_archer",
        "count": 8
        },
        {
        "item": "mcda:black_wolf_armor_boots",
        "count": 1
        },
        ],
        'output': {
        'id': 'mcda:gourdian_armor_boots',
        'count': 1
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 240
    })
})