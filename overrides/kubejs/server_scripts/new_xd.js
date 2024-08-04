onEvent('entity.hurt', event => {
  let target = event.getEntity()
  let player = event.getSource().getPlayer()
  let damage = event.getDamage()
  if (player != null) {
    let mainItem = player.getHeldItem(MAIN_HAND)
    if (mainItem == 'kubejs:mu_jian') {
      let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
      target.attack("minecart:player", result * 0.5)
    }
    if (mainItem == 'kubejs:mu_jian_seven') {
      let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
      target.attack("minecart:player", result * 0.25)
    }
    if (mainItem == 'kubejs:yuan_mu_jian') {
      let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
      target.attack("minecart:player", result * 2.0)
    }
    if (mainItem == 'kubejs:yuan_mu_jian_seven') {
      let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
      target.attack("minecart:player", result * 1.0)
    }
    if (mainItem == 'kubejs:yuan_mu_jian_one') {
      let result = event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor get`)
      target.attack("minecart:player", result * 0.5)
    }
  }
})
onEvent('recipes', e => {
  e.shaped('kubejs:yuan_mu_jian_one', [
    ' A ',
    ' A ',
    ' B '
  ],
    {
      A: 'kubejs:mu_ban',
      B: 'minecraft:stick',
    })
  e.shapeless('4x kubejs:mu_ban', ['kubejs:yuan_mu'])
  e.shapeless('enchantablespike:diamond_spikes', ['darkutils:damage_plate_player'])
  e.shapeless('darkutils:damage_plate_player', ['enchantablespike:diamond_spikes'])
  e.custom({
    type: "spectrum:fusion_shrine",
    "time": 50,
    "experience": 10.0,
    "ingredients": [
      {
        "item": 'minecraft:wooden_sword',//太古合金剑
        "count": 1
      },
      {
        "item": 'minecraft:wooden_sword',//天体块
        "count": 1
      },
      {
        "item": 'minecraft:wooden_sword',//灵魂之骨
        "count": 1
      },
      {
        "item": 'minecraft:wooden_sword',//闪耀之星
        "count": 1
      },
      {
        "item": 'minecraft:wooden_sword',//龙之星
        "count": 1
      },
      {
        "item": 'minecraft:wooden_sword',//流星碎片
        "count": 1
      },
      {
        "item": 'minecraft:wooden_sword',//流星碎片
        "count": 1
      }
    ],
    "result": {
      "item": 'kubejs:mu_jian_seven'
    }
  })
  e.custom({
    type: "spectrum:fusion_shrine",
    "time": 50,
    "experience": 10.0,
    "ingredients": [
      {
        "item": 'kubejs:yuan_mu_jian_one',//太古合金剑
        "count": 1
      },
      {
        "item": 'kubejs:yuan_mu_jian_one',//天体块
        "count": 1
      },
      {
        "item": 'kubejs:yuan_mu_jian_one',//灵魂之骨
        "count": 1
      },
      {
        "item": 'kubejs:yuan_mu_jian_one',//闪耀之星
        "count": 1
      },
      {
        "item": 'kubejs:yuan_mu_jian_one',//龙之星
        "count": 1
      },
      {
        "item": 'kubejs:yuan_mu_jian_one',//流星碎片
        "count": 1
      },
      {
        "item": 'kubejs:yuan_mu_jian_one',//流星碎片
        "count": 1
      }
    ],
    "result": {
      "item": 'kubejs:yuan_mu_jian_seven'
    }
  })
  e.smithing(Item.of('kubejs:yuan_mu_jian'), Item.of('kubejs:yuan_mu_jian_seven').ignoreNBT(), Item.of('kubejs:yuan_mu_jian_seven').ignoreNBT())
  e.smithing(Item.of('kubejs:mu_jian'), Item.of('kubejs:mu_jian_seven').ignoreNBT(), Item.of('kubejs:mu_jian_seven').ignoreNBT())
})
onEvent("entity.spawned", event => {
  let targetTypes = [
    "minecraft:wither",
    "soulsweapons:chaos_monarch",
    "minecraft:ender_dragon",
    "twilightforest:naga",
    "twilightforest:lich",
    "twilightforest:alpha_yeti",
    "twilightforest:minoshroom",
    "twilightforest:snow_queen",
    "twilightforest:hydra",
    "twilightforest:ur_ghast",
    "soulsweapons:moonknight",
    "soulsweapons:accursed_lord_boss",
    "soulsweapons:draugr_boss",
    "adventurez:stone_golem",
    "adventurez:void_shadow",
    "adventurez:the_eye",
    "whisperwoods:hirschgeist",
    "soulsweapons:night_shade",
    "terrarianslimes:king_slime",
    "bosses_of_mass_destruction:lich",
    "bosses_of_mass_destruction:void_blossom",
    "bosses_of_mass_destruction:gauntlet",
    "bosses_of_mass_destruction:obsidilith",
    "botania:doppleganger",
    "soulsweapons:returning_knight",
    "twilightforest:knight_phantom"
  ]
  let entity = event.getEntity()
  if (entity.monster || entity.type == "whisperwoods:hirschgeist") {
    if (targetTypes.includes(entity.type)) {
      //entity.setMaxHealth(entity.maxHealth*(0.5))
      switch (entity.type) {
        case "minecraft:wither":
          event.server.tell("\u00A75凋零已经苏醒!")
          break;
        case "soulsweapons:chaos_monarch":
          event.server.tell("\u00A75混沌君主已经苏醒!")
          break;
        case "twilightforest:naga":
          event.server.tell("\u00A75娜迦已经苏醒!")
          break;
        case "minecraft:ender_dragon":
          event.server.tell("\u00A75末影龙已经苏醒!")
          break;
        case "twilightforest:lich":
          event.server.tell("\u00A75巫妖已经苏醒!")
          break;
        case "twilightforest:alpha_yeti":
          event.server.tell("\u00A75雪怪首领已经苏醒!")
          break;
        case "twilightforest:minoshroom":
          event.server.tell("\u00A75米诺菇已经苏醒!")
          break;
        case "twilightforest:snow_queen":
          event.server.tell("\u00A75冰雪女王已经苏醒!")
          break;
        case "twilightforest:hydra":
          event.server.tell("\u00A75九头蛇已经苏醒!")
          break;
        case "twilightforest:ur_ghast":
          event.server.tell("\u00A75暮初恶魂已经苏醒!")
          break;
        case "soulsweapons:moonknight":
          event.server.tell("\u00A75月光圣骑已经苏醒!")
          break;
        case "soulsweapons:accursed_lord_boss":
          event.server.tell("\u00A75亚托克斯已经苏醒!")
          break;
        case "soulsweapons:draugr_boss":
          event.server.tell("\u00A75远古英雄已经苏醒!")
          break;
        case "adventurez:stone_golem":
          event.server.tell("\u00A75黑石傀儡已经苏醒!")
          break;
        case "adventurez:void_shadow":
          event.server.tell("\u00A75虚空之影已经苏醒!")
          break;
        case "adventurez:the_eye":
          event.server.tell("\u00A75眼球已经苏醒!")
          break;
        case "whisperwoods:hirschgeist":
          event.server.tell("\u00A75鹿之精魂已经苏醒!")
          break;
        case "soulsweapons:night_shade":
          event.server.tell("\u00A75暴虐之影已经苏醒!")
          break;
        case "bosses_of_mass_destruction:lich":
          event.server.tell("\u00A75夜巫妖已经苏醒!")
          break;
        case "bosses_of_mass_destruction:void_blossom":
          event.server.tell("\u00A75虚空之花已经苏醒!")
          break;
        case "bosses_of_mass_destruction:gauntlet":
          event.server.tell("\u00A75地狱之手已经苏醒!")
          break;
        case "bosses_of_mass_destruction:obsidilith":
          event.server.tell("\u00A75黑曜石之柱已经苏醒!")
          break;
        case "botania:doppleganger":
          event.server.tell("\u00A75盖亚守护者已经苏醒!")
          break;
        case "soulsweapons:returning_knight":
          event.server.tell("\u00A75莫德凯撒已经苏醒!")
          break;
        case "twilightforest:knight_phantom":
          event.server.tell("\u00A75幻影骑士已经苏醒!")
          break;
        default:
          break;
      }
    }
    //event.server.runCommandSilent(`/say ${event.entity.displayName}`)
  }
})
onEvent("entity.death", event => {
  let entity = event.getEntity()
  let player = event.getSource().getPlayer()
  if (entity.player) {
    if (entity.stages.has('difficulty_easy')) {
      event.server.runCommandSilent(`improvedmobs difficulty player ${entity.profile.name} add -0.5`)
    }
  }
  switch (entity.type) {
    case "minecraft:wither":
      event.server.tell("\u00A75凋零已被打败!")
      break;
    case "soulsweapons:chaos_monarch":
      event.server.tell("\u00A75混沌君主已被打败!")
      break;
    case "twilightforest:naga":
      event.server.tell("\u00A75娜迦已被打败!")
      break;
    case "minecraft:ender_dragon":
      event.server.tell("\u00A75末影龙已被打败!")
      break;
    case "twilightforest:lich":
      event.server.tell("\u00A75巫妖已被打败!")
      break;
    case "twilightforest:alpha_yeti":
      event.server.tell("\u00A75雪怪首领已被打败!")
      break;
    case "twilightforest:minoshroom":
      event.server.tell("\u00A75米诺菇已被打败!")
      break;
    case "twilightforest:snow_queen":
      event.server.tell("\u00A75冰雪女王已被打败!")
      break;
    case "twilightforest:hydra":
      event.server.tell("\u00A75九头蛇已被打败!")
      break;
    case "twilightforest:ur_ghast":
      event.server.tell("\u00A75暮初恶魂已被打败!")
      break;
    case "soulsweapons:moonknight":
      event.server.tell("\u00A75月光圣骑已被打败!")
      break;
    case "soulsweapons:accursed_lord_boss":
      event.server.tell("\u00A75亚托克斯已被打败!")
      break;
    case "soulsweapons:draugr_boss":
      event.server.tell("\u00A75远古英雄已被打败!")
      break;
    case "adventurez:stone_golem":
      event.server.tell("\u00A75黑石傀儡已被打败!")
      break;
    case "adventurez:void_shadow":
      event.server.tell("\u00A75虚空之影已被打败!")
      break;
    case "adventurez:the_eye":
      event.server.tell("\u00A75眼球已被打败!")
      break;
    case "whisperwoods:hirschgeist":
      event.server.tell("\u00A75鹿之精魄已被打败!")
      break;
    case "soulsweapons:night_shade":
      event.server.tell("\u00A75暴虐之影已被打败!")
      break;
    case "bosses_of_mass_destruction:lich":
      event.server.tell("\u00A75夜巫妖已被打败!")
      break;
    case "bosses_of_mass_destruction:void_blossom":
      event.server.tell("\u00A75虚空之花已被打败!")
      break;
    case "bosses_of_mass_destruction:gauntlet":
      event.server.tell("\u00A75地狱之手已被打败!")
      break;
    case "bosses_of_mass_destruction:obsidilith":
      event.server.tell("\u00A75黑曜石之柱已被打败!")
      break;
    case "botania:doppleganger":
      event.server.tell("\u00A75盖亚守护者已被打败!")
      break;
    case "soulsweapons:returning_knight":
      event.server.tell("\u00A75莫德凯撒已被打败!")
      break;
    case "twilightforest:knight_phantom":
      event.server.tell("\u00A75幻影骑士已被打败!")
      break;
    default:
      break;
  }
})