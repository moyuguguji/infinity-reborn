#built using mc-build (https://github.com/mc-build/mc-build)

setblock ~ ~ ~ spawner{SpawnCount:0,SpawnRange:0,Delay:0,MinSpawnDelay:0,MaxSpawnDelay:0,MaxNearbyEntities:0,RequiredPlayerRange:0} replace
scoreboard players add #dnl.id dnl.id 1
scoreboard players operation @s dnl.id = #dnl.id dnl.id
tag @s add dnl.init