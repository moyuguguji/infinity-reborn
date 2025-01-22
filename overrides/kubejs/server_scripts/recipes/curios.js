onEvent('recipes', event => {
  event.shapeless('kubejs:spectral_silt', [Item.of('kubejs:disintegration_tablet').ignoreNBT(),'#artifacts:artifacts' ])
  .keepIngredient('kubejs:disintegration_tablet')

  .keepIngredient('kubejs:disintegration_tablet')
  event.shapeless('kubejs:spectral_silt', [Item.of('kubejs:disintegration_tablet').ignoreNBT(),'@ringsofascension' ])
  .keepIngredient('kubejs:disintegration_tablet')

  .keepIngredient('kubejs:disintegration_tablet')
  event.shapeless('kubejs:spectral_silt', [Item.of('kubejs:disintegration_tablet').ignoreNBT(),'@utilities' ])
  .keepIngredient('kubejs:disintegration_tablet')
  event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:infinity_book"}'),['minecraft:diamond','minecraft:book']).id('kubejs:infinity_book')
})
