onEvent('item.entity_interact', event => {
	let ty = [
		"minecraft:librarian",
		"minecraft:toolsmith",
		"minecraft:weaponsmith",
		"minecraft:armorer",
		"minecraft:fisherman",
		"morevillagers:woodworker",
		"morevillagers:miner"
	]
	let entity = event.target
	if (entity != null) {
		if (event.player.stages.has('villager')) {
			if (entity.type == "minecraft:villager") {
				let profession = entity.fullNBT.VillagerData.profession
				if (ty.includes(profession)) {
					event.cancel()
					event.server.tell("\u00A74请使用贸易站交易,可在任务中关闭")
				}
			}
		}
	}
})