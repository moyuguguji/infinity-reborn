onEvent('recipes', event => {
    event.stonecutting('betterend:aeternium_hoe_head', 'betterend:aeternium_axe_head')
    event.stonecutting('betterend:aeternium_pickaxe_head', 'betterend:aeternium_axe_head')
    event.stonecutting('betterend:aeternium_shovel_head', 'betterend:aeternium_axe_head')

    event.stonecutting('betterend:aeternium_axe_head', 'betterend:aeternium_hoe_head')
    event.stonecutting('betterend:aeternium_pickaxe_head', 'betterend:aeternium_hoe_head')
    event.stonecutting('betterend:aeternium_shovel_head', 'betterend:aeternium_hoe_head')

    event.stonecutting('betterend:aeternium_axe_head', 'betterend:aeternium_pickaxe_head')
    event.stonecutting('betterend:aeternium_hoe_head', 'betterend:aeternium_pickaxe_head')
    event.stonecutting('betterend:aeternium_shovel_head', 'betterend:aeternium_pickaxe_head')

    event.stonecutting('betterend:aeternium_axe_head', 'betterend:aeternium_shovel_head')
    event.stonecutting('betterend:aeternium_hoe_head', 'betterend:aeternium_shovel_head')
    event.stonecutting('betterend:aeternium_pickaxe_head', 'betterend:aeternium_shovel_head')

    event.smithing('betterend:aeternium_sword_blade', Item.of('betterend:aeternium_hammer').ignoreNBT(), 'betterend:aeternium_ingot')
    event.custom({
        type: "spectrum:fusion_shrine",
        "group": "horse_armor",
        "time": 1000,
        "experience": 5000.0,
        "fluid": "minecraft:lava",
        "ingredients": [
            {
                "item": 'kubejs:infinity_sword_a',
                "count": 1
            },
            {
                "item": 'kubejs:infinity_sword_b',
                "count": 1
            }
        ],
        "result": {
            "item": 'kubejs:infinity_sword'
        },
        "required_advancement": "spectrum:build_fusion_shrine",
        "world_conditions": [],
        "start_crafting_effect": "weather_thunder",
        "during_crafting_effects": [
            "lightning_around_shrine",
            "visual_explosions_on_shrine",
            "lightning_around_shrine",
            "visual_explosions_on_shrine"
        ],
        "description": "§0Thank You for Playing"
    }).id("kubejs:infinity_sword")
    event.custom({
        type: "spectrum:fusion_shrine",
        "group": "horse_armor",
        "time": 1000,
        "experience": 5000.0,
        "fluid": "spectrum:liquid_crystal",
        "ingredients": [
            {
                "item": 'kubejs:putong_stone_sword',
                "count": 1
            },
            {
                "item": 'kubejs:sixiang_kaitian',
                "count": 1
            },
            {
                "item": 'kubejs:jian_li',
                "count": 1
            },
            {
                "item": 'kubejs:qixing_sword',
                "count": 1
            },
            {
                "item": 'mcdw:sword_the_starless_night',
                "count": 1
            },
            {
                "item": 'gobber2:gobber2_sword_sniper',
                "count": 1
            },
            {
                "item": 'kubejs:upgrade_liuren',
                "count": 2
            }
        ],
        "result": {
            "item": 'kubejs:infinity_sword'
        },
        "required_advancement": "spectrum:build_fusion_shrine",
        "world_conditions": [],
        "start_crafting_effect": "weather_thunder",
        "during_crafting_effects": [
            "lightning_around_shrine",
            "visual_explosions_on_shrine",
            "lightning_around_shrine",
            "visual_explosions_on_shrine"
        ],
        "description": "§0Thank You for Playing"
    }).id("kubejs:infinity_sword1")
})
