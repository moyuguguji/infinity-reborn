### Timer ###
scoreboard players add @s[scores={dnl.variable=..8}] dnl.timer 1

execute if score @s dnl.timer matches 100.. run tag @e[type=minecraft:area_effect_cloud,tag=dnl.mob,tag=dnl.hivenest,tag=dnl.beenest,tag=!dnl.destroyed,distance=..50,sort=random,limit=1] add dnl.rapidbee

scoreboard players reset @s[scores={dnl.timer=100..}] dnl.timer
