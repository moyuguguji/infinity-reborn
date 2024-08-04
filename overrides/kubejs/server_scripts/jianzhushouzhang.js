onEvent('recipes', event => {
    event.shaped('wands:stone_wand', [
        '  B',
        ' A ',
        'A  '
    ],
        {
            A: 'staffofbuilding:stone_builder_staff',
            B: 'minecraft:stone'
        })
    event.shaped('wands:iron_wand', [
        '  B',
        ' A ',
        'A  '
    ],
        {
            A: 'staffofbuilding:iron_builder_staff',
            B: 'minecraft:iron_block'
        })

    event.shaped('wands:diamond_wand', [
        '  B',
        ' A ',
        'A  '
    ],
        {
            A: 'staffofbuilding:diamond_builder_staff',
            B: 'minecraft:diamond_block'
        })
    event.shaped('dummmmmmy:target_dummy_placer', [
        ' A ',
        'ACA',
        ' B '
    ],
        {
            A: 'minecraft:hay_block',
            B: 'gateofbabylon:extended_stick',
            C: 'minecraft:redstone_block'
        })
    event.smithing('wands:netherite_wand', Item.of('wands:diamond_wand').ignoreNBT(), 'minecraft:netherite_block')
})
