
onEvent('item.registry', event => {
    event.create('shining_star').rarity(Rarity.UNCOMMON).maxStackSize(1)

    event.create('infinity_sword','sword').
    attackDamageBonus(9999996)
    .maxStackSize(1)
    .speedBaseline(-2)
    .maxDamage(1000000)
    .rarity(Rarity.UNCOMMON)
    .tooltip('\u00A77游戏结束')
    .tooltip('\u00A7e潜行使用/kill攻击')

    event.create('infinity_sword_a')
    .maxStackSize(1)
    .tooltip('\u00A77无限支配之剑的部件之一')
    .tooltip('\u00A76但哪怕是一个部件也有非常恐怖的力量。')
    .rarity(Rarity.UNCOMMON)

    event.create('infinity_sword_b')
    .maxStackSize(1)
    .tooltip('\u00A77无限支配之剑的部件之一')
    .tooltip('\u00A7c没有剑柄的剑刃似乎无法空手掌握，不然会被其上附着的力量轻易反噬。')
    .rarity(Rarity.UNCOMMON)
    })
