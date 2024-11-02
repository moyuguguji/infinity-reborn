scoreboard players reset #TEMP1 MobAIOther
execute positioned ~ ~2 ~ run execute as @e[type=minecraft:wither_skull,distance=..2,nbt={HasBeenShot:0b}] run function bedrock_wither:ai/wither/bedrock/move/obfus/agro_ping
execute if score #TEMP1 MobAIOther matches 1 run function bedrock_wither:ai/wither/bedrock/obfus/hover
execute if entity @s[nbt={HurtTime:10s}] run function bedrock_wither:ai/wither/bedrock/obfus/hover_hit

