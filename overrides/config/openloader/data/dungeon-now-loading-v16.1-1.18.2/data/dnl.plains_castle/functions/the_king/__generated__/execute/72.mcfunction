#built using mc-build (https://github.com/mc-build/mc-build)

scoreboard players add @s dnl.timer 1
particle minecraft:flame ~ ~0.5 ~ 0.5 0.5 0.5 0.001 2 normal
execute if score @s dnl.timer matches 60.. run setblock ~ ~ ~ minecraft:air destroy