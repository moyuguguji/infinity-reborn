summon area_effect_cloud ~ ~ ~ {Tags:["dnl.hail"]}
spreadplayers ~ ~ 1 2 true @e[type=minecraft:area_effect_cloud,tag=dnl.hail]
execute at @e[type=minecraft:area_effect_cloud,tag=dnl.hail] run summon snowball ~ ~10 ~ {Tags:["dnl.mob","dnl.guardian_ghast","dnl.projectile","dnl.hail"],Item:{id:"minecraft:blue_ice",Count:1b}}
kill @e[type=minecraft:area_effect_cloud,tag=dnl.hail]
