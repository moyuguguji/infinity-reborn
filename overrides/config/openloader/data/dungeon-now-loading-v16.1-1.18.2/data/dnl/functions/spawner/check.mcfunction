execute as @e[type=minecraft:area_effect_cloud,tag=dnl.spawner,tag=!dnl.used] at @s if entity @a[distance=..50,tag=!dnl.mode.op] at @s run function dnl:spawner/list
execute as @e[type=minecraft:marker,tag=dnl.spawner,tag=!dnl.used] at @s if entity @a[distance=..50,tag=!dnl.mode.op] run function dnl:spawner/list

