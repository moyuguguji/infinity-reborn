### Timer ###
scoreboard players add @s dnl.timer 1

execute positioned ^ ^2 ^3 run particle minecraft:falling_obsidian_tear ~ ~ ~ 0.1 0 0.1 0.01 10 force
execute positioned ^ ^2 ^3 run particle minecraft:dragon_breath ~ ~ ~ 0.1 0 0.1 0.05 10 force

tp @s ~ ~ ~ ~10 ~

kill @s[scores={dnl.timer=160}]
