summon area_effect_cloud ~ ~ ~ {Tags:["dnl.thunder"]}
execute at @a[distance=..80] run spreadplayers ~ ~ 1 10 true @e[type=minecraft:area_effect_cloud,tag=dnl.thunder]
execute at @e[type=minecraft:area_effect_cloud,tag=dnl.thunder] run summon minecraft:lightning_bolt ~ ~ ~
execute at @a as @e[type=minecraft:area_effect_cloud,tag=dnl.thunder,distance=..10] at @s run function dnl:mobs/guardian_ghast/ability/yellow/summoned_mobs
kill @e[type=minecraft:area_effect_cloud,tag=dnl.thunder]
