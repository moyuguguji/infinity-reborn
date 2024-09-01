summon area_effect_cloud ~ ~ ~ {Tags:["dnl.thunder"]}
spreadplayers ~ ~ 1 3 true @e[type=minecraft:area_effect_cloud,tag=dnl.thunder]
execute at @e[type=minecraft:area_effect_cloud,tag=dnl.thunder] run summon minecraft:lightning_bolt ~ ~ ~
kill @e[type=minecraft:area_effect_cloud,tag=dnl.thunder]
