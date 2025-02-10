onEvent('player.logged_in', event => {
	// 检测玩家是否有阶段
	if (event.player.stages.has('nether')) return
	// 没有则添加该阶段
	event.player.stages.add('nether')
	event.player.give(Item.of('emerald_tools:copper_sword', '{Unbreakable:1b}'))
	event.player.give(Item.of('treeaxe:copper_treeaxe', '{Unbreakable:1b}'))
	event.player.give(Item.of('emerald_tools:copper_pickaxe', '{Unbreakable:1b}'))
	event.player.give(Item.of('kubejs:difficulty_changer', '{RepairCost:1}'))
	event.player.give(Item.of('20x kubejs:chinese_dumpling'))
	event.player.give(Item.of('2x kubejs:firecracker'))
	event.player.give(Item.of('5x kubejs:red_packet'))
	event.player.give(Item.of('10x kubejs:shi_lian'))
	event.player.give("kubejs:starter_bag")
	event.player.give('dankstorage:dank_2')
	event.server.runCommandSilent(`scoreboard players set choice nether 1`)
	event.server.scheduleInTicks(20, schedule => {
		event.player.tell(`§e如果游玩过程中发现BUG请加群§c904252119`)
		event.player.tell(`§e==================================`)
		event.player.tell('§e建议在§c选择-语言§e里关闭§c强制显示Unicode字体')
		event.player.tell(`§e==================================`)
	
	})
	let playerName = event.player.profile.name

	if (exclItemList[playerName]) {
		exclItemList[playerName].forEach(item => {
			event.player.give(item)
		})
	}
})