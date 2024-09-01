onEvent('recipes', event => {
    event.shapeless('cacao:pressed_cocoa_cone', ['croptopia:food_press', 'cacao:cacao_mass_bucket'])
    event.shapeless('croptopia:beef_jerky', ['croptopia:salt', 'minecraft:beef'])
    event.shapeless('croptopia:pork_jerky', ['croptopia:salt', 'minecraft:porkchop'])
  })