onEvent("lootjs", (event) => {
    event
        .addLootTypeModifier(LootType.ENTITY)
        .randomChance(0.05)
        .matchEntity((entity) => {
            entity.isMonster(true)
        })
        .not((n) => {
            n.matchEntity((entity) => {
                entity.anyType("twilightforest:death_tome")
            })
        })
        .addWeightedLoot([
            Item.of("kibe:cursed_droplets")
        ])
    event
        .addLootTypeModifier(LootType.ENTITY)
        .hasAnyStage('difficulty_yonghen')
        .removeLoot("artifacts:feral_claws")
        .removeLoot("utilities:blackbelt")
        .removeLoot("artifacts:antidote_vessel")
        .removeLoot("artifacts:vampiric_glove")
    event
        .addLootTypeModifier(LootType.ENTITY)
        .removeLoot("@gofish")
    event
        .addLootTypeModifier(LootType.CHEST)
        .hasAnyStage('difficulty_yonghen')
        .removeLoot("artifacts:feral_claws")
        .removeLoot("utilities:feralclaws")
        .removeLoot("utilities:berserkerglove")
        .removeLoot("utilities:blackbelt")
        .removeLoot("artifacts:antidote_vessel")
        .removeLoot("artifacts:vampiric_glove")
    event
        .addEntityLootModifier('twilightforest:harbinger_cube')
        .randomChance(0.02)
        .addLoot('twilightforest:cube_talisman')

    event
        .addLootTypeModifier(LootType.FISHING)
        .randomChance(0.4)
        .biome("minecraft:soul_sand_valley")
        .addLoot('gofish:soul_salmon')
    event
        .addLootTypeModifier(LootType.FISHING)
        .randomChance(0.15)
        .biome("minecraft:soul_sand_valley")
        .addLoot('gofish:soul_crate')

    event
        .addLootTypeModifier(LootType.FISHING)
        .randomChance(0.1)
        .addLoot('kubejs:jiushu_heart_shard')
    

    event
        .addBlockLootModifier("twilightforest:sorting_log_core")
        .addLoot("twilightforest:sorting_log_core")
        .removeLoot("twilightforest:sorting_log")

    event
        .addBlockLootModifier("minecraft:grass_block")
        .randomChance(0.00001)
        .addLoot("kubejs:tu_kuai")

    event
        .addBlockLootModifier("minecraft:dirt")
        .randomChance(0.00001)
        .addLoot("kubejs:tu_kuai")

    event
        .addBlockLootModifier("#minecraft:oak_logs")
        .randomChance(0.00001)
        .addLoot("kubejs:yuan_mu")
    event
        .addBlockLootModifier("minecraft:stone")
        .randomChance(0.000001)
        .addLoot("kubejs:shi_kuai")
    event
        .addBlockLootModifier("minecraft:deepslate")
        .randomChance(0.000001)
        .addLoot("kubejs:shi_shen_kuai")
    event
        .addBlockLootModifier("minecraft:netherrack")
        .randomChance(0.000001)
        .addLoot("kubejs:xiajie_kuai")
    event
        .addBlockLootModifier("minecraft:end_stone")
        .randomChance(0.00001)
        .addLoot("kubejs:modi_kuai")
    event
        .addLootTypeModifier(LootType.FISHING)
        .randomChance(0.4)
        .biome("minecraft:basalt_deltas")
        .addWeightedLoot([
            Item.of("gofish:blackstone_trout").withChance(50),
            Item.of("gofish:gilded_blackstone_carp").withChance(50)
        ])
    event
        .addLootTypeModifier(LootType.FISHING)
        .randomChance(0.15)
        .biome("minecraft:basalt_deltas")
        .addLoot('gofish:gilded_blackstone_crate')

    event
        .addEntityLootModifier('soulsweapons:chaos_monarch')
        .randomChance(0.5)
        .pool((p) => {
            p.addLoot("soulsweapons:essence_of_eventide");
            p.limitCount([1, 1]);
        });

    event
        .addEntityLootModifier('soulsweapons:moonknight')
        .randomChance(1.0)
        .pool((p) => {
            p.addLoot("endrem:undead_eye");
            p.limitCount([1, 1]);
        });
    
   event
        .addEntityLootModifier('minecraft:elder_guardian')
        .randomChance(0.25)
        .pool((p) => {
            p.addLoot('endrem:guardian_eye');
            p.limitCount([1, 1]);
        });
    
    event
        .addEntityLootModifier('soulsweapons:accursed_lord_boss')
        .randomChance(1.0)
        .pool((p) => {
            p.addLoot("endrem:cursed_eye");
            p.limitCount([1, 1]);
        });

    event
        .addEntityLootModifier('soulsweapons:draugr_boss')
        .randomChance(1.0)
        .pool((p) => {
            p.addLoot("endrem:corrupted_eye");
            p.limitCount([1, 1]);
        });

    event
        .addEntityLootModifier('bosses_of_mass_destruction:lich')
        .randomChance(1.0)
        .pool((p) => {
            p.addLoot("endrem:evil_eye");
            p.limitCount([1, 1]);
        });

    event
        .addEntityLootModifier('bosses_of_mass_destruction:void_blossom')
        .randomChance(1.0)
        .pool((p) => {
            p.addLoot("endrem:black_eye");
            p.limitCount([1, 1]);
        });

    event
        .addEntityLootModifier('adventurez:the_eye')
        .randomChance(0.5)
        .pool((p) => {
            p.addLoot("adventurez:prime_eye");
            p.limitCount([1, 1]);
        });

    event
        .addEntityLootModifier('whisperwoods:hirschgeist')
        .randomChance(1.0)
        .pool((p) => {
            p.addLoot("kubejs:soul_bone");
            p.limitCount([1, 1]);
        });

    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("utilities:bandofregeneration")
        .removeLoot("utilities:shackle")
        .removeLoot("botania:lexicon")
        .removeLoot("@mcdw")
        .removeLoot("ringsofascension:ring_experience")
        .removeLoot("@immersive_armors")
        .removeLoot("additionaladditions:glow_stick")
        .removeLoot("additionaladditions:rope")
        .removeLoot("farmersdelight:rope")
        .removeLoot("minecraft:gold_nugget")
        .removeLoot("minecraft:iron_nugget")
        .removeLoot("numismatic-overhaul:bronze_coin")

    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.45)
        .addLoot("kubejs:jiushu_heart_shard")

    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.05)
        .addLoot("gobber2:gobber2_special_item")

    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.035)
        .addLoot("kubejs:red_packet")

    event
        .addLootTypeModifier(LootType.CHEST)
        .hasAnyStage("difficulty_hard", "difficulty_impossible", "difficulty_impossibleplus", "difficulty_yonghen")
        .randomChance(0.5)
        .addLoot("kubejs:jiushu_heart_shard")

    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.1)
        .addLoot("collectorsalbum:epic_card_package")

    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.05)
        .addLoot("collectorsalbum:legendary_card_package")

    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.025)
        .addLoot("collectorsalbum:mythical_card_package")

    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.15)
        .addLoot('kubejs:ametrine_crystal')
    
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.1)
        .addLoot('kubejs:crystal_tiered')

    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.01)
        .addLoot('kubejs:gold_coin')

    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.15)
        .addLoot('kubejs:strong_fossil')

    event
        .addBlockLootModifier("#c:ores")
        .matchMainHand(Item.of("kubejs:nature_spirit").ignoreNBT())
        .not(n => n.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')))
        .randomChance(0.00085)
        .addLoot("mythicmetals:unobtainium");

    event
        .addEntityLootModifier("minecraft:wither_skeleton")// 获取LootActionsBuilder
        .randomChance(1.0) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([
            Item.of("minecraft:wither_skeleton_skull")
        ])

    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.35)
        .hasAnyStage("difficulty_hard", "difficulty_normal")
        .pool((p) => {
            p.addLoot("minecraft:book");
            p.enchantWithLevels([5, 30])
        })

    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.35)
        .hasAnyStage("difficulty_impossible", "difficulty_impossibleplus", "difficulty_yonghen")
        .pool((p) => {
            p.addLoot("minecraft:book");
            p.enchantWithLevels([15, 45], true)
        })
    event
        .addLootTypeModifier(LootType.ENTITY)
        .randomChance(0.025)
        .hasAnyStage("difficulty_impossibleplus", "difficulty_yonghen")
        .matchEntity((entity) => {
            entity.isMonster(true)
        })
        .not((n) => {
            n.matchEntity((entity) => {
                entity.anyType("twilightforest:death_tome")
            })
        })
        .pool((p) => {
            p.addWeightedLoot([0, 1], [
                Item.of("minecraft:book")
            ])
            //p.addLoot("minecraft:book");
            p.enchantWithLevels([10, 40]);
            p.limitCount([1, 1])
        })

    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.035)
        .addLoot("kubejs:shenqi_shard")

    event
        .addLootTypeModifier(LootType.ENTITY)// 获取LootActionsBuilder
        .randomChance(0.01) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_impossibleplus", "difficulty_yonghen")
        .matchEntity((entity) => {
            entity.isMonster(true)
        })
        .not((n) => {
            n.matchEntity((entity) => {
                entity.anyType("twilightforest:death_tome")
            })
        })
        .addWeightedLoot([
            Item.of("numismatic-overhaul:gold_coin")
        ])

    event
        .addLootTypeModifier(LootType.ENTITY)// 获取LootActionsBuilder
        .randomChance(0.1) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_hard", "difficulty_impossibleplus", "difficulty_yonghen")
        .matchEntity((entity) => {
            entity.isMonster(true)
        })
        .not((n) => {
            n.matchEntity((entity) => {
                entity.anyType("twilightforest:death_tome")
            })
        })
        .addWeightedLoot([
            Item.of("numismatic-overhaul:silver_coin")
        ])

    event
        .addLootTypeModifier(LootType.ENTITY)// 获取LootActionsBuilder
        .randomChance(0.01) // 战利品表条件：添加掉落概率
        .matchEntity((entity) => {
            entity.isUndeadMob(true)
        })
        .pool((p) => {
            p.addLoot("bosses_of_mass_destruction:soul_star");
            p.limitCount([1, 1]);
        });

    event
        .addLootTypeModifier(LootType.ENTITY)// 获取LootActionsBuilder
        .randomChance(0.05) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_hard", "difficulty_impossibleplus", "difficulty_yonghen")
        .matchEntity((entity) => {
            entity.isMonster(true)
        })
        .not((n) => {
            n.matchEntity((entity) => {
                entity.anyType("twilightforest:death_tome")
            })
        })
        .pool((p) => {
            p.addLoot("victus:blank_heart_aspect");
            p.limitCount([1, 1]);
        });


    event
        .addLootTypeModifier(LootType.ENTITY)// 获取LootActionsBuilder
        .randomChance(0.05) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_hard", "difficulty_impossibleplus", "difficulty_yonghen")
        .matchEntity((entity) => {
            entity.isMonster(true)
        })
        .not((n) => {
            n.matchEntity((entity) => {
                entity.anyType("twilightforest:death_tome")
            })
        })
        .addWeightedLoot([
            Item.of("collectorsalbum:epic_repacked_card_package").withChance(70),
            Item.of("collectorsalbum:legendary_repacked_card_package").withChance(10)
        ])
        .pool((p) => {
            p.limitCount([1, 1]);
        });
    event
        .addLootTypeModifier(LootType.ENTITY)// 获取LootActionsBuilder
        .randomChance(0.00055) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_impossibleplus", "difficulty_yonghen")
        .matchEntity((entity) => {
            entity.isMonster(true)
        })
        .not((n) => {
            n.matchEntity((entity) => {
                entity.anyType("twilightforest:death_tome")
            })
        })
        .addWeightedLoot([
            Item.of("kubejs:shenqi_ingot").withChance(70)
        ])
        .pool((p) => {
            p.limitCount([1, 1]);
        });
    event
        .addLootTypeModifier(LootType.ENTITY)// 获取LootActionsBuilder
        .randomChance(0.006) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_hard", "difficulty_impossibleplus", "difficulty_yonghen")
        .matchEntity((entity) => {
            entity.isMonster(true)
        })
        .not((n) => {
            n.matchEntity((entity) => {
                entity.anyType("twilightforest:death_tome")
            })
        })
        .pool((p) => {
            p.addLoot("kubejs:shenqi_shard")
            p.limitCount([1, 3]);
        });

    event
        .addLootTypeModifier(LootType.ENTITY)// 获取LootActionsBuilder
        .randomChance(0.025) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_impossibleplus", "difficulty_yonghen")
        .matchEntity((entity) => {
            entity.isMonster(true)
        })
        .not((n) => {
            n.matchEntity((entity) => {
                entity.anyType("twilightforest:death_tome")
            })
        })
        .pool((p) => {
            p.addLoot("collectorsalbum:mythical_repacked_card_package")
            p.limitCount([1, 1]);
        });
    event
        .addLootTypeModifier(LootType.ENTITY)// 获取LootActionsBuilder
        .randomChance(0.2) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_hard", "difficulty_normal", "difficulty_impossibleplus", "difficulty_yonghen")
        .matchEntity((entity) => {
            entity.isMonster(true)
        })
        .not((n) => {
            n.matchEntity((entity) => {
                entity.anyType("twilightforest:death_tome")
            })
        })
        .addWeightedLoot([
            Item.of("minecraft:diamond").withChance(20),
            Item.of("minecraft:iron_ingot").withChance(60),
            Item.of("minecraft:emerald").withChance(10),
            Item.of("minecraft:gold_ingo").withChance(25)
        ])

    event
        .addEntityLootModifier("twilightforest:naga", "twilightforest:lich", "terrarianslimes:king_slime")// 获取LootActionsBuilder
        .randomChance(0.5) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_hard", "difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([3, 7], [
            Item.of("mythicmetals:mythril_ingot").withChance(30),//秘银
            Item.of("mythicmetals:orichalcum_ingot").withChance(30),//山铜
            Item.of("mythicmetals:adamantite_ingot").withChance(15),//精金
            Item.of("mythicmetals:quadrillum_ingot").withChance(60),//四层
            Item.of("mythicmetals:prometheum_ingot").withChance(40),//钷
            Item.of("mythicmetals:platinum_ingot").withChance(60),//铂
            Item.of("mythicmetals:kyber_ingot").withChance(30),//凯铂
            Item.of("mythicmetals:durasteel_ingot").withChance(35),//耐用钢
            Item.of("mythicmetals:aquarium_ingot").withChance(60),//深海金属
            Item.of("mythicmetals:silver_ingot").withChance(35),//银
            Item.of("mythicmetals:runite_ingot").withChance(60),//文象花岗岩
            Item.of("mythicmetals:banglum_ingot").withChance(60),//班古姆
            Item.of("mythicmetals:bronze_ingot").withChance(50),//青铜
            Item.of("mythicmetals:carmot_ingot").withChance(10),//耀金
            Item.of("mythicmetals:aquarium_pearl").withChance(1)//激水珍珠
        ])

    event
        .addEntityLootModifier("twilightforest:naga", "twilightforest:lich", "terrarianslimes:king_slime")// 获取LootActionsBuilder
        .randomChance(1.0) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([4, 10], [
            Item.of("mythicmetals:mythril_ingot").withChance(30),//秘银
            Item.of("mythicmetals:orichalcum_ingot").withChance(30),//山铜
            Item.of("mythicmetals:adamantite_ingot").withChance(15),//精金
            Item.of("mythicmetals:quadrillum_ingot").withChance(60),//四层
            Item.of("mythicmetals:prometheum_ingot").withChance(40),//钷
            Item.of("mythicmetals:platinum_ingot").withChance(60),//铂
            Item.of("mythicmetals:kyber_ingot").withChance(30),//凯铂
            Item.of("mythicmetals:durasteel_ingot").withChance(35),//耐用钢
            Item.of("mythicmetals:aquarium_ingot").withChance(60),//深海金属
            Item.of("mythicmetals:silver_ingot").withChance(35),//银
            Item.of("mythicmetals:runite_ingot").withChance(60),//文象花岗岩
            Item.of("mythicmetals:banglum_ingot").withChance(60),//班古姆
            Item.of("mythicmetals:bronze_ingot").withChance(50),//青铜
            Item.of("mythicmetals:carmot_ingot").withChance(10),//耀金
            Item.of("mythicmetals:aquarium_pearl").withChance(1)//激水珍珠
        ])

    event
        .addEntityLootModifier("twilightforest:minoshroom", "twilightforest:alpha_yeti")// 获取LootActionsBuilder
        .randomChance(0.5) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_hard", "difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([3, 7], [
            Item.of("mythicmetals:mythril_ingot").withChance(30),//秘银
            Item.of("mythicmetals:orichalcum_ingot").withChance(30),//山铜
            Item.of("mythicmetals:adamantite_ingot").withChance(15),//精金
            Item.of("mythicmetals:prometheum_ingot").withChance(40),//钷
            Item.of("mythicmetals:kyber_ingot").withChance(30),//凯铂
            Item.of("mythicmetals:durasteel_ingot").withChance(35),//耐用钢
            Item.of("mythicmetals:silver_ingot").withChance(35),//银
            Item.of("mythicmetals:carmot_ingot").withChance(10),//耀金
            Item.of("mythicmetals:aquarium_pearl").withChance(3)//激水珍珠
        ])

    event
        .addEntityLootModifier("twilightforest:minoshroom", "twilightforest:alpha_yeti")// 获取LootActionsBuilder
        .randomChance(1.0) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([4, 10], [
            Item.of("mythicmetals:mythril_ingot").withChance(30),//秘银
            Item.of("mythicmetals:orichalcum_ingot").withChance(30),//山铜
            Item.of("mythicmetals:adamantite_ingot").withChance(15),//精金
            Item.of("mythicmetals:prometheum_ingot").withChance(40),//钷
            Item.of("mythicmetals:kyber_ingot").withChance(30),//凯铂
            Item.of("mythicmetals:durasteel_ingot").withChance(35),//耐用钢
            Item.of("mythicmetals:silver_ingot").withChance(35),//银
            Item.of("mythicmetals:carmot_ingot").withChance(10),//耀金
            Item.of("mythicmetals:aquarium_pearl").withChance(3)//激水珍珠
        ])

    event
        .addEntityLootModifier("twilightforest:knight_phantom", "soulsweapons:draugr_boss", "soulsweapons:night_shade", "bosses_of_mass_destruction:lich", "bosses_of_mass_destruction:void_blossom")// 获取LootActionsBuilder
        .randomChance(0.5) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_hard", "difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([1, 2], [
            Item.of("mythicmetals:mythril_ingot").withChance(30),//秘银
            Item.of("mythicmetals:orichalcum_ingot").withChance(30),//山铜
            Item.of("mythicmetals:adamantite_ingot").withChance(15),//精金
            Item.of("mythicmetals:prometheum_ingot").withChance(40),//钷
            Item.of("mythicmetals:kyber_ingot").withChance(30),//凯铂
            Item.of("mythicmetals:durasteel_ingot").withChance(35),//耐用钢
            Item.of("mythicmetals:silver_ingot").withChance(35),//银
            Item.of("mythicmetals:carmot_ingot").withChance(10),//耀金
            Item.of("mythicmetals:aquarium_pearl").withChance(1)//激水珍珠
        ])

    event
        .addEntityLootModifier("twilightforest:knight_phantom", "soulsweapons:draugr_boss", "soulsweapons:night_shade", "bosses_of_mass_destruction:lich", "bosses_of_mass_destruction:void_blossom")// 获取LootActionsBuilder
        .randomChance(1.0) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([2, 3], [
            Item.of("mythicmetals:mythril_ingot").withChance(30),//秘银
            Item.of("mythicmetals:orichalcum_ingot").withChance(30),//山铜
            Item.of("mythicmetals:adamantite_ingot").withChance(15),//精金
            Item.of("mythicmetals:prometheum_ingot").withChance(40),//钷
            Item.of("mythicmetals:kyber_ingot").withChance(30),//凯铂
            Item.of("mythicmetals:durasteel_ingot").withChance(35),//耐用钢
            Item.of("mythicmetals:silver_ingot").withChance(35),//银
            Item.of("mythicmetals:carmot_ingot").withChance(10),//耀金
            Item.of("mythicmetals:aquarium_pearl").withChance(1)//激水珍珠
        ])

    event
        .addEntityLootModifier("twilightforest:ur_ghast", "twilightforest:hydra", "twilightforest:snow_queen", "soulsweapons:moonknight", "soulsweapons:returning_knight")// 获取LootActionsBuilder
        .randomChance(0.5) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_hard", "difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([3, 7], [
            Item.of("mythicmetals:mythril_ingot").withChance(60),//秘银
            Item.of("mythicmetals:orichalcum_ingot").withChance(60),//山铜
            Item.of("mythicmetals:adamantite_ingot").withChance(40),//精金
            Item.of("mythicmetals:carmot_ingot").withChance(40),//耀金
            Item.of("botania:manasteel_ingot").withChance(60),//魔力钢
            Item.of("mythicmetals:banglum_chunk").withChance(1),//聚爆石
            Item.of("mythicmetals:unobtainium").withChance(5),//难得素
            Item.of("minecraft:netherite_ingot").withChance(25),//下界合金
        ])

    event
        .addEntityLootModifier("twilightforest:ur_ghast", "twilightforest:hydra", "twilightforest:snow_queen", "soulsweapons:moonknight", "soulsweapons:returning_knight")// 获取LootActionsBuilder
        .randomChance(1.0) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([4, 10], [
            Item.of("mythicmetals:mythril_ingot").withChance(60),//秘银
            Item.of("mythicmetals:orichalcum_ingot").withChance(60),//山铜
            Item.of("mythicmetals:adamantite_ingot").withChance(40),//精金
            Item.of("mythicmetals:carmot_ingot").withChance(30),//耀金
            Item.of("botania:manasteel_ingot").withChance(60),//魔力钢
            Item.of("mythicmetals:banglum_chunk").withChance(1),//聚爆石
            Item.of("mythicmetals:unobtainium").withChance(5),//难得素
            Item.of("minecraft:netherite_ingot").withChance(25),//下界合金
        ])

    event
        .addEntityLootModifier("bosses_of_mass_destruction:gauntlet", "soulsweapons:chaos_monarch", "minecraft:wither", "soulsweapons:accursed_lord_boss")// 获取LootActionsBuilder
        .randomChance(0.5) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_hard", "difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([3, 7], [
            Item.of("mythicmetals:palladium_ingot").withChance(60),//钯金
            Item.of("mythicmetals:hallowed_ingot").withChance(40),//神圣
            Item.of("mythicmetals:adamantite_ingot").withChance(50),//精金
            Item.of("mythicmetals:metallurgium_ingot").withChance(5),//冶金
            Item.of("mythicmetals:stormyx_ingot").withChance(60),//风暴锭
            Item.of("mythicmetals:banglum_chunk").withChance(5),//聚爆石
            Item.of("mythicmetals:unobtainium").withChance(10),//难得素
            Item.of("minecraft:netherite_ingot").withChance(30),//下界合金
            Item.of("mythicmetals:stormyx_shell").withChance(1)//风暴石外壳
        ])

    event
        .addEntityLootModifier("bosses_of_mass_destruction:gauntlet", "soulsweapons:chaos_monarch", "minecraft:wither", "soulsweapons:accursed_lord_boss")// 获取LootActionsBuilder
        .randomChance(1.0) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([4, 10], [
            Item.of("mythicmetals:palladium_ingot").withChance(60),//钯金
            Item.of("mythicmetals:hallowed_ingot").withChance(40),//神圣
            Item.of("mythicmetals:adamantite_ingot").withChance(50),//精金
            Item.of("mythicmetals:metallurgium_ingot").withChance(5),//冶金
            Item.of("mythicmetals:stormyx_ingot").withChance(60),//风暴锭
            Item.of("mythicmetals:banglum_chunk").withChance(5),//聚爆石
            Item.of("mythicmetals:unobtainium").withChance(10),//难得素
            Item.of("minecraft:netherite_ingot").withChance(30),//下界合金
            Item.of("mythicmetals:stormyx_shell").withChance(1)//风暴石外壳
        ])

    event
        .addEntityLootModifier("minecraft:ender_dragon", "bosses_of_mass_destruction:obsidilith", "adventurez:void_shadow", "adventurez:stone_golem")// 获取LootActionsBuilder
        .randomChance(0.5) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_hard", "difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([3, 7], [
            Item.of("mythicmetals:star_platinum").withChance(60),//星铂
            Item.of("mythicmetals:hallowed_ingot").withChance(60),//神圣
            Item.of("gobber2:gobber2_ingot").withChance(55),//戈伯
            Item.of("mythicmetals:metallurgium_ingot").withChance(10),//冶金
            Item.of("mythicmetals:banglum_chunk").withChance(10),//聚爆石
            Item.of("mythicmetals:unobtainium").withChance(15),//难得素
            Item.of("gobber2:gobber2_ingot_nether").withChance(20),//下届戈伯
            Item.of("mythicmetals:stormyx_shell").withChance(5)//风暴石外壳
        ])
    event
        .addEntityLootModifier("minecraft:ender_dragon", "bosses_of_mass_destruction:obsidilith", "adventurez:void_shadow", "adventurez:stone_golem")// 获取LootActionsBuilder
        .randomChance(1.0) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossible", "difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([4, 10], [
            Item.of("mythicmetals:star_platinum").withChance(60),//星铂
            Item.of("mythicmetals:hallowed_ingot").withChance(60),//神圣
            Item.of("gobber2:gobber2_ingot").withChance(55),//戈伯
            Item.of("mythicmetals:metallurgium_ingot").withChance(10),//冶金
            Item.of("mythicmetals:banglum_chunk").withChance(10),//聚爆石
            Item.of("mythicmetals:unobtainium").withChance(15),//难得素
            Item.of("gobber2:gobber2_ingot_nether").withChance(20),//下届戈伯
            Item.of("mythicmetals:stormyx_shell").withChance(5)//风暴石外壳
        ])

    event
        .addEntityLootModifier("twilightforest:naga")// 获取LootActionsBuilder
        .randomChance(1.0) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([
            Item.of("twilightforest:naga_courtyard_miniature_structure")
        ])
    event
        .addEntityLootModifier("twilightforest:lich")// 获取LootActionsBuilder
        .randomChance(1.0) // 战利品表条件：添加掉落概率
        .hasAnyStage("difficulty_impossibleplus", "difficulty_yonghen")
        .addWeightedLoot([
            Item.of("twilightforest:lich_tower_miniature_structure")
        ])
    event
        .addLootTableModifier("gofish:gameplay/fishing/fiery_crate")
        .randomChance(0.25) // 战利品表条件：添加掉落概率
        .addWeightedLoot([8, 15], [
            Item.of("mythicmetals:mythril_nugget").withChance(60),//秘银
            Item.of("mythicmetals:orichalcum_nugget").withChance(60),//山铜
            Item.of("mythicmetals:palladium_nugget").withChance(60),//钯金
            Item.of("mythicmetals:adamantite_nugget").withChance(50),//精金
            Item.of("mythicmetals:stormyx_nugget").withChance(60),//风暴锭
            Item.of("mythicmetals:banglum_chunk").withChance(1),//聚爆石
        ])
    event
        .addLootTableModifier("gofish:gameplay/fishing/soul_crate")
        .randomChance(0.35) // 战利品表条件：添加掉落概率
        .addWeightedLoot([8, 15], [
            Item.of("mythicmetals:mythril_nugget").withChance(60),//秘银
            Item.of("mythicmetals:orichalcum_nugget").withChance(60),//山铜
            Item.of("mythicmetals:palladium_nugget").withChance(60),//钯金
            Item.of("mythicmetals:adamantite_nugget").withChance(50),//精金
            Item.of("mythicmetals:stormyx_nugget").withChance(60),//风暴锭
            Item.of("mythicmetals:banglum_chunk").withChance(1),//聚爆石
        ])
    event
        .addLootTableModifier("gofish:gameplay/fishing/gilded_blackstone_crate")
        .randomChance(0.45) // 战利品表条件：添加掉落概率
        .addWeightedLoot([8, 15], [
            Item.of("mythicmetals:mythril_nugget").withChance(60),//秘银
            Item.of("mythicmetals:orichalcum_nugget").withChance(60),//山铜
            Item.of("mythicmetals:palladium_nugget").withChance(60),//钯金
            Item.of("mythicmetals:adamantite_nugget").withChance(50),//精金
            Item.of("adventurez:gilded_stone").withChance(45),//镶金黑石
            Item.of("mythicmetals:stormyx_nugget").withChance(60),//风暴锭
            Item.of("mythicmetals:banglum_chunk").withChance(1),//聚爆石
        ])
    event
        .addLootTableModifier("gofish:gameplay/fishing/end_crate")
        .randomChance(0.45) // 战利品表条件：添加掉落概率
        .addWeightedLoot([8, 15], [
            Item.of("mythicmetals:metallurgium_nugget").withChance(60),//秘银
            Item.of("mythicmetals:hallowed_nugget").withChance(60),//山铜
            Item.of("mythicmetals:star_platinum_nugget").withChance(60),//钯金
            Item.of("mythicmetals:adamantite_nugget").withChance(50),//精金
            Item.of("mythicmetals:stormyx_nugget").withChance(60),//风暴锭
            Item.of("mythicmetals:banglum_chunk").withChance(1),//聚爆石
            Item.of("mythicmetals:stormyx_shell").withChance(1),//风暴石外壳
            Item.of("mythicmetals:unobtainium").withChance(5)
        ])
    event
        .addEntityLootModifier("minecraft:wither","soulsweapons:chaos_monarch","minecraft:ender_dragon","soulsweapons:moonknight","soulsweapons:accursed_lord_boss","soulsweapons:draugr_boss","adventurez:stone_golem","adventurez:void_shadow","adventurez:the_eye","whisperwoods:hirschgeist","soulsweapons:night_shade","terrarianslimes:king_slime","bosses_of_mass_destruction:lich","bosses_of_mass_destruction:void_blossom","bosses_of_mass_destruction:gauntlet","bosses_of_mass_destruction:obsidilith","botania:doppleganger","soulsweapons:returning_knight",)
        .randomChance(1.0)
        .addLoot('numismatic-overhaul:gold_coin')

    event
        .addBlockLootModifier("minecraft:mushroom_stem")
        .randomChance(0.1)
        .addLoot("kubejs:gu")

    event
        .addBlockLootModifier("minecraft:red_mushroom_block")
        .randomChance(0.1)
        .addLoot("kubejs:gu")
    
    event
        .addLootTableModifier("spectrum:chests/wireless_redstone_main")
        .removeLoot('minecraft:emerald')
        .removeLoot('minecraft:amethyst_shard')
        .removeLoot('spectrum:topaz_shard')
        .removeLoot('spectrum:citrine_shard')
        .removeLoot('minecraft:diamond')
        .removeLoot('#spectrum:gemstone_buds')
        .removeLoot('#spectrum:pigments')

    event
        .addLootTableModifier("spectrum:chests/ancient_ruins_main")
        .removeLoot('minecraft:emerald')
        .removeLoot('minecraft:amethyst_shard')
        .removeLoot('spectrum:topaz_shard')
        .removeLoot('spectrum:citrine_shard')
        .removeLoot('minecraft:diamond')
        .removeLoot('#spectrum:gemstone_buds')
        .removeLoot('#spectrum:pigments')

    event
        .addLootTableModifier("spectrum:chests/color_combinations_black")
        .removeLoot('minecraft:emerald')
        .removeLoot('minecraft:amethyst_shard')
        .removeLoot('spectrum:topaz_shard')
        .removeLoot('spectrum:citrine_shard')
        .removeLoot('minecraft:diamond')
        .removeLoot('#spectrum:gemstone_buds')
        .removeLoot('#spectrum:pigments')

    event
        .addLootTableModifier("spectrum:chests/color_combinations_cmy")
        .removeLoot('minecraft:emerald')
        .removeLoot('minecraft:amethyst_shard')
        .removeLoot('spectrum:topaz_shard')
        .removeLoot('spectrum:citrine_shard')
        .removeLoot('minecraft:diamond')
        .removeLoot('#spectrum:gemstone_buds')
        .removeLoot('#spectrum:pigments')

    event
        .addLootTableModifier("spectrum:chests/wireless_redstone_main")
        .removeLoot('minecraft:emerald')
        .removeLoot('minecraft:amethyst_shard')
        .removeLoot('spectrum:topaz_shard')
        .removeLoot('spectrum:citrine_shard')
        .removeLoot('minecraft:diamond')
        .removeLoot('#spectrum:gemstone_buds')
        .removeLoot('#spectrum:pigments')

        event
        .addLootTableModifier("dungeoncrawl:chests/stage_1")
        .randomChance(0.25) // 战利品表条件：添加掉落概率
        .addWeightedLoot([2, 10], [
            Item.of('mythicmetals:mythril_ingot').withChance(10),//秘银
            Item.of('mythicmetals:quadrillum_ingot').withChance(50),//四层
            Item.of('kubejs:crystal_tiered').withChance(50),//神铸
            Item.of('mythicmetals:orichalcum_ingot').withChance(10),//山铜
            Item.of('kubejs:ametrine_crystal').withChance(50),//紫金
            Item.of('mythicmetals:carmot_ingot').withChance(15),
            Item.of('numismatic-overhaul:money_bag', '{Combined:1b,Values:[L;0L,10L,0L]}')//钱//耀金
        ])
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_2")
        .randomChance(0.45) // 战利品表条件：添加掉落概率
        .addWeightedLoot([4, 10], [
            Item.of('mythicmetals:mythril_ingot').withChance(10),//秘银
            Item.of('mythicmetals:quadrillum_ingot').withChance(50),//四层
            Item.of('kubejs:crystal_tiered').withChance(50),//神铸
            Item.of('mythicmetals:orichalcum_ingot').withChance(10),//山铜
            Item.of('kubejs:ametrine_crystal').withChance(50),//紫金
            Item.of('mythicmetals:carmot_ingot').withChance(15),
            Item.of('numismatic-overhaul:money_bag', '{Combined:1b,Values:[L;0L,20L,0L]}')//钱//耀金
        ])
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_3")
        .randomChance(0.6) // 战利品表条件：添加掉落概率
        .addWeightedLoot([5, 14], [
            Item.of('mythicmetals:mythril_ingot').withChance(10),//秘银
            Item.of('mythicmetals:quadrillum_ingot').withChance(50),//四层
            Item.of('kubejs:crystal_tiered').withChance(50),//神铸
            Item.of('mythicmetals:orichalcum_ingot').withChance(10),//山铜
            Item.of('kubejs:ametrine_crystal').withChance(50),//紫金
            Item.of('mythicmetals:carmot_ingot').withChance(15),//耀金
            Item.of('numismatic-overhaul:money_bag', '{Combined:1b,Values:[L;0L,30L,0L]}')//钱
        ])
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_4")
        .randomChance(0.75) // 战利品表条件：添加掉落概率
        .addWeightedLoot([8, 18], [
            Item.of('mythicmetals:mythril_ingot').withChance(25),//秘银
            Item.of('mythicmetals:quadrillum_ingot').withChance(55),//四层
            Item.of('kubejs:crystal_tiered').withChance(50),//神铸
            Item.of('mythicmetals:orichalcum_ingot').withChance(25),//山铜
            Item.of('kubejs:ametrine_crystal').withChance(50),//紫金
            Item.of('mythicmetals:carmot_ingot').withChance(25),//耀金
            Item.of('mythicmetals:adamantite_ingot').withChance(20),//精金
            Item.of('mythicmetals:kyber_ingot').withChance(5),//凯伯
            Item.of('numismatic-overhaul:money_bag', '{Combined:1b,Values:[L;0L,40L,0L]}')//钱
        ])
    event
        .addLootTableModifier("dungeoncrawl:chests/stage_5")
        .randomChance(1.0) // 战利品表条件：添加掉落概率
        .addWeightedLoot([10, 25], [
            Item.of('mythicmetals:mythril_ingot').withChance(30),//秘银
            Item.of('kubejs:crystal_tiered').withChance(50),//神铸
            Item.of('mythicmetals:orichalcum_ingot').withChance(30),//山铜
            Item.of('kubejs:ametrine_crystal').withChance(50),//紫金
            Item.of('mythicmetals:carmot_ingot').withChance(30),//耀金
            Item.of('mythicmetals:adamantite_ingot').withChance(25),//精金
            Item.of('mythicmetals:kyber_ingot').withChance(10),//凯伯
            Item.of('numismatic-overhaul:money_bag', '{Combined:1b,Values:[L;0L,50L,0L]}')//钱
        ])
        event
        .addLootTableModifier("minecraft:chests/end_city_treasure")
        .randomChance(0.5) // 战利品表条件：添加掉落概率
        .addWeightedLoot([1, 8], [
            Item.of('purpeille:preserved_dust').withChance(20),
            Item.of('purpeille:remnant_brick').withChance(80)
        ])

})
