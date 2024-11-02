#execute as @s store result score #TEMP1 MobAIOther run data get entity @s Motion[1] 1000
execute if score #TEMP1 MobAIOther matches -1000..1000 run scoreboard players add #TEMP1 MobAIOther 350
execute as @s store result entity @s Motion[1] double 0.001 run scoreboard players get #TEMP1 MobAIOther


