#built using mc-build (https://github.com/mc-build/mc-build)


particle poof ~ ~ ~ 0.3 1 0.3 0.0001 5 normal
summon minecraft:cave_spider ~ ~ ~ {Tags:["dnl.mob","dnl.raid_mob","dnl.cave_spider"],PersistenceRequired:1b,DeathLootTable:"minecraft:empty"}
tag @s remove dnl.spawn_raid
