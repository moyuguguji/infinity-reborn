onEvent('rei.hide.items', event => {
    event.hide('mythicmetals:copper_sword','mythicmetals:copper_shovel','mythicmetals:copper_axe','mythicmetals:copper_hoe','mythicmetals:copper_pickaxe')
    event.hide('mythicmetals:copper_helmet','mythicmetals:copper_chestplate','mythicmetals:copper_leggings','mythicmetals:copper_boots')
    event.hide('twilightforest:uncrafting_table')
    event.hide("minecraft:armor_stand")
    event.hide('botania:auto_crafting_halo','botania:crafting_halo')
    event.hide('minecraft:wooden_shovel','minecraft:wooden_pickaxe','minecraft:wooden_axe','minecraft:wooden_hoe','minecraft:wooden_sword')
    event.hide('minecraft:stone_sword','minecraft:stone_shovel','minecraft:stone_pickaxe','minecraft:stone_axe','minecraft:stone_hoe'),
    event.hide('botania:crafting_halo','botania:auto_crafting_halo','twilightforest:block_and_chain','victus:diamond_heart_aspect','twilightforest:uncrafting_table')
  })
  onEvent("item.tooltip", tooltip => {
    tooltip.addAdvanced('botania:crystal_bow', (item, advanced, text) => {
        if (item.hasNBT() && item.nbt['CustomModelData'] == 1781) {
            text.add(2,"古:你怎么知道我两发抽到了小豆泥隐藏")
            text.add(3, "来自赞助者-xuexiye")
        }
    })
  })