### Scoreboards ###
scoreboard players add @s dnl.phase 1

execute if score @s dnl.timer matches 200.. run tag @e[type=minecraft:area_effect_cloud,tag=dnl.mob,tag=dnl.hivenest,tag=dnl.beenest,tag=!dnl.destroyed,distance=..50] add dnl.rapidbee
