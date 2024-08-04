onEvent('recipes', event => {
    event.custom({
        "type": "spectrum:midnight_solution_converting",
            "ingredient": {
              "item": "spirit:soul_crystal"
            },
            "result" : {
              "item": "spirit:soul_crystal",
              "count": 1
            }
          }    
      ),
      event.custom({
        "type": "spectrum:midnight_solution_converting",
            "ingredient": {
              "item": "minecraft:enchanted_book"
            },
            "result" : {
              "item": "minecraft:book",
              "count": 1
            }
          }    
      ),
      event.custom({
        "type": "spectrum:liquid_crystal_converting",
            "ingredient": {
              "item": "mcdw:sword_the_starless_night"
            },
            "result" : {
              "item": "mcdw:sword_obsidian_claymore",
              "count": 1
            }
          }    
      )
      event.custom({
        "type": "spectrum:midnight_solution_converting",
            "ingredient": {
              "item": "things:agglomeration"
            },
            "result" : {
              "item": "things:empty_agglomeration",
              "count": 1
            }
          }    
      )
}
)