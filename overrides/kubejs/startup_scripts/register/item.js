onEvent('item.registry', event => {
	event.create('ametrine_crystal')
		.displayName("\u00A75助锻紫晶")
		.tooltip('\u00A75品质改造不可少的催化剂')
		.tooltip('\u00A75放在右侧插槽')
		.rarity('Epic')
		.maxStackSize(64)

	event.create('crystal_tiered')
		.displayName("\u00A76神铸晶")
		.tooltip('\u00A76某些不可修复装备的品质改造材料')
		.tooltip('\u00A76放在左侧插槽')
		.tooltip('\u00A76不是所有装备都可以使用！')
		.tooltip('\u00A76盾、弓、弩都需要这个锻造品质！')
		.rarity('Epic')
		.maxStackSize(64)

	event.create('shenqi_shard')
		.displayName("§6神器碎片")
		.tooltip(Text.translate('item.kubejs.shenqi_shard.tooltip'))
		.rarity(Rarity.EPIC)
		.tag('kubejs:shenqi_shard')

	event.create('shenqi_ingot')
		.displayName("§6神器零件")
		.tooltip(Text.translate('item.kubejs.shenqi_ingot.tooltip'))
		.rarity(Rarity.UNCOMMON)
		.tag('kubejs:shenqi_shard')

	event.create('sheng_jin')
		.displayName("§6神金")
		.tooltip(Text.translate('圣金'))
		.maxStackSize(1)
		.rarity(Rarity.UNCOMMON)
		.tag('kubejs:sheng_jin')

	event.create('shining_star')
		.rarity(Rarity.UNCOMMON)
		.maxStackSize(1)

	event.create('infinity_sword_a')
		.maxStackSize(1)
		.tooltip('\u00A77无限支配之剑的部件之一')
		.tooltip('\u00A76但哪怕是一个部件也有非常恐怖的力量。')
		.rarity(Rarity.UNCOMMON)

	event.create('infinity_sword_b')
		.maxStackSize(1)
		.tooltip('\u00A77无限支配之剑的部件之一')
		.tooltip('\u00A7c没有剑柄的剑刃似乎无法空手掌握，不然会被其上附着的力量轻易反噬。')
		.rarity(Rarity.UNCOMMON)

	event.create('jiushu_heart_shard')
		.maxStackSize(64)
		.displayName("救赎之心碎片")

	event.create('jiushu_heart')
		.maxStackSize(64)
		.displayName("§4救赎之心")
		.rarity('Epic')
		.tooltip('使用减少2点难度')

	event.create('disintegration_tablet')
		.maxStackSize(1)
		.rarity('Epic')
		.tooltip('\u00A77这并不是一次性用品')

	event.create('spectral_silt')
		.maxStackSize(64)

	event.create('strong_fossil')
		.displayName("天赋强化石")
		.tooltip('\u00A7d仅对已有天赋的装备强化')
		.tooltip('\u00A7d很大概率失败')
		.rarity('Epic')
		.maxStackSize(64)

	event.create('bloody_tear')
		.maxStackSize(16)
		.tooltip('§4右键召唤超级血夜')

	event.create('soul_bone')
		.tooltip('鹿之精魂的力量来源')
		.rarity('Epic')
		.maxStackSize(64)

	event.create('skill_bottle')
		.maxStackSize(64)
		.tooltip('\u00A77右键使用来返还一点属性点')

	event.create('shi_lian')
		.displayName("十连抽卡券")
		.tooltip("\u00A7e\u00A7l右键抽一次十连")
		.maxStackSize(10)
		.rarity(Rarity.UNCOMMON)

	event.create('boss_rush')
		.displayName("远古之魂")
		.tooltip("\u00A7e\u00A7l右键召唤所有boss")
		.tooltip("\u00A74后果自负!")
		.maxStackSize(1)
		.rarity(Rarity.UNCOMMON)

	event.create('yan_qiu')
		.displayName("眼球召唤")
		.tooltip(Text.translate('右键在末地召唤眼球'))
		.maxStackSize(1)
		.rarity(Rarity.COMMON)

	event.create('hei_shi')
		.displayName("黑石傀儡召唤")
		.tooltip(Text.translate('右键在地狱召唤黑石傀儡'))
		.maxStackSize(1)
		.rarity(Rarity.COMMON)

	event.create('xu_wu')
		.displayName("虚无之刺")
		.tooltip(Text.translate('主手持有时攻击地狱之手将其秒杀'))
		.tooltip(Text.translate('不掉落难度额外物品'))
		.maxStackSize(1)
		.rarity(Rarity.EPIC)

	event.create('difficulty_changer')
		.displayName("§6难度切换器")
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip1'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip2'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip3'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip4'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip5'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip6'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip7'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip8'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip9'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip10'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip11'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip12'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip13'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip14'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip15'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip16'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip17'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip18'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip19'))
		.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip22'))
		.rarity(Rarity.EPIC)

	event.create('yong_hen_star')
		.displayName("\u00A7b永恒之星")
		.tooltip('右键切换永恒难度')
		.tooltip('\u00A74没脑子不要玩!')
		.rarity('Epic')
		.maxStackSize(1)

	event.create('red_packet')
		.tooltip(Text.translate('item.kubejs.red_packet.tooltip'))
		.rarity(Rarity.EPIC)

	event.create('firecracker')
		.tooltip(Text.translate('item.kubejs.firecracker.tooltip'))
		.rarity(Rarity.EPIC)

	event.create('chinese_dumpling')
		.tooltip(Text.translate('item.kubejs.chinese_dumpling.tooltip'))
		.food((food) => {
			food.hunger(2).saturation(0.5)
		})
		.rarity(Rarity.EPIC)

	event.create('sao_di')
		.displayName("§6清理扫帚")
		.tooltip(Text.translate('右键清理掉落物'))
		.tooltip(Text.translate('§4需要作弊权限'))
		.rarity(Rarity.EPIC)

	event.create('boss_compass1')
		.displayName("§6boss罗盘-夜巫妖")
		.tooltip(Text.translate('右键使用显示最近的boss建筑'))
		.maxStackSize(1)
		.rarity(Rarity.EPIC)

	event.create('boss_compass2')
		.displayName("§6boss罗盘-地狱之手")
		.tooltip(Text.translate('右键使用显示最近的boss建筑'))
		.maxStackSize(1)
		.rarity(Rarity.EPIC)

	event.create('boss_compass3')
		.displayName("§6boss罗盘-黑曜石之柱")
		.tooltip(Text.translate('右键使用显示最近的boss建筑'))
		.maxStackSize(1)
		.rarity(Rarity.EPIC)

	event.create('boss_compass4')
		.displayName("§6boss罗盘-虚空之花")
		.tooltip(Text.translate('右键使用显示最近的boss建筑'))
		.maxStackSize(1)
		.rarity(Rarity.EPIC)

	event.create('boss_compass5')
		.displayName("§6boss罗盘-远古英雄")
		.tooltip(Text.translate('右键使用显示最近的boss建筑'))
		.maxStackSize(1)
		.rarity(Rarity.EPIC)

	event.create('boss_compass6')
		.displayName("§6boss罗盘-莫德凯撒")
		.tooltip(Text.translate('右键使用显示最近的boss建筑'))
		.maxStackSize(1)
		.rarity(Rarity.EPIC)

	event.create('boss_compass7')
		.displayName("§6boss罗盘-亚托克斯")
		.tooltip(Text.translate('右键使用显示最近的boss建筑'))
		.maxStackSize(1)
		.rarity(Rarity.EPIC)
	event.create('gu')
		.displayName("灵感菇")
		//.tooltip(Text.translate('item.kubejs.chinese_dumpling.tooltip'))
		.food((food) => {
			food.hunger(4).saturation(0.5).alwaysEdible(true).effect('minecraft:slow_falling', 100, 0, 1.0).effect('minecraft:levitation', 100, 0, 1.0)
		})
	event.create('gold_coin')
		.displayName("异界金币")
		.tooltip(Text.translate('item.kubejs.gold_coin.tooltip'))
		.tooltip(Text.translate('item.kubejs.gold_coin.tooltip1'))
		.maxStackSize(64)
		.rarity(Rarity.UNCOMMON)

	event.create('miner_quests')
		.displayName("矿工任务奖励袋(初级)")

	event.create('fisherman_quests')
		.displayName("渔夫任务奖励袋(初级)")

	event.create('farmer_quests')
		.displayName("农民任务奖励袋(初级)")

	event.create('starter_bag')
		.displayName("新手礼包")
		.tooltip(Text.translate('右键使用'))
})
