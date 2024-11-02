execute store result score #poz_x2 MobAIOther run data get entity @s UUID[0]
execute if score #poz_x2 MobAIOther = #poz_y2 MobAIOther run scoreboard players set #TEMP1 MobAIOther 1
execute if score #TEMP1 MobAIOther matches 1 run function bedrock_wither:ai/wither/bedrock/obfus/agro_new_hover
