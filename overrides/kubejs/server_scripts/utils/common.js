function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPlayerSource(source) {
	if (!source) return false;
	return source.toString().startsWith('EntityDamageSource (class_3222')
}

function clearLag(server) {
	lastResult = [];
	lastItemCount = 0;
	server.getEntities("@e[type=item]").forEach(entity => {
		if (!whitelist.test(entity.item.id)) {
			lastItemCount += entity.item.count;
			entity.kill();
		}
	});
	server.tell([Text.lightPurple('[扫地机器人]'), `本次共清除 ${lastItemCount} 个物品`]);
}