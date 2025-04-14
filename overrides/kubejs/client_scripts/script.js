onEvent("item.tooltip", tooltip => {
	tooltip.addAdvanced('botania:crystal_bow', (item, advanced, text) => {
		if (item.hasNBT() && item.nbt['CustomModelData'] == 1781) {
			text.add(2, "古:你怎么知道我两发抽到了小豆泥隐藏")
			text.add(3, "来自赞助者-xuexiye")
		}
	})
	tooltip.addAdvanced('kubejs:huan_lin_ying', (item, advanced, text) => {
		text.add(4, Text.darkPurple('你感受到了灵魂深处刺骨的寒意').bold(true))
	})
	tooltip.addAdvanced('bosses_of_mass_destruction:brimstone_nectar', (item, advanced, text) => {
		text.add(2, Text.gold('仅适用于:夜巫妖,虚空之花,地狱之手,黑曜石之柱').bold(true))
	})
})
onEvent('rei.information', event => {
	function info(item,titel,mess) {
		event.add(item,titel,[mess])
	}
	info('mythicmetals:aquarium_pearl', '激水珍珠', '挖掘深海金属矿石概率掉落')
	info('mythicmetals:banglum_chunk', '聚爆石碎块', '挖掘班古姆矿石概率掉落')
	info('mythicmetals:stormyx_shell', '风暴石外壳', '挖掘风暴矿石概率掉落')
	info('mythicmetals:raw_kyber', '凯伯', '在紫水晶洞的方解石中概率生成')
	info('mcda:frost_crystal', '冰霜水晶', '挖掘蓝冰概率掉落')
	info('soulsweapons:chaos_robes','混沌长袍','击杀混沌君主掉落')
	info('adventurez:prime_eye','黄金之眼','击杀眼球掉落')
  })