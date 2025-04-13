onEvent('recipes', event => {
  event.smithing('soulsweapons:skofnung', Item.of('mythicmetals:mythril_sword').ignoreNBT(), '#soulsweapons:lord_soul')

  event.shaped(Item.of('soulsweapons:moonstone_ring', '{Damage:0}'), [
    'BA ',
    'ACA',
    ' A '
  ], {
    A: 'botania:gaia_ingot',
    B: 'soulsweapons:arkenstone',
    C: 'soulsweapons:essence_of_luminescence'
  })

  event.shaped('soulsweapons:arkenstone', [
    ' A ',
    ' B ',
    ' A '
  ], {
    A: 'bosses_of_mass_destruction:soul_star',
    B: 'soulsweapons:moonstone'
  })
  event.shaped('soulsweapons:whirligig_sawblade', [
    ' B ',
    'BCB',
    'AB '
  ], {
    A: 'gobber2:gobber2_rod',
    B: 'minecraft:netherite_ingot',
    C: '#soulsweapons:lord_soul'
  })
  event.shaped('soulsweapons:rageblade', [
    ' AB',
    'AC ',
    'A  '
  ], {
    A: 'minecraft:blaze_rod',
    B: 'twilightforest:fiery_ingot',
    C: '#soulsweapons:lord_soul'
  })
  event.shaped('soulsweapons:galeforce', [
    ' BA',
    'BCA',
    ' BA'
  ], {
    A: 'botania:mana_string',
    B: 'spectrum:lightning_stone',
    C: '#soulsweapons:lord_soul'
  })
  event.shaped('soulsweapons:comet_spear', [
    ' AA',
    'BCA',
    'DB '
  ], {
    A: 'mythicmetals:hallowed_ingot',
    B: 'purpeille:metallic_lightning',
    C: '#soulsweapons:lord_soul',
    D: 'gobber2:gobber2_rod_nether'
  })
  event.shaped('soulsweapons:dragonslayer_swordspear', [
    ' B ',
    'BCB',
    'CAC'
  ], {
    A: 'gobber2:gobber2_rod_nether',
    B: 'mythicmetals:hallowed_ingot',
    C: 'dragonloot:dragon_scale'
  })
  event.shaped('soulsweapons:freyr_sword', [
    ' D ',
    ' B ',
    'CAC'
  ], {
    A: '#soulsweapons:lord_soul',
    B: 'soulsweapons:moonstone',
    C: 'mythicmetals:mythril_ingot',
    D: 'soulsweapons:verglas'
  })
  event.shaped('soulsweapons:darkin_scythe_pre', [
    ' BB',
    'CA ',
    ' A '
  ], {
    A: 'gobber2:gobber2_rod',
    B: 'soulsweapons:crimson_ingot',
    C: '#soulsweapons:lord_soul',
  })
  event.shaped('soulsweapons:blackstone_pedestal', [
    'DFD',
    'BAB',
    'CEC'
  ], {
    A: 'minecraft:nether_star',
    B: 'charm:ender_pearl_block',
    C: 'soulsweapons:infused_blackstone',
    D: 'soulsweapons:arkenstone',
    E: '#soulsweapons:lord_soul',
    F: 'mythicmetals:metallurgium_ingot'
  })
  event.shaped('soulsweapons:skofnung_stone', [
    'BBB',
    'BAB',
    'BBB'
  ], {
    A: 'soulsweapons:lord_soul_dark',
    B: 'minecraft:obsidian',
  })
  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        "item": "minecraft:diamond_sword",
        "count": 1
      },
      {
        "item": "twilightforest:fiery_ingot",
        "count": 2
      },
      {
        "item": "twilightforest:fiery_blood",
        "count": 1
      },
      {
        "item": "twilightforest:lich_trophy",
        "count": 1
      },
    ],
    'output': {
      'id': 'soulsweapons:lich_bane',
      'count': 1
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 120
  })
  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        "item": "emerald_tools:obsidian_sword",
        "count": 1
      },
      {
        "item": "botania:rune_air",
        "count": 2
      },
      {
        "item": "soulsweapons:lord_soul_red",
        "count": 1
      },
      {
        "item": "minecraft:obsidian",
        "count": 64
      },
      {
        "item": "botania:dragonstone",
        "count": 16
      },
    ],
    'output': {
      'id': 'soulsweapons:featherlight',
      'count': 1
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 180
  })
  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        "item": "mythicmetals:runite_axe",
        "count": 1
      },
      {
        "item": "spectrum:frostbite_crystal",
        "count": 16
      },
      {
        "item": "botania:rune_winter",
        "count": 4
      },
      {
        "item": "mythicmetals:metallurgium_ingot",
        "count": 6
      },
      {
        "item": "minecraft:nether_star",
        "count": 1
      },

    ],
    'output': {
      'id': 'soulsweapons:leviathan_axe',
      'count': 1
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 210
  })
  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        "item": "gobber2:gobber2_sword_nether",
        "count": 1
      },
      {
        "item": "minecraft:nether_star",
        "count": 2
      },
      {
        "item": "soulsweapons:crimson_ingot",
        "count": 8
      },
      {
        "item": "soulsweapons:shard_of_uncertainty",
        "count": 1
      },
      {
        "item": "mythicmetals:palladium_ingot",
        "count": 20
      },

    ],
    'output': {
      'id': 'soulsweapons:crucible_sword',
      'count': 1
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 300
  })

  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 800,
    "experience": 100.0,
    "ingredients": [
      {
        "item": 'botania:thunder_sword'
      },
      {
        "item": 'mythicmetals:celestium_ingot',
        "count": 4
      },
      {
        "item": 'things:gleaming_compound'
      },
      {
        "item": 'spectrum:scarlet_gem'
      },
      {
        "item": 'mythicmetals:stormyx_ingot',
        "count": 4
      },
      {
        "item": 'spectrum:lightning_stone',
        "count": 10
      }
    ],
    "result": {
      "item": 'soulsweapons:mjolnir',
    },
    "required_advancement": "spectrum:create_onyx_shard",
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine",
  })

}


)