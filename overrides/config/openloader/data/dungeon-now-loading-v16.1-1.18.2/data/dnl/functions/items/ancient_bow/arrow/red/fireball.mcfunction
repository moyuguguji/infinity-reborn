summon area_effect_cloud ~ ~ ~ {Tags:["dnl.meteor_fireball"]}
spreadplayers ~ ~ 1 3 true @e[type=minecraft:area_effect_cloud,tag=dnl.meteor_fireball]
execute as @e[type=minecraft:area_effect_cloud,tag=dnl.meteor_fireball] at @s run function dnl:items/ancient_bow/arrow/red/fireball_type
kill @e[type=minecraft:area_effect_cloud,tag=dnl.meteor_fireball]
