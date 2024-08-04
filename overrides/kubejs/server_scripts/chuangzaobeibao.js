onEvent('recipes', event => {
  event.shaped('inmis:creative_backpack', [
    'DCD',
    'BAB',
    'DED'
  ],
    {
      A: 'inmis:endless_backpack',
      B: 'kubejs:shining_star',
      C: 'dankstorage:dank_7',
      D: 'inmis:withered_backpack',
      E: 'expandedstorage:netherite_chest'
    })

  event.shaped('dankstorage:dock', [
    'AAA',
    'A A',
    'AAA'
  ],
    {
      A: 'dankstorage:dank_1'
    })

  event.shaped('kubejs:sao_di', [
    '  A',
    'BC ',
    'BB '
  ],
    {
      A: 'minecraft:stick',
      B: 'minecraft:hay_block',
      C: 'minecraft:redstone'
    })
    event.shaped('soaringstructures2:heavenly_flower', [
      ' A ',
      'ABA',
      ' A '
    ],
      {
        A: 'soaringstructures2:bunch_heavenly_petals',
        B: 'minecraft:wheat_seeds'
      })
      event.shaped('skylorlib:golden_seeds_item', [
        'AAA',
        'ABA',
        'AAA'
      ],
        {
          A: 'spectrum:pure_gold',
          B: 'minecraft:wheat_seeds'
        })
})
