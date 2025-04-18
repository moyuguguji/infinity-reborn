onEvent('item.registry', event => {
	event.create('jing__xin')
		.displayName("镜心的头")
		.tooltip(Text.translate('右键有惊喜'))
		.tooltip(Text.translate('--来自赞助者Jing__Xin'))
		.maxStackSize(1)
		.rarity(Rarity.EPIC)

	event.create('x_nuohua')
		.displayName(" §4琉§6璃§e星§a夜§b溯§3流§d光")
		.tooltip(Text.translate('右键召唤流星'))
		.tooltip(Text.translate('--来自赞助者X_nuohua'))
		.maxStackSize(1)
		.rarity(Rarity.EPIC)

	event.create('paolude_xiaxin')
		.displayName("§4夏新")
		.maxStackSize(1)
		.rarity('Epic')
		.tooltip('§4夏新的头')

	event.create('paolude_zhanji')
		.displayName("§4天稽阁主-斩稽")
		.maxStackSize(1)
		.rarity('Epic')
		.tooltip('§4斩稽的头')

	event.create('paolude_jy')
		.displayName("§b跟着凑热闹的Jy")
		.maxStackSize(1)
		.rarity('Epic')
		.tooltip('§bJy.的头')
		.tooltip('§a右键获得隐藏奖励')

	event.create('guguji')
		.displayName("§b咕咕稽")
		.tooltip(Text.translate('这是个鸽子'))
		.maxStackSize(1)
		.rarity(Rarity.COMMON)

	event.create('nightbreak')
		.displayName("破夜的头")
		.maxStackSize(1)
		.rarity('Epic')
		.tooltip('无限一代整合包作者')

	event.create('shashen')
		.displayName("§4Dream_Promise")
		.maxStackSize(1)
		.rarity('Epic')
		.tooltip('§4服务器首个完成击杀100凋零任务群友')

	event.create('gandi')
		.displayName("§4he will return")
		.maxStackSize(1)
		.rarity('Epic')
		.tooltip('§4服务器首个完成全部挖矿任务群友')

	event.create('tu_kuai')
		.displayName("很脏的块")
		.tooltip(Text.translate('一个不一样的泥土'))
		.maxStackSize(1)
		.rarity(Rarity.COMMON)

	event.create('shi_kuai')
		.displayName("坚硬的圆石")
		.tooltip(Text.translate('比较坚韧的圆石'))
		.maxStackSize(1)
		.rarity(Rarity.COMMON)

	event.create('shi_shen_kuai')
		.displayName("脆弱的深板岩")
		.tooltip(Text.translate('这块深板岩看起来很脆弱'))
		.maxStackSize(1)
		.rarity(Rarity.COMMON)

	event.create('xiajie_kuai')
		.displayName("奇怪的地狱岩")
		.tooltip(Text.translate('他貌似有些奇怪?'))
		.maxStackSize(1)
		.rarity(Rarity.COMMON)

	event.create('modi_kuai')
		.displayName("普通的末地石")
		.tooltip(Text.translate('这只是个末地石'))
		.maxStackSize(1)
		.rarity(Rarity.COMMON)

	event.create('yuan_mu')
		.displayName("原木")
		.tooltip(Text.translate('普通的木头'))
		.maxStackSize(1)
		.rarity(Rarity.COMMON)

	event.create('mu_ban')
		.displayName("木板")
		.tooltip(Text.translate('普通的木板'))
		.maxStackSize(64)
		.rarity(Rarity.COMMON)

	event.create('zhongzi')
		.tooltip('\u00A77我们将其称为高效')
		.tooltip('@moyuguguji')
		.rarity(Rarity.UNCOMMON)
		.unstackable()
})