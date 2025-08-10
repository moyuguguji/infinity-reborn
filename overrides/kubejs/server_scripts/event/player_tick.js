onEvent('player.tick', event => {
	let player = event.player
	if (player.level.time % 20 != 0) return
	let item = player.getHeldItem(MAIN_HAND).id
	if (item && item in playerTickEventMainHand) {
		playerTickEventMainHand[item](event)
		return
	}
})

const playerTickEventMainHand = {
	'kubejs:snowstormcane': function(event) {
		event.player.potionEffects.add("minecraft:speed", 25, 2, false, false)
	},
	'kubejs:kreska': function(event) {
		event.player.potionEffects.add("extraalchemy:detection", 25, 1, false, false)
	},
	'kubejs:yecao_sword': function(event) {
		let player = event.player
		player.potionEffects.add('minecraft:fire_resistance', 25, 0, false, false)
		//event.server.runCommand(`say ${event.level.getBlock(player.getX()-1,player.getY()-1,player.getZ()-1).getId()}`)
		if (event.level.getBlock(player.getX() - 1, player.getY() - 1, player.getZ() - 1) == 'minecraft:grass_block') {
			player.potionEffects.add('minecraft:speed', 25, 3, false, false)
		}
		if (player.crouching) {
			player.potionEffects.add('minecraft:saturation', 25, 3, false, false)
		}
	},
	'kubejs:qixing_sword': function(event) {
		let player = event.player
		player.potionEffects.add("minecraft:speed", 25, 2, false, false)
		player.potionEffects.add("minecraft:resistance", 25, 1, false, false) //抗性提升
	},
	'kubejs:nature_spirit': function(event) {
		let player = event.player
		player.potionEffects.add('minecraft:night_vision', 240, 0, false, false)
		player.potionEffects.add('minecraft:haste', 25, 1, false, false)
		if (player.lastAttackedEntity != null && !player.lastAttackedEntity.potionEffects.isActive('soulsweapons:bleed')) {
			player.lastAttackedEntity.potionEffects.add('soulsweapons:bleed', 80, 6)
			//event.server.runCommandSilent(`effect give ${event.player.lastAttackedEntity.id} minecraft:slowness 5 1 true`)
			//event.server.runCommandSilent(`effect give ${event.player.lastAttackedEntity.id} minecraft:weakness 5 1 true`)
		}
	},
	'kubejs:sixiang_kaitian': function(event) {
		let player = event.player
		if (player.lastAttackedEntity != null && player.lastAttackedEntity.attackingEntity != null) {
			player.potionEffects.add('minecraft:regeneration', 25, 1, false, false)
			player.potionEffects.add('minecraft:strength', 25, 4, false, false)
		}
		if (player.health > player.maxHealth % 2) {
			player.potionEffects.add('minecraft:resistance', 25, 1, false, false)
		}
	},
	'kubejs:lce_tang': function(event) {
        let player = event.player
        if (player.health < player.maxHealth * 0.5) {
            event.player.potionEffects.add('spectrum:swiftness', 25, 2, false, false)
        }
	}
}

onEvent('player.tick', event => {
    let player = event.player
    if (player.getHeldItem(MAIN_HAND) == 'kubejs:jian_li') {
        if (player.lastAttackedEntity != null && player.lastAttackedEntity.attackingEntity != null) {
            player.potionEffects.add('spectrum:swiftness', 10, 1, false, false)
            player.potionEffects.add('minecraft:strength', 10, 1, false, false)
        }
    }
})

onEvent('player.tick', event => {
	let player = event.player
	if (player.getHeldItem(MAIN_HAND).id == 'kubejs:ruoshui_sword') {
		if (player.crouching) {
			//海之屏障-潜行时给予抗性2
			player.potionEffects.add("minecraft:resistance", 10, 1, false, false)
		}
		if (player.attackingEntity != null) {
			//冰之霜寒-战斗时冻结攻击你的目标
			event.server.runCommandSilent(`effect give ${player.attackingEntity.id} minecraft:slowness 3 9 true`)
		}
		//水之净化-立刻熄灭你身上的火焰
		player.extinguish()

		//河之湍急-处于战斗状态时获得速度效果
		if (player.lastAttackedEntity != null && player.lastAttackedEntity.attackingEntity != null) {
			player.potionEffects.add("minecraft:speed", 10, 1, false, false)
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

//白给靴
onEvent('player.tick', event => {
	let player = event.player
	if (player.age % 20 != 0) return
	let boots = player.getFeetArmorItem()
	if (boots == 'kubejs:baigei_boots') {
		player.potionEffects.add('minecraft:speed', 20, 1, false, false)
		player.potionEffects.add('extraalchemy:detection', 20, 0, false, false)
		player.potionEffects.add('minecraft:resistance', 10, 3, false, false)
		player.potionEffects.add('minecraft:regeneration', 10, 2, false, false)
	}
})