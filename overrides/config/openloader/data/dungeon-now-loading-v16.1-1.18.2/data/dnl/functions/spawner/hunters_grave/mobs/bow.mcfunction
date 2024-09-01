summon area_effect_cloud ~ ~ ~ {Tags:["dnl.hunters_wolf","dnl.hunters_spread"],Duration:2147483647}
execute as @e[tag=dnl.hunters_spread] at @s run spreadplayers ~ ~-0.5 0 1 false @s
tag @e[tag=dnl.hunters_spread] remove dnl.hunters_spread

kill @s
