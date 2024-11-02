execute store result score #poz_x1 MobAIOther run data get entity @s Pos[0]
execute store result score #poz_y1 MobAIOther run data get entity @s Pos[1]
execute store result score #poz_z1 MobAIOther run data get entity @s Pos[2]
execute store result score #poz_x3 MobAIOther run data get entity @s Motion[0] 17
execute store result score #poz_z3 MobAIOther run data get entity @s Motion[2] 17
execute store result score #poz_y3 MobAIOther run data get entity @s Motion[1] 17
execute store result score #poz_y2 MobAIOther run data get entity @s ArmorItems[0].tag.Pathfindy

summon area_effect_cloud ~ ~ ~ {Tags:["TEMPminer"]}
summon area_effect_cloud ^ ^ ^10 {Tags:["TEMPvector"]}

execute as @e[type=area_effect_cloud,tag=TEMPminer] run tp @s ~ ~ ~ facing entity @e[type=area_effect_cloud,tag=TEMPvector,limit=1] feet
execute as @e[type=area_effect_cloud,tag=TEMPminer] run function bedrock_wither:ai/wither/bedrock/move/2/obfus/charge_damage_block_setup

execute as @e[type=area_effect_cloud,tag=TEMPvector] at @s store result score #poz_x2 MobAIOther run data get entity @s Pos[0]
execute as @e[type=area_effect_cloud,tag=TEMPvector] at @s store result score #poz_z2 MobAIOther run data get entity @s Pos[2]
kill @e[type=area_effect_cloud,tag=TEMPvector]

execute store result score #CMtn_x MobAIOther run scoreboard players operation #poz_x2 MobAIOther -= #poz_x1 MobAIOther
execute store result score #CMtn_z MobAIOther run scoreboard players operation #poz_z2 MobAIOther -= #poz_z1 MobAIOther
execute store result score #CMtn_y MobAIOther run scoreboard players operation #poz_y2 MobAIOther -= #poz_y1 MobAIOther

execute if score #poz_x3 MobAIOther matches -10..10 store result score #CMtn_x MobAIOther run scoreboard players operation #poz_x3 MobAIOther += #CMtn_x MobAIOther
execute if score #poz_z3 MobAIOther matches -10..10 store result score #CMtn_z MobAIOther run scoreboard players operation #poz_z3 MobAIOther += #CMtn_z MobAIOther

execute if score #poz_y3 MobAIOther matches -10..10 store result score #CMtn_y MobAIOther run scoreboard players operation #poz_y3 MobAIOther += #CMtn_y MobAIOther

execute store result entity @s Motion[0] double 0.06 run scoreboard players get #poz_x3 MobAIOther
execute store result entity @s Motion[2] double 0.06 run scoreboard players get #poz_z3 MobAIOther
execute store result entity @s Motion[1] double 0.1 run scoreboard players get #poz_y3 MobAIOther

tag @s add TEMPname
execute positioned ~-1 ~ ~-1 as @e[type=!#wormai:non_living,type=!wither,dx=0.5,dz=0.5,dy=3,nbt={Invulnerable:0b}] at @s run function bedrock_wither:ai/wither/bedrock/move/2/obfus/entity_damage_setup
tag @s remove TEMPname
