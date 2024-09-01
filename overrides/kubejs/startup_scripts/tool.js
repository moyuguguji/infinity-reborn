onEvent('item.registry', event =>{
  event.create('crude_pickaxe','pickaxe').tier('stone')
  event.create('crude_axe','axe').tier('stone')
  event.create('crude_spade','shovel').tier('stone')
  //燧石工具
  event.create('jiushu_heart_shard').maxStackSize(64).displayName("救赎之心碎片")
  event.create('jiushu_heart').maxStackSize(64).displayName("§4救赎之心").rarity('Epic').tooltip('使用减少2点难度')
  event.create('disintegration_tablet').maxStackSize(1).rarity('Epic').tooltip('\u00A77这并不是一次性用品')
  event.create('paolude_xiaxin').displayName("§4夏新").maxStackSize(1).rarity('Epic').tooltip('§4夏新的头')
  event.create('paolude_zhanji').displayName("§4天稽阁主-斩稽").maxStackSize(1).rarity('Epic').tooltip('§4斩稽的头')
  event.create('paolude_jy').displayName("§b跟着凑热闹的Jy").maxStackSize(1).rarity('Epic').tooltip('§bJy.的头').tooltip('§a右键获得隐藏奖励')
  event.create('guguji')
		.displayName("§b咕咕稽")
		.tooltip(Text.translate('这是个鸽子'))
		.maxStackSize(1)
		.rarity(Rarity.COMMON)
  event.create('nightbreak').displayName("破夜的头").maxStackSize(1).rarity('Epic').tooltip('无限一代整合包作者')
  event.create('shashen').displayName("§4Dream_Promise").maxStackSize(1).rarity('Epic').tooltip('§4服务器首个完成击杀100凋零任务群友')
  event.create('gandi').displayName("§4he will return").maxStackSize(1).rarity('Epic').tooltip('§4服务器首个完成全部挖矿任务群友')
  event.create('spectral_silt').maxStackSize(64)
  event.create('strong_fossil').displayName("天赋强化石").tooltip('\u00A7d仅对已有天赋的装备强化').tooltip('\u00A7d很大概率失败').rarity('Epic').maxStackSize(64)

  event.create('bloody_tear').maxStackSize(16).tooltip('§4右键召唤超级血夜')
  event.create('soul_bone').tooltip('鹿之精魂的力量来源').rarity('Epic').maxStackSize(64)
  event.create('skill_bottle').maxStackSize(64).tooltip('\u00A77右键使用来返还一点属性点')
})

onEvent('item.modification', event => {

  event.modify('botania:terra_sword', modification => {
    modification.setAttackDamage(25)
    modification.setAttackSpeed(100)
  })

  event.modify('botania:terra_sword', item => {
    item.maxDamage = 50000
    item.fireResistant = true
  })
  event.modify('gobber2:gobber2_special_item', item => {
    item.setmaxStackSize(8)
    item.fireResistant = true
  })
  
})