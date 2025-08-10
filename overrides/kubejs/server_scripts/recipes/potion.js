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
           "flat_potency_bonus_negative_effects": 3.0,
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

      event.custom({
        "type": "spectrum:potion_workshop_reacting",
        "item": 'bosses_of_mass_destruction:blazing_eye',
        "modifiers": [
          {
        "flat_potency_bonus": 1.25,
        "multiplicative_duration_modifier": 1.25,
        "multiplicative_potency_modifier": 1.25
          }
        ]
      })

      event.custom({
        "type": "spectrum:potion_workshop_reacting",
        "item": 'bosses_of_mass_destruction:ancient_anima',
        "modifiers": [
          {
           "make_effects_positive": true,
           "negate_decreasing_duration": true,
           "fast_drinkable": true,
           "flat_duration_bonus_ticks": 200,
           "multiplicative_potency_modifier": 0.5,
           "additional_random_positive_effect_count": 1.0
          }
        ]
      })

      event.custom({
        "type": "spectrum:potion_workshop_reacting",
        "item": 'bosses_of_mass_destruction:void_thorn',
        "modifiers": [
          {
           "additional_random_negative_effect_count": 2.0,
           "multiplicative_potency_modifier": 2.5,
           "flat_duration_bonus_ticks": 1200,
           "flat_yield_bonus": -1.0
          }
        ]
      })

      event.custom({
        "type": "spectrum:potion_workshop_reacting",
        "item": 'twilightforest:fiery_blood',
        "modifiers": [
          {
           "flat_potency_bonus": 1.2,
           "potent_decreasing_effect": true
          }
        ]
      })

      event.custom({
       "type": "spectrum:potion_workshop_reacting",
        "item": 'twilightforest:fiery_tears',
        "modifiers": [
          {
           "flat_potency_bonus": 1.2,
           "potent_decreasing_effect": true
          }
        ]
      })

      event.custom({
        "type": "spectrum:potion_workshop_reacting",
        "item": 'adventurez:source_stone',
        "modifiers": [
          {
           'additional_random_positive_effect_count': 20.0,
           "flat_duration_bonus_ticks": 12000,
           "multiplicative_potency_modifier": 5.0
          }
        ]
      })

      event.custom({
        "type": "spectrum:potion_workshop_reacting",
        "item": 'adventurez:stone_golem_heart',
        "modifiers": [
          {
           "additional_random_negative_effect_count": 2.8,
           'additional_random_positive_effect_count': 10.0,
           "flat_potency_bonus": 4.0,
           "negate_decreasing_duration": true,
           "no_particles": true,
           "flat_duration_bonus_ticks": 6000
          }
        ]
      })

      event.custom({
        "type": "spectrum:potion_workshop_reacting",
        "item": 'bosses_of_mass_destruction:crystal_fruit',
        "modifiers": [
          {
           'additional_random_positive_effect_count': 4.0,
           "flat_potency_bonus": 0.7,
          }
        ]
      })

})