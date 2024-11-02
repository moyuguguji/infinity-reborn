#easy vector
summon area_effect_cloud 0.0 0.0 0.0 {Tags:["cwmath"]}
execute store result score #poz_x1 MobAIOther run data get entity @s Rotation[0]
execute store result score #poz_y1 MobAIOther run data get entity @s Rotation[1]

execute as @e[type=area_effect_cloud,tag=cwmath,limit=1] at @s run function wormai:math/obfus/vectorize
