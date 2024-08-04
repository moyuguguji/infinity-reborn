onEvent('item.registry', event =>{
    event.create('kreska', 'pickaxe')
    .displayName("§f直镐")
    .tier('kreska')
    .rarity(Rarity.EPIC)
    .tooltip('\u00A76\u00A7l✦✦✦✦·圣物')
    .tooltip('\u00A7f压迫点 Prime：+165%近战攻击伤害')
    .tooltip('\u00A7f剑风 Prime：+3攻击范围')
    .tooltip('\u00A72热病打击 Prime：+165%毒素伤害')
    .tooltip('\u00A7c熔岩冲击：+90%火焰伤害')
    .tooltip('\u00A7b北风：+90%冰冻伤害')
    .tooltip('\u00A7a治愈归复：攻击时有概率回血')
    .tooltip('')
    .tooltip('\u00A7f你给路达哟：右键传送到10米外并给予速度效果 冷却5秒')
    .tooltip('\u00A7f忘关就是开？：赋予透视生物效果')
    .tooltip('\u00A7e点石成“金”：挖掘矿物有概率掉落神话矿粒')
    .tooltip('')
  })

onEvent('item.registry.tool_tiers', event => {
    event.add('kreska', tier => {
        tier.uses = 3000
        tier.speed = 22.0
        tier.attackDamageBonus = 9.0
        tier.level = 5
        tier.enchantmentValue = 30
        tier.repairIngredient = 'minecraft:netherite_ingot'
    })
  })