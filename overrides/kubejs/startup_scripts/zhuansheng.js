onEvent('item.registry', event =>{
  event.create('upgrade_poison').displayName("\u00A72Ⅰ阶武器转生石-蚀骨").tooltip('\u00A72仅限部分装备可用！').tooltip('\u00A72使用后重置武器一切效果').tooltip('\u00A72新武器获得超限毒素天赋').rarity('Epic').maxStackSize(16)
  event.create('upgrade_frost').displayName("\u00A7bⅠ阶武器转生石-凛冽").tooltip('\u00A7b仅限部分装备可用！').tooltip('\u00A7b使用后重置武器一切效果').tooltip('\u00A7b新武器获得超限冰霜天赋').rarity('Epic').maxStackSize(16)
  event.create('upgrade_fire').displayName("\u00A7cⅠ阶武器转生石-灼炎").tooltip('\u00A7c仅限部分装备可用！').tooltip('\u00A7c使用后重置武器一切效果').tooltip('\u00A7c新武器获得超限烈焰天赋').rarity('Epic').maxStackSize(16)
  event.create('upgrade_yuan').displayName("\u00A7eⅢ阶武器转生石-元素").tooltip('\u00A7e仅限部分装备可用！').tooltip('\u00A7e使用后重置武器一切效果').tooltip('\u00A7e新武器获得超限烈焰,毒素,冰霜天赋').rarity('Epic').maxStackSize(16)

  event.create('upgrade_crit').displayName("\u00A75Ⅱ阶武器转生石-强袭").tooltip('\u00A75仅限部分装备可用！').tooltip('\u00A75使用后重置武器一切效果').tooltip('\u00A75新武器获得超限重击天赋').rarity('Epic').maxStackSize(16)
  event.create('upgrade_lifesteal').displayName("\u00A74Ⅱ阶武器转生石-吸血").tooltip('\u00A74仅限部分装备可用！').tooltip('\u00A74使用后重置武器一切效果').tooltip('\u00A74新武器获得超限吸血天赋').rarity('Epic').maxStackSize(16)
  event.create('upgrade_ren').displayName("\u00A74Ⅵ阶武器转生石-重刃").tooltip('\u00A74仅限部分装备可用！').tooltip('\u00A74使用后重置武器一切效果').tooltip('\u00A74新武器获得超限重击,吸血天赋').rarity('Epic').maxStackSize(16)

  event.create('upgrade_liuren').displayName("\u00A7b重塑核心").tooltip('\u00A7b仅限部分装备可用！').tooltip('\u00A7b使用后重置武器一切效果').tooltip('\u00A7b新武器获得超限重击,吸血,烈焰,毒素,冰霜天赋').rarity('Epic').maxStackSize(16)

  event.create('upgrade_life').displayName("\u00A7dⅠ阶护甲转生石-生命").tooltip('\u00A7d仅限部分装备可用！').tooltip('\u00A7d使用后重置护甲一切效果').tooltip('\u00A7d新护甲获得超限生命天赋').rarity('Epic').maxStackSize(16)

  event.create('upgrade_defence').displayName("\u00A7eⅡ阶护甲转生石-护佑").tooltip('\u00A7e仅限部分装备可用！').tooltip('\u00A7e使用后重置护甲一切效果').tooltip('\u00A7e新护甲获得超限抗性天赋').rarity('Epic').maxStackSize(16)

  event.create('upgrade_nami').displayName("\u00A7e纳米核心").tooltip('\u00A7e仅限部分装备可用！').tooltip('\u00A7e使用后重置护甲一切效果').tooltip('\u00A7e新护甲获得超限抗性,生命天赋').rarity('Epic').maxStackSize(16)

  event.create('ametrine_crystal').displayName("\u00A75助锻紫晶").tooltip('\u00A75品质改造不可少的催化剂').tooltip('\u00A75放在右侧插槽').rarity('Epic').maxStackSize(64)
  event.create('crystal_tiered').displayName("\u00A76神铸晶").tooltip('\u00A76某些不可修复装备的品质改造材料').tooltip('\u00A76放在左侧插槽').tooltip('\u00A76不是所有装备都可以使用！').tooltip('\u00A76盾、弓、弩都需要这个锻造品质！').rarity('Epic').maxStackSize(64)
})