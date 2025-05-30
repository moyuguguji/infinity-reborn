onEvent('player.logged_in', event => {
	if (!event.player.stages.has('difficulty_normal') && !event.player.stages.has('difficulty_easy') && !event.player.stages.has('difficulty_hard') && !event.player.stages.has('difficulty_impossible') && !event.player.stages.has('difficulty_impossibleplus') && !event.player.stages.has('difficulty_yonghen')) {
		event.player.stages.add('difficulty_easy')
	}
})
onEvent('entity.hurt', event => {
	let target = event.getEntity()
	let source1 = event.getSource()
	if (source1.toString().includes('EntityDamageSource (Fake')) return
	let source = event.getSource().getActual()
	let damage = event.getDamage()
	let entity = event.getSource().getImmediate()
 
	//event.server.runCommand(`say ${target.maxHealth - target.health}`)

	if (target.player) {
		let offItem = target.getHeldItem(OFF_HAND).getId()
		let damage_new
		let armor_result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
		let armor_toughness_result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor_toughness get`)
		if (target.stages.has('difficulty_easy')) {
			if (source != null) {
				if (entity != null && !entity.living) {
					entity.kill()
				}
			}
		} else if (target.stages.has('difficulty_normal')) {
			if (source != null) {
				//玩家受到的生物伤害额外增加10%
				//event.cancel()
				//target.attack(damage*1.1)
				if (entity != null && !entity.living) {

					//event.cancel()
					entity.kill()
				}
				damage_new = damage * 0.1
				if (offItem.indexOf("shield") >= 0) damage_new = damage_new / 2
				if (damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25) - target.health >= 0) {
					event.server.scheduleInTicks(1, schedule => {
						if(target.health < 1) return
						target.setHealth(1)
					 })
				} else {
					target.attack(damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25))
				}
			}
		} else if (target.stages.has('difficulty_hard')) {
			if (source != null) {
				//玩家受到的生物伤害额外增加15%
				//event.cancel()
				//target.attack(damage*1.2)
				if (entity != null && !entity.living) {

					//event.cancel()
					entity.kill()
				}
				damage_new = damage * 0.15
				if (offItem.indexOf("shield") >= 0) damage_new = damage_new / 2
				if (damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25) - target.health >= 0) {
					event.server.scheduleInTicks(1, schedule => {
						if(target.health < 1) return
						target.setHealth(1)
					 })
				} else {
					target.attack(damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25))
				}
			}
		} else if (target.stages.has('difficulty_impossible')) {
			if (source != null) {
				//玩家受到的生物伤害额外增加50%
				if (entity != null && !entity.living) {
					//event.cancel()
					entity.kill()
				}
				damage_new = damage * 0.5
				if (offItem.indexOf("shield") >= 0) damage_new = damage_new / 2
				if (damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25) - target.health >= 0) {
					event.server.scheduleInTicks(1, schedule => {
						if(target.health < 1) return
						target.setHealth(1)
					 })
				} else {
					target.attack(damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25))
				}
			}
		} else if (target.stages.has('difficulty_impossibleplus')) {
			if (source != null) {
				//玩家受到的生物伤害额外增加150%
				if (entity != null && !entity.living) {
					//event.cancel()
					entity.kill()
				}
				damage_new = damage * 1.0
				if (offItem.indexOf("shield") >= 0) damage_new = damage_new / 2
				if (damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25) - target.health >= 0) {
					event.server.scheduleInTicks(1, schedule => {
						if(target.health < 1) return
						target.setHealth(1)
					 })
				} else {
					target.attack(damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25))
				}
			}
		} else if (target.stages.has('difficulty_yonghen')) {
			if (source != null) {
				//玩家受到的生物伤害额外增加150%
				if (entity != null && !entity.living) {
					//event.cancel()
					entity.kill()
				}
				damage_new = damage * 1.5
				if (offItem.indexOf("shield") >= 0) damage_new = damage_new / 2

				if (damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25) - target.health >= 0) {
					event.server.scheduleInTicks(1, schedule => {
						if(target.health > 1) {
							target.setHealth(1)
						}	
					 })
				} else {
					target.attack(damage_new * (1 - Math.min(20, Math.max(armor_result / 5, armor_result - damage_new / (2 + armor_toughness_result / 4))) / 25))
				}
				let zombie = [
					'minecraft:zombie',
					'minecraft:zombie_villager',
					'minecraft:husk',
					'minecraft:drowned',
					'rottencreatures:burned',
					'rottencreatures:frostbitten',
					'rottencreatures:swampy',
					'rottencreatures:immortal',
					'rottencreatures:dead_beard',
					'rottencreatures:glacial_hunter',
					'rottencreatures:mummy',
					'rottencreatures:undead_miner'
				]
				let skeleton = [
					'adventurez:skeleton_vanguard',
					'minecraft:skeleton',
					'minecraft:stray'
				]
				if (zombie.includes(source.type) || entity.type == 'minecraft:vex') {
					target.potionEffects.add('soulsweapons:bleed', 80, 1)

				} else if (!target.potionEffects.isActive('soulsweapons:bleed')) {
					target.potionEffects.add('soulsweapons:bleed', 40, 0)
				}
				if (entity.type == 'minecraft:arrow') {
					let random = randomNum(1, 2)
					if (random == 1) {
						let random1 = randomNum(1, 8)
						switch (random1) {
							case 1:
								target.potionEffects.add('minecraft:poison', 100, 0)
								break;
							case 2:
								target.potionEffects.add('minecraft:slowness', 100, 0)
								break;
							case 3:
								target.potionEffects.add('minecraft:weakness', 100, 0)
								break;
							case 4:
								target.potionEffects.add('extraalchemy:combustion', 100, 1)
								break;
							case 5:
								target.potionEffects.add('minecraft:levitation', 40, 0)
								break;
							case 6:
								target.potionEffects.add('minecraft:instant_damage', 0, 0)
								break;
							case 7:
								target.potionEffects.add('minecraft:mining_fatigue', 100, 0)
								break;
							case 8:
								target.potionEffects.add('minecraft:blindness', 100, 0)
								break;
							default:
								break;
						}
					}
				}
				if (entity.type == 'minecraft:vindicator') {
					target.potionEffects.add('soulsweapons:bleed', 200, 2)
					if (!target.potionEffects.isActive('minecraft:slowness')) {
						target.potionEffects.add('minecraft:slowness', 60, 1)
					}
				}
				if (target.health > 2 && source.type == 'minecraft:wither') {
					target.heal(-1)
				}
				if (entity.type == 'terrarianslimes:spiked_ice_slime' || entity.type == 'terrarianslimes:ice_slime') {
					if (!target.potionEffects.isActive('rottencreatures:freeze')) {
						target.potionEffects.add('rottencreatures:freeze', 60, 0)
					}

				}
				if (entity.type == 'minecraft:enderman') {
					if (!target.potionEffects.isActive('minecraft:blindness')) {
						target.potionEffects.add('minecraft:blindness', 100, 1)
					}

				}
				if (entity.type == 'minecraft:phantom') {
					if (!target.potionEffects.isActive('minecraft.levitation')) {
						target.potionEffects.add('minecraft.levitation', 100, 1)
					}
					if (!target.potionEffects.isActive('minecraft:weakness')) {
						target.potionEffects.add('minecraft:weakness', 60, 0)
					}
				}
			}
		}
	}

})

onEvent('entity.hurt', event => {
	let target = event.getEntity()
	let source1 = event.getSource()
	if (source1.toString().includes('EntityDamageSource (Fake')) return
	let play = event.getSource().getPlayer()
	let damage = event.getDamage()
	if (play != null) {
		if (play.stages.has('difficulty_normal')) {
			//生物在未满血的状态下受到的玩家伤害减少10%
			//target.heal(damage * 0.1)
			if (target.potionEffects.active.toString().includes('resistance x 2')) {
				target.heal(damage * 0.6 * 0.1)
			} else if (target.potionEffects.active.toString().includes('resistance x 3')) {
				target.heal(damage * 0.4 * 0.1)
			} else if (target.potionEffects.active.toString().includes('resistance x 4')) {
				target.heal(damage * 0.2 * 0.1)
			} else if (target.potionEffects.active.toString().includes('resistance x 5')) {

			} else if (target.potionEffects.active.toString().includes('resistance')) {
				target.heal(damage * 0.8 * 0.1)
			} else {
				target.heal(damage * 0.1)
			}
		} else if (play.stages.has('difficulty_hard')) {
			//生物在未满血的状态下受到的玩家伤害减少20%
			if (target.potionEffects.active.toString().includes('resistance x 2')) {
				target.heal(damage * 0.6 * 0.2)
			} else if (target.potionEffects.active.toString().includes('resistance x 3')) {
				target.heal(damage * 0.4 * 0.2)
			} else if (target.potionEffects.active.toString().includes('resistance x 4')) {
				target.heal(damage * 0.2 * 0.2)
			} else if (target.potionEffects.active.toString().includes('resistance x 5')) {

			} else if (target.potionEffects.active.toString().includes('resistance')) {
				target.heal(damage * 0.8 * 0.2)
			} else {
				target.heal(damage * 0.2)
			}
		} else if (play.stages.has('difficulty_impossible')) {
			//生物在未满血的状态下受到的玩家伤害减少40%
			if (target.potionEffects.active.toString().includes('resistance x 2')) {
				target.heal(damage * 0.6 * 0.4)
			} else if (target.potionEffects.active.toString().includes('resistance x 3')) {
				target.heal(damage * 0.4 * 0.4)
			} else if (target.potionEffects.active.toString().includes('resistance x 4')) {
				target.heal(damage * 0.2 * 0.4)
			} else if (target.potionEffects.active.toString().includes('resistance x 5')) {

			} else if (target.potionEffects.active.toString().includes('resistance')) {
				target.heal(damage * 0.8 * 0.4)
			} else {
				target.heal(damage * 0.4)
			}
		} else if (play.stages.has('difficulty_impossibleplus')) {
			//生物在未满血的状态下受到的玩家伤害减少60%
			if (target.potionEffects.active.toString().includes('resistance x 2')) {
				target.heal(damage * 0.6 * 0.6)
			} else if (target.potionEffects.active.toString().includes('resistance x 3')) {
				target.heal(damage * 0.4 * 0.6)
			} else if (target.potionEffects.active.toString().includes('resistance x 4')) {
				target.heal(damage * 0.2 * 0.6)
			} else if (target.potionEffects.active.toString().includes('resistance x 5')) {

			} else if (target.potionEffects.active.toString().includes('resistance')) {
				target.heal(damage * 0.8 * 0.6)
			} else {
				target.heal(damage * 0.6)
			}
		} else if (play.stages.has('difficulty_yonghen')) {
			let random2 = randomNum(1, 100)
			if (target.type == "bosses_of_mass_destruction:void_blossom") {
				let posx = target.getX()
				let posy = target.getY()
				let posz = target.getZ()
				for (let x = posx - 20; x <= posx + 20; x++)
					for (let y = posy - 5; y <= posy + 1; y++)
						for (let z = posz - 20; z <= posz + 20; z++) {
							let block = target.level.getBlock(x, y, z)
							if (block == 'bosses_of_mass_destruction:void_blossom') {
								event.cancel()
							}
						}
			} else if (random2 <= 10) {
				event.cancel()
			} else if (target.potionEffects.active.toString().includes('resistance x 2')) {
				target.heal(damage * 0.6 * 0.5)
			} else if (target.potionEffects.active.toString().includes('resistance x 3')) {
				target.heal(damage * 0.4 * 0.5)
			} else if (target.potionEffects.active.toString().includes('resistance x 4')) {
				target.heal(damage * 0.2 * 0.5)
			} else if (target.potionEffects.active.toString().includes('resistance x 5')) {} else if (target.potionEffects.active.toString().includes('resistance')) {
				target.heal(damage * 0.8 * 0.5)
			} else {
				target.heal(damage * 0.5)
			}
		}
	}
})

onEvent('recipes', event => {
	event.shapeless('kubejs:difficulty_changer', ['minecraft:clock'])
})


onEvent('entity.hurt', event => {
	let target = event.getEntity()
	let source1 = event.getSource()
	if (source1.toString().includes('EntityDamageSource (Fake')) return
	let player = event.getSource().getPlayer()
	let source = event.getSource().getActual()
	let damage = event.getDamage()
	let targetTypes = [
		"minecraft:wither",
		"soulsweapons:chaos_monarch",
		"minecraft:ender_dragon",
		"twilightforest:naga",
		"twilightforest:lich",
		"twilightforest:alpha_yeti",
		"twilightforest:minoshroom",
		"twilightforest:snow_queen",
		"twilightforest:hydra",
		"twilightforest:ur_ghast",
		"twilightforest:knight_phantom",
		"soulsweapons:moonknight",
		"soulsweapons:accursed_lord_boss",
		"soulsweapons:draugr_boss",
		"adventurez:stone_golem",
		"adventurez:void_shadow",
		"adventurez:the_eye",
		"whisperwoods:hirschgeist",
		"soulsweapons:night_shade",
		"terrarianslimes:king_slime",
		"bosses_of_mass_destruction:lich",
		"bosses_of_mass_destruction:void_blossom",
		"bosses_of_mass_destruction:gauntlet",
		"bosses_of_mass_destruction:obsidilith"
	]
	let zombie = [
		'minecraft:zombie',
		'minecraft:zombie_villager',
		'minecraft:husk',
		'minecraft:drowned',
		'rottencreatures:burned',
		'rottencreatures:frostbitten',
		'rottencreatures:swampy',
		'rottencreatures:immortal',
		'rottencreatures:dead_beard',
		'rottencreatures:glacial_hunter',
		'rottencreatures:mummy',
		'rottencreatures:undead_miner'
	]
	if (player != null) {
		if (target.monster || target.type == "botania:pixie" || target.type == "soulsweapons:dark_sorcerer" || target.type == "artifacts:mimic" || target.type == "whisperwoods:hirschgeist") {
			//event.server.runCommand(`say ${result}`)
			let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
			let result1 = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base get`)
			if (player.stages.has('difficulty_easy')) {
				if (targetTypes.includes(target.type) && !target.tags.contains('easy') && !target.tags.contains('attacked') && target.type != "terrarianslimes:king_slime") {
					let att = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage get`)
					let att1 = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage base get`)
					target.tags.add('easy')
					target.setMaxHealth(target.maxHealth * 0.5)
					event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage base set ${(att - att1) % 2 - att1}`)
				}
			}
			if (player.stages.has('difficulty_impossible')) {
				if (!target.tags.contains('attacked') && target.type != "botania:doppleganger") {
					event.cancel()
					target.tags.add('attacked')
					target.tags.remove('easy')
					target.setMaxHealth(target.maxHealth * (1.5))
					target.heal(target.maxHealth * 0.9)
					target.attack(target.maxHealth * 0.1)
				} else if (!target.tags.contains('attacked') && target.type == "botania:doppleganger") {
					event.cancel()
					target.tags.add('attacked')
					target.tags.remove('easy')
					target.setMaxHealth(target.maxHealth * (0.5))
					target.heal(target.maxHealth * 0.9)
					target.attack(target.maxHealth * 0.1)
				}
				if (!target.tags.contains('banxue')) {
					let r2 = randomNum(1, 100)
					if (r2 <= 5) {
						if (target.health <= target.maxHealth / 2 && !targetTypes.includes(target.type) && target.type != "botania:doppleganger") {
							target.tags.add('banxue')
							target.potionEffects.add('minecraft:resistance', 20, 4, false, false)
						}
					}
				}
			} else if (player.stages.has('difficulty_impossibleplus')) {
				if (!target.tags.contains('attacked') && !targetTypes.includes(target.type) && target.type != "botania:doppleganger") {
					event.cancel()
					target.tags.add('attacked')
					target.tags.remove('easy')
					target.setMaxHealth(target.maxHealth * (2.5))
					target.heal(target.maxHealth * 0.9)
					target.attack(target.maxHealth * 0.1)
				} else if (!target.tags.contains('attacked') && target.type == "botania:doppleganger") {
					event.cancel()
					target.tags.add('attacked')
					target.tags.remove('easy')
					target.setMaxHealth(target.maxHealth * (1.5))
					target.heal(target.maxHealth * 0.9)
					target.attack(target.maxHealth * 0.1)
				} else if (!target.tags.contains('attacked') && targetTypes.includes(target.type)) {
					event.cancel()
					target.tags.add('attacked')
					target.tags.remove('easy')
					target.setMaxHealth(target.maxHealth * (3.5))
					target.heal(target.maxHealth * 0.9)
					target.attack(target.maxHealth * 0.1)
				}
				if (!target.tags.contains('banxue')) {
					let r1 = randomNum(1, 100)
					if (r1 <= 10) {
						if (target.health <= target.maxHealth / 2 && !targetTypes.includes(target.type) && target.type != "botania:doppleganger") {
							target.tags.add('banxue')
							target.potionEffects.add('minecraft:resistance', 60, 4, false, false)

						}
					}
				}

			} else if (player.stages.has('difficulty_yonghen')) {
				let lmd = player.fullNBT.IMDifficulty
				if (!target.tags.contains('attacked') && !targetTypes.includes(target.type) && target.type != "botania:doppleganger") {
					if (lmd < 50) {
						event.cancel()
						target.tags.add('attacked')
						target.tags.remove('easy')
						target.setMaxHealth(target.maxHealth * (2.5))
						target.heal(target.maxHealth * 0.9)
						target.attack(target.maxHealth * 0.1)
						if (result > 15 && !targetTypes.includes(target.type)) {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${15 - result}`)
						} else if (result < 5) {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${5 - result + result1}`)
						}
					} else if (lmd >= 500) {
						event.cancel()
						target.tags.add('attacked')
						target.tags.remove('easy')
						result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage get`)
						event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage base set ${result * 2.0}`)
						target.setMaxHealth(target.maxHealth * (40))
						target.heal(target.maxHealth * 0.9)
						target.attack(target.maxHealth * 0.1)
						if (result > 30 && !targetTypes.includes(target.type)) {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${30 - result}`)
						} else if (result < 20) {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${20 - result + result1}`)

						}
					} else if (lmd >= 250) {
						event.cancel()
						target.tags.add('attacked')
						target.tags.remove('easy')
						result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage get`)
						event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage base set ${result * 1.5}`)
						target.setMaxHealth(target.maxHealth * (15))
						target.heal(target.maxHealth * 0.9)
						target.attack(target.maxHealth * 0.1)
						if (result > 25 && !targetTypes.includes(target.type)) {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${25 - result}`)
						} else if (result < 15) {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${15 - result + result1}`)

						}
					} else if (lmd >= 120) {
						event.cancel()
						target.tags.add('attacked')
						target.tags.remove('easy')
						target.setMaxHealth(target.maxHealth * (10))
						target.heal(target.maxHealth * 0.9)
						target.attack(target.maxHealth * 0.1)
						if (result > 20 && !targetTypes.includes(target.type)) {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${20 - result}`)
						} else if (result < 12) {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${12 - result + result1}`)

						}
					} else if (lmd >= 50) {
						event.cancel()
						target.tags.add('attacked')
						target.tags.remove('easy')
						target.setMaxHealth(target.maxHealth * (5))
						target.heal(target.maxHealth * 0.9)
						target.attack(target.maxHealth * 0.1)
						if (result > 15 && !targetTypes.includes(target.type)) {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${15 - result}`)
						} else if (result < 10) {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${10 - result + result1}`)

						}
					}
				} else if (!target.tags.contains('attacked') && targetTypes.includes(target.type)) {
					if (lmd < 50) {
						event.cancel()
						target.tags.add('attacked')
						target.tags.remove('easy')
						target.setMaxHealth(target.maxHealth * (4.5))
						target.heal(target.maxHealth * 0.9)
						target.attack(target.maxHealth * 0.1)
						if (result < 15 && targetTypes.includes(target.type) && target.type != "twilightforest:knight_phantom") {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${15 - result + result1}`)
						}
					} else if (lmd >= 500) {
						event.cancel()
						target.tags.add('attacked')
						target.tags.remove('easy')
						target.setMaxHealth(target.maxHealth * (60))
						result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage get`)
						event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage base set ${result * 3.0}`)
						target.heal(target.maxHealth * 0.9)
						target.attack(target.maxHealth * 0.1)
						if (result < 40 && targetTypes.includes(target.type) && target.type != "twilightforest:knight_phantom") {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${40 - result + result1}`)
						}
					} else if (lmd >= 250) {
						event.cancel()
						target.tags.add('attacked')
						target.tags.remove('easy')
						result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage get`)
						event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage base set ${result * 2.0}`)
						target.setMaxHealth(target.maxHealth * (20))
						target.heal(target.maxHealth * 0.9)
						target.attack(target.maxHealth * 0.1)
						if (result < 25 && targetTypes.includes(target.type) && target.type != "twilightforest:knight_phantom") {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${25 - result + result1}`)
						}
					} else if (lmd >= 120) {
						event.cancel()
						target.tags.add('attacked')
						target.tags.remove('easy')
						target.setMaxHealth(target.maxHealth * (15))
						target.heal(target.maxHealth * 0.9)
						target.attack(target.maxHealth * 0.1)
						if (result < 20 && targetTypes.includes(target.type) && target.type != "twilightforest:knight_phantom") {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${20 - result + result1}`)
						}
					} else if (lmd >= 50) {
						event.cancel()
						target.tags.add('attacked')
						target.tags.remove('easy')
						target.setMaxHealth(target.maxHealth * (10))
						target.heal(target.maxHealth * 0.9)
						target.attack(target.maxHealth * 0.1)
						if (result < 18 && targetTypes.includes(target.type) && target.type != "twilightforest:knight_phantom") {
							event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${18 - result + result1}`)
						}
					}
				} else if (!target.tags.contains('attacked') && target.type == "botania:doppleganger") {
					event.cancel()
					target.tags.add('attacked')
					target.tags.remove('easy')
					target.setMaxHealth(target.maxHealth * (2))
					target.heal(target.maxHealth * 0.9)
					target.attack(target.maxHealth * 0.1)
				}
				if (!target.tags.contains('banxue')) {
					let random3 = randomNum(1, 100)
					if (random3 <= 20) {
						if (target.health <= target.maxHealth / 2 && !targetTypes.includes(target.type) && target.type != "botania:doppleganger") {
							target.tags.add('banxue')
							target.potionEffects.add('minecraft:resistance', 100, 4, false, false)
						}
					}
				}
				if (target.type == "botania:doppleganger") {
					player.attack(damage * 0.5)
				}
				if (target.type == "soulsweapons:returning_knight") {
					let random = randomNum(1, 100)
					let randomx = randomNum(-5, 5);
					let randomz = randomNum(-5, 5)
					if (random <= 15) {
						event.server.runCommandSilent(`execute at ${player.profile.name} run summon soulsweapons:dark_sorcerer ${target.getX() + randomx} ${target.getY()} ${target.getZ() + randomz}`)
					}
				}
				if (target.type == "terrarianslimes:spiked_slime" || target.type == "terrarianslimes:spiked_ice_slime") {
					let damage_result
					if (damage * 0.2 < player.maxHealth * 0.25) {
						damage_result = damage * 0.2
					} else {
						damage_result = player.maxHealth * 0.25
					}
					player.attack(damage_result)
				}

				if (zombie.includes(target.type)) {
					if (!target.potionEffects.isActive('extraalchemy:growing')) {
						let random = randomNum(1, 100)
						if (random == 1) {
							target.potionEffects.add('extraalchemy:growing', 6000, 4, false, false)
						}
					}
				}
				if (target.type == 'terrarianslimes:king_slime' && !target.tags.contains('big')) {
					target.tags.add('big')
					target.potionEffects.add('extraalchemy:shrinking', 1728000, 4, false, false)
				}
				if (target.type == 'minecraft:enderman') {
					if (!target.potionEffects.isActive('minecraft:invisibility')) {
						target.potionEffects.add('minecraft:invisibility', 100, 1, false, false)
					}
					let random = randomNum(1, 4)
					if (random == 1) {
						let randoms = randomNum(-2, 2)
						let x = target.getX()
						let y = target.getY()
						let z = target.getZ()
						event.server.runCommandSilent(`execute at ${player.profile.name} run tp ${player.profile.name} ${x + randoms} ${y} ${z + randoms}`)
					}
				}

			}
		}
	}
})
onEvent('block.break', event => {
	let player = event.getPlayer()
	if (player != null) {
		if (player.stages.has('difficulty_yonghen')) {
			let block = event.getBlock()
			if (block.id == 'bosses_of_mass_destruction:obsidilith_rune') {
				let entity = event.level.getEntities()
				entity.forEach(element => {
					//event.server.tell(`${element.type}`)
					if (element.type == 'bosses_of_mass_destruction:obsidilith') {
						element.heal(element.maxHealth * 0.05)
					}
				});
			}

		}
	}
})