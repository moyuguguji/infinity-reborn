scoreboard players set #TEMP3 MobAIOther 3
execute store result entity @s ArmorItems[0].tag.Agro int 1 run scoreboard players get #TEMP3 MobAIOther
scoreboard players reset #TEMP3 MobAIOther

#execute if score #TEMP3 MobAIOther matches 1 run function bedrock_wither:ai/wither/bedrock/move/obfus/agro_up
