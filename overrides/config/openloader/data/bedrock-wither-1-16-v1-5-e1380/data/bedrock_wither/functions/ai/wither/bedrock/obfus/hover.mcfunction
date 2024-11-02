scoreboard players set @s MobAITick 0
scoreboard players reset #TEMP1 MobAIOther
execute as @e[type=!#wormai:non_living,type=!#wormai:undead,type=!player,distance=..32,nbt={Invulnerable:0b},limit=1] run function bedrock_wither:ai/wither/bedrock/obfus/agro
execute store result entity @s ArmorItems[0].tag.Pathfindx double 1 run scoreboard players get #poz_x1 MobAIOther
execute store result entity @s ArmorItems[0].tag.Pathfindy double 1 run scoreboard players get #poz_y1 MobAIOther
execute store result entity @s ArmorItems[0].tag.Pathfindz double 1 run scoreboard players get #poz_z1 MobAIOther
execute store result entity @s ArmorItems[0].tag.Target int 1 run scoreboard players get #poz_y2 MobAIOther
execute if score #TEMP1 MobAIOther matches 1 run tag @s add Bedrock_WitherAI_Hover
execute if score #TEMP1 MobAIOther matches 1 run tag @s remove Bedrock_WitherAI_Idle
execute if score #TEMP1 MobAIOther matches 1 run tag @s remove Bedrock_WitherAI_Attack
