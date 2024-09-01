onEvent('recipes', event => {
  event.shaped('endrem:cryptic_eye', [
    'BBB',
    'BAB',
    'BBB'
  ],
    {
      A: 'minecraft:ender_eye',
      B: 'xps:xp_dust',
    })
})
onEvent('recipes', event => {
  event.shaped('endrem:cold_eye', [
    'BCB',
    'CAC',
    'BCB'
  ],
    {
      A: 'minecraft:ender_eye',
      B: 'mcda:upgrade_core_frost',
      C: 'victus:icy_heart_aspect',
    })
})
onEvent('recipes', event => {
  event.shaped('endrem:rogue_eye', [
    'BBB',
    'BAB',
    'BBB'
  ],
    {
      A: 'minecraft:ender_eye',
      B: 'mcda:gemstone_red',
    })
})
onEvent('recipes', event => {
  event.shaped('endrem:old_eye', [
    'CBC',
    'BAB',
    'CBC'
  ],
    {
      A: 'minecraft:ender_eye',
      B: 'victus:golden_heart_aspect',
      C: 'mcda:upgrade_core_golden',
    })
})
onEvent('recipes', event => {
  event.shaped('endrem:undead_eye', [
    'CDC',
    'BAB',
    'CDC'
  ],
    {
      A: 'minecraft:ender_eye',
      B: 'mcda:upgrade_core_wither',
      C: 'mcda:upgrade_core_soul',
      D: 'mcda:glut_charm',
    })
})
onEvent('recipes', event => {
  event.shaped('endrem:guardian_eye', [
    'CDC',
    'BAB',
    'EDE'
  ],
    {
      A: 'minecraft:ender_eye',
      B: 'mythicmetals:aquarium_pearl',
      C: 'minecraft:heart_of_the_sea',
      D: Item.of('minecraft:trident').ignoreNBT(),
      E: 'mcda:upgrade_core_oceanic',
    })
})
onEvent('recipes', event => {
  event.shaped('minecraft:dragon_egg', [
    ' B ',
    'BAB',
    ' B '
  ],
    {
      A: 'victus:draconic_heart_aspect',
      B: 'dragonloot:dragon_scale',
    })
})
onEvent('recipes', event => {
  event.shaped('majobroom:stocking', [
    'D D',
    'ACA',
    'BCB'
  ],
    {
      A: 'minecraft:purple_wool',
      B: 'minecraft:pink_wool',
      C: 'minecraft:gold_ingot',
      D: 'minecraft:white_wool'
    })
})
onEvent('recipes', event => {
  event.shaped('minecraft:stone_pickaxe', [
    'BBB',
    ' A ',
    ' A '
  ],
    {
      A: 'minecraft:stick',
      B: 'kubejs:shi_kuai',
    })
})
onEvent('recipes', event => {
  event.shaped('kubejs:yan_qiu', [
    ' B ',
    'ACA',
    'CCC'
  ],
    {
      A: 'minecraft:end_rod',
      B: 'minecraft:dragon_egg',
      C: 'minecraft:crying_obsidian'
    })
})
onEvent('recipes', event => {
  event.shaped('kubejs:hei_shi', [
    'ABA',
    'BCB',
    'ABA'
  ],
    {
      A: 'adventurez:stone_holder_block',
      B: 'adventurez:gilded_stone',
      C: 'minecraft:netherite_block'
    })
})
onEvent('recipes', event => {
  event.shaped('3x nomadbooks:grass_page', [
    'AB ',
    'BB ',
    '   '
  ],
    {
      A: 'minecraft:lime_dye',
      B: 'minecraft:paper',
    })
})