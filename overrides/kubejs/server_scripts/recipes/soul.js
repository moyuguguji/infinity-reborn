onEvent('recipes', event => {
  event.custom({
    "type": "spirit:soul_transmutation",
    "entityInput": "minecraft:wither_skeleton",
    "consumesActivator": true,
    "itemInputs": [
      {
        "item": "heartytrinkets:wither_rib"
      },
      {
        "item": "soulsweapons:lost_soul"
      },
      {
        "item": "minecraft:bone"
      },
      {
        "item": "soulsweapons:lost_soul"
      },
      {
        "item": "heartytrinkets:wither_rib"
      },
      {
        "item": "soulsweapons:lost_soul"
      },
      {
        "item": "minecraft:bone"
      },
      {
        "item": "soulsweapons:lost_soul"
      }
    ],
    "entityOutput": "adventurez:necromancer",
    "duration": 300,
    "shouldSummonMob": true
  }),
    event.custom({
      "type": "spirit:soul_transmutation",
      "entityInput": "terrarianslimes:king_slime",
      "consumesActivator": true,
      "itemInputs": [
        {
          "item": "terrarianslimes:king_slime_ball"
        },
        {
          "item": "terrarianslimes:blue_slime_block"
        },
        {
          "item": "minecraft:gold_block"
        },
        {
          "item": "terrarianslimes:blue_slime_block"
        },
        {
          "item": "victus:bundle_heart_aspect"
        },
        {
          "item": "terrarianslimes:blue_slime_block"
        },
        {
          "item": "minecraft:gold_block"
        },
        {
          "item": "terrarianslimes:blue_slime_block"
        }
      ],
      "entityOutput": "terrarianslimes:king_slime",
      "duration": 30,
      "shouldSummonMob": true
    }),
    event.custom({
      "type": "spirit:soul_transmutation",
      "entityInput": "soulsweapons:draugr_boss",
      "consumesActivator": true,
      "itemInputs": [
        {
          "item": "soulsweapons:arkenstone"
        },
        {
          "item": "soulsweapons:lost_soul"
        },
        {
          "item": "minecraft:bone_block"
        },
        {
          "item": "soulsweapons:lost_soul"
        },
        {
          "item": "soulsweapons:draugr"
        },
        {
          "item": "soulsweapons:lost_soul"
        },
        {
          "item": "minecraft:bone_block"
        },
        {
          "item": "soulsweapons:lost_soul"
        }
      ],
      "entityOutput": "soulsweapons:draugr_boss",
      "duration": 30,
      "shouldSummonMob": true
    }),
    event.custom({
      "type": "spirit:soul_transmutation",
      "entityInput": "soulsweapons:returning_knight",
      "consumesActivator": true,
      "itemInputs": [
        {
          "item": "bosses_of_mass_destruction:soul_star"
        },
        {
          "item": "soulsweapons:lost_soul"
        },
        {
          "item": "soulsweapons:moonstone_block"
        },
        {
          "item": "soulsweapons:lost_soul"
        },
        {
          "item": "soulsweapons:nightfall"
        },
        {
          "item": "soulsweapons:lost_soul"
        },
        {
          "item": "soulsweapons:moonstone_block"
        },
        {
          "item": "soulsweapons:lost_soul"
        }
      ],
      "entityOutput": "soulsweapons:returning_knight",
      "duration": 30,
      "shouldSummonMob": true
    }),
    event.custom({
      "type": "spirit:soul_transmutation",
      "entityInput": "soulsweapons:moonknight",
      "consumesActivator": true,
      "itemInputs": [
        {
          "item": "bosses_of_mass_destruction:ancient_anima"
        },
        {
          "item": "bosses_of_mass_destruction:soul_star"
        },
        {
          "item": "soulsweapons:moonstone_block"
        },
        {
          "item": "bosses_of_mass_destruction:soul_star"
        },
        {
          "item": "soulsweapons:moonlight_greatsword"
        },
        {
          "item": "bosses_of_mass_destruction:soul_star"
        },
        {
          "item": "soulsweapons:moonstone_block"
        },
        {
          "item": "bosses_of_mass_destruction:soul_star"
        }
      ],
      "entityOutput": "soulsweapons:moonknight",
      "duration": 30,
      "shouldSummonMob": true
    })
  event.custom({
    "type": "spirit:soul_transmutation",
    "entityInput": "adventurez:amethyst_golem",
    "consumesActivator": true,
    "itemInputs": [
      {
        "item": "spectrum:red_pigment"
      },
      {
        "item": "spectrum:orange_pigment"
      },
      {
        "item": "spectrum:yellow_pigment"
      },
      {
        "item": "spectrum:green_pigment"
      },
      {
        "item": "spectrum:topaz_storage_block"
      },
      {
        "item": "spectrum:cyan_pigment"
      },
      {
        "item": "spectrum:blue_pigment"
      },
      {
        "item": "spectrum:purple_pigment"
      }
    ],
    "entityOutput": "spectrum:shooting_star",
    "duration": 30,
    "shouldSummonMob": true
  })
})