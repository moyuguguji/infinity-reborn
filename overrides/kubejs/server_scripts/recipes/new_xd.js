onEvent('recipes', e => {
	e.shaped('kubejs:yuan_mu_jian_one', [
		' A ',
		' A ',
		' B '
	], {
		A: 'kubejs:mu_ban',
		B: 'minecraft:stick',
	})
	e.shapeless('4x kubejs:mu_ban', ['kubejs:yuan_mu'])
	e.shapeless('kubejs:shi_lian', ['6x #card_package'])
	e.shapeless('enchantablespike:diamond_spikes', ['darkutils:damage_plate_player'])
	e.shapeless('darkutils:damage_plate_player', ['enchantablespike:diamond_spikes'])
	e.custom({
		type: "spectrum:fusion_shrine",
		"time": 50,
		"experience": 10.0,
		"ingredients": [{
				"item": 'minecraft:wooden_sword', //太古合金剑
				"count": 1
			},
			{
				"item": 'minecraft:wooden_sword', //天体块
				"count": 1
			},
			{
				"item": 'minecraft:wooden_sword', //灵魂之骨
				"count": 1
			},
			{
				"item": 'minecraft:wooden_sword', //闪耀之星
				"count": 1
			},
			{
				"item": 'minecraft:wooden_sword', //龙之星
				"count": 1
			},
			{
				"item": 'minecraft:wooden_sword', //流星碎片
				"count": 1
			},
			{
				"item": 'minecraft:wooden_sword', //流星碎片
				"count": 1
			}
		],
		"result": {
			"item": 'kubejs:mu_jian_seven'
		}
	})
	e.custom({
		type: "spectrum:fusion_shrine",
		"time": 50,
		"experience": 10.0,
		"ingredients": [{
				"item": 'kubejs:yuan_mu_jian_one', //太古合金剑
				"count": 1
			},
			{
				"item": 'kubejs:yuan_mu_jian_one', //天体块
				"count": 1
			},
			{
				"item": 'kubejs:yuan_mu_jian_one', //灵魂之骨
				"count": 1
			},
			{
				"item": 'kubejs:yuan_mu_jian_one', //闪耀之星
				"count": 1
			},
			{
				"item": 'kubejs:yuan_mu_jian_one', //龙之星
				"count": 1
			},
			{
				"item": 'kubejs:yuan_mu_jian_one', //流星碎片
				"count": 1
			},
			{
				"item": 'kubejs:yuan_mu_jian_one', //流星碎片
				"count": 1
			}
		],
		"result": {
			"item": 'kubejs:yuan_mu_jian_seven'
		}
	})
	e.smithing(Item.of('kubejs:yuan_mu_jian'), Item.of('kubejs:yuan_mu_jian_seven').ignoreNBT(), Item.of('kubejs:yuan_mu_jian_seven').ignoreNBT())
	e.smithing(Item.of('kubejs:mu_jian'), Item.of('kubejs:mu_jian_seven').ignoreNBT(), Item.of('kubejs:mu_jian_seven').ignoreNBT())
	e.custom({
		type: "spectrum:enchanter",
		"time": 400,
		"required_experience": 10000,
		"ingredients": [{
				"item": 'kubejs:yong_hen_star' //太古合金剑柄
			},
			{
				"item": 'soulsweapons:chaos_orb' //混沌珠
			},
			{
				"item": 'adventurez:source_stone' //基岩粉块
			},
			{
				"item": 'soulsweapons:lord_soul_dark' //龙之星
			},
			{
				"item": 'soulsweapons:lord_soul_void' //黑曜石之心
			},
			{
				"item": 'soulsweapons:lord_soul_rose' //源石
			},
			{
				"item": 'soulsweapons:lord_soul_purple' //昏光精粹
			},
			{
				"item": 'soulsweapons:lord_soul_white' //幽匿核心
			},
			{
				"item": 'soulsweapons:lord_soul_red' //黑石傀儡之心
			}
		],
		"result": {
			"item": 'kubejs:boss_rush',
		},
	})
})
