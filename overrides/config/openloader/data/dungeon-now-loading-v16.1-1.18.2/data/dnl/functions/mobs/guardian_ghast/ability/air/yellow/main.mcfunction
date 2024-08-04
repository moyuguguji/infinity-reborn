### Timer ###
scoreboard players add @s dnl.timer 1

particle minecraft:end_rod ~ ~ ~ 0 0 0 0.01 10 force

execute at @s[scores={dnl.timer=20}] run summon minecraft:lightning_bolt ~ ~ ~
kill @s[scores={dnl.timer=20}]
