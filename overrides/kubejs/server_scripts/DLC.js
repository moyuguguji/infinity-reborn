
onEvent('entity.death', event => {//死亡事件
    let entity = event.getEntity()
    let source1 = event.getSource()
    if(!isPlayerSource(source1)) return
    let player = event.getSource().getPlayer()
    if (player != null) {
        if (player.stages.has('difficulty_yonghen')) {
            if (entity.monster || entity.type =="whisperwoods:hirschgeist") {
                let targetTypes1 = [
                    "twilightforest:naga", "twilightforest:lich", "terrarianslimes:king_slime"
                ]
                let targetTypes2 = [
                    "twilightforest:minoshroom", "twilightforest:alpha_yeti"
                ]
                let targetTypes3 = [
                    "soulsweapons:draugr_boss", "soulsweapons:night_shade", "bosses_of_mass_destruction:lich", "bosses_of_mass_destruction:void_blossom"
                ]
                let targetTypes4 = [
                    "twilightforest:ur_ghast",
                    "twilightforest:hydra",
                    "twilightforest:snow_queen",
                    "soulsweapons:moonknight", "soulsweapons:returning_knight"
                ]
                let targetTypes5 = [
                    "bosses_of_mass_destruction:gauntlet", "botania:doppleganger", "soulsweapons:chaos_monarch", "minecraft:wither", "soulsweapons:accursed_lord_boss"
                ]
                let targetTypes6 = [
                    "minecraft:ender_dragon", "bosses_of_mass_destruction:obsidilith", "adventurez:void_shadow", "adventurez:stone_golem"
                ]
                let random = randomNum(1, 2)
                if (random == 1) {//小怪加难度
                    event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add 0.1`)
                }
                if (entity.type == 'minecraft:spider' || entity.type == 'minecraft:cave_spider') {//蜘蛛
                    let random = randomNum(1, 4)
                    let randomx = randomNum(-1, 2)
                    let randomz = randomNum(-1, 2)
                    if (random == 1) {
                        event.server.runCommandSilent(`execute at ${player.profile.name} run summon minecraft:cave_spider ${entity.getX() + randomx} ${entity.getY()} ${entity.getZ() + randomz}`)
                    }
                }
                if (entity.type == 'minecraft:creeper') {
                    let random = randomNum(1, 10)
                    if (random == 1) {
                        let explosion = entity.block.createExplosion();
                        // 设置爆炸强度，默认值为3
                        explosion.strength(5.0);
                        // 设置是否生成火，默认值为false
                        explosion.explode();
                    }
                }
                if (entity.type == 'minecraft:magma_cube') {
                    let random = randomNum(1, 100)
                    if (random <= 5) {
                    entity.block.set("minecraft:lava")
                    }
                }
                if (!player.stages.has('yi') && entity.type == 'minecraft:wither') {
                    player.stages.add('yi')
                    event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add 25`)
                } else if (!player.stages.has('er') && entity.type == 'botania:doppleganger') {
                    player.stages.add('er')
                    event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add 50`)
                } else if (!player.stages.has('end') && entity.type == 'minecraft:ender_dragon') {
                    player.stages.add('end')
                    event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add 80`)
                }
                if (targetTypes1.includes(entity.type)) {
                    event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add 2`)
                }
                else if (targetTypes2.includes(entity.type)) {
                    event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add 5`)
                }
                else if (targetTypes3.includes(entity.type)) {
                    event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add 6`)
                }
                else if (targetTypes4.includes(entity.type)) {
                    event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add 8`)
                }
                else if (targetTypes5.includes(entity.type)) {
                    event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add 10`)
                }
                else if (targetTypes6.includes(entity.type)) {
                    event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add 15`)
                }
                else if (entity.type == 'twilightforest:knight_phantom') {
                    event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add 1`)
                }
                
            }
        }
    }
})
onEvent('recipes', event => {//锻造
    Ingredient.of('#c:armor').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#tier:1armor').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#tier:2armor').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#tier:3armor').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#tier:4armor').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#tier:5armor').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#tier:5helmet').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#tier:5chestplate').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#tier:5leggings').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#tier:5boots').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#c:pickaxes').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#c:axes').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#c:swords').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#tier:1weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#tier:2weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#tier:3weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#tier:4weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });
    Ingredient.of('#tier:5weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element), Item.of(element).ignoreNBT(), 'spectrum:spectral_shard')
    });

    Ingredient.of('#c:armor').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:1armor').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:2armor').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:3armor').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:4armor').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:5armor').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:5helmet').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:5chestplate').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:5leggings').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:5boots').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#c:pickaxes').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#c:axes').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#c:swords').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:1weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:2weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:3weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:4weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    Ingredient.of('#tier:5weapon').getItemIds().forEach(element => {
        event.smithing(Item.of(element), 'spectrum:spectral_shard', Item.of(element).ignoreNBT())
    });
    event.smithing(Item.of('botania:terra_pick').withNBT('{mana:2147483646}'), 'botania:creative_pool', Item.of('botania:terra_pick').ignoreNBT())
})
onEvent('recipes', event => {//光谱
    event.custom({
        type: "spectrum:fusion_shrine",
        "time": 600,
        "experience": 5000.0,
        "fluid": "spectrum:liquid_crystal",
        "ingredients": [
            {
                "item": 'spectrum:budding_onyx',
                "count": 1
            },
            {
                "item": 'spectrum:budding_citrine',
                "count": 1
            },
            {
                "item": 'spectrum:budding_topaz',
                "count": 1
            },
            {
                "item": 'minecraft:budding_amethyst',
                "count": 1
            },
            {
                "item": 'spectrum:midnight_aberration',
                "count": 5
            },
            {
                "item": 'spectrum:bedrock_dust',
                "count": 10
            }
        ],
        "result": {
            "item": 'spectrum:budding_moonstone'
        },
        "required_advancement": "spectrum:build_fusion_shrine"
    })
})
onEvent('recipes', event => {//永恒
    event.shapeless('kubejs:yong_hen_star', ['kubejs:difficulty_changer'])
})
onEvent('item.right_click', event => {//永恒
    let player = event.getPlayer()
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:yong_hen_star') {
        if (event.player.getHeldItem(OFF_HAND) != null) {
            event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"你无法在副手持有物品时使用该物品","color":"red","bold":true}`)
        } else if (event.player.stages.has('difficulty_yonghen')) {
            event.player.stages.remove('difficulty_easy')
            event.player.stages.remove('difficulty_normal')
            event.player.stages.remove('difficulty_hard')
            event.player.stages.remove('difficulty_impossible')
            event.player.stages.remove('difficulty_impossibleplus')
            event.player.stages.remove('difficulty_yonghen')
            event.player.stages.add('difficulty_easy')
            event.player.playSound('minecraft:entity.ender_dragon.ambient')
            event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"当前难度：旅途","color":"green","bold":true}`)
        } else if (!event.player.stages.has('lb')) {
            event.player.stages.remove('difficulty_easy')
            event.player.stages.remove('difficulty_normal')
            event.player.stages.remove('difficulty_hard')
            event.player.stages.remove('difficulty_impossible')
            event.player.stages.remove('difficulty_impossibleplus')
            event.player.stages.remove('difficulty_yonghen')
            event.player.stages.add('difficulty_yonghen')
            event.player.playSound('minecraft:entity.ender_dragon.growl')
            event.player.give(Item.of('spectrum:present', '{Colors:[{Amount:1,Color:"white"}],Giver:"moyuguguji",GiverUUID:[I;-1015466589,-1697168830,-1474266886,36528245],Items:[{Count:1b,id:"inmis:frayed_backpack",tag:{Inventory:[{Slot:0,Stack:{Count:1b,id:"toms_storage:ts.inventory_connector"}},{Slot:1,Stack:{Count:1b,id:"toms_storage:ts.crafting_terminal"}},{Slot:2,Stack:{Count:3b,id:"expandedstorage:diamond_barrel"}},{Slot:3,Stack:{Count:1b,id:"mcdw:sword_iron_sword_var",tag:{Damage:0,swa3:{}}}},{Slot:4,Stack:{Count:16b,id:"things:recall_potion"}},{Slot:5,Stack:{Count:1b,id:"things:socks",tag:{}}},{Slot:6,Stack:{Count:1b,id:"waystones:warp_stone",tag:{Damage:0}}},{Slot:7,Stack:{Count:1b,id:"extraalchemy:potion_bag",tag:{}}},{Slot:8,Stack:{Count:8b,id:"minecraft:golden_apple"}}]}},{Count:1b,id:"mcda:spelunker_armor_helmet",tag:{Damage:0,saa1:{}}},{Count:1b,id:"mcda:spelunker_armor_chestplate",tag:{Damage:0,saa1:{}}},{Count:1b,id:"mcda:spelunker_armor_leggings",tag:{Damage:0,saa1:{}}},{Count:1b,id:"mcda:spelunker_armor_boots",tag:{Damage:0,saa1:{}}}],Variant:"red",Wrapped:1b,display:{Name:\'{"italic":false,"extra":[{"text":""},{"color":"gold","text":"冒险礼包"}],"text":""}\'}}'))
            event.player.stages.add('lb')
            event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"当前难度：永恒","color":"aqua","bold":true}`)
        } else {
            event.player.stages.remove('difficulty_easy')
            event.player.stages.remove('difficulty_normal')
            event.player.stages.remove('difficulty_hard')
            event.player.stages.remove('difficulty_impossible')
            event.player.stages.remove('difficulty_impossibleplus')
            event.player.stages.remove('difficulty_yonghen')
            event.player.stages.add('difficulty_yonghen')
            event.player.playSound('minecraft:entity.ender_dragon.growl')
            event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"当前难度：永恒","color":"aqua","bold":true}`)
        }
    }
})
onEvent('item.entity_interact',event=>{
    let player = event.getPlayer()
    let entity = event.target
    if (player != null) {
        if (entity != null) {
            if (player.stages.has('difficulty_yonghen')) {
                if ((event.player.getHeldItem(MAIN_HAND) == 'minecraft:flint_and_steel' || event.player.getHeldItem(OFF_HAND) == 'minecraft:flint_and_steel') && entity.type =='minecraft:creeper') {
                    event.cancel()
                }
            }
        }
    }
})
