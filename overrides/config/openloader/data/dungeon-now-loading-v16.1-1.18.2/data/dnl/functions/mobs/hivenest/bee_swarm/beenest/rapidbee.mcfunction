### Timer ###
scoreboard players add @s dnl.timer 1

execute if score @s dnl.timer matches 1 run tag @s add dnl.spawnbee
execute if score @s dnl.timer matches 3 run tag @s add dnl.spawnbee
execute if score @s dnl.timer matches 5 run tag @s add dnl.spawnbee
execute if score @s dnl.timer matches 7 run tag @s add dnl.spawnbee
execute if score @s dnl.timer matches 9 run tag @s add dnl.spawnbee

tag @s[scores={dnl.timer=9..}] remove dnl.rapidbee

scoreboard players reset @s[scores={dnl.timer=9..}] dnl.timer
