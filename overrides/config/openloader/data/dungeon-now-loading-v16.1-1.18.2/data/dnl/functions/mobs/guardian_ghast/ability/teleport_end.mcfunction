### Set teleport destination ###
summon area_effect_cloud ~ ~ ~ {Tags:["dnl.guardian_ghast","dnl.teleporter"]}
spreadplayers ~ ~ 3 30 true @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.teleporter]

### Playsound and Particle Effects ###
execute at @s run playsound minecraft:entity.enderman.teleport ambient @a ~ ~ ~ 16 1.5
execute at @s run particle minecraft:reverse_portal ~ ~ ~ 2 2 2 0.01 50 force

### Random Height ###
scoreboard players set in math 1
scoreboard players set in1 math 8
function rng:range_lcg

execute if score out math matches 1 at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.teleporter] run tp @s ~ 170 ~
execute if score out math matches 2 at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.teleporter] run tp @s ~ 175 ~
execute if score out math matches 3 at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.teleporter] run tp @s ~ 180 ~
execute if score out math matches 4 at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.teleporter] run tp @s ~ 185 ~

### Effects ###
execute if score out math matches 5..8 at @p run tp @s ~ ~20 ~
execute if score out math matches 5..8 as @s[tag=dnl.red] at @s run function dnl:mobs/guardian_ghast/ability/red/effect
#execute if score out math matches 5..8 as @s[tag=dnl.blue] at @s run function dnl:mobs/guardian_ghast/ability/blue/effect
#execute if score out math matches 5..8 as @s[tag=dnl.yellow] at @s run function dnl:mobs/guardian_ghast/ability/yellow/effect



kill @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.teleporter]
