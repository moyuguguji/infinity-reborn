onEvent("entity.death", event => {
	let entity = event.getEntity();
	let bossName = bossList[entity.type]
	if (!bossName) return
	event.server.tell(`\u00A75${bossName}已被打败!`)
	
	if (entity.type === "minecraft:ender_dragon") {
		event.server.runCommandSilent(`kill @e[type=marker]`);
		event.server.runCommandSilent(`kill @e[type=minecraft:end_crystal]`);
		event.server.runCommandSilent(`kill @e[type=area_effect_cloud]`);
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

onEvent('entity.death', event => {//死亡事件
    let entity = event.getEntity()
    let source1 = event.getSource()
    if(!isPlayerSource(source1)) return
    let player = event.getSource().getPlayer()
    if (player != null) {
        if (entity.type == 'adventurez:void_shade') {
                    let entitys = event.level.getEntities()
                    entitys.forEach(element => {
					//event.server.tell(`${element.type}`)
					if (element.type == 'adventurez:void_shadow') {
                        if (player.stages.has('difficulty_yonghen')) {
                            if(element.health < element.maxHealth * 0.01) return
                            element.attack(element.maxHealth * 0.01)
                        }else{
                           if(element.health < element.maxHealth * 0.05) return
                            element.attack(element.maxHealth * 0.05)
                        }
					}
				})
                }
        if (player.stages.has('difficulty_yonghen')) {
            if (entity.animal || entity.watercreature || entity.type == 'minecraft:axolotl') {
                player.potionEffects.add('minecraft:weakness', 100, 1)
            }
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
onEvent("entity.death", event => {
  let entity = event.getEntity()
  let player = event.getSource().getPlayer()
  if (entity.player) {
    if (entity.stages.has('difficulty_easy')) {
      event.server.runCommandSilent(`improvedmobs difficulty player ${entity.profile.name} add -0.5`)
    }
  }
})

