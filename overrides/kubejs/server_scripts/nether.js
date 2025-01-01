// 监听玩家登录事件
onEvent('player.logged_in', event => {
  // 检测玩家是否有阶段
  if (!event.player.stages.has('nether')) {
    // 没有则添加该阶段
    event.player.stages.add('nether')
    event.player.give(Item.of('kubejs:difficulty_changer', '{RepairCost:1}'))
    event.player.give(Item.of('20x kubejs:chinese_dumpling'))
    event.player.give(Item.of('2x kubejs:firecracker'))
    event.player.give(Item.of('5x kubejs:red_packet'))
    event.player.give(Item.of('10x kubejs:shi_lian'))
    event.player.give(Item.of('kubejs:huan_lin_ying'))
    event.player.give('minecraft:stone_sword')
    event.player.give(Item.of('spectrum:present', '{Colors:[{Amount:1,Color:"white"}],Giver:"moyuguguji",GiverUUID:[I;-1015466589,-1697168830,-1474266886,36528245],Items:[{Count:5b,id:"kubejs:jiushu_heart"},{Count:1b,id:"inmis:frayed_backpack"},{Count:5b,id:"things:recall_potion"},{Count:1b,id:"waystones:warp_stone",tag:{Damage:0}},{Count:1b,id:"gobber2:gobber2_ring_miner"}],Variant:"red",Wrapped:1b,display:{Name:\'{"color":"gold","text":"新手礼包"}\'}}'))
    event.player.give('dankstorage:dank_2')
    event.server.runCommandSilent(`scoreboard players set choice nether 1`)
    event.player.tell(`§e如果游玩过程中发现BUG请加群§c904252119`)
    event.player.tell(`§e==================================`)
    event.player.tell('§e建议在§c选择-语言§e里关闭§c强制显示Unicode字体')
    event.player.tell(`§e==================================`)
  }
})
