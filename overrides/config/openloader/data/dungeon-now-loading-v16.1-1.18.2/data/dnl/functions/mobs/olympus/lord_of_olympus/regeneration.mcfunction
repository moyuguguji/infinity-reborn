### Health Timer ###
scoreboard players add @s dnl.subtimer 1
execute if score @s dnl.subtimer matches 200 run effect give @s minecraft:instant_damage 1 0 true
execute if score @s dnl.subtimer matches 180..200 run particle minecraft:falling_obsidian_tear ~ ~2.2 ~ 0.3 0.3 0.3 0.01 3 force
execute if score @s dnl.subtimer matches 200 run scoreboard players set @s dnl.subtimer 180
