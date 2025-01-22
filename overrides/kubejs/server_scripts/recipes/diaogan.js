// 添加锻造台配方，将后2个物品合并成第一个物品
onEvent('recipes',event => {
    event.smithing('gofish:ender_rod', Item.of('gofish:diamond_reinforced_rod').ignoreNBT(), 'gofish:end_crate'),
    event.smithing('gofish:matrix_rod', Item.of('gofish:ender_rod').ignoreNBT(), 'gofish:end_crate'),
    event.smithing('gofish:frosted_rod', Item.of('gofish:diamond_reinforced_rod').ignoreNBT(), 'gofish:frosted_crate'),
    event.smithing('gofish:slime_rod', Item.of('gofish:diamond_reinforced_rod').ignoreNBT(), 'gofish:slimey_crate'),
    event.smithing('gofish:soul_rod', Item.of('gofish:diamond_reinforced_rod').ignoreNBT(), 'gofish:soul_crate'),
    event.smithing('gofish:celestial_rod', Item.of('gofish:diamond_reinforced_rod').ignoreNBT(), 'gofish:astral_crate'),
    event.smithing('gofish:skeletal_rod', Item.of('gofish:diamond_reinforced_rod').ignoreNBT(), 'gofish:fiery_crate'),
    event.shaped('gofish:soul_crate', [
		'BBB',
		'BAB',
		'BBB'
	  ], 
      {
		A: 'gofish:fiery_crate',
        B: "soulsweapons:lost_soul"
	  }),
      event.shaped('gofish:gilded_blackstone_crate', [
		'BBB',
		'BAB',
		'BBB'
	  ], 
      {
		A: 'gofish:fiery_crate',
        B: "adventurez:gilded_stone"
	  })
})
  