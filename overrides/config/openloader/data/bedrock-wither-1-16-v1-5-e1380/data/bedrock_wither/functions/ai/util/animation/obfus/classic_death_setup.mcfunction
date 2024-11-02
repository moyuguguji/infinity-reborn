summon area_effect_cloud ~ ~ ~ {Duration:10,Tags:["Body_Death","DEATH_TEMP"]}
scoreboard players operation @e[type=area_effect_cloud,tag=DEATH_TEMP] WormB = @s WormB
tp @e[type=area_effect_cloud,tag=DEATH_TEMP] @s
execute as @e[type=area_effect_cloud,tag=DEATH_TEMP] at @s run function astral_infection:ai/util/animation/obfus/classic_death_setup2
