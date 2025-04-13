onEvent('recipes', event => {
event.remove({output:'gobber2:gobber2_ring_ascent'})
event.remove({output:'gobber2:gobber2_ring_swiftness'})
event.remove({output:'gobber2:gobber2_ring_above'})
event.remove({output:'gobber2:gobber2_ring'})
event.remove({output:'gobber2:gobber2_ring_farmer'})
event.remove({output:'gobber2:gobber2_ring_sunshine'})

event.remove({output:'gobber2:gobber2_medallion_hero'})
event.remove({output:'gobber2:gobber2_medallion_healing'})

event.remove({output:'gobber2:gobber2_medallion'})
event.remove({output:'gobber2:gobber2_medallion_breathing'})

event.remove({output:'gobber2:gobber2_helmet'})
event.remove({output:'gobber2:gobber2_chestplate'})
event.remove({output:'gobber2:gobber2_leggings'})
event.remove({output:'gobber2:gobber2_boots'})

event.remove({output:'gobber2:gobber2_helmet_nether'})
event.remove({output:'gobber2:gobber2_chestplate_nether'})
event.remove({output:'gobber2:gobber2_leggings_nether'})
event.remove({output:'gobber2:gobber2_boots_nether'})

event.remove({output:'gobber2:gobber2_helmet_end'})
event.remove({output:'gobber2:gobber2_chestplate_end'})
event.remove({output:'gobber2:gobber2_leggings_end'})
event.remove({output:'gobber2:gobber2_boots_end'})

event.shaped('gobber2:gobber2_medallion_healing', [
  ' C ',
  'BAB',
  ' C '
  ], 
    {
  A: 'gobber2:gobber2_medallion',
  B: 'minecraft:glistering_melon_slice',
  C: 'minecraft:golden_apple'
  }),
event.smithing('gobber2:gobber2_medallion_healing2', 'gobber2:gobber2_medallion_healing', 'gobber2:gobber2_medallion_nether'),
event.custom({
  "type": "alloy_forgery:forging",
  "inputs": [
    {
      "item": "minecraft:diamond_helmet",
    },
    {
      "item": "gobber2:gobber2_ingot",
    }
  ],
  "output": {
    "id": "gobber2:gobber2_helmet",
      "count": 1
  },
  "min_forge_tier": 2,
  "fuel_per_tick": 150
})

event.custom({
  "type": "alloy_forgery:forging",
  "inputs": [
    {
      "item": "minecraft:diamond_chestplate",
    },
    {
      "item": "gobber2:gobber2_ingot",
      "count": 3
    }
  ],
  "output": {
    "id": "gobber2:gobber2_chestplate",
      "count": 1
  },
  "min_forge_tier": 2,
  "fuel_per_tick": 200
})

event.custom({
  "type": "alloy_forgery:forging",
  "inputs": [
    {
      "item": "minecraft:diamond_leggings",
    },
    {
      "item": "gobber2:gobber2_ingot",
      "count": 2
    }
  ],
  "output": {
    "id": "gobber2:gobber2_leggings",
      "count": 1
  },
  "min_forge_tier": 2,
  "fuel_per_tick": 150
})

event.custom({
  "type": "alloy_forgery:forging",
  "inputs": [
    {
      "item": "minecraft:diamond_boots",
    },
    {
      "item": "gobber2:gobber2_ingot",
    }
  ],
  "output": {
    "id": "gobber2:gobber2_boots",
      "count": 1
  },
  "min_forge_tier": 2,
  "fuel_per_tick": 150
})

event.custom({
  "type": "alloy_forgery:forging",
  "inputs": [
    {
      "item": "gobber2:gobber2_helmet",
    },
    {
      "item": "gobber2:gobber2_ingot_nether",
    }
  ],
  "output": {
    "id": "gobber2:gobber2_helmet_nether",
      "count": 1
  },
  "min_forge_tier": 3,
  "fuel_per_tick": 230
})

event.custom({
  "type": "alloy_forgery:forging",
  "inputs": [
    {
      "item": "gobber2:gobber2_chestplate",
    },
    {
      "item": "gobber2:gobber2_ingot_nether",
      "count": 3
    }
  ],
  "output": {
    "id": "gobber2:gobber2_chestplate_nether",
      "count": 1
  },
  "min_forge_tier": 3,
  "fuel_per_tick": 260
})

event.custom({
  "type": "alloy_forgery:forging",
  "inputs": [
    {
      "item": "gobber2:gobber2_leggings",
    },
    {
      "item": "gobber2:gobber2_ingot_nether",
      "count": 2
    }
  ],
  "output": {
    "id": "gobber2:gobber2_leggings_nether",
      "count": 1
  },
  "min_forge_tier": 3,
  "fuel_per_tick": 230
})

event.custom({
  "type": "alloy_forgery:forging",
  "inputs": [
    {
      "item": "gobber2:gobber2_boots",
    },
    {
      "item": "gobber2:gobber2_ingot_nether",
    }
  ],
  "output": {
    "id": "gobber2:gobber2_boots_nether",
      "count": 1
  },
  "min_forge_tier": 3,
  "fuel_per_tick": 230
})

event.custom({
  "type": "alloy_forgery:forging",
  "inputs": [
    {
      "item": "gobber2:gobber2_helmet_nether",
    },
    {
      "item": "gobber2:gobber2_ingot_end",
    }
  ],
  "output": {
    "id": "gobber2:gobber2_helmet_end",
      "count": 1
  },
  "min_forge_tier": 4,
  "fuel_per_tick": 330
})

event.custom({
  "type": "alloy_forgery:forging",
  "inputs": [
    {
      "item": "gobber2:gobber2_chestplate_nether",
    },
    {
      "item": "gobber2:gobber2_ingot_end",
      "count": 3
    }
  ],
  "output": {
    "id": "gobber2:gobber2_chestplate_end",
      "count": 1
  },
  "min_forge_tier": 4,
  "fuel_per_tick": 360
})

event.custom({
  "type": "alloy_forgery:forging",
  "inputs": [
    {
      "item": "gobber2:gobber2_leggings_nether",
    },
    {
      "item": "gobber2:gobber2_ingot_end",
      "count": 2
    }
  ],
  "output": {
    "id": "gobber2:gobber2_leggings_end",
      "count": 1
  },
  "min_forge_tier": 4,
  "fuel_per_tick": 330
})

event.custom({
  "type": "alloy_forgery:forging",
  "inputs": [
    {
      "item": "gobber2:gobber2_boots_nether",
    },
    {
      "item": "gobber2:gobber2_ingot_end",
    }
  ],
  "output": {
    "id": "gobber2:gobber2_boots_end",
      "count": 1
  },
  "min_forge_tier": 4,
  "fuel_per_tick": 330
})

  event.custom({
     type: 'alloy_forgery:forging',
     'inputs': [
       {
         'item':'gobber2:gobber2_ingot'
       } 
     ],
     'output': {
       'id': 'gobber2:gobber2_ring',
       'count': 1
     },
     'min_forge_tier': 2,
     'fuel_per_tick': 50
   })

 event.shaped(Item.of('gobber2:gobber2_ring_farmer'),[
    'ABC',
    'DEF',
    'GHI'
],{
    A:'gobber2:gobber2_gooey_apple',
    B:'minecraft:glow_berries',
    C:'minecraft:carrot',
    D:'minecraft:sweet_berries',
    E:'gobber2:gobber2_ring',
    F:'minecraft:wheat_seeds',
    G:'minecraft:sugar_cane',
    H:'minecraft:kelp',
    I:'minecraft:beetroot'
 })

 event.shaped(Item.of('gobber2:gobber2_ring_sunshine'),[
    'CBC',
    'CDC',
    'CAC'
],{
    A:'minecraft:glowstone',
    B:'minecraft:trident',
    C:'minecraft:fire_charge',
    D:'gobber2:gobber2_ring'
 })

 event.shaped(Item.of('gobber2:gobber2_ring_return'),[
    'ACA',
    'ADA',
    'ABA'
],{
    A:'minecraft:ender_pearl',
    B:'minecraft:respawn_anchor',
    C:'#minecraft:beds',
    D:'gobber2:gobber2_ring'
 })

 event.shaped(Item.of('gobber2:gobber2_ring_ascent'),[
  'ACA',
  'EDE',
  'ABA'
],{
  A:'minecraft:chorus_fruit',
  B:'minecraft:diamond',
  C:'minecraft:shulker_shell',
  D:'gobber2:gobber2_ring',
  E:'gobber2:gobber2_glass'
})
event.shaped(Item.of('gobber2:gobber2_special_item'),[
  'BBB',
  'BAB',
  'BBB'
],{
  A:'gobber2:gobber2_glob_end',
  B:'waystones:warp_dust'
})

  event.custom({
     type: 'alloy_forgery:forging',
     'inputs': [
       {
         'item':'gobber2:gobber2_ingot'
       },
       {
        'item':'gobber2:gobber2_ingot'
      } 
      ],
     'output': {
       'id': 'gobber2:gobber2_medallion',
       'count': 1
     },
     'min_forge_tier': 2,
     'fuel_per_tick': 50
   })

 event.shaped(Item.of('gobber2:gobber2_medallion_breathing'),[
    'ABA',
    'ACA',
    'ABA'
],{
    A:'environmentz:polar_bear_fur',
    B:'minecraft:pufferfish',
    C:'gobber2:gobber2_medallion'
})

})

//Gobber ring and medallion

onEvent('recipes', event => {
  event.remove({output:'gobber2:gobber2_medallion_nether'})
  event.remove({output:'gobber2:gobber2_medallion_healing2'})

  event.remove({output:'gobber2:gobber2_ring_airwalking'})
  event.remove({output:'gobber2:gobber2_ring_nether'})
  event.remove({output:'gobber2:gobber2_ring_strength'})
  event.remove({output:'gobber2:gobber2_ring_luck'})

  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'gobber2:gobber2_ingot_nether'
      } 
    ],
    'output': {
      'id': 'gobber2:gobber2_ring_nether',
      'count': 1
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 70
  })
  
  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'gobber2:gobber2_ingot_nether'
      }, 
      {
        'item':'gobber2:gobber2_ingot_nether'
      }
    ],
    'output': {
      'id': 'gobber2:gobber2_medallion_nether',
      'count': 1
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 70
  })

  event.shaped(Item.of('gobber2:gobber2_ring_luck'),[
    'AAA',
    'ABA',
    'AAA'
],{
    A:'things:luck_of_the_irish',
    B:'gobber2:gobber2_ring_nether'
  })
})
//Nether Ring and Medallion


onEvent('recipes', event => {
  event.remove({output:'gobber2:gobber2_links_end'})
  event.remove({output:'gobber2:gobber2_ring_end'})
  event.remove({output:'gobber2:gobber2_ring_dismissal'})
  event.remove({output:'gobber2:gobber2_ring_stealth'})
  event.remove({output:'gobber2:gobber2_ring_explorer'})
  event.remove({output:'gobber2:gobber2_ring_blink'})
  event.remove({output:'gobber2:gobber2_ring_teleport'})

  event.remove({output:'gobber2:gobber2_medallion_end'})
  event.shaped(Item.of('gobber2:gobber2_ring_explorer'),[
    'BBB',
    'BAB',
    'BBB'
],{
    A:'gobber2:gobber2_ring_end',
    B:'gobber2:gobber2_special_item'
  }),
  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'gobber2:gobber2_ingot_end'
      } 
    ],
    'output': {
      'id': 'gobber2:gobber2_ring_end',
      'count': 1
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 100
  })

  event.shaped(Item.of('gobber2:gobber2_ring_blink'),[
    'BAB',
    'BCB',
    'DDD'
],{
    A:'#hookshot:hookshots',
    B:'minecraft:ender_eye',
    C:'gobber2:gobber2_ring_end',
    D:'minecraft:ender_pearl'
  })

  event.shaped(Item.of('gobber2:gobber2_ring_teleport'),[
    'BBB',
    'ACD',
    'BBB'
],{
    A:'waystones:waystone',
    B:'waystones:warp_dust',
    C:'gobber2:gobber2_ring_end',
    D:'waystones:warp_scroll'
  })

  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'gobber2:gobber2_ingot_end'
      }, 
      {
        'item':'gobber2:gobber2_ingot_end'
      }
    ],
    'output': {
      'id': 'gobber2:gobber2_medallion_end',
      'count': 1
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 70
  })

})

onEvent('recipes', event => {

  event.remove({id:'gobber2:dragon_star'})
  event.remove({id:'bosses_of_mass_destruction:brimstone_nectar'})
  event.remove({id:'gobber2:dragon_elytra'})

  event.shaped('gobber2:dragon_star', [
      'ABA',
      'CDC',
      'ECE'
    ], {
      A:'bosses_of_mass_destruction:ancient_anima',
      B:'bosses_of_mass_destruction:blazing_eye',
      C:'mythicmetals:celestium_ingot',
      D:'minecraft:nether_star',
      E:'minecraft:dragon_egg'

    }).id('infinity:dragon_star')

  
    event.shaped('gobber2:dragon_elytra', [
      'ABA',
      'CDC',
      'ECE'
    ], {
      A:'bosses_of_mass_destruction:void_thorn',
      B:'bosses_of_mass_destruction:blazing_eye',
      C:'botania:gaia_ingot',
      D:Item.of('soulsweapons:chaos_robes').ignoreNBT(),
      E:'minecraft:dragon_egg'

    }).id('infinity:dragon_elytra')

    event.shapeless('bosses_of_mass_destruction:brimstone_nectar',['mythicmetals:unobtainium','mythicmetals:hallowed_ingot','gobber2:gobber2_ingot_nether','minecraft:honeycomb'])

})

onEvent('recipes', event => {
  event.custom({
     type: 'alloy_forgery:forging',
     'inputs': [
       {
         'item':'gobber2:gobber2_glob'
       },
       {
         'item':'minecraft:diamond'
       },
       {
        'item':'mythicmetals:kyber_ingot'
       },
       {
        'item':'botania:manasteel_ingot'
       },
       {
        'item':'mythicmetals:durasteel_ingot'
       },
     ],
     'output': {
       'id': 'gobber2:gobber2_ingot',
       'count': 2
     },
     'overrides': {
     "3": {
       "id": 'gobber2:gobber2_ingot',
       "count": 3
    },
     "4": {
       "id": 'gobber2:gobber2_ingot',
       "count": 4
    },
    "5+": {
      "id": 'gobber2:gobber2_ingot',
      "count": 6
   }
     },
     'min_forge_tier': 2,
     'fuel_per_tick': 60
   })

   event.custom({
      type: 'alloy_forgery:forging',
      'inputs': [
        {
          'item':'gobber2:gobber2_ingot'
        },
        {
          'item':'gobber2:gobber2_ingot'
        },
        {
          'item':'gobber2:gobber2_glob_nether'
        },
        {
          'item':'minecraft:netherite_scrap'
        },
        {
          'item':'mythicmetals:palladium_ingot'
        },
        {
          'item':'mythicmetals:palladium_ingot'
        },
        {
          'item':'mythicmetals:stormyx_ingot'
        },
        {
        'item':'mythicmetals:carmot_ingot'
        },
      ],
      'output': {
        'id': 'gobber2:gobber2_ingot_nether',
        'count': 1
      },
      'overrides': {
        "4": {
          "id": 'gobber2:gobber2_ingot_nether',
          "count": 2
       },
        "5+": {
          "id": 'gobber2:gobber2_ingot_nether',
          "count": 4
       }
        },
      'min_forge_tier': 3,
      'fuel_per_tick': 100
    })

    event.custom({
      type: 'alloy_forgery:forging',
      'inputs': [
        {
          'item':'gobber2:gobber2_glob_end'
        },
        {
          'item':'minecraft:chorus_flower'
        },
        {
          'item':'gobber2:gobber2_ingot_nether'
        },
        {
          'item':'gobber2:gobber2_ingot_nether'
        },
        {
           'item':'purpeille:smoldered_purpeille_ingot'
         },
         {
          'item':'minecraft:nether_star'
        },
      ],
      'output': {
        'id': 'gobber2:gobber2_ingot_end',
        'count': 4
      },
      'overrides': {
        "5+": {
          "id": 'gobber2:gobber2_ingot_end',
          "count": 6
       }
        },
      'min_forge_tier': 4,
      'fuel_per_tick': 150
    })

    event.remove({output:'gobber2:gobber2_ingot'})
    event.remove({output:'gobber2:gobber2_ingot_nether'})
    event.remove({output:'gobber2:gobber2_ingot_end'})
  })