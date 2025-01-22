onEvent("entity.spawned", event => {
	let bossName = bossList[event.getEntity().type]
	if (!bossName) return
	event.server.tell(`\u00A75${bossName}已经苏醒!`)
})

onEvent("entity.death", event => {
	let entity = event.getEntity();
	let bossName = bossList[entity.type]
	if (!bossName) return
	event.server.tell(`\u00A75${bossName}已被打败!`)
	
	if (entity.type === "minecraft:ender_dragon") {
		event.server.runCommandSilent(`kill @e[type=marker]`);
		event.server.runCommandSilent(`kill @e[type=minecraft:end_crystal]`);
		event.server.runCommandSilent(`kill @e[type=area_effect_cloud]`);
	}
})