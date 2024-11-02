scoreboard players add @s MobAITick 1

execute positioned ~ ~2 ~ run execute as @e[type=minecraft:wither_skull,distance=..2,nbt={HasBeenShot:0b}] run function bedrock_wither:ai/wither/bedrock/move/obfus/no_skulls

execute if entity @s[scores={MobAITick=30..}] run function bedrock_wither:ai/wither/bedrock/obfus/attack

execute if entity @s store result score #TEMP1 MobAIOther run data get entity @s Motion[1] 1000

summon area_effect_cloud ~ ~ ~ {Tags:["TEMPtarget"]}
execute store result entity @e[type=area_effect_cloud,tag=TEMPtarget,limit=1] Pos[2] double 1 run data get entity @s ArmorItems[0].tag.Pathfindz
execute store result entity @e[type=area_effect_cloud,tag=TEMPtarget,limit=1] Pos[0] double 1 run data get entity @s ArmorItems[0].tag.Pathfindx
#execute at @e[type=area_effect_cloud,tag=TEMPtarget,limit=1] run particle minecraft:flame ~ ~ ~ 0 0 0 0.1 1
execute if entity @e[type=area_effect_cloud,tag=TEMPtarget,distance=..1] run function bedrock_wither:ai/wither/bedrock/obfus/attack

tp @s ~ ~ ~ facing entity @e[type=area_effect_cloud,tag=TEMPtarget,limit=1]
execute if entity @s store result entity @s ArmorItems[0].tag.Rotx float 1 run data get entity @s Rotation[0]
execute store result entity @s Rotation[0] float 1 run data get entity @s ArmorItems[0].tag.Rotx

execute at @s run function bedrock_wither:ai/wither/bedrock/move/obfus/walk
kill @e[type=area_effect_cloud,tag=TEMPtarget]

function bedrock_wither:ai/wither/bedrock/move/obfus/lowest_hover
execute if block ~ ~0.1 ~ #wormai:transparent_blocks unless blocks ~ ~0.1 ~ ~ ~-7 ~ ~ ~-1 ~ all run function bedrock_wither:ai/wither/bedrock/move/obfus/hover
