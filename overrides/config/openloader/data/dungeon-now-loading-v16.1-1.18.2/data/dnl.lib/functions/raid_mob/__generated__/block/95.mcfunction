#built using mc-build (https://github.com/mc-build/mc-build)


particle poof ~ ~ ~ 0.3 1 0.3 0.0001 5 normal
summon minecraft:drowned ~ ~ ~ {Tags:["dnl.mob","dnl.raid_mob","dnl.drowned"],PersistenceRequired:1b,DeathLootTable:"minecraft:empty"}
tag @s remove dnl.spawn_raid
