onEvent('ftbquests.custom_reward.50A12DC8DA1CE3AA', event => { // 设置ID为4883F7BD04E2C597的自定义奖励
	// 给予玩家药水效果奖励(村庄英雄)
	if (event.player.op) {
		event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.profile.name} set 0`)
	} else {
		event.player.tell("你没有权限这样做");
	}
})

onEvent('ftbquests.custom_reward.3B0A3998FA09ED28', event => { // 设置ID为4883F7BD04E2C597的自定义奖励
	// 给予玩家药水效果奖励(村庄英雄)
	if (event.player.op) {
		event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.profile.name} add -10`)
	} else {
		event.player.tell("你没有权限这样做");
	}
})

onEvent('ftbquests.custom_reward.6362DFB350668F2B', event => { // 设置ID为4883F7BD04E2C597的自定义奖励
	// 给予玩家药水效果奖励(村庄英雄)
	if (event.player.op) {
		event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.profile.name} add -100`)
	} else {
		event.player.tell("你没有权限这样做");
	}
})

onEvent('ftbquests.custom_reward.07CB3D64C540EFAB', event => { // 设置ID为4883F7BD04E2C597的自定义奖励
	// 给予玩家药水效果奖励(村庄英雄)
	event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.profile.name} set 1000`)
})

onEvent('ftbquests.custom_reward.48F04EA7FA7F0BAA', event => { // 设置ID为4883F7BD04E2C597的自定义奖励
	// 给予玩家药水效果奖励(村庄英雄)
	event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.profile.name} add 10`)
})

onEvent('ftbquests.custom_reward.3E97189C9020FE20', event => { // 设置ID为4883F7BD04E2C597的自定义奖励
	// 给予玩家药水效果奖励(村庄英雄)
	event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.profile.name} add 100`)
})

onEvent('ftbquests.custom_reward.3F0AC9770FC2A108', event => { // 设置ID为4883F7BD04E2C597的自定义奖励
	// 给予玩家药水效果奖励(村庄英雄)
	let lmd = event.player.fullNBT.IMDifficulty
	event.player.tell(`你的难度值为:${lmd}`)
})

onEvent('ftbquests.custom_reward.5ED6574F143730BC', event => {// 设置ID为4883F7BD04E2C597的自定义奖励
    // 给予玩家药水效果奖励(村庄英雄)
    if (event.player.op) {
        event.server.runCommandSilent(`improvedmobs difficulty player @a set 0`)
    } else {
        event.player.tell("你没有权限这样做");
    }

})

onEvent('ftbquests.custom_reward.740A45205A854354', event => {// 设置ID为4883F7BD04E2C597的自定义奖励
    // 给予玩家药水效果奖励(村庄英雄)
    if (event.player.stages.has('villager')) {
        event.player.stages.remove('villager')
        event.player.tell("已关闭限制村民右键交易")
    } else {
        event.player.stages.add('villager')
        event.player.tell("已开启限制村民右键交易")
    }
})