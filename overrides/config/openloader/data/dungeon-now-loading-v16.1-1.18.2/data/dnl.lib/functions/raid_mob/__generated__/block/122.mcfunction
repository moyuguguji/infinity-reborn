#built using mc-build (https://github.com/mc-build/mc-build)


particle poof ~ ~ ~ 0.3 1 0.3 0.0001 5 normal
summon minecraft:pillager ~ ~ ~ {Tags:["dnl.mob","dnl.raid_mob","dnl.pillager"],PersistenceRequired:1b,DeathLootTable:"minecraft:empty",HandItems:[{id:"minecraft:crossbow",Count:1b},{}],HandDropChances:[0.000F,0.085F]}
tag @s remove dnl.spawn_raid
