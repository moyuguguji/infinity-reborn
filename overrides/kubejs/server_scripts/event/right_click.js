onEvent('item.right_click', event => {
	let player = event.player
	if (!player) return
	let item = player.getHeldItem(MAIN_HAND).id
	if (item && item in rightClickEventMainHand) {
		rightClickEventMainHand[item](event)
		return
	}
	item = event.item.id
	if (item && item in rightClickEventInHand) {
		rightClickEventInHand[item](event)
	}
})

const rightClickEventInHand = {
	'kubejs:ruoshui_sword': function(event) {
		let player = event.player
		if (player.crouching) {
			//泉之治愈-潜行使用恢复最大生命值的一半，冷却时间15秒
			player.heal(player.maxHealth / 2)
			player.addItemCooldown('kubejs:ruoshui_sword', 300)
		} else {
			//汽之呼吸-右键使用获得15秒水下呼吸，冷却时间20秒
			event.server.runCommandSilent(`effect give ${player.id} minecraft:water_breathing 15 0 true`)
			player.addItemCooldown('kubejs:ruoshui_sword', 400)
		}
	},
	'kubejs:yecao_sword': function(event) {
		let player = event.player
		//右键使用获得5秒抗性5生命恢复5，冷却时间10秒
		player.potionEffects.add('minecraft:regeneration', 100, 4, false, false)
		player.potionEffects.add('minecraft:resistance', 40, 4, false, false)
		player.addItemCooldown('kubejs:yecao_sword', 200)
	},
	'kubejs:putong_stone_sword': function(event) {
		let player = event.player
		//右键使用获得30秒抗性5，冷却时间600秒
		player.potionEffects.add('minecraft:resistance', 600, 4, false, false)
		player.addItemCooldown('kubejs:putong_stone_sword', 12000)
	},
	'kubejs:zhongzi': function(event) {
		event.server.runCommandSilent(`/kill @e[type=!minecraft:player]`)
		event.player.addItemCooldown('kubejs:zhongzi', 24000)
	},
	'kubejs:sixiang_kaitian': function(event) {
		let randomx = randomNum(-10, 10);
		let randomz = randomNum(-10, 10)
		let player = event.player
		event.server.runCommandSilent(`execute at ${event.player.id} run summon minecraft:lightning_bolt ${player.getX() + randomx} ${player.getY()} ${player.getZ() + randomz}`)
	},
	'kubejs:jing__xin': function(event) {
		event.server.runCommandSilent(`execute at ${event.player.id} run summon minecraft:wither`)
		event.player.addItemCooldown('kubejs:jing__xin', 100)
	},
	'kubejs:x_nuohua': function(event) {
		let player = event.player
		switch (randomNum(1, 10)) {
			case 1:
				player.give('spectrum:shooting_star_colorful')
				break;
			case 2:
				player.give('spectrum:shooting_star_glistering')
				break;
			case 3:
				player.give('spectrum:shooting_star_fiery')
				break;
			case 4:
				player.give('spectrum:shooting_star_pristine')
				break;
			case 5:
				player.give('spectrum:shooting_star_gemstone')
				break;
			default:
				player.give('5x spectrum:shooting_star')
				break;
		}
		player.addItemCooldown('kubejs:x_nuohua', 2400)
	},
	'kubejs:lce_tang': function(event) {
		let player = event.player
		if (player.crouching) {
			if (player.health <= 5) {
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"生命值不足","color":"red","bold":true}`)
			} else {
				player.heal(-5)
				player.potionEffects.add('minecraft:speed', 600, 1, false, false)
				player.potionEffects.add('minecraft:strength', 600, 2, false, false)
			}
		} else {
			player.potionEffects.add('minecraft:regeneration', 200, 1, false, false)
			player.addItemCooldown('kubejs:lce_tang', 300)
		}
	},
	'kubejs:ailinghan': function(event) {
		let player = event.player
		if (player.health <= player.maxHealth * 0.3) {
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"生命值不足","color":"red","bold":true}`)
		} else {
			player.heal(-player.maxHealth * 0.3)
			player.potionEffects.add('minecraft:strength', 180, 9, false, false)
			player.addItemCooldown('kubejs:ailinghan', 320)
		}
	},
	'kubejs:kreska': function(event) {
		let player = event.player
		player.potionEffects.add('minecraft:speed', 40, 1, false, false)
		event.server.runCommandSilent(`execute at ${player.id} run tp ${player.id} ^ ^1 ^10`)
		event.server.runCommandSilent(`execute at ${player.id} run particle minecraft:portal ${player.x} ${player.y + 1} ${player.z} 0 0.5 0.5 0.5 50`)
		player.playSound('minecraft:entity.enderman.teleport')
		player.addItemCooldown('kubejs:kreska', 100)
	}
}


const rightClickEventMainHand = {
	'kubejs:starter_bag': function(event){
		let bag = [
			"5x kubejs:jiushu_heart","inmis:frayed_backpack","5x things:recall_potion","waystones:warp_stone","gobber2:gobber2_ring_miner"
		]
		let player = event.player
		for (let index = 0; index < bag.length; index++) {
			player.give(bag[index])
		}
		player.mainHandItem.count -= 1
	},
	'kubejs:miner_quests': function(event){
		let loot = [
			'mythicmetals:bronze_ingot',
			'mythicmetals:durasteel_ingot',
			'mythicmetals:aquarium_ingot',
			'mythicmetals:carmot_ingot',
			'mythicmetals:quadrillum_ingot',
			'mythicmetals:banglum_ingot',
			'3x mythicmetals:adamantite_nugget',
			'3x soulsweapons:moonstone',
			'3x soulsweapons:verglas'
		]
		let player = event.player
		for (let index = 0; index < 10; index++) {
			player.give(loot[randomNum(0,loot.length)]) 
		}
		player.give('30x numismatic-overhaul:silver_coin')
		player.mainHandItem.count -= 1
	},
	'kubejs:boss_rush': function(event) {
		let player = event.player
		Object.keys(bossList).forEach(entityType => {
			let randomx = randomNum(-2, 2);
			let randomz = randomNum(-2, 2);
			event.server.runCommandSilent(`execute at ${player.profile.name} run summon_eldritch ${entityType} ${player.getX() + randomx} ${player.getY()} ${player.getZ() + randomz}`);
		});
		if (!event.server.singlePlayer) {
			player.mainHandItem.count -= 1;
		}
	},
	'kubejs:shi_lian': function(event) {
		let player = event.player
		let test = Ingredient.of('@collectorsalbum').getItemIds();
		for (let index = 0; index < 10; index++) {
			let random = randomNum(1, test.length);
			player.give(test[random]);
		}
		player.mainHandItem.count -= 1;
	},
	'kubejs:boss_compass1': function(event) {
		let player = event.player
		event.server.runCommandSilent(`ftbranks add ${player.profile.name} locate`)
		player.runCommand(`locate bosses_of_mass_destruction:lich_tower`)
		event.server.runCommandSilent(`ftbranks remove ${player.profile.name} locate`)
		player.mainHandItem.count -= 1
	},
	'kubejs:boss_compass2': function(event) {
		let player = event.player
		event.server.runCommandSilent(`ftbranks add ${player.profile.name} locate`)
		player.runCommand(`locate bosses_of_mass_destruction:gauntlet_arena`)
		event.server.runCommandSilent(`ftbranks remove ${player.profile.name} locate`)
		player.mainHandItem.count -= 1
	},
	'kubejs:boss_compass3': function(event) {
		let player = event.player
		event.server.runCommandSilent(`ftbranks add ${player.profile.name} locate`)
		player.runCommand(`locate bosses_of_mass_destruction:obsidilith_arena`)
		event.server.runCommandSilent(`ftbranks remove ${player.profile.name} locate`)
		player.mainHandItem.count -= 1
	},
	'kubejs:boss_compass4': function(event) {
		let player = event.player
		event.server.runCommandSilent(`ftbranks add ${player.profile.name} locate`)
		player.runCommand(`locate bosses_of_mass_destruction:void_blossom`)
		event.server.runCommandSilent(`ftbranks remove ${player.profile.name} locate`)
		player.mainHandItem.count -= 1
		//event.server.runCommandSilent(`clear ${player.profile.name} kubejs:boss_compass4 1`)
	},
	'kubejs:boss_compass5': function(event) {
		let player = event.player
		event.server.runCommandSilent(`ftbranks add ${player.profile.name} locate`)
		player.runCommand(`locate soulsweapons:champions_graves`)
		event.server.runCommandSilent(`ftbranks remove ${player.profile.name} locate`)
		player.mainHandItem.count -= 1
	},
	'kubejs:boss_compass6': function(event) {
		let player = event.player
		event.server.runCommandSilent(`ftbranks add ${player.profile.name} locate`)
		player.runCommand(`locate soulsweapons:cathedral_of_resurrection`)
		event.server.runCommandSilent(`ftbranks remove ${player.profile.name} locate`)
		player.mainHandItem.count -= 1
	},
	'kubejs:boss_compass7': function(event) {
		let player = event.player
		event.server.runCommandSilent(`ftbranks add ${player.profile.name} locate`)
		player.runCommand(`locate soulsweapons:decaying_kingdom`)
		event.server.runCommandSilent(`ftbranks remove ${player.profile.name} locate`)
		player.mainHandItem.count -= 1
	},
	'kubejs:yan_qiu': function(event) {
		let player = event.player
		let d = player.fullNBT.Dimension
		if (d == 'minecraft:the_end') {
			event.server.runCommandSilent(`execute at ${player.id} run summon adventurez:the_eye ${player.getX()} ${player.getY()} ${player.getZ()}`)
			player.mainHandItem.count -= 1
		} else {
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"需要在末地使用","color":"deepskyblue","bold":true}`)
		}
	},
	'kubejs:hei_shi': function(event) {
		let player = event.player
		let d = player.fullNBT.Dimension
		if (d == 'minecraft:the_nether') {
			event.server.runCommandSilent(`execute at ${player.id} run summon adventurez:stone_golem ${player.getX()} ${player.getY()} ${player.getZ()}`)
			player.mainHandItem.count -= 1
		} else {
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"需要在地狱使用","color":"deepskyblue","bold":true}`)
		}
	},
	'kubejs:sao_di': function(event) {
		let player = event.player
		if (player.op) {
			clearLag(event.server);
			player.addItemCooldown('kubejs:sao_di', 100)
		} else {
			player.tell([Text.lightPurple('[扫地机器人]'), "你没有权限这样做"]);
		}
	},
	'kubejs:moon_clock': function(event) {
		switch (event.level.getMoonPhase()) {
			case 0:
				event.server.runCommandSilent(`time add 4d`)
				event.player.mainHandItem.count -= 1
				break;
			case 1:
				event.server.runCommandSilent(`time add 3d`)
				event.player.mainHandItem.count -= 1
				break;
			case 2:
				event.server.runCommandSilent(`time add 2d`)
				event.player.mainHandItem.count -= 1
				break;
			case 3:
				event.server.runCommandSilent(`time add 1d`)
				event.player.mainHandItem.count -= 1
				break;
			case 4:
				break;
			case 5:
				event.server.runCommandSilent(`time add 7d`)
				event.player.mainHandItem.count -= 1
				break;
			case 6:
				event.server.runCommandSilent(`time add 6d`)
				event.player.mainHandItem.count -= 1
				break;
			case 7:
				event.server.runCommandSilent(`time add 5d`)
				event.player.mainHandItem.count -= 1
				break;
			}
		},
	'spectrum:crescent_clock': function(event) {
		let player = event.player
		switch (event.level.getMoonPhase()) {
			case 0:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是满月","color":"deepskyblue","bold":true}`)
				//event.server.tell(`今天的月相是满月`)
				break;
			case 1:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是亏凸月","color":"deepskyblue","bold":true}`)
				break;
			case 2:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是下弦月","color":"deepskyblue","bold":true}`)
				//event.server.tell(`今天的月相是下弦月`)
				break;
			case 3:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是残月","color":"deepskyblue","bold":true}`)
				//event.server.tell(`今天的月相是残月`)
				break;
			case 4:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是新月","color":"deepskyblue","bold":true}`)
				//event.server.tell(`今天的月相是新月`)
				break;
			case 5:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是蛾眉月","color":"deepskyblue","bold":true}`)
				//event.server.tell(`今天的月相是蛾眉月`)
				break;
			case 6:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是上弦月","color":"deepskyblue","bold":true}`)
				//event.server.tell(`今天的月相是上弦月`)
				break;
			case 7:
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"今天的月相是盈凸月","color":"deepskyblue","bold":true}`)
				//event.server.tell(`今天的月相是盈凸月`)
				break;
		}
	},
	'kubejs:yong_hen_star': function(event) {
		let player = event.player
		if (player.getHeldItem(OFF_HAND) != null) {
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"你无法在副手持有物品时使用该物品","color":"red","bold":true}`)
		} else if (player.stages.has('difficulty_yonghen')) {
			player.stages.remove('difficulty_easy')
			player.stages.remove('difficulty_normal')
			player.stages.remove('difficulty_hard')
			player.stages.remove('difficulty_impossible')
			player.stages.remove('difficulty_impossibleplus')
			player.stages.remove('difficulty_yonghen')
			player.stages.add('difficulty_easy')
			player.playSound('minecraft:entity.ender_dragon.ambient')
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：旅途","color":"green","bold":true}`)
		} else if (!player.stages.has('lb')) {
			player.stages.remove('difficulty_easy')
			player.stages.remove('difficulty_normal')
			player.stages.remove('difficulty_hard')
			player.stages.remove('difficulty_impossible')
			player.stages.remove('difficulty_impossibleplus')
			player.stages.remove('difficulty_yonghen')
			player.stages.add('difficulty_yonghen')
			player.playSound('minecraft:entity.ender_dragon.growl')
			let yonghen = [
				Item.of('mcda:spelunker_armor_helmet'),
				Item.of('mcda:spelunker_armor_chestplate'),
				Item.of('mcda:spelunker_armor_leggings'),
				Item.of('mcda:spelunker_armor_boots'),
				Item.of('inmis:frayed_backpack', '{Inventory:[{Slot:0,Stack:{Count:1b,id:"toms_storage:ts.inventory_connector"}},{Slot:1,Stack:{Count:1b,id:"toms_storage:ts.crafting_terminal"}},{Slot:2,Stack:{Count:3b,id:"expandedstorage:diamond_barrel"}},{Slot:3,Stack:{Count:1b,id:"mcdw:sword_iron_sword_var",tag:{Damage:0,swa3:{}}}},{Slot:4,Stack:{Count:16b,id:"things:recall_potion"}},{Slot:5,Stack:{Count:1b,id:"things:socks",tag:{}}},{Slot:6,Stack:{Count:1b,id:"waystones:warp_stone",tag:{Damage:0}}},{Slot:7,Stack:{Count:1b,id:"extraalchemy:potion_bag",tag:{}}},{Slot:8,Stack:{Count:8b,id:"minecraft:golden_apple"}}]}')
			]
			for (let index = 0; index < yonghen.length; index++) {
				player.give(yonghen[index])
			}
			player.stages.add('lb')
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：永恒","color":"aqua","bold":true}`)
		} else {
			player.stages.remove('difficulty_easy')
			player.stages.remove('difficulty_normal')
			player.stages.remove('difficulty_hard')
			player.stages.remove('difficulty_impossible')
			player.stages.remove('difficulty_impossibleplus')
			player.stages.remove('difficulty_yonghen')
			player.stages.add('difficulty_yonghen')
			player.playSound('minecraft:entity.ender_dragon.growl')
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：永恒","color":"aqua","bold":true}`)
		}
	},
	'kubejs:skill_bottle': function(event) {
		let player = event.player
		event.server.runCommandSilent(`execute as ${player.id} run playerex refund ${player.profile.name} 1`)
		player.mainHandItem.count -= 1
	},
	'kubejs:bloody_tear': function(event) {
		let player = event.player
		player.addItemCooldown('kubejs:bloody_tear', 100)
		event.server.runCommand(`/enhancedcelestials setLunarEvent enhancedcelestials-super_blood_moon`)
		player.mainHandItem.count -= 1
	},
	'kubejs:jiushu_heart': function(event) {
		let player = event.player
		let lmd = player.fullNBT.IMDifficulty
		if (player.getHeldItem(OFF_HAND) != null) {
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"你无法在副手持有物品时使用该物品","color":"white"}`)
		} else if (player.stages.has('difficulty_yonghen') && lmd < 50) {
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"永恒模式50难度以下无法降低难度","color":"white"}`)
			player.mainHandItem.count -= 1
		} else {
			if (player.stages.has('difficulty_yonghen')) {
				event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add -2`)
				if (lmd <= 50) {
					event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} set 50`)
					player.mainHandItem.count -= 1
				} else {
					player.mainHandItem.count -= 1
				}
			}
			if (!player.stages.has('difficulty_yonghen')) {
				event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} add -2`)
				if (lmd <= 0) {
					event.server.runCommandSilent(`improvedmobs difficulty player ${player.profile.name} set 0`)
					player.mainHandItem.count -= 1
				} else {
					player.mainHandItem.count -= 1
				}
			}
		}
	},
	'kubejs:paolude_jy': function(event) {
		let player = event.player
		if (player.crouching) {
			player.give(Item.of('kubejs:nature_spirit', "{Damage:0,Unbreakable:1b}"))
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"恭喜你发现了真隐藏彩蛋","color":"green"}`)
			player.mainHandItem.count -= 1
		} else {
			event.server.runCommandSilent(`tellraw ${player.profile.name} [{"text":"点我领取丰厚奖励","clickEvent":{"action":"open_url","value":"https://www.bilibili.com/video/BV1GJ411x7h7/"}}]`)
		}
	},
	'kubejs:difficulty_changer': function(event) {
		let player = event.player
		if (player.getHeldItem(OFF_HAND) != null) {
			event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"你无法在副手持有物品时使用该物品","color":"red","bold":true}`)
		} else {
			if (player.stages.has('difficulty_easy')) {
				player.stages.remove('difficulty_easy')
				player.stages.remove('difficulty_normal')
				player.stages.remove('difficulty_hard')
				player.stages.remove('difficulty_impossible')
				player.stages.remove('difficulty_yonghen')
				player.stages.add('difficulty_normal')
				player.playSound('minecraft:entity.arrow.hit_player')
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：经典","color":"yellow","bold":true}`)
			} else if (player.stages.has('difficulty_normal')) {
				player.stages.remove('difficulty_easy')
				player.stages.remove('difficulty_normal')
				player.stages.remove('difficulty_hard')
				player.stages.remove('difficulty_impossible')
				player.stages.remove('difficulty_yonghen')
				player.stages.add('difficulty_hard')
				player.playSound('minecraft:entity.arrow.hit_player')
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：专家","color":"red","bold":true}`)
			} else if (player.stages.has('difficulty_hard')) {
				player.stages.remove('difficulty_easy')
				player.stages.remove('difficulty_normal')
				player.stages.remove('difficulty_hard')
				player.stages.remove('difficulty_impossible')
				player.stages.remove('difficulty_yonghen')
				player.stages.add('difficulty_impossible')
				player.playSound('minecraft:entity.arrow.hit_player')
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：大师","color":"dark_red","bold":true}`)
			} else if (player.stages.has('difficulty_impossible')) {
				player.stages.remove('difficulty_easy')
				player.stages.remove('difficulty_normal')
				player.stages.remove('difficulty_hard')
				player.stages.remove('difficulty_impossible')
				player.stages.remove('difficulty_impossibleplus')
				player.stages.remove('difficulty_yonghen')
				player.stages.add('difficulty_impossibleplus')
				player.playSound('minecraft:entity.arrow.hit_player')
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：死亡","color":"dark_red","bold":true}`)
			} else if (player.stages.has('difficulty_yonghen')) {
				player.stages.remove('difficulty_easy')
				player.stages.remove('difficulty_normal')
				player.stages.remove('difficulty_hard')
				player.stages.remove('difficulty_impossible')
				player.stages.remove('difficulty_impossibleplus')
				player.stages.remove('difficulty_yonghen')
				player.stages.add('difficulty_easy')
				player.playSound('minecraft:entity.arrow.hit_player')
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：旅途","color":"green","bold":true}`)
			} else {
				player.stages.remove('difficulty_easy')
				player.stages.remove('difficulty_normal')
				player.stages.remove('difficulty_hard')
				player.stages.remove('difficulty_impossible')
				player.stages.remove('difficulty_impossibleplus')
				player.stages.remove('difficulty_yonghen')
				player.stages.add('difficulty_easy')
				player.playSound('minecraft:entity.arrow.hit_player')
				event.server.runCommandSilent(`title ${player.profile.name} actionbar {"text":"当前难度：旅途","color":"green","bold":true}`)
			}
		}
	}
}