onEvent('item.right_click', event => {
	let player = event.player
	if (!player) return
	let item = player.getHeldItem(MAIN_HAND)
	if (!item) return
	rightClickEvent[item](event)
})

const rightClickEvent = {
	'kubejs:boss_rush': function (event) {
		Object.keys(bossList).forEach(entityType => {
			let randomx = randomNum(-2, 2);
			let randomz = randomNum(-2, 2);
			event.server.runCommandSilent(`execute at ${event.player.profile.name} run summon_eldritch ${entityType} ${event.player.getX() + randomx} ${event.player.getY()} ${event.player.getZ() + randomz}`);
		});
		if (!event.server.singlePlayer) {
			event.player.mainHandItem.count -= 1;
		}
	},
	'kubejs:shi_lian': {
		let test = Ingredient.of('@collectorsalbum').getItemIds();
		for (let index = 0; index < 10; index++) {
			let random = randomNum(1, test.length);
			event.player.give(test[random]);
		}
		event.player.mainHandItem.count -= 1;
	}
}