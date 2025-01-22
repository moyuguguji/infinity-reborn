const whitelist = Ingredient.matchAny([
    'botania:terra_pick',
    'twilightforest:pink_castle_rune_brick',
    'twilightforest:yellow_castle_rune_brick',
    'twilightforest:blue_castle_rune_brick',
    'twilightforest:violet_castle_rune_brick',
    'soulsweapons:crimson_obsidian',
    'minecraft:honeycomb_block',
    'bosses_of_mass_destruction:charged_ender_pearl',
    'adventurez:prime_eye',
    'twilightforest:naga_trophy',
    'twilightforest:lich_trophy',
    'twilightforest:minoshroom_trophy',
    'twilightforest:hydra_trophy',
    'twilightforest:knight_phantom_trophy',
    'twilightforest:ur_ghast_trophy',
    'twilightforest:alpha_yeti_trophy',
    'twilightforest:snow_queen_trophy',
    'kubejs:spectral_silt',
    'botania:mana_tablet',
    'botania:mana_ring',
    'botania:mana_ring_greater'

])

// ======================================

var lastResult = [];
var lastItemCount = 0;

//doo
onEvent('player.tick', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:ruoshui_sword') {
        if (event.player.crouching) {
            //海之屏障-潜行时给予抗性2
            event.player.potionEffects.add("minecraft:resistance", 10, 1, false, false)
        }
        if (event.player.attackingEntity != null) {
            //冰之霜寒-战斗时冻结攻击你的目标
            event.server.runCommandSilent(`effect give ${event.player.attackingEntity.id} minecraft:slowness 3 9 true`)
        }
        //水之净化-立刻熄灭你身上的火焰
        event.player.extinguish()

        //河之湍急-处于战斗状态时获得速度效果
        if (event.player.lastAttackedEntity != null && event.player.lastAttackedEntity.attackingEntity != null) {
            event.player.potionEffects.add("minecraft:speed", 10, 1, false, false)
        }

    }
})

//Infinity
onEvent('entity.hurt', event => {
    let target = event.getEntity()
    let source1 = event.getSource()
    if(source1.toString().includes('EntityDamageSource (Fake')) return
    let player = event.getSource().getPlayer()
    let damage= event.getDamage()
    let mainItem
    let offItem
    if (player != null) {
        mainItem = player.getHeldItem(MAIN_HAND)
        offItem = player.getHeldItem(OFF_HAND)
        if (target.type == 'bosses_of_mass_destruction:gauntlet') {
            if (mainItem.id == 'kubejs:xu_wu') {
                target.kill()
                mainItem.count -= 1
            }
            return
        }
        if (mainItem == 'kubejs:infinity_sword') {
            if (player.crouching) {
                target.kill()
            }
            return
        }
        if (mainItem == 'kubejs:qixing_sword') {
            player.heal((damage + target.health * 0.05) * 0.05)
            target.attack(target.maxHealth * 0.01)
            return
        }
        if (mainItem == 'kubejs:nature_spirit') {
            target.potionEffects.add('minecraft:slowness', 40, 9)
            target.potionEffects.add('soulsweapons:bleed', 80, 6)
            return
        }
        if (mainItem == 'kubejs:sixiang_kaitian') {
            target.attack(target.health * 0.05)
            return
        }
        if (mainItem == 'kubejs:lce_tang') {
            target.potionEffects.add('minecraft:slowness', 100, 1)
            target.potionEffects.add('minecraft:weakness', 100, 1)
            return
        }
        if (mainItem == 'kubejs:lce_tang') {
            player.heal((damage * 0.05) * 0.05)
            return
        }
        if (mainItem == 'kubejs:ailinghan') {
            target.attack(player.maxHealth * 0.1)
            return
        }
        if (mainItem == 'kubejs:jian_li') {
            let result = event.server.runCommandSilent(`attribute ${player.id} minecraft:generic.armor get`)
            if (player.health > player.maxHealth * 0.15) {
                player.heal(-player.maxHealth * 0.1)
            }
            if (player.health < 10 && result < 10) {
                target.attack(damage * 2.5)
                target.potionEffects.add('minecraft:slowness', 100, 9)
                target.potionEffects.add('minecraft:weakness', 100, 9)
                player.potionEffects.add('spectrum:swiftness', 20, 9, false, false)
            } else {
                target.attack(damage * 0.5)
            }
            return
        }
        if (mainItem == 'kubejs:kreska') {
            player.heal((damage * 0.1) * 0.08)
            return
        }
        if (mainItem == 'kubejs:mu_jian') {
            let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
            target.attack(result * 0.5)
            return
        }
        if (mainItem == 'kubejs:mu_jian_seven') {
            let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
            target.attack(result * 0.25)
            return
        }
        if (mainItem == 'kubejs:yuan_mu_jian') {
            let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
            target.attack(result * 2.0)
            return
        }
        if (mainItem == 'kubejs:yuan_mu_jian_seven') {
            let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
            target.attack(result * 1.0)
            return
        }
        if (mainItem == 'kubejs:yuan_mu_jian_one') {
            let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
            target.attack(result * 0.5)
            return
        }
        if(mainItem == 'kubejs:sheng_jin'){
            target.potionEffects.add('extraalchemy:combustion',600,10)
            event.server.runCommandSilent(`summon minecraft:lightning_bolt ${target.getX()} ${target.getY()} ${target.getZ()}`)
            return
        }
    }
})



onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)
    if (mainItem == 'kubejs:infinity_sword') {
        player.potionEffects.add("minecraft:resistance", 10, 4, false, false)
    }
})

//剑柄
onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)
    if (mainItem == 'kubejs:infinity_sword_a') {
        player.potionEffects.add("minecraft:resistance", 10, 4, false, false)
    }
})

//剑刃
onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)

    if (mainItem == 'kubejs:infinity_sword_b') {
        player.potionEffects.add('minecraft:instant_damage', 1, 0, false, false)
    }

})


onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)

    if (mainItem == 'kubejs:yecao_sword') {
        player.potionEffects.add('minecraft:fire_resistance', 20, 0, false, false)
        //event.server.runCommand(`say ${event.level.getBlock(player.getX()-1,player.getY()-1,player.getZ()-1).getId()}`)
        if (event.level.getBlock(player.getX() - 1, player.getY() - 1, player.getZ() - 1) == 'minecraft:grass_block') {
            player.potionEffects.add('minecraft:speed', 20, 3, false, false)
        }
        if (player.crouching) {
            player.potionEffects.add('minecraft:saturation', 20, 3, false, false)
        }
    }

})


//七星剑
onEvent('entity.death', event => {
    let entity = event.getEntity()
    let source1 = event.getSource()
    if(!isPlayerSource(source1)) return
    let player = event.getSource().getPlayer()
    if (player != null) {
        if (player.getHeldItem(MAIN_HAND) == 'kubejs:qixing_sword') {
            player.potionEffects.add('minecraft:absorption', 200, 3, false, false)
            let chance = randomNum(1, 2)
            if (chance == 1) {
                if (entity.type == 'minecraft:creeper') {
                    player.give('minecraft:creeper_head')
                }
                if (entity.player) {
                    event.server.runCommandSilent(`give ${player.name} minecraft:player_head{SkullOwner:"${entity.name}"} 1`)
                }
                if (entity.type == 'minecraft:zombie') {
                    player.give('minecraft:zombie_head')
                }
                if (entity.type == 'minecraft:skeleton') {
                    player.give('minecraft:skeleton_skull')
                }
                if (entity.type == 'minecraft:wither_skeleton') {
                    player.give('minecraft:wither_skeleton_skull')
                }
                if (entity.type == 'minecraft:ender_dragon') {
                    player.give('minecraft:dragon_head')
                }
            }

        }
    }
})

onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)
    if (mainItem == 'kubejs:qixing_sword') {
        player.potionEffects.add("minecraft:speed", 1, 2, false, false)
        player.potionEffects.add("minecraft:resistance", 1, 1, false, false)//抗性提升
    }
})

onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)

    if (mainItem == 'kubejs:nature_spirit') {
        player.potionEffects.add('minecraft:night_vision', 240, 0, false, false)
        player.potionEffects.add('minecraft:haste', 20, 1, false, false)
        if (event.player.lastAttackedEntity != null && !event.player.lastAttackedEntity.potionEffects.isActive('soulsweapons:bleed')) {
            event.player.lastAttackedEntity.potionEffects.add('soulsweapons:bleed', 80, 6)
            //event.server.runCommandSilent(`effect give ${event.player.lastAttackedEntity.id} minecraft:slowness 5 1 true`)
            //event.server.runCommandSilent(`effect give ${event.player.lastAttackedEntity.id} minecraft:weakness 5 1 true`)
        }
    }
})
onEvent('block.break', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)
    if (mainItem == 'kubejs:nature_spirit') {
        event.player.heal(1)
        event.player.addFood(2, 0.5)
    }
})


onEvent('block.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'xps:xp_remover') {
        if (event.player.getHeldItem(OFF_HAND) != 'spectrum:knowledge_gem') {
        }
        else {
            event.player.tell(`§c§l宝石不允许你这样做`)
            event.cancel()
        }
    }
})
onEvent('player.tick', event => {
    let player = event.player
    if (event.player.getHeldItem(MAIN_HAND) == 'spectrum:knowledge_gem' || event.player.getHeldItem(OFF_HAND) == 'spectrum:knowledge_gem') {
        if (event.level.getBlock(player.getX(), player.getY() - 1, player.getZ()) == 'kibe:xp_drain' || event.level.getBlock(player.getX(), player.getY() + 1, player.getZ()) == 'kibe:xp_drain' || event.level.getBlock(player.getX() - 1, player.getY() - 1, player.getZ() - 1) == 'kibe:xp_drain' || event.level.getBlock(player.getX(), player.getY() - 0.5, player.getZ()) == 'kibe:xp_drain') {
            event.server.runCommandSilent(`clear ${event.player.profile.name} spectrum:knowledge_gem`)
            event.player.tell(`§c§l宝石无法承受此能量`)
        }
    }
})
//四象
onEvent('player.tick', event => {
    let player = event.player
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:sixiang_kaitian') {
        if (event.player.lastAttackedEntity != null && event.player.lastAttackedEntity.attackingEntity != null) {
            event.player.potionEffects.add('minecraft:regeneration', 10, 1, false, false)
            event.player.potionEffects.add('minecraft:strength', 10, 4, false, false)
        }
        if (player.health > player.maxHealth % 2) {
            event.player.potionEffects.add('minecraft:resistance', 10, 1, false, false)
        }
    }
})

//白给靴
onEvent('player.tick', event => {
    let player = event.player
    let boots = player.getFeetArmorItem()

    if (boots == 'kubejs:baigei_boots') {
        player.potionEffects.add('minecraft:speed', 20, 1, false, false)
        player.potionEffects.add('extraalchemy:detection', 20, 0, false, false)
        player.potionEffects.add('minecraft:resistance', 10, 3, false, false)
        player.potionEffects.add('minecraft:regeneration', 10, 2, false, false)
    }
})
onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:boss_compass1') {
        event.server.runCommandSilent(`ftbranks add ${event.player.profile.name} locate`)
        event.player.runCommand(`locate bosses_of_mass_destruction:lich_tower`)
        event.server.runCommandSilent(`ftbranks remove ${event.player.profile.name} locate`)
        event.player.mainHandItem.count -= 1
        return
    }
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:boss_compass2') {
        event.server.runCommandSilent(`ftbranks add ${event.player.profile.name} locate`)
        event.player.runCommand(`locate bosses_of_mass_destruction:gauntlet_arena`)
        event.server.runCommandSilent(`ftbranks remove ${event.player.profile.name} locate`)
        event.player.mainHandItem.count -= 1
        return
    }

    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:boss_compass3') {
        event.server.runCommandSilent(`ftbranks add ${event.player.profile.name} locate`)
        event.player.runCommand(`locate bosses_of_mass_destruction:obsidilith_arena`)
        event.server.runCommandSilent(`ftbranks remove ${event.player.profile.name} locate`)
        event.player.mainHandItem.count -= 1
        return
    }

    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:boss_compass4') {
        event.server.runCommandSilent(`ftbranks add ${event.player.profile.name} locate`)
        event.player.runCommand(`locate bosses_of_mass_destruction:void_blossom`)
        event.server.runCommandSilent(`ftbranks remove ${event.player.profile.name} locate`)
        event.player.mainHandItem.count -= 1
        return
        //event.server.runCommandSilent(`clear ${event.player.profile.name} kubejs:boss_compass4 1`)
    }

    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:boss_compass5') {
        event.server.runCommandSilent(`ftbranks add ${event.player.profile.name} locate`)
        event.player.runCommand(`locate soulsweapons:champions_graves`)
        event.server.runCommandSilent(`ftbranks remove ${event.player.profile.name} locate`)
        event.player.mainHandItem.count -= 1
        return
    }

    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:boss_compass6') {
        event.server.runCommandSilent(`ftbranks add ${event.player.profile.name} locate`)
        event.player.runCommand(`locate soulsweapons:cathedral_of_resurrection`)
        event.server.runCommandSilent(`ftbranks remove ${event.player.profile.name} locate`)
        event.player.mainHandItem.count -= 1
        return
    }

    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:boss_compass7') {
        event.server.runCommandSilent(`ftbranks add ${event.player.profile.name} locate`)
        event.player.runCommand(`locate soulsweapons:decaying_kingdom`)
        event.server.runCommandSilent(`ftbranks remove ${event.player.profile.name} locate`)
        event.player.mainHandItem.count -= 1
        return
    }
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:yan_qiu') {
        let d = event.player.fullNBT.Dimension
        if (d == 'minecraft:the_end') {
            event.server.runCommandSilent(`execute at ${event.player.id} run summon adventurez:the_eye ${event.player.getX()} ${event.player.getY()} ${event.player.getZ()}`)
            event.player.mainHandItem.count -= 1
        } else {
            event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"需要在末地使用","color":"deepskyblue","bold":true}`)
        }
        return
    }
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:hei_shi') {
        let d = event.player.fullNBT.Dimension
        if (d == 'minecraft:the_nether') {
            event.server.runCommandSilent(`execute at ${event.player.id} run summon adventurez:stone_golem ${event.player.getX()} ${event.player.getY()} ${event.player.getZ()}`)
            event.player.mainHandItem.count -= 1
        } else {
            event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"需要在地狱使用","color":"deepskyblue","bold":true}`)
        }
        return
    }
})
onEvent('item.right_click', event => {
    let input = event.player.getHeldItem(MAIN_HAND) == 'kubejs:sao_di'
    switch (input) {
        case true:
            if (event.player.op) {
                clearLag(event.server);
                event.player.addItemCooldown('kubejs:sao_di', 100)
            } else {
                event.player.tell([Text.lightPurple('[扫地机器人]'), "你没有权限这样做"]);
            }
            break;
    }
})
onEvent('level.tick', event => {
    let moon = event.level.getMoonPhase()
    let day = event.level.getLocalTime()
    if (day % 24000 == 1) {
        switch (moon) {
            case 0:
                event.server.runCommandSilent(`title @a actionbar {"text":"今天的月相是满月","color":"deepskyblue","bold":true}`)
                //event.server.tell(`今天的月相是满月`)
                break;
            case 1:
                event.server.runCommandSilent(`title @a actionbar {"text":"今天的月相是亏凸月","color":"deepskyblue","bold":true}`)
                break;
            case 2:
                event.server.runCommandSilent(`title @a actionbar {"text":"今天的月相是下弦月","color":"deepskyblue","bold":true}`)
                //event.server.tell(`今天的月相是下弦月`)
                break;
            case 3:
                event.server.runCommandSilent(`title @a actionbar {"text":"今天的月相是残月","color":"deepskyblue","bold":true}`)
                //event.server.tell(`今天的月相是残月`)
                break;
            case 4:
                event.server.runCommandSilent(`title @a actionbar {"text":"今天的月相是新月","color":"deepskyblue","bold":true}`)
                //event.server.tell(`今天的月相是新月`)
                break;
            case 5:
                event.server.runCommandSilent(`title @a actionbar {"text":"今天的月相是蛾眉月","color":"deepskyblue","bold":true}`)
                //event.server.tell(`今天的月相是蛾眉月`)
                break;
            case 6:
                event.server.runCommandSilent(`title @a actionbar {"text":"今天的月相是上弦月","color":"deepskyblue","bold":true}`)
                //event.server.tell(`今天的月相是上弦月`)
                break;
            case 7:
                event.server.runCommandSilent(`title @a actionbar {"text":"今天的月相是盈凸月","color":"deepskyblue","bold":true}`)
                //event.server.tell(`今天的月相是盈凸月`)
                break;

        }
    }
})
onEvent('item.right_click', event => {
    let moon = event.level.getMoonPhase()
    if (event.player.getHeldItem(MAIN_HAND) == 'spectrum:crescent_clock') {
        switch (moon) {
            case 0:
                event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"今天的月相是满月","color":"deepskyblue","bold":true}`)
                //event.server.tell(`今天的月相是满月`)
                break;
            case 1:
                event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"今天的月相是亏凸月","color":"deepskyblue","bold":true}`)
                break;
            case 2:
                event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"今天的月相是下弦月","color":"deepskyblue","bold":true}`)
                //event.server.tell(`今天的月相是下弦月`)
                break;
            case 3:
                event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"今天的月相是残月","color":"deepskyblue","bold":true}`)
                //event.server.tell(`今天的月相是残月`)
                break;
            case 4:
                event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"今天的月相是新月","color":"deepskyblue","bold":true}`)
                //event.server.tell(`今天的月相是新月`)
                break;
            case 5:
                event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"今天的月相是蛾眉月","color":"deepskyblue","bold":true}`)
                //event.server.tell(`今天的月相是蛾眉月`)
                break;
            case 6:
                event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"今天的月相是上弦月","color":"deepskyblue","bold":true}`)
                //event.server.tell(`今天的月相是上弦月`)
                break;
            case 7:
                event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"今天的月相是盈凸月","color":"deepskyblue","bold":true}`)
                //event.server.tell(`今天的月相是盈凸月`)
                break;
        }
    }

})
onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:jing__xin') {
        event.server.runCommandSilent(`execute at ${event.player.id} run summon minecraft:wither`)
        event.player.addItemCooldown('kubejs:jing__xin', 100)
    }

})
onEvent('item.right_click', event => {
    if (event.item.id == 'kubejs:x_nuohua') {
        let random = randomNum(1, 10)
        switch (random) {
            case 1:
                event.player.give('spectrum:shooting_star_colorful')
                break;
            case 2:
                event.player.give('spectrum:shooting_star_glistering')
                break;
            case 3:
                event.player.give('spectrum:shooting_star_fiery')
                break;
            case 4:
                event.player.give('spectrum:shooting_star_pristine')
                break;
            case 5:
                event.player.give('spectrum:shooting_star_gemstone')
                break;
            default:
                event.player.give('5x spectrum:shooting_star')
                break;
        }
        event.player.addItemCooldown('kubejs:x_nuohua', 2400)
    }
})
onEvent('player.tick', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:lce_tang') {
        let player = event.player
        if (player.health < player.maxHealth * 0.5) {
            event.player.potionEffects.add('spectrum:swiftness', 10, 2, false, false)
        }
    }
})
onEvent('item.right_click', event => {
    let player = event.player
    if (event.item.id == 'kubejs:lce_tang') {
        if (player.crouching) {
            if (player.health <= 5) {
                event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"生命值不足","color":"red","bold":true}`)
            } else {
                player.heal(-5)
                event.player.potionEffects.add('minecraft:speed', 600, 1, false, false)
                event.player.potionEffects.add('minecraft:strength', 600, 2, false, false)
            }
        } else {
            event.player.potionEffects.add('minecraft:regeneration', 200, 1, false, false)
            event.player.addItemCooldown('kubejs:lce_tang', 300)
        }
    }

})
onEvent('player.tick', event => {
    let player = event.player
    if (player.getHeldItem(MAIN_HAND) == 'kubejs:jian_li') {
        if (player.lastAttackedEntity != null && player.lastAttackedEntity.attackingEntity != null) {
            player.potionEffects.add('spectrum:swiftness', 10, 1, false, false)
            player.potionEffects.add('minecraft:strength', 10, 1, false, false)
        }
    }
})

onEvent('item.right_click', event => {
    let player = event.player
    if (event.item.id == 'kubejs:ailinghan') {
        if (player.health <= player.maxHealth * 0.3) {
            event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"生命值不足","color":"red","bold":true}`)
        } else {
            player.heal(-player.maxHealth * 0.3)
            event.player.potionEffects.add('minecraft:strength', 180, 9, false, false)
            event.player.addItemCooldown('kubejs:ailinghan', 320)
        }
    }

})
