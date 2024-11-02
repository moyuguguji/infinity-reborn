tag @s add TEMP1


scoreboard players operation #TEMPB WormB = @s WormB
execute as @e[type=area_effect_cloud,tag=Body_Death] if score @s WormB = #TEMPB WormB run execute at @s run function astral_infection:ai/util/animation/obfus/classic_death2

execute store result score #TEMP1 MobAIOther run data get entity @s Pose.Head[2] 1
scoreboard players set #TEMP2 MobAIOther 9
scoreboard players operation #TEMP1 MobAIOther += #TEMP2 MobAIOther
execute store result entity @s Pose.Head[2] float 1 run scoreboard players get #TEMP1 MobAIOther
tag @s remove TEMP1
