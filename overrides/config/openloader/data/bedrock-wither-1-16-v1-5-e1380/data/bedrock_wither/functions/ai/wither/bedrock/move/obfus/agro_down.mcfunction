execute store result score #TEMP3 MobAIOther run data get entity @s ArmorItems[0].tag.Agro
scoreboard players remove #TEMP3 MobAIOther 1
execute store result entity @s ArmorItems[0].tag.Agro int 1 run scoreboard players get #TEMP3 MobAIOther
scoreboard players reset #TEMP3 MobAIOther

#execute if score #TEMP3 MobAIOther matches 1 run function bedrock_wither:ai/wither/bedrock/move/obfus/agro_up
