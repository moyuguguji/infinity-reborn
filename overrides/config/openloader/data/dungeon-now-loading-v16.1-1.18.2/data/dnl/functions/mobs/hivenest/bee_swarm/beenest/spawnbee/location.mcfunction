execute if entity @s[tag=!dnl.spawned] if block ~ ~1 ~ minecraft:air positioned ~ ~1 ~ run function dnl:mobs/hivenest/bee_swarm/beenest/spawnbee/spawn
execute if entity @s[tag=!dnl.spawned] if block ~1 ~1 ~ minecraft:air positioned ~1 ~1 ~ run function dnl:mobs/hivenest/bee_swarm/beenest/spawnbee/spawn
execute if entity @s[tag=!dnl.spawned] if block ~-1 ~1 ~ minecraft:air positioned ~-1 ~1 ~ run function dnl:mobs/hivenest/bee_swarm/beenest/spawnbee/spawn
execute if entity @s[tag=!dnl.spawned] if block ~ ~1 ~1 minecraft:air positioned ~ ~1 ~1 run function dnl:mobs/hivenest/bee_swarm/beenest/spawnbee/spawn
execute if entity @s[tag=!dnl.spawned] if block ~ ~1 ~-1 minecraft:air positioned ~ ~1 ~-1 run function dnl:mobs/hivenest/bee_swarm/beenest/spawnbee/spawn

tag @s remove dnl.spawned
tag @s remove dnl.spawnbee
