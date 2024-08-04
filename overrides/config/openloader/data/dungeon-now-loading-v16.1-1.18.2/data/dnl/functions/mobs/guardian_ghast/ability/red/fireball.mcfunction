summon area_effect_cloud ~ ~ ~ {Tags:["dnl.meteor_fireball"]}
execute at @a[distance=..80] run spreadplayers ~ ~ 1 10 true @e[type=minecraft:area_effect_cloud,tag=dnl.meteor_fireball]
execute as @e[type=minecraft:area_effect_cloud,tag=dnl.meteor_fireball] at @s run function dnl:mobs/guardian_ghast/ability/red/fireball_type
kill @e[type=minecraft:area_effect_cloud,tag=dnl.meteor_fireball]
