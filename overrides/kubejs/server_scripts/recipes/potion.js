onEvent('recipes', event => {
    event.custom({
        "type": "spectrum:potion_workshop_brewing",
        "ingredient1": {
            "item": "minecraft:golden_apple"
        },
        "ingredient2": {
            "item": "farmersdelight:beef_patty"
        },
        "ingredient3": {
            "item": "farmersdelight:fried_egg"
        },
        "effect": "mcdw:dynamo",
        "base_duration_ticks": 200,
        "potency_modifier": 1,
        "applicable_to_potions": true,
        "applicable_to_tipped_arrows": true,
        "applicable_to_potion_fillables": true,
    })
    event.custom({
        "type": "spectrum:potion_workshop_brewing",
        "ingredient1": {
            "item": "soulsweapons:demon_heart"
        },
        "ingredient2": {
            "item": "kibe:cursed_seeds"
        },
        "ingredient3": {
            "item": "minecraft:wither_skeleton_skull"
        },
        "effect": "mcdw:pain_cycle",
        "base_duration_ticks": 1200,
        "potency_modifier": 0.1,
        "applicable_to_potions": true,
        "applicable_to_tipped_arrows": true,
        "applicable_to_potion_fillables": false,
    })
    event.custom({
        "type": "spectrum:potion_workshop_brewing",
        "ingredient1": {
            "item": 'minecraft:enchanted_golden_apple'
        },
        "ingredient2": {
            "item": 'soulsweapons:moonstone'
        },
        "ingredient3": {
            "item": 'soulsweapons:lost_soul'
        },
        "effect": "mcdar:soul_protection",
        "base_duration_ticks": 12000,
        "potency_modifier": 0,
        "applicable_to_potions": true,
        "applicable_to_tipped_arrows": true,
        "applicable_to_potion_fillables": false,
    })
    event.custom({
        "type": "spectrum:potion_workshop_reacting",
        "item": 'soulsweapons:moonstone',
        "modifiers": [
          {
           "multiplicative_potency_modifier": 0.25
          }
        ]
      })
      event.custom({
        "type": "spectrum:potion_workshop_reacting",
        "item": 'soulsweapons:demon_heart',
        "modifiers": [
          {
           "flat_potency_bonus_negative_effects": 3.5,
           "additional_random_negative_effect_count": 1.0,
          }
        ]
      })
      event.custom({
        "type": "spectrum:potion_workshop_reacting",
        "item": 'kibe:cursed_seeds',
        "modifiers": [
          {
           "additional_random_negative_effect_count": 3.0,
          }
        ]
      })

})