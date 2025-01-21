onEvent('item.right_click', event => {
	let player = event.player
	if (!player) return
	let item = player.getHeldItem(MAIN_HAND).id
	if (!item || !(item in rightClickEvent)) return
	rightClickEvent[item](event)
})

const rightClickEvent = {
	'kubejs:boss_rush': function(event) {
		Object.keys(bossList).forEach(entityType => {
			let randomx = randomNum(-2, 2);
			let randomz = randomNum(-2, 2);
			event.server.runCommandSilent(`execute at ${event.player.profile.name} run summon_eldritch ${entityType} ${event.player.getX() + randomx} ${event.player.getY()} ${event.player.getZ() + randomz}`);
		});
		if (!event.server.singlePlayer) {
			event.player.mainHandItem.count -= 1;
		}
	},
	'kubejs:shi_lian': function(event) {
		let test = Ingredient.of('@collectorsalbum').getItemIds();
		for (let index = 0; index < 10; index++) {
			let random = randomNum(1, test.length);
			event.player.give(test[random]);
		}
		event.player.mainHandItem.count -= 1;
	},
	'kubejs:ruoshui_sword': function(event) {
		if (event.player.crouching) {
			//泉之治愈-潜行使用恢复最大生命值的一半，冷却时间15秒
			event.player.heal(event.player.maxHealth / 2)
			event.player.addItemCooldown('kubejs:ruoshui_sword', 300)
		} else {
			//汽之呼吸-右键使用获得15秒水下呼吸，冷却时间20秒
			event.server.runCommandSilent(`effect give ${event.player.id} minecraft:water_breathing 15 0 true`)
			event.player.addItemCooldown('kubejs:ruoshui_sword', 400)
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
		event.server.runCommandSilent(`execute at ${event.player.id} run summon minecraft:lightning_bolt ${player.getX() + randomx} ${player.getY()} ${player.getZ() + randomz}`)
	}
}