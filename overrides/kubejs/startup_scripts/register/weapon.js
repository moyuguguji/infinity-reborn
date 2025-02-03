﻿onEvent('item.registry', event => {
	event.create('mu_jian_seven', 'sword')
		.displayName("木剑+7")
		.tier('wood')
		.attackDamageBonus(3)
		.maxStackSize(1)
		.speedBaseline(-2)
		.maxDamage(200)
		.rarity(Rarity.COMMON)
		.tooltip('\u00A77隐藏武器')
		.tooltip('\u00A78剑意:攻击额外造成生物护甲值25%的伤害')

	event.create('mu_jian', 'sword')
		.displayName("\u00A7c木剑+13")
		.tier('wood')
		.attackDamageBonus(6)
		.maxStackSize(1)
		.speedBaseline(-2)
		.maxDamage(200)
		.rarity(Rarity.UNCOMMON)
		.tooltip('\u00A77隐藏武器（可转生）')
		.tooltip('\u00A78剑意:攻击额外造成生物护甲值50%的伤害')

	event.create('yuan_mu_jian_one', 'sword')
		.displayName("原木剑")
		.tier('wood')
		.attackDamageBonus(1)
		.maxStackSize(1)
		.speedBaseline(-2)
		.maxDamage(100)
		.rarity(Rarity.COMMON)
		.tooltip('\u00A77隐藏武器')
		.tooltip('\u00A78剑意:攻击额外造成生物护甲值50%的伤害')

	event.create('yuan_mu_jian_seven', 'sword')
		.displayName("原木剑+7")
		.tier('wood')
		.attackDamageBonus(4)
		.maxStackSize(1)
		.speedBaseline(-2)
		.maxDamage(200)
		.rarity(Rarity.COMMON)
		.tooltip('\u00A77隐藏武器')
		.tooltip('\u00A78剑意:攻击额外造成生物护甲值100%的伤害')

	event.create('yuan_mu_jian', 'sword')
		.displayName("\u00A7c原木剑+13")
		.tier('wood')
		.attackDamageBonus(7)
		.maxStackSize(1)
		.speedBaseline(-2)
		.maxDamage(200)
		.rarity(Rarity.UNCOMMON)
		.tooltip('\u00A77隐藏武器（可转生）')
		.tooltip('\u00A78剑意:攻击额外造成生物护甲值200%的伤害')

	event.create('qixing_sword', 'sword')
		.tier('shenqi')
		.attackDamageBonus(32)
		.maxStackSize(1)
		.speedBaseline(-1.1)
		.maxDamage(9999)
		.rarity(Rarity.UNCOMMON)
		.tooltip('\u00A7e\u00A7l✦✦✦✦✦·神器（可转生）')
		.tooltip('\u00A77天枢●贪狼：使用该武器杀死敌人时获得伤害吸收4')
		.tooltip('\u00A77天璇●巨门：手持该武器时获得速度加成')
		.tooltip('\u00A77天玑●禄存：赋予了该武器额外的幸运(概率斩首)')
		.tooltip('\u00A77天权●文曲：赋予了该武器额外的吸血')
		.tooltip('\u00A77玉衡●廉贞：赋予了该武器额外的攻击速度')
		.tooltip('\u00A77开阳●武曲：赋予了该武器额外的攻击范围')
		.tooltip('\u00A77摇光●破军：手持该武器时获得坚韧加成')
		.tooltip('该武器来自第一代Infinity整合包')

	event.create('ruoshui_sword', 'sword')
		.tier('shenqi')
		.attackDamageBonus(15)
		.maxStackSize(1)
		.speedBaseline(-1.6)
		.maxDamage(9999)
		.rarity(Rarity.UNCOMMON)
		.tooltip('\u00A7e\u00A7l✦✦✦✦✦·神器（可转生）')
		.tooltip('\u00A71海之屏障  \u00A77潜行时获得抗性提升2')
		.tooltip('\u00A79冰之霜寒  \u00A77战斗时冻结攻击你的目标')
		.tooltip('\u00A7a水之净化  \u00A77立刻熄灭你身上的火焰')
		.tooltip('\u00A73河之湍急  \u00A77处于战斗状态时获得速度效果')
		.tooltip('\u00A7c泉之治愈  \u00A77潜行使用恢复最大生命值的一半，冷却时间15秒')
		.tooltip('\u00A7e汽之呼吸  \u00A77右键使用获得15秒水下呼吸，冷却时间20秒')
		.tooltip('\u00A77感谢 @doo 的贡献')
		.tooltip('该武器来自第一代Infinity整合包')

	event.create('yecao_sword', 'sword')
		.tier('shenqi')
		.attackDamageBonus(13)
		.maxStackSize(1)
		.speedBaseline(-1.6)
		.maxDamage(9999)
		.rarity(Rarity.UNCOMMON)
		.tooltip('\u00A7e\u00A7l✦✦✦✦✦·神器（可转生）')
		.tooltip('\u00A77春风：右键获得2秒抗性提升5和5秒生命回复5，冷却10秒')
		.tooltip('\u00A77蔓延：在草方块上时获得速度4')
		.tooltip('\u00A77星火：获得抗火效果')
		.tooltip('\u00A77润物：潜行时获得饱食度')
		.tooltip('该武器来自第一代Infinity整合包')

	event.create('putong_stone_sword', 'sword')
		.attackDamageBonus(1)
		.displayName("石剑？")
		.maxStackSize(1)
		.speedBaseline(-2.2)
		.maxDamage(9999)
		.rarity(Rarity.UNCOMMON)
		.tooltip('\u00A7e\u00A7l✦✦✦✦✦·神器（可转生）')
		.tooltip('\u00A78怎么看都是一把普通的石剑，好像又有些不太寻常')

	event.create('sixiang_kaitian', 'sword')
		.tier('shenqi')
		.attackDamageBonus(32)
		.maxStackSize(1)
		.speedBaseline(-1.5)
		.maxDamage(9999)
		.rarity(Rarity.UNCOMMON)
		.tooltip('\u00A7e\u00A7l✦✦✦✦✦·神器（可转生）')
		.tooltip('\u00A7a青龙:右键在周围召唤天雷')
		.tooltip('\u00A7c朱雀:攻击时获得生命回复2和力量5')
		.tooltip('\u00A7b玄武:生命值一半以上时获得抗性2')
		.tooltip('白虎:对生物造成额外的百分比伤害')
		.tooltip('--来自四人组aolanya,ZYanHua,HuanLu,NanNiang_001')

	event.create('lce_tang', 'sword')
		.tier('shenqi')
		.displayName("§4凝血巨镰")
		.attackDamageBonus(27)
		.maxStackSize(1)
		.speedBaseline(-2.4)
		.maxDamage(9999)
		.rarity(Rarity.UNCOMMON)
		.tooltip('\u00A7e\u00A7l✦✦✦✦✦·神器（可转生）')
		.tooltip('\u00A7c沸血：潜行右键消耗5生命值获得力量3和速度2')
		.tooltip('\u00A7c嗜血：攻击带有吸血')
		.tooltip('\u00A7c凝血：右键获得10秒生命恢复2')
		.tooltip('\u00A7c控血：攻击造成5秒虚弱2缓慢2')
		.tooltip('\u00A7c血之恶魔：生命低于50%时获得迅捷3')
		.tooltip('--来自赞助者lce_Tang')

	event.create('ailinghan', 'sword')
		.tier('shenqi')
		.displayName("护摩之杖")
		.attackDamageBonus(22)
		.maxStackSize(1)
		.speedBaseline(-2.8)
		.maxDamage(9999)
		.rarity(Rarity.UNCOMMON)
		.tooltip('\u00A7e\u00A7l✦✦✦✦✦·神器（可转生）')
		.tooltip('每一点血量上限增加0.1攻击力')
		.tooltip('右键扣除30%生命值获得力量10，持续9秒，cd16秒')
		.tooltip('--来自赞助者艾凌寒')

	event.create('jian_li', 'sword')
		.displayName("§klisj145246§3之剑")
		.attackDamageBonus(42)
		.maxStackSize(1)
		.speedBaseline(-2.6)
		.maxDamage(9999)
		.rarity(Rarity.UNCOMMON)
		.tooltip('\u00A7c✦✦✦✦✦✦·§klis')
		.tooltip('\u00A79故土剑术：战斗时获得力量2与迅捷2')
		.tooltip('\u00A7e\u00A7l弑主妖剑:攻击额外造成50%伤害,每次攻击减少自身10%生命值(不致死)')
		.tooltip('\u00A7c舍吾皮肉:当生命与护甲值小于10点时,额外造成200%的伤害')
		.tooltip('\u00A73断汝筋骨：当舍吾皮肉触发时,攻击造成5秒虚弱10缓慢10,攻击后获得1秒迅捷10')
		.tooltip('\u00A7c--一把来自异界的武器')
		.tooltip('\u00A7c注:本武器不会计算击杀数和连杀加成')

	event.create('infinity_sword', 'sword')
		.tier('infinity')
		.attackDamageBonus(663)
		.maxStackSize(1)
		.speedBaseline(-2)
		.maxDamage(1000000)
		.rarity(Rarity.UNCOMMON)
		.tooltip('\u00A77游戏结束')
		.tooltip('\u00A7e潜行使用/kill攻击')
})