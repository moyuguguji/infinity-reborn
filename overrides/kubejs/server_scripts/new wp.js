onEvent('recipes',event => {
    //event.smithing('gateofbabylon:gobber_broadsword', 'gateofbabylon:diamond_broadsword', 'gobber2:gobber2_ingot'),
    //event.smithing('gateofbabylon:gobber_spear', 'gateofbabylon:diamond_spear', 'gobber2:gobber2_ingot'),
    //event.smithing('gateofbabylon:gobber_dagger', 'gateofbabylon:diamond_dagger', 'gobber2:gobber2_ingot'),
    //event.smithing('gateofbabylon:gobber_rapier', 'gateofbabylon:diamond_rapier', 'gobber2:gobber2_ingot'),
    //event.smithing('gateofbabylon:gobber_katana', 'gateofbabylon:diamond_katana', 'gobber2:gobber2_ingot'),

    //event.smithing('gateofbabylon:nether_gobber_broadsword', 'gateofbabylon:gobber_broadsword', 'gobber2:gobber2_ingot_nether'),
    //event.smithing('gateofbabylon:nether_gobber_spear', 'gateofbabylon:gobber_spear', 'gobber2:gobber2_ingot_nether')
    //event.smithing('gateofbabylon:nether_gobber_dagger', 'gateofbabylon:gobber_dagger', 'gobber2:gobber2_ingot_nether'),
    //event.smithing('gateofbabylon:gobber_rapier_nether', 'gateofbabylon:gobber_rapier', 'gobber2:gobber2_ingot_nether'),
    //event.smithing('gateofbabylon:nether_gobber_katana', 'gateofbabylon:diamond_katana', 'gobber2:gobber2_ingot_nether'),

    //event.smithing('gateofbabylon:end_gobber_broadsword', 'gateofbabylon:nether_gobber_broadsword', 'gobber2:gobber2_ingot_end'),
    //event.smithing('gateofbabylon:end_gobber_spear', 'gateofbabylon:nether_gobber_spear', 'gobber2:gobber2_ingot_end'),
    //event.smithing('gateofbabylon:end_gobber_dagger', 'gateofbabylon:nether_gobber_dagger', 'gobber2:gobber2_ingot_end'),
    //event.smithing('gateofbabylon:gobber_rapier_end', 'gateofbabylon:gobber_rapier_nether', 'gobber2:gobber2_ingot_end')
    //event.smithing('gateofbabylon:end_gobber_katana', 'gateofbabylon:nether_gobber_katana', 'gobber2:gobber2_ingot_end'),

    //event.smithing('gateofbabylon:terra_broadsword', 'gateofbabylon:gobber_broadsword', 'botania:terrasteel_ingot'),
    //event.smithing('gateofbabylon:terra_spear', 'gateofbabylon:gobber_spear', 'botania:terrasteel_ingot')
    //event.smithing('gateofbabylon:terra_dagger', 'gateofbabylon:gobber_dagger', 'botania:terrasteel_ingot'),
    //event.smithing('gateofbabylon:terra_rapier', 'gateofbabylon:gobber_rapier', 'botania:terrasteel_ingot'),
    //event.smithing('gateofbabylon:terra_katana', 'gateofbabylon:gobber_katana', 'botania:terrasteel_ingot'),
    //event.smithing('gateofbabylon:terra_haladie', 'gateofbabylon:diamond_haladie', 'botania:terrasteel_ingot'),
    event.shapeless('kubejs:shenqi_ingot', ['9x kubejs:shenqi_shard'])
    //泰拉
    event.shaped('gateofbabylon:terra_haladie', [
		'  A',
		' B ',
		'A  '
	  ], 
      {
		A: 'botania:terrasteel_ingot',
        B: 'botania:livingwood_twig',
	  })
    event.shaped('gateofbabylon:terra_dagger', [
		' A ',
		' B ',
		'   '
	  ], 
      {
		A: 'botania:terrasteel_ingot',
        B: 'botania:livingwood_twig',
	  })
    event.shaped('gateofbabylon:terra_spear', [
		'  A',
		' B ',
		'B  '
	  ], 
      {
		A: 'botania:terrasteel_ingot',
        B: 'botania:livingwood_twig',
	  })
    event.shaped('gateofbabylon:terra_broadsword', [
		'  A',
		'AA ',
		'BA '
	  ], 
      {
		A: 'botania:terrasteel_ingot',
        B: 'botania:livingwood_twig',
	  })
    event.shaped('gateofbabylon:terra_rapier', [
		'  A',
		' A ',
		'B  '
	  ], 
      {
		A: 'botania:terrasteel_ingot',
        B: 'botania:livingwood_twig',
	  })
    event.shaped('gateofbabylon:terra_katana', [
		'  A',
		' A ',
		'BB '
	  ], 
      {
		A: 'botania:terrasteel_ingot',
        B: 'botania:livingwood_twig',
	  })
    //戈伯
    event.shaped('gateofbabylon:gobber_dagger', [
		' A ',
		' B ',
		'   '
	  ], 
      {
		A: 'gobber2:gobber2_ingot',
        B: 'gobber2:gobber2_rod',
	  })
    event.shaped('gateofbabylon:gobber_spear', [
		'  A',
		' B ',
		'B  '
	  ], 
      {
		A: 'gobber2:gobber2_ingot',
        B: 'gobber2:gobber2_rod',
	  })
    event.shaped('gateofbabylon:gobber_broadsword', [
		'  A',
		'AA ',
		'BA '
	  ], 
      {
		A: 'gobber2:gobber2_ingot',
        B: 'gobber2:gobber2_rod',
	  })
    event.shaped('gateofbabylon:gobber_rapier', [
		'  A',
		' A ',
		'B  '
	  ], 
      {
		A: 'gobber2:gobber2_ingot',
        B: 'gobber2:gobber2_rod',
	  })
    event.shaped('gateofbabylon:gobber_katana  ', [
		'  A',
		' A ',
		'BB '
	  ], 
      {
		A: 'gobber2:gobber2_ingot',
        B: 'gobber2:gobber2_rod',
	  })
      //下界戈伯
      event.shaped('gateofbabylon:nether_gobber_dagger', [
		' A ',
		' B ',
		'   '
	  ], 
      {
		A: 'gobber2:gobber2_ingot_nether',
        B: 'gobber2:gobber2_rod_nether',
	  })
    event.shaped('gateofbabylon:nether_gobber_spear', [
		'  A',
		' B ',
		'B  '
	  ], 
      {
		A: 'gobber2:gobber2_ingot_nether',
        B: 'gobber2:gobber2_rod_nether',
	  })
    event.shaped('gateofbabylon:nether_gobber_broadsword', [
		'  A',
		'AA ',
		'BA '
	  ], 
      {
		A: 'gobber2:gobber2_ingot_nether',
        B: 'gobber2:gobber2_rod_nether',
	  })
    event.shaped('gateofbabylon:gobber_rapier_nether', [
		'  A',
		' A ',
		'B  '
	  ], 
      {
		A: 'gobber2:gobber2_ingot_nether',
        B: 'gobber2:gobber2_rod_nether',
	  })
    event.shaped('gateofbabylon:nether_gobber_katana', [
		'  A',
		' A ',
		'BB '
	  ], 
      {
		A: 'gobber2:gobber2_ingot_nether',
        B: 'gobber2:gobber2_rod_nether',
	  })
      //末影戈伯
      event.shaped('gateofbabylon:end_gobber_dagger', [
		' A ',
		' B ',
		'   '
	  ], 
      {
		A: 'gobber2:gobber2_ingot_end',
        B: 'gobber2:gobber2_rod_end',
	  })
    event.shaped('gateofbabylon:end_gobber_spear', [
		'  A',
		' B ',
		'B  '
	  ], 
      {
		A: 'gobber2:gobber2_ingot_end',
        B: 'gobber2:gobber2_rod_end',
	  })
    event.shaped('gateofbabylon:end_gobber_broadsword', [
		'  A',
		'AA ',
		'BA '
	  ], 
      {
		A: 'gobber2:gobber2_ingot_end',
        B: 'gobber2:gobber2_rod_end',
	  })
    event.shaped('gateofbabylon:gobber_rapier_end', [
		'  A',
		' A ',
		'B  '
	  ], 
      {
		A: 'gobber2:gobber2_ingot_end',
        B: 'gobber2:gobber2_rod_end',
	  })
    event.shaped('gateofbabylon:end_gobber_katana', [
		'  A',
		' A ',
		'BB '
	  ], 
      {
		A: 'gobber2:gobber2_ingot_end',
        B: 'gobber2:gobber2_rod_end',
	  })
	  event.shaped('gateofbabylon:end_gobber_katana', [
		'  A',
		' A ',
		'BB '
	  ], 
      {
		A: 'gobber2:gobber2_ingot_end',
        B: 'gobber2:gobber2_rod_end',
	  })
	  event.shaped('adventurez:shadow_chest_block', [
		'BAB',
		'ACA',
		'BAB'
	  ], 
      {
		A: 'adventurez:source_stone',
        B: 'minecraft:dragon_egg',
		C: 'minecraft:ender_chest'
	  })
	  event.shaped('darkutils:charm_portal', [
		'BAB',
		'ACA',
		'BAB'
	  ], 
      {
		A: 'soulsweapons:infused_blackstone',
        B: 'infinity:special_handlingof_glowing_obsidian',
		C: 'mcda:gemstone_purple'
	  })
	  event.shaped('mcdw:bow_sabrewing', [
		' AB',
		'ACB',
		' AB'
	  ], 
      {
		A: 'minecraft:gold_ingot',
        B: 'mythicmetals:silver_ingot',
		C: 'minecraft:iron_ingot'
	  })
	  event.shaped('mcdw:bow_void_bow', [
		' AB',
		'DCB',
		' AB'
	  ], 
      {
		A: 'minecraft:amethyst_shard',
        B: 'minecraft:string',
		C: 'gobber2:gobber2_block',
		D: 'minecraft:purpur_block'
	  })
	  event.custom({
		type: 'alloy_forgery:forging',
		'inputs': [
		{
		"item": 'mcdw:bow_ancient_bow',
		"count": 1
		},
		{
		"item": 'gobber2:gobber2_ingot_nether',
		"count": 3
		},
		{
		"item": 'heartytrinkets:wither_rib',
		"count": 10
		},
		{
		"item": 'mcda:upgrade_core_soul',
		"count": 3
		},
		{
		"item": 'mcda:phantom_bones',
		"count": 2
		},
		{
		"item": 'mcda:upgrade_core_wither',
		"count": 2
		}
		],
		'output': {
		'id': 'mcdw:bow_lost_souls',
		'count': 1
		},
		'min_forge_tier': 3,
		'fuel_per_tick': 500
	})
	event.custom({
		type: 'alloy_forgery:forging',
		'inputs': [
		{
		"item": 'mcdw:bow_void_bow',
		"count": 1
		},
		{
		"item": 'gobber2:gobber2_ingot_end',
		"count": 3
		},
		{
		"item": 'betterend:dragon_bone_block',
		"count": 16
		},
		{
		"item": 'betterend:eternal_crystal',
		"count": 16
		},
		{
		"item": 'charm:ender_pearl_block',
		"count": 2
		},
		{
		"item": 'enderscape:nebulite',
		"count": 2
		}
		],
		'output': {
		'id': 'mcdw:bow_call_of_the_void',
		'count': 1
		},
		'min_forge_tier': 4,
		'fuel_per_tick': 800
	})
})
