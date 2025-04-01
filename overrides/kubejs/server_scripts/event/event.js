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
            if(target.maxHealth * 0.01 >= target.health && target.health > 0){
                target.setHealth(1)
            }else
            {
            target.attack(target.maxHealth * 0.01)
            }
            return
        }
        if (mainItem == 'kubejs:nature_spirit') {
            target.potionEffects.add('minecraft:slowness', 40, 9)
            target.potionEffects.add('soulsweapons:bleed', 80, 6)
            return
        }
        if (mainItem == 'kubejs:sixiang_kaitian') {
            if(target.health * 0.05 >= target.health && target.health > 0){
                target.setHealth(1)
            }else{
            target.attack(target.health * 0.05)
            }
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
            if(player.maxHealth * 0.1 >= target.health && target.health > 0){
                target.setHealth(1)
            }else{
            target.attack(player.maxHealth * 0.1)
        }
            return
        }
        if (mainItem == 'kubejs:jian_li') {
            let result = event.server.runCommandSilent(`attribute ${player.id} minecraft:generic.armor get`)
            if (player.health > player.maxHealth * 0.11) {
                player.heal(-player.maxHealth * 0.1)
            }
            if (player.health < 10 && result < 10) {
                if(damage * 2.5 >= target.health && target.health > 0){
                    target.setHealth(1)
                }else{
                target.attack(damage * 2.5)
                }
                target.potionEffects.add('minecraft:slowness', 100, 9)
                target.potionEffects.add('minecraft:weakness', 100, 9)
                player.potionEffects.add('spectrum:swiftness', 20, 9, false, false)
            } else {
                if(damage * 0.5 >= target.health && target.health > 0){
                    target.setHealth(1)
                }else{
                target.attack(damage * 0.5)
                }
            }
            return
        }
        if (mainItem == 'kubejs:kreska') {
            player.heal((damage * 0.1) * 0.08)
            return
        }
        if (mainItem == 'kubejs:mu_jian') {
            let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
            if(result * 0.5 >= target.health && target.health > 0){
                target.setHealth(1)
            }else{
            target.attack(result * 0.5)
            }
            return
        }
        if (mainItem == 'kubejs:mu_jian_seven') {
            let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
            if(result * 0.25 >= target.health && target.health > 0){
                target.setHealth(1)
            }else{
            target.attack(result * 0.25)
            }
            return
        }
        if (mainItem == 'kubejs:yuan_mu_jian') {
            let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
            if(result * 2.0 >= target.health && target.health > 0){
                target.setHealth(1)
            }else{
            target.attack(result * 2.0)
            }
            return
        }
        if (mainItem == 'kubejs:yuan_mu_jian_seven') {
            let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
            if(result * 1.0 >= target.health && target.health > 0){
                target.setHealth(1)
            }else{
            target.attack(result * 1.0)
            }
            return
        }
        if (mainItem == 'kubejs:yuan_mu_jian_one') {
            let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
            if(result * 0.5 >= target.health && target.health > 0){
                target.setHealth(1)
            }else{
            target.attack(result * 0.5)
            }
            return
        }
        if(mainItem == 'kubejs:sheng_jin'){
            target.potionEffects.add('extraalchemy:combustion',600,10)
            event.server.runCommandSilent(`summon minecraft:lightning_bolt ${target.getX()} ${target.getY()} ${target.getZ()}`)
            return
        }
    }
})

onEvent("entity.spawned", event => {
	let bossName = bossList[event.getEntity().type]
	if (!bossName) return
	event.server.tell(`\u00A75${bossName}已经苏醒!`)
})

onEvent("entity.spawned", event => {
    let entity = event.getEntity()
    if (!entity.monster) return
    if (entity.potionEffects.isActive('kibe:cursed_effect') && entity.type != 'minecraft:enderman') {
        event.server.scheduleInTicks(1, schedule => {
            if(entity.getHeldItem(MAIN_HAND) == null && entity.getHeldItem(OFF_HAND) == null) return
            entity.mainHandItem.count -= 1
            entity.offHandItem.count -= 1
         })
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