### Summon Mob ###
summon skeleton ~ ~ ~ {PersistenceRequired:1b,Health:60f,HandItems:[{id:"minecraft:iron_sword",Count:1b,tag:{Enchantments:[{id:"minecraft:sharpness",lvl:7s},{id:"minecraft:vanishing_curse",lvl:1s}]}},{}],ArmorItems:[{id:'minecraft:iron_boots',Count:1b,tag:{Enchantments:[{id:'minecraft:protection',lvl:5s},{id:'minecraft:vanishing_curse',lvl:1s}]}},{id:'minecraft:iron_leggings',Count:1b,tag:{Enchantments:[{id:'minecraft:protection',lvl:5s},{id:'minecraft:vanishing_curse',lvl:1s}]}},{id:'minecraft:iron_chestplate',Count:1b,tag:{Enchantments:[{id:'minecraft:protection',lvl:5s},{id:'minecraft:vanishing_curse',lvl:1s}]}},{id:'minecraft:iron_helmet',Count:1b,tag:{Enchantments:[{id:'minecraft:protection',lvl:5s},{id:'minecraft:vanishing_curse',lvl:1s}]}}],Attributes:[{Name:generic.max_health,Base:60}]}

### Minion Mobs ###
tag @e[type=minecraft:area_effect_cloud,distance=..10,tag=dnl.temple_of_tears,tag=dnl.minion,tag=!dnl.used] add dnl.normal
tag @e[type=minecraft:area_effect_cloud,distance=..10,tag=dnl.temple_of_tears,tag=dnl.minion,tag=!dnl.used] add dnl.spawner

kill @s
