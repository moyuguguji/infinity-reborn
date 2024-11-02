execute store result score #TEMP1 MobAIOther run data get entity @s ArmorItems[0].tag.Target
execute as @e[type=!#wormai:non_living,distance=..32,nbt={Invulnerable:0b}] run function bedrock_wither:ai/wither/bedrock/move/obfus/agro_tag
tp @s ~ ~ ~ facing entity @e[type=!#wormai:non_living,tag=TEMP2,limit=1]
execute store result entity @s ArmorItems[0].tag.Rotx float 1 run data get entity @s Rotation[0]
execute store result entity @s ArmorItems[0].tag.Pathfindy double 1 run data get entity @e[type=!#wormai:non_living,tag=TEMP2,limit=1] Pos[1]
tag @e[type=!#wormai:non_living,tag=TEMP2,limit=1] remove TEMP2
