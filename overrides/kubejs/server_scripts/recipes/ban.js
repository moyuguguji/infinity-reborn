onEvent('recipes', event =>{
    event.remove({output:'soulsweapons:lord_soul_red'})
    event.remove({output:'soulsweapons:crimson_obsidian'})
    event.remove({output:'soulsweapons:moonstone_ring'})
    event.remove({output:'soulsweapons:chaos_orb'})

    event.remove({output:'darkutils:charm_portal'})
    event.remove({output:'minecraft:flint'})

    event.remove({output:'betterend:aeternium_shovel_head'})
    event.remove({output:'betterend:aeternium_pickaxe_head'})
    event.remove({output:'betterend:aeternium_axe_head'})
    event.remove({output:'betterend:aeternium_hoe_head'})

    event.remove({output:'mythicmetals:copper_sword'})
    event.remove({output:'mythicmetals:copper_shovel'})
    event.remove({output:'mythicmetals:copper_axe'})
    event.remove({output:'mythicmetals:copper_hoe'})
    event.remove({output:'mythicmetals:copper_pickaxe'})

    event.remove({output:'mythicmetals:copper_helmet'})
    event.remove({output:'mythicmetals:copper_chestplate'})
    event.remove({output:'mythicmetals:copper_leggings'})
    event.remove({output:'mythicmetals:copper_boots'})

    event.remove({output:'minecraft:wooden_shovel'})
    event.remove({output:'minecraft:wooden_pickaxe'})
    event.remove({output:'minecraft:wooden_axe'})
    event.remove({output:'minecraft:wooden_hoe'})

    event.remove({output:'minecraft:stone_shovel'})
    event.remove({output:'minecraft:stone_pickaxe'})
    event.remove({output:'minecraft:stone_axe'})
    event.remove({output:'minecraft:stone_hoe'})

    event.remove({output:'kibe:angel_ring'})
    event.remove({output:'minecraft:elytra'})
    event.remove({output:'icarus:flandres_wings'})

    event.remove({output:'twilightforest:uncrafting_table'})
    event.remove({type:"twilightforest:uncrafting"})
    
    event.remove({output:'majobroom:broom_item'})
    event.remove({output:'explorerscompass:explorerscompass'})

    event.remove({output:'kibe:iron_spikes'})

    event.remove({output:'things:hardening_catalyst'})
    
    event.remove({output:'spectrum:enchanter'})
    event.remove({output:'spectrum:compacting_chest'})

    event.remove({output: 'victus:diamond_heart_aspect'})
    event.remove({output: 'victus:golden_heart_aspect'})
    
    event.remove({output:'botania:terra_sword'})
    event.remove({output:'botania:thunder_sword'})
    event.remove({output:'botania:star_sword'})
    event.remove({output:'botania:balance_cloak'})
    
    event.remove({output:'morevillagers:purpur_altar'})
    event.remove({output:'emerald_tools:copper_treeaxe'})
    event.remove({output:'emerald_tools:emerald_helmet'})
    event.remove({output:'emerald_tools:emerald_chestplate'})
    event.remove({output:'emerald_tools:emerald_leggings'})
    event.remove({output:'emerald_tools:emerald_boots'})

    event.remove({output:'alloy_forgery:end_stone_bricks_forge_controller'})
    event.remove({output:'alloy_forgery:adamantite_block_forge_controller'})
    event.remove({output:'alloy_forgery:unobtainium_block_forge_controller'})

    event.remove({output:'the_bumblezone:honey_compass'})
    event.remove({output:'spectrum:celestial_pocketwatch'})
    event.remove({output:'editenchanting:enchantment_edit_table'})
    event.remove({output:'terrarianslimes:slime_crown'})
    //event.remove({output:'terrarianslimes:gold_crown'})

    event.remove({output:'xps:soul_copper_ingot'})

    event.remove({output:'botania:crafting_halo'})
    event.remove({output:'botania:loonium'})
    event.remove({output:'botania:keep_ivy'})
    event.remove({output:'botania:entropinnyum'})
    event.remove({output:'botania:auto_crafting_halo'})
    event.remove({output: 'additionaladditions:fried_egg', type: 'minecraft:smoking'})
    event.remove({output: 'farmersdelight:fried_egg', type: 'minecraft:smelting'})
    event.remove({output:'betteranimalsplus:fried_egg'})
    event.remove({output:'twilightforest:block_and_chain'})
    event.remove({output:'soulsweapons:blackstone_pedestal'})
    event.remove({output:'yigd:grave'})
    event.remove({output:'scout:satchel'})
    event.remove({output:'mcdw:bow_void_bow'})
    event.remove({output:'mcdw:bow_call_of_the_void'})
    event.remove({output:'scout:upgraded_satchel'})
    event.remove({mod: 'wands'})
    event.remove({output: 'travelersbackpack:lapis'})
    event.smelting('betteranimalsplus:fried_egg'/* 输出物品 */, '#forge:eggs'/* 输入物品 */)
})


