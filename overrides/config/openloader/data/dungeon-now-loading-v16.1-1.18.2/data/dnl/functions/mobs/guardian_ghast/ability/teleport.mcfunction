### Set teleport destination ###
summon area_effect_cloud ~ ~ ~ {Tags:["dnl.guardian_ghast","dnl.teleporter"]}
spreadplayers ~ ~ 3 30 true @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.teleporter]

### Playsound and Particle Effects ###
execute at @s run playsound minecraft:entity.enderman.teleport ambient @a ~ ~ ~ 16 1.5
execute at @s run particle minecraft:flash ~ ~ ~ 0 0 0 0.01 1 force

### Random Height ###
scoreboard players set in math 1
scoreboard players set in1 math 4
function rng:range_lcg

execute if score out math matches 1 at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.teleporter] run tp @s ~ 110 ~
execute if score out math matches 2 at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.teleporter] run tp @s ~ 115 ~
execute if score out math matches 3 at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.teleporter] run tp @s ~ 120 ~
execute if score out math matches 4 at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.teleporter] run tp @s ~ 125 ~

kill @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.teleporter]
