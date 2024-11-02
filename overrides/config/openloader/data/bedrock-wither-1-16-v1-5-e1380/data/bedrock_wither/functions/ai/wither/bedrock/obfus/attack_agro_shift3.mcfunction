scoreboard players set #TEMP1 MobAIOther 0
scoreboard players set @s MobAITick 0
execute store result score #poz_y2 MobAIOther run data get entity @s ArmorItems[0].tag.Target
execute as @a[distance=..32,gamemode=!creative,gamemode=!spectator] run function bedrock_wither:ai/wither/bedrock/obfus/agro_continue

execute store result entity @s ArmorItems[0].tag.Pathfindx double 1 run scoreboard players get #poz_x1 MobAIOther
execute store result entity @s ArmorItems[0].tag.Pathfindx double 1 run scoreboard players get #poz_y1 MobAIOther
execute store result entity @s ArmorItems[0].tag.Pathfindz double 1 run scoreboard players get #poz_z1 MobAIOther
execute store result score #TEMP3 MobAIOther run data get entity @s ArmorItems[0].tag.Agro

execute if score #TEMP3 MobAIOther matches 0 run tag @s add Bedrock_WitherAI_Idle
execute if score #TEMP3 MobAIOther matches 0 run tag @s remove Bedrock_WitherAI_Attack
execute if score #TEMP3 MobAIOther matches 1.. run function bedrock_wither:ai/wither/bedrock/obfus/attack_agro_shift4

function bedrock_wither:ai/wither/bedrock/move/obfus/agro_down
