execute store result score #poz_x1 MobAIOther run data get entity @s Pos[0]
execute store result score #poz_z1 MobAIOther run data get entity @s Pos[2]
execute store result score #poz_x3 MobAIOther run data get entity @s Motion[0] 20
execute store result score #poz_z3 MobAIOther run data get entity @s Motion[2] 20

execute at @s run summon area_effect_cloud ^ ^ ^10 {Tags:["TEMPvector"]}

execute as @e[type=area_effect_cloud,tag=TEMPvector] at @s store result score #poz_x2 MobAIOther run data get entity @s Pos[0]
execute as @e[type=area_effect_cloud,tag=TEMPvector] at @s store result score #poz_z2 MobAIOther run data get entity @s Pos[2]
kill @e[type=area_effect_cloud,tag=TEMPvector]

execute store result score #CMtn_x MobAIOther run scoreboard players operation #poz_x2 MobAIOther -= #poz_x1 MobAIOther
execute store result score #CMtn_z MobAIOther run scoreboard players operation #poz_z2 MobAIOther -= #poz_z1 MobAIOther

execute if score #poz_x3 MobAIOther matches -12..12 store result score #CMtn_x MobAIOther run scoreboard players operation #poz_x3 MobAIOther += #CMtn_x MobAIOther
execute if score #poz_z3 MobAIOther matches -12..12 store result score #CMtn_z MobAIOther run scoreboard players operation #poz_z3 MobAIOther += #CMtn_z MobAIOther

execute store result entity @s Motion[0] double 0.05 run scoreboard players get #poz_x3 MobAIOther
execute store result entity @s Motion[2] double 0.05 run scoreboard players get #poz_z3 MobAIOther


