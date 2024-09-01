summon slime ~ ~ ~ {PersistenceRequired:1b,NoAI:1b,Health:1.0f,DeathLootTable:"dnl:structures/sinkhole/mobs/slimecore/healthdown",Size:9,Tags:["dnl.mob","dnl.sinkhole","dnl.slimecore","dnl.boss","dnl.size10"],Attributes:[{Name:generic.knockback_resistance,Base:1},{Name:generic.movement_speed,Base:0}]}

### Erase Spawner ###
setblock ~ ~ ~ minecraft:air

### To Mob AEC ###
tag @s add dnl.mob
tag @s add dnl.core

tag @s remove dnl.spawner
