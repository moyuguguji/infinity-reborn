#built using mc-build (https://github.com/mc-build/mc-build)

execute unless entity @s[tag=dnl.init] run function dnl.plains_castle:spawner_chest/__generated__/block/51
execute if block ~ ~ ~ minecraft:air run function dnl.plains_castle:spawner_chest/__generated__/block/52
execute as @a[distance=..10,advancements={dnl.lib:interact_spawner_chest=true}] run function dnl.plains_castle:spawner_chest/__generated__/block/54
execute align xyz positioned ~-10 ~-1.1 ~-10 unless entity @e[type=minecraft:marker,tag=dnl.spawner,dx=20,dy=9,dz=20] at @s if entity @a[distance=..10,gamemode=!creative,gamemode=!spectator] run function dnl.plains_castle:spawner_chest/__generated__/block/55