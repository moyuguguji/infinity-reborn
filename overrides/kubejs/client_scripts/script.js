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