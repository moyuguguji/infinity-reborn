#built using mc-build (https://github.com/mc-build/mc-build)


particle poof ~ ~ ~ 0.3 1 0.3 0.0001 5 normal
summon minecraft:skeleton ~ ~ ~ {Tags:["dnl.mob","dnl.raid_mob","dnl.diamond_bow_skeleton"],PersistenceRequired:1b,DeathLootTable:"minecraft:empty",HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:5s}]}},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{id:'minecraft:diamond_boots',Count:1b},{id:'minecraft:diamond_leggings',Count:1b},{id:'minecraft:diamond_chestplate',Count:1b},{id:'minecraft:diamond_helmet',Count:1b}],ArmorDropChances:[0.000F,0.000F,0.000F,0.000F]}
tag @s remove dnl.spawn_raid