onEvent('recipes', event => {
    event.custom({
        "type": "spectrum:potion_workshop_crafting",
        "base_ingredient": {
          "item": "minecraft:glass_bottle"
        },
        "use_up_base_ingredient": true,
        "time":1000,
        "ingredient1": {
          "item": "spectrum:onyx_powder",
        },
        "ingredient2": {
          "item": "spectrum:midnight_chip",
        },
        "ingredient3": {
          "item": "spectrum:black_pigment",
        },
        "result" : {
          "item": "minecraft:dragon_breath"
        }
    })
})