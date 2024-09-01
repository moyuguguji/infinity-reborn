#built using mc-build (https://github.com/mc-build/mc-build)


particle poof ~ ~ ~ 0.3 1 0.3 0.0001 5 normal
summon minecraft:elder_guardian ~ ~ ~ {Tags:["dnl.mob","dnl.raid_mob","dnl.elder_guardian"],PersistenceRequired:1b,DeathLootTable:"minecraft:empty"}
tag @s remove dnl.spawn_raid
