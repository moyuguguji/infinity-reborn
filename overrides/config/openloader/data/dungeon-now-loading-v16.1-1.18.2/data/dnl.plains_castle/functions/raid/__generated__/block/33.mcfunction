#built using mc-build (https://github.com/mc-build/mc-build)

execute if score @s dnl.second matches 11.. run title @a[dx=20,dy=13,dz=20] actionbar {"score":{"name":"@s","objective":"dnl.second"},"italic":false,"color":"green"}
execute if score @s dnl.second matches 10 run title @a[dx=20,dy=13,dz=20] actionbar {"text":""}
execute if score @s dnl.second matches ..10 run title @a[dx=20,dy=13,dz=20] actionbar {"score":{"name":"@s","objective":"dnl.second"},"italic":false,"color":"red"}
execute as @e[type=#dnl.lib:mobs,tag=dnl.raid_mob] at @s align xyz positioned ~-10 ~8.1 ~-10 unless entity @e[type=minecraft:marker,tag=dnl.raid,dx=20,dy=-13,dz=20] positioned ~10 ~-8.1 ~10 run function dnl.plains_castle:raid/__generated__/execute/235
execute unless entity @e[type=#dnl.lib:mobs,dx=20,dy=13,dz=20,tag=dnl.raid_mob] run function dnl.plains_castle:raid/__generated__/block/34
execute if score @s dnl.second matches ..0 run function dnl.plains_castle:raid/__generated__/block/35
execute if entity @s[tag=dnl.defeated] run function dnl.plains_castle:raid/__generated__/execute/273
execute if score @s dnl.second matches 0.. run scoreboard players remove @s dnl.second 1
execute if score @s dnl.timer matches 0.. run scoreboard players set @s dnl.timer 80