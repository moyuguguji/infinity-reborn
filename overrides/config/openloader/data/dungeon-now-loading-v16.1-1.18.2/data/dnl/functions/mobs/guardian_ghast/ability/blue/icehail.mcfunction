summon area_effect_cloud ~ ~ ~ {Tags:["dnl.hail"]}
execute at @a[distance=..80] run spreadplayers ~ ~ 1 10 true @e[type=minecraft:area_effect_cloud,tag=dnl.hail]
execute at @e[type=minecraft:area_effect_cloud,tag=dnl.hail] run summon snowball ~ 160 ~ {Tags:["dnl.mob","dnl.guardian_ghast","dnl.projectile","dnl.hail"],Item:{id:"minecraft:blue_ice",Count:1b}}
kill @e[type=minecraft:area_effect_cloud,tag=dnl.hail]
