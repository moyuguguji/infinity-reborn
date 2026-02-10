onEvent('player.logged_in', event => {
	// 检测玩家是否有阶段
	event.player.persistentData.putInt("hurttime", 0)
	if (event.player.stages.has('nether')) return
	// 没有则添加该阶段
	event.player.stages.add('nether')
	event.player.give(Item.of('emerald_tools:copper_sword', `{Unbreakable:1b,swa3:{}}`))
	event.player.give(Item.of('treeaxe:copper_treeaxe', `{Unbreakable:1b,swa3:{}}`))
	event.player.give(Item.of('emerald_tools:copper_pickaxe', `{Unbreakable:1b,swa3:{}}`))
	event.player.give(Item.of('kubejs:difficulty_changer'))
	event.player.give(Item.of('20x kubejs:chinese_dumpling'))
	event.player.give(Item.of('2x kubejs:firecracker'))
	event.player.give(Item.of('6x kubejs:red_packet'))
	event.player.give(Item.of('10x kubejs:shi_lian'))
	event.player.give(Item.of('nomadbooks:nomad_book', '{nomadbooks:{Height:3,InkGoal:8,InkProgress:0,Inked:1b,Structure:"nomadbooks:campfire3x1x3",VisitedBiomes:["Reference{ResourceKey[minecraft:worldgen/biome / minecraft:cold_ocean]=net.minecraft.class_1959@65fbb5f5}"],Width:3}}'))
	event.player.give("kubejs:starter_bag")
	event.player.give('dankstorage:dank_3')
	event.server.runCommandSilent(`scoreboard players set choice nether 1`)
	event.server.scheduleInTicks(100, schedule => {
		event.player.tell(`§e如果游玩过程中发现BUG请加群§c144825716`)
		event.player.tell(`§e==================================`)
		event.player.tell('§e建议在§c选择-语言§e里关闭§c强制显示Unicode字体')
		event.player.tell(`§e==================================`)

	})
	let playerName = event.player.profile.name

	if (exclItemList[playerName] && playerName != null) {
		exclItemList[playerName].forEach(item => {
			event.player.give(item)
		})
	}
})