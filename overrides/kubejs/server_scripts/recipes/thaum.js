
onEvent('recipes', event => {

  event.custom({
    type: "spectrum:pedestal",
    "time": 400,
    "tier": "basic",
    "cyan": 10,
    "magenta": 10,
    "yellow": 10,
    "white": 0,
    "black": 0,
    "experience": 100,
    "pattern": [
      "AAA",
      "BCD",
      "E F"
    ],
    "key": {
      "A": {
        "item": 'minecraft:honeycomb'
      },
      "B": {
        "item": 'minecraft:diamond'
      },
      "C": {
        "item": 'minecraft:elytra'
      },
      "D": {
        "item": 'adventurez:gilded_netherite_fragment'
      },
      "E": {
        "item": 'mythicmetals:adamantite_ingot'
      },
      "F": {
        "item": 'bosses_of_mass_destruction:ancient_anima'
      }

    },
    "result": {
      "item": 'icarus:flandres_wings',
      "count": 1
    }
  })

  event.custom({
    type: "spectrum:pedestal",
    "time": 40,
    "tier": "basic",
    "cyan": 10,
    "magenta": 20,
    "yellow": 0,
    "white": 0,
    "black": 0,
    "experience": 100,
    "pattern": [
      "BAB",
      "C C",
      "BBB"
    ],
    "key": {
      "A": {
        "item": 'minecraft:ender_pearl'
      },
      "B": {
        "item": 'minecraft:obsidian'
      },
      "C": {
        "item": 'minecraft:light_blue_dye'
      }
    },
    "result": {
      "item": 'spectrum:sucking_chest',
      "count": 1
    }
  }).id('spectrum:pedestal/tier3/sucking_chest')

  event.custom({
    type: "spectrum:pedestal",
    "time": 40,
    "tier": "basic",
    "cyan": 10,
    "magenta": 10,
    "yellow": 10,
    "white": 0,
    "black": 0,
    "experience": 100,
    "pattern": [
      "EAE",
      "CDC",
      "BBB"
    ],
    "key": {
      "A": {
        "item": 'minecraft:repeater'
      },
      "B": {
        "item": 'spectrum:polished_basalt'
      },
      "C": {
        "item": 'spectrum:polished_calcite'
      },
      "D": {
        "item": 'minecraft:crafting_table'
      },
      "E": {
        "item": 'minecraft:copper_ingot'
      }
    },
    "result": {
      "item": 'spectrum:restocking_chest',
      "count": 1
    }
  }).id('spectrum:pedestal/tier3/restocking_chest')

  event.custom({
    type: "spectrum:pedestal",
    "time": 200,
    "tier": "basic",
    "cyan": 2,
    "magenta": 0,
    "yellow": 3,
    "white": 0,
    "black": 0,
    "experience": 5,
    "pattern": [
      " AA",
      "CBA",
      "BC "
    ],
    "key": {
      "A": {
        "item": 'minecraft:hay_block'
      },
      "B": {
        "item": 'gateofbabylon:extended_stick'
      },
      "C": {
        "item": 'kubejs:spectral_silt'
      }
    },
    "result": {
      "item": 'majobroom:broom_item',
      "count": 1
    }
  })

  event.custom({
    type: "spectrum:pedestal",
    "time": 400,
    "tier": "basic",
    "cyan": 2,
    "magenta": 2,
    "yellow": 2,
    "white": 0,
    "black": 0,
    "experience": 10,
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": 'dragonloot:dragon_scale'
      },
      "B": {
        "item": 'minecraft:elytra'
      },
      "C": {
        "item": 'bosses_of_mass_destruction:ancient_anima'
      },
      "D": {
        "item": 'gobber2:gobber2_ring_ascent'
      }

    },
    "result": {
      "item": 'ringsofascension:ring_flight',
      "count": 1
    }
  })

  event.custom({
    type: "spectrum:pedestal",
    "time": 800,
    "tier": "basic",
    "cyan": 32,
    "magenta": 64,
    "yellow": 32,
    "white": 0,
    "black": 0,
    "experience": 10,
    "pattern": [
      "FDE",
      "CAC",
      "BDB"
    ],
    "key": {
      "A": {
        "item": 'minecraft:clock'
      },
      "B": {
        "item": 'minecraft:amethyst_cluster'
      },
      "C": {
        "item": 'botania:rune_mana'
      },
      "D": {
        "item": 'botania:terrasteel_ingot'
      },
      "E": {
        "item": 'spectrum:sparklestone_gem'
      },
      "F": {
        "item": 'minecraft:oak_button'
      }
    },
    "result": {
      "item": 'spectrum:celestial_pocketwatch',
      "count": 1
    }
  })

  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 300,
    "experience": 100.0,
    "ingredients": [
      {
        "item": 'ringsofascension:ring_hungerless',
        "count": 1
      },
      {
        "item": 'gobber2:gobber2_rod',
        "count": 2
      },
      {
        "item": 'mythicmetals:hallowed_ingot',
        "count": 10
      },
      {
        "item": 'kubejs:shenqi_ingot',
        "count": 2
      }
    ],
    "result": {
      "item": 'kubejs:yecao_sword'
    },
    "required_advancement": "spectrum:build_fusion_shrine",
    "world_conditions": ["day", "CLEAR_SKY"],
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine",
    "description": "§6§l在一个阳光明媚的清晨茁壮生长"
  })

  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 300,
    "experience": 100.0,
    "fluid": "minecraft:water",
    "ingredients": [
      {
        "item": 'mythicmetals:aquarium_pearl',
        "count": 1
      },
      {
        "item": 'gobber2:gobber2_rod',
        "count": 2
      },
      {
        "item": 'mcda:upgrade_core_frost',
        "count": 5
      },
      {
        "item": 'mythicmetals:aquarium_ingot',
        "count": 20
      },
      {
        "item": 'minecraft:conduit',
        "count": 2
      },
      {
        "item": 'kubejs:shenqi_ingot',
        "count": 3
      }
    ],
    "result": {
      "item": 'kubejs:ruoshui_sword'
    },
    "required_advancement": "spectrum:build_fusion_shrine",
    "world_conditions": [],
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine",
    "description": "§3§l来自海洋的力量"
  })

  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 100,
    "experience": 2500.0,
    "fluid": "minecraft:lava",
    "ingredients": [
      {
        "item": 'gobber2:gobber2_sword_end',//太古合金剑
        "count": 1
      },
      {
        "item": 'kubejs:sheng_jin',//天体块
        "count": 1
      },
      {
        "item": 'kubejs:soul_bone',//灵魂之骨
        "count": 1
      },
      {
        "item": 'kubejs:shining_star',//闪耀之星
        "count": 1
      },
      {
        "item": 'kubejs:crystal_tiered',//流星碎片
        "count": 10
      }
    ],
    "result": {
      "item": 'kubejs:infinity_sword_b'
    },
    "required_advancement": "spectrum:build_fusion_shrine",
    "world_conditions": [],
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine"
  }).id("kubejs:infinity_sword_b")
  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 50,
    "experience": 10.0,
    "fluid": "minecraft:lava",
    "ingredients": [
      {
        "item": 'soulsweapons:crimson_obsidian',//太古合金剑
        "count": 1
      },
      {
        "item": 'spirit:soul_powder',//天体块
        "count": 1
      },
      {
        "item": 'botania:mana_powder',//灵魂之骨
        "count": 1
      },
      {
        "item": 'kibe:cursed_droplets',//闪耀之星
        "count": 1
      },
      {
        "item": 'kubejs:spectral_silt',//龙之星
        "count": 1
      },
      {
        "item": 'waystones:warp_dust',//流星碎片
        "count": 1
      },
      {
        "item": 'spectrum:amethyst_powder',//流星碎片
        "count": 1
      }
    ],
    "result": {
      "item": 'infinity:special_handlingof_glowing_obsidian'
    }
  })

  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 300,
    "experience": 2500.0,
    "fluid": "minecraft:lava",
    "ingredients": [
      {
        "item": 'soulsweapons:chaos_orb',//混沌珠
        "count": 1
      },
      {
        "item": 'bosses_of_mass_destruction:obsidian_heart',//黑曜石之心
        "count": 1
      },
      {
        "item": 'adventurez:source_stone',//源石
        "count": 1
      },
      {
        "item": 'soulsweapons:essence_of_luminescence',//昏光精粹
        "count": 1
      },
      {
        "item": 'infinity:sculk_core',//幽匿核心
        "count": 1
      },
      {
        "item": 'adventurez:stone_golem_heart',//黑石傀儡之心
        "count": 1
      }
    ],
    "result": {
      "item": 'kubejs:infinity_sword_a'
    },
    "required_advancement": "spectrum:build_fusion_shrine",
    "world_conditions": [],
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine"
  }).id("kubejs:infinity_sword_a")
  event.custom({
    type: "spectrum:enchanter",
    "time": 10000,
    "required_experience": 50000,
    "ingredients": [
      {
        "item": 'infusion_table:infusion_table'//太古合金剑刃
      },
      {
        "item": 'spectrum:spectral_shard_storage_block'//天体块
      },
      {
        "item": 'spectrum:spectral_shard_storage_block'//灵魂之骨
      },
      {
        "item": 'spectrum:gilded_book'//闪耀之星
      },
      {
        "item": 'spectrum:gilded_book'//龙之星
      },
      {
        "item": 'spectrum:spectral_shard_storage_block'//永恒水晶
      },
      {
        "item": 'spectrum:spectral_shard_storage_block'//流星碎片
      },
      {
        "item": 'spectrum:gilded_book'//午夜残片
      },
      {
        "item": 'spectrum:gilded_book'//风暴之石
      }
    ],
    "result": {
      "item": 'editenchanting:enchantment_edit_table',
    },
  })
  event.custom({
    type: "spectrum:enchanter",
    "time": 600,
    "required_experience": 10000,
    "ingredients": [
       {
          "item": 'minecraft:book'//太古合金剑刃
        },
        {
          "item": 'bosses_of_mass_destruction:obsidian_heart'//天体块
        },
        {
          "item": 'adventurez:source_stone'//灵魂之骨
        },
        {
          "item": 'dracomelette:dracomelette'//闪耀之星
        },
        {
          "item": 'dracomelette:dracomelette'//龙之星
        },
        {
          "item": 'bosses_of_mass_destruction:obsidian_heart'//永恒水晶
        },
        {
          "item": 'spectrum:restoration_tea'//流星碎片
        },
        {
          "item": 'dracomelette:dracomelette'//午夜残片
        },
        {
          "item": 'dracomelette:dracomelette'//风暴之石
        }
    ],
    "result": {
      "item": "minecraft:enchanted_book",
      "nbt": "{StoredEnchantments: [{id: \"x_enchant:magic_immune\", lvl: 1s}]}"
    },
  })
  event.custom({
    type: "spectrum:enchanter",
    "time": 600,
    "required_experience": 10000,
    "ingredients": [
      {
        "item": 'minecraft:book'//太古合金剑刃
      },
      {
        "item": 'minecraft:nether_star'//天体块
      },
      {
        "item": 'minecraft:nether_star'//灵魂之骨
      },
      {
        "item": 'dragonloot:dragon_scale'//闪耀之星
      },
      {
        "item": 'dragonloot:dragon_scale'//龙之星
      },
      {
        "item": 'minecraft:nether_star'//永恒水晶
      },
      {
        "item": 'minecraft:nether_star'//流星碎片
      },
      {
        "item": 'dragonloot:dragon_scale'//午夜残片
      },
      {
        "item": 'dragonloot:dragon_scale'//风暴之石
      }
    ],
    "result": {
      "item": "minecraft:enchanted_book",
      "nbt": "{StoredEnchantments: [{id: \"gobber2:apotropaic\", lvl: 1s}]}"
    },
  })
  event.custom({
    type: "spectrum:enchanter",
    "time": 600,
    "required_experience": 2500,
    "ingredients": [
      {
        "item": 'minecraft:book'
      },
      {
        "item": 'spectrum:cyan_pigment'
      },
      {
        "item": 'spectrum:cyan_pigment'
      },
      {
        "item": 'spectrum:sparklestone_gem'
      },
      {
        "item": 'spectrum:lightning_stone'
      },
      {
        "item": 'spectrum:light_blue_pigment'
      },
      {
        "item": 'spectrum:light_blue_pigment'
      },
      {
        "item": 'spectrum:sparklestone_gem'
      },
      {
        "item": 'spectrum:lightning_stone'
      }
    ],
    "result": {
      "item": "minecraft:enchanted_book",
      "nbt": "{StoredEnchantments: [{id: \"elementalenchantments:elec_aspect\", lvl: 2s}]}"
    }
  })
  event.custom({
    type: "spectrum:enchanter",
    "time": 600,
    "required_experience": 3000,
    "ingredients": [
      {
        "item": 'minecraft:book'
      },
      {
        "item": 'spectrum:yellow_pigment'//1
      },
      {
        "item": 'spectrum:yellow_pigment'//2
      },
      {
        "item": 'minecraft:totem_of_undying'//3
      },
      {
        "item": 'minecraft:golden_apple'//4
      },
      {
        "item": 'spectrum:orange_pigment'//5
      },
      {
        "item": 'spectrum:orange_pigment'//6
      },
      {
        "item": 'minecraft:totem_of_undying'//7
      },
      {
        "item": 'minecraft:golden_apple'//8
      }
    ],
    "result": {
      "item": "minecraft:enchanted_book",
      "nbt": "{StoredEnchantments: [{id: \"x_enchant:rebirth\", lvl: 1s}]}"
    }
  })
  event.custom({
    type: "spectrum:enchanter",
    "time": 600,
    "required_experience": 2000,
    "ingredients": [
      {
        "item": 'minecraft:book'
      },
      {
        "item": 'spectrum:red_pigment'//1
      },
      {
        "item": 'spectrum:red_pigment'//2
      },
      {
        "item": 'minecraft:smooth_quartz'//3
      },
      {
        "item": 'minecraft:iron_ingot'//4
      },
      {
        "item": 'spectrum:black_pigment'//5
      },
      {
        "item": 'spectrum:black_pigment'//6
      },
      {
        "item": 'minecraft:iron_ingot'//7
      },
      {
        "item": 'minecraft:iron_ingot'//8
      }
    ],
    "result": {
      "item": "minecraft:enchanted_book",
      "nbt": "{StoredEnchantments: [{id: \"gobber2:smithblade\", lvl: 1s}]}"
    }
  })
  event.custom({
    type: "spectrum:enchanter",
    "time": 200,
    "required_experience": 200,
    "ingredients": [
      {
        "item": 'minecraft:book'
      },
      {
        "item": 'spectrum:purple_pigment'//1
      },
      {
        "item": 'spectrum:quitoxic_powder'//2
      },
      {
        "item": 'spectrum:amethyst_powder'//3
      },
      {
        "item": 'xps:xp_dust'//4
      },
      {
        "item": 'spectrum:purple_pigment'//5
      },
      {
        "item": 'spectrum:quitoxic_powder'//6
      },
      {
        "item": 'spectrum:amethyst_powder'//7
      },
      {
        "item": 'xps:xp_dust'//8
      }
    ],
    "result": {
      "item": "minecraft:enchanted_book",
      "nbt": "{StoredEnchantments: [{id: \"x_enchant:remove_cursed\", lvl: 1s}]}"
    }
  })
  event.custom({
  type: "spectrum:enchanter",
  "time": 300,
  "required_experience": 100,
  "ingredients": [
    {
      "item": "minecraft:book"
    },
    {
      "item": "spectrum:yellow_pigment"
    },
    {
      "item": "spectrum:yellow_pigment"
    },
    {
      "item": 'spectrum:moonstone_shard'
    },
    {
      "item": "spectrum:neolith"
    },
    {
      "item": "spectrum:yellow_pigment"
    },
    {
      "item": "spectrum:yellow_pigment"
    },
    {
      "item": 'spectrum:moonstone_shard'
    },
    {
      "item": "spectrum:neolith"
    }
  ],
  "result": {
    "item": "minecraft:enchanted_book",
    "nbt": "{StoredEnchantments: [{id: \"spectrum:tight_grip\", lvl: 1s}]}"
  }
  }).id("spectrum:enchanter/spectrum_books/book_tight_grip")
  event.custom({
  type: "spectrum:enchanter",
  "time": 300,
  "required_experience": 100,
  "ingredients": [
    {
      "item": "minecraft:book"
    },
    {
      "item": "spectrum:green_pigment"
    },
    {
      "item": "spectrum:green_pigment"
    },
    {
      "item": 'spectrum:moonstone_shard'
    },
    {
      "item": "minecraft:diamond"
    },
    {
      "item": "spectrum:green_pigment"
    },
    {
      "item": "spectrum:green_pigment"
    },
    {
      "item": 'spectrum:moonstone_shard'
    },
    {
      "item": "minecraft:diamond"
    }
  ],
  "result": {
    "item": "minecraft:enchanted_book",
    "nbt": "{StoredEnchantments: [{id: \"spectrum:sniper\", lvl: 1s}]}"
  }
  }).id("spectrum:enchanter/spectrum_books/book_sniper")
  event.custom({
    type: "spectrum:pedestal",
    "time": 600,
    "tier": "basic",
    "cyan": 64,
    "magenta": 64,
    "yellow": 64,
    "white": 0,
    "black": 0,
    "experience": 10,
    "pattern": [
      "AEF",
      "BCB",
      "GDG"
    ],
    "key": {
      "A": {
        "item": 'minecraft:dirt'
      },
      "B": {
        "item": 'spectrum:bedrock_storage_block'
      },
      "C": {
        "item": 'mythicmetals:unobtainium'
      },
      "D": {
        "item": 'spectrum:stardust'
      },
      "E": {
        "item": 'minecraft:mossy_cobblestone'
      },
      "F": {
        "item": 'minecraft:coal_block'
      },
      "G": {
        "item": 'spectrum:refined_azurite'
      }

    },
    "result": {
      "item": 'kubejs:x_nuohua',
      "count": 1
    },
    "required_advancement": "spectrum:collect_shooting_star",
  })
  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 500,
    "experience": 5000.0,
    "fluid": "spectrum:liquid_crystal",
    "ingredients": [
      {
        "item": 'spectrum:shooting_star_gemstone',
        "count": 1
      },
      {
        "item": 'spectrum:shooting_star_colorful',
        "count": 1
      },
      {
        "item": 'spectrum:shooting_star_glistering',
        "count": 1
      },
      {
        "item": 'spectrum:shooting_star_pristine',
        "count": 1
      },
      {
        "item": 'spectrum:shooting_star_fiery',
        "count": 1
      },
      {
        "item": 'minecraft:nether_star',
        "count": 1
      },
      {
        "item": 'kubejs:shenqi_ingot',
        "count": 5
      }
    ],
    "result": {
      "item": 'kubejs:qixing_sword'
    },
    "required_advancement": "spectrum:collect_all_shooting_star_variants",
    "world_conditions": ["midnight", "new_moon"],
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine",
    "description": "§0新月之时,午夜之刻,以星铸刃"
  })
  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 500,
    "experience": 5000.0,
    "fluid": "spectrum:midnight_solution",
    "ingredients": [
      {
        "item": 'botania:thunder_sword',
        "count": 1
      },
      {
        "item": 'mcdw:axe_firebrand',
        "count": 1
      },
      {
        "item": 'mcdw:sword_frost_slayer',
        "count": 1
      },
      {
        "item": 'spectrum:bedrock_sword',
        "count": 1
      },
      {
        "item": 'mcdar:lightning_rod',
        "count": 1
      },
      {
        "item": 'mcdar:iron_hide_amulet',
        "count": 1
      },
      {
        "item": 'kubejs:shenqi_ingot',
        "count": 5
      }
    ],
    "result": {
      "item": 'kubejs:sixiang_kaitian'
    },
    "required_advancement": "spectrum:midgame/break_decayed_bedrock",
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine",
  })
  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 200,
    "experience": 5000.0,
    "fluid": "spectrum:liquid_crystal",
    "ingredients": [
      {
        "item": 'kubejs:upgrade_poison',
        "count": 1
      },
      {
        "item": 'kubejs:upgrade_frost',
        "count": 1
      },
      {
        "item": 'kubejs:upgrade_fire',
        "count": 1
      },
      {
        "item": 'kubejs:spectral_silt',
        "count": 32
      },
      {
        "item": 'kubejs:strong_fossil',
        "count": 64
      },
      {
        "item": 'kubejs:ametrine_crystal',
        "count": 64
      },
      {
        "item": 'kubejs:crystal_tiered',
        "count": 32
      }
    ],
    "result": {
      "item": 'kubejs:upgrade_yuan'
    },
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine",
  })
  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 200,
    "experience": 5000.0,
    "fluid": "spectrum:liquid_crystal",
    "ingredients": [
      {
        "item": 'kubejs:upgrade_defence',
        "count": 1
      },
      {
        "item": 'kubejs:upgrade_life',
        "count": 1
      },
      {
        "item": 'mythicmetals:metallurgium_ingot',
        "count": 16
      },
      {
        "item": 'kubejs:spectral_silt',
        "count": 64
      },
      {
        "item": 'mythicmetals:celestium_ingot',
        "count": 16
      },
      {
        "item": 'mythicmetals:banglum_chunk',
        "count": 5
      },
      {
        "item": 'spectrum:bedrock_dust',
        "count": 32
      }
    ],
    "result": {
      "item": 'kubejs:upgrade_nami'
    },
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine",
  })
  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 200,
    "experience": 5000.0,
    "fluid": "spectrum:liquid_crystal",
    "ingredients": [
      {
        "item": 'kubejs:upgrade_crit',
        "count": 1
      },
      {
        "item": 'kubejs:upgrade_lifesteal',
        "count": 1
      },
      {
        "item": 'gobber2:gobber2_medallion_suffering',
        "count": 1
      },
      {
        "item": 'kubejs:spectral_silt',
        "count": 64
      },
      {
        "item": 'gobber2:gobber2_ingot_end',
        "count": 16
      },
      {
        "item": 'kubejs:shenqi_ingot',
        "count": 5
      }
    ],
    "result": {
      "item": 'kubejs:upgrade_ren'
    },
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine",
  })
  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 200,
    "experience": 5000.0,
    "fluid": "spectrum:liquid_crystal",
    "ingredients": [
      {
        "item": 'kubejs:upgrade_ren',
        "count": 1
      },
      {
        "item": 'kubejs:upgrade_yuan',
        "count": 1
      },
      {
        "item": 'kubejs:shining_star',
        "count": 1
      },
      {
        "item": 'kubejs:spectral_silt',
        "count": 64
      },
      {
        "item": 'gobber2:dragon_star',
        "count": 2
      },
      {
        "item": 'spectrum:spectral_shard',
        "count": 32
      },
      {
        "item": 'spectrum:midnight_aberration',
        "count": 25
      }
    ],
    "result": {
      "item": 'kubejs:upgrade_liuren'
    },
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine",
  })
  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 300,
    "experience": 1000.0,
    "fluid": "spectrum:liquid_crystal",
    "ingredients": [
      {
        "item": 'gobber2:gobber2_ingot_nether',
        "count": 5
      },
      {
        "item": 'twilightforest:fiery_ingot',
        "count": 5
      },
      {
        "item": 'ringsofascension:ring_strength',
        "count": 1
      },
      {
        "item": 'things:gleaming_compound',
        "count": 2
      },
      {
        "item": 'kubejs:bloody_tear',
        "count": 1
      },
      {
        "item": 'kubejs:shenqi_ingot',
        "count": 4
      }
    ],
    "result": {
      "item": 'kubejs:lce_tang'
    },
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine",
  })
  event.custom({
    type: "spectrum:fusion_shrine",
    "time": 300,
    "experience": 1000.0,
    "ingredients": [
      {
        "item": 'gobber2:gobber2_rod_end',
        "count": 2
      },
      {
        "item": 'spectrum:scarlet_gem',
        "count": 2
      },
      {
        "item": 'minecraft:nether_star',
        "count": 1
      },
      {
        "item": 'mythicmetals:banglum_chunk',
        "count": 3
      },
      {
        "item": 'minecraft:diamond',
        "count": 32
      },
      {
        "item": 'soulsweapons:lord_soul_red',
        "count": 1
      },
      {
        "item": 'kubejs:shenqi_ingot',
        "count": 5
      }
    ],
    "result": {
      "item": 'kubejs:ailinghan'
    },
    "start_crafting_effect": "nothing",
    "during_crafting_effects": [
      "visual_explosions_on_shrine"
    ],
    "finish_crafting_effect": "lightning_on_shrine",
  })
  event.custom({
    type: "spectrum:pedestal",
    "time": 150,
    "tier": "basic",
    "cyan": 2,
    "magenta": 2,
    "yellow": 2,
    "white": 0,
    "black": 0,
    "experience": 10,
    "pattern": [
      " CA",
      "BDC",
      "EB "
    ],
    "key": {
      "A": {
        "item": 'minecraft:nether_star'
      },
      "B": {
        "item": 'staffofbuilding:netherite_builder_staff'
      },
      "C": {
        "item": 'kubejs:spectral_silt'
      },
      "D": {
        "item": 'bosses_of_mass_destruction:mob_ward'
      },
      "E": {
        "item": 'gateofbabylon:extended_stick'
      }

    },
    "result": {
      "item": 'staffofbuilding:infinite_builder_staff',
      "count": 1
    }
  })

  event.custom({
    type: "spectrum:pedestal",
    "time": 400,
    "tier": "advanced",
    "cyan": 0,
    "magenta": 4,
    "yellow": 0,
    "white": 0,
    "black": 2,
    "experience": 0,
    "pattern": [
      "ABF",
      "CEC",
      "CDC"
    ],
    "key": {
      "A": {
        "item": 'spectrum:red_pigment'
      },
      "B": {
        "item": 'minecraft:lapis_block'
      },
      "C": {
        "item": 'spectrum:polished_basalt'
      },
      "D": {
        "item": 'spectrum:polished_calcite'
      },
      "E": {
        "item": 'mythicmetals:hallowed_ingot'
      },
      "F": {
        "item": 'spectrum:cyan_pigment'
      }

    },
    "result": {
      "item": 'spectrum:enchanter',
      "count": 1
    }
  })

  event.custom({
  type: "spectrum:pedestal",
  "time": 600,
  "tier": "advanced",
  "magenta": 2,
  "yellow": 2,
  "cyan": 2,
  "black": 2,
  "white": 0,
  "experience": 2.0,
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "tag": "spectrum:player_only_glass"
    },
    "B": {
      "item": "spectrum:ender_treasure"
    }
  },
  "result": {
    "item": "spectrum:universe_spyhole",
    "count": 8
  },
  "required_advancement": "spectrum:midgame/build_advanced_pedestal_structure"
  }).id('spectrum:pedestal/tier3/universe_spyhole')
  
  event.custom({
  type: "spectrum:pedestal",
  "group": "item_bowls",
  "time": 120,
  "tier": "advanced",
  "cyan": 0,
  "magenta": 0,
  "yellow": 0,
  "white": 0,
  "black": 1,
  "experience": 1.0,
  "pattern": [
    "S S",
    "XSX",
    "XXX"
  ],
  "key": {
    "X": {
      "item": "spectrum:polished_basalt"
    },
    "S": {
      "item": "spectrum:sparklestone_gem"
    }
  },
  "result": {
    "item": "spectrum:item_bowl_basalt",
    "count": 1
  },
  "required_advancement": "spectrum:midgame/enter_liquid_crystal"
  }).id('spectrum:pedestal/tier3/item_bowl_basalt')

  event.custom({
  type: "spectrum:pedestal",
  "group": "item_bowls",
  "time": 120,
  "tier": "advanced",
  "cyan": 0,
  "magenta": 0,
  "yellow": 0,
  "white": 0,
  "black": 1,
  "experience": 1.0,
  "pattern": [
    "S S",
    "XSX",
    "XXX"
  ],
  "key": {
    "X": {
      "item": "spectrum:polished_calcite"
    },
    "S": {
      "item": "spectrum:sparklestone_gem"
    }
  },
  "result": {
    "item": "spectrum:item_bowl_calcite",
    "count": 1
  },
  "required_advancement": "spectrum:midgame/enter_liquid_crystal"
  }).id('spectrum:pedestal/tier3/item_bowl_calcite')
})
