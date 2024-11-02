execute if entity @s store result score #TEMP1 MobAIOther run data get entity @s Rotation[0]
scoreboard players set #TEMP1 MobAIOther 36
scoreboard players operation #TEMP1 MobAIOther *= @s MobAITick
execute store result entity @s Rotation[0] float 1 run scoreboard players get #TEMP1 MobAIOther
