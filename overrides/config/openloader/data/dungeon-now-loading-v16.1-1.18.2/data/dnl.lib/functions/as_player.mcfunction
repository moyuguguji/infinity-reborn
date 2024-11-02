#built using mc-build (https://github.com/mc-build/mc-build)

execute if entity @s[gamemode=creative] run execute as @e[type=marker,distance=..100] at @s run particle poof ~ ~ ~ 0 0 0 0.001 1 force
execute if score @s dnl.death matches 1.. run function dnl.lib:__generated__/execute/7