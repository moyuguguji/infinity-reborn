onEvent('recipes', event => {
    event.custom({
    "type": "purpeille:ancient_oven",
    "input": {
        "item": "mythicmetals:metallurgium_ingot"
    },
    "damage": 100,
    "cook_time": 20,
    "result": [
        {
            "item": "mythicmetals:unobtainium"
        }
    ]
    })

    event.custom({
        "type": "purpeille:ancient_oven",
        "input": {
            "item": "mythicmetals:celestium_ingot"
        },
        "damage": 100,
        "cook_time": 20,
        "result": [
            {
                "item": "mythicmetals:unobtainium"
            }
        ]
        })

     event.custom({
        "type": "purpeille:ancient_oven",
        "input": {
            "item": "minecraft:netherite_scrap"
        },
        "damage": 10,
        "cook_time": 100,
        "result": [
            {
                "item": "minecraft:netherite_ingot"
            }
        ]
        })

    event.custom({
        "type": "purpeille:ancient_oven",
        "input": {
            "item": "collectorsalbum:mythical_nether_star_card"
        },
        "damage": 10,
        "cook_time": 40,
        "result": [
            {
                "item": "minecraft:nether_star"
            }
        ]
        })

    event.custom({
        "type": "purpeille:ancient_oven",
        "input": {
            "item": "progressivebosses:nether_star_shard"
        },
        "damage": 10,
        "cook_time": 40,
        "result": [
            {
                "item": "minecraft:nether_star"
            },
            {
                "item": "progressivebosses:nether_star_shard"
            },
            {
                "item": "mythicmetals:celestium_nugget"
            },
            {
                "item": "mythicmetals:metallurgium_nugget"
            },
            {
                "item": "mythicmetals:unobtainium"
            },
            {
                "item": "mythicmetals:hallowed_ingot"
            },
            {
                "item": "gobber2:gobber2_glob_end"
            }
        ]
        })

    event.custom({
        "type": "purpeille:ancient_oven",
        "input": {
            "item": "terrarianslimes:gold_crown"
        },
        "damage": 30,
        "cook_time": 100,
        "result": [
            {
                "item": "terrarianslimes:slime_crown"
            }
        ]
        })

    event.custom({
        "type": "purpeille:ancient_oven",
        "input": {
            "item": "gobber2:gobber2_ingot"
        },
        "damage": -100,
        "cook_time": 100,
        "result": [
            {
                "item": "gobber2:gobber2_glob"
            },
            {
                "item": "botania:manasteel_ingot"
            }, 
            {
                "item": "mythicmetals:durasteel_ingot"
            }
        ]
        })

    event.custom({
    "type": "voidcrafting:void_crafting",
    "input": {
        "item": "minecraft:totem_of_undying"
    },
    "result": 
        {
        "item": "voidtotem:totem_of_void_undying"
        },
    "radius": 10
    })

    event.custom({
    "type": "voidcrafting:void_crafting",
    "input": {
        "item": "minecraft:bucket"
    },
    "result": 
        {
        "item": "kibe:void_bucket"
        },
    "radius": 10
    })

    event.custom({
    "type": "voidcrafting:void_crafting",
    "input": {
        "item": "mcda:upgrade_core"
    },
    "result": 
        {
        "item": "mcda:upgrade_core_void"
        },
    "radius": 10
    })

    event.custom({
    "type": "voidcrafting:void_crafting",
    "input": {
        "item": "victus:blank_heart_aspect"
    },
    "result": 
        {
        "item": "victus:void_heart_aspect"
        },
    "radius": 10
    })

    event.custom({
    "type": "voidcrafting:void_crafting",
    "input": {
        "item": "charm:ender_pearl_block"
    },
    "result": 
        {
        "item": "spectrum:ender_treasure"
        },
    "radius": 10
    })

    event.custom({
    "type": "voidcrafting:void_crafting",
    "input": {
        "item": "kibe:void_bucket"
    },
    "result": 
        {
        "item": "kibe:entangled_bucket"
        },
    "radius": 10
    })

    event.custom({
    "type": "voidcrafting:void_crafting",
    "input": {
        "item": "minecraft:chest"
    },
    "result": 
        {
        "item": "minecraft:ender_chest"
        },
    "radius": 10
    })

    event.custom({
    "type": "voidcrafting:void_crafting",
    "input": {
        "item": "minecraft:ender_chest"
    },
    "result": 
        {
        "item": "kibe:entangled_chest"
        },
    "radius": 10
    })

    event.custom({
    "type": "voidcrafting:void_crafting",
    "input": {
        "item": "kibe:void_bucket"
    },
    "result": 
        {
        "item": "kibe:entangled_bucket"
        },
    "radius": 10
    })

    event.custom({
    "type": "voidcrafting:void_crafting",
    "input": {
        "item": "kibe:tank"
    },
    "result": 
        {
        "item": "kibe:entangled_tank"
        },
    "radius": 10
    })

    event.custom({
    "type": "voidcrafting:void_crafting",
    "input": {
        "item": "twilightforest:magic_map"
    },
    "result": 
        {
        "item": "twilightforest:twilight_portal_miniature_structure"
        },
    "radius": 10
    })

    event.custom({
    "type": "voidcrafting:void_crafting",
    "input": {
        "item": "minecraft:player_head"
    },
    "result": 
        {
        "item": "minecraft:enchanted_golden_apple"
        },
    "radius": 10
    })
  })