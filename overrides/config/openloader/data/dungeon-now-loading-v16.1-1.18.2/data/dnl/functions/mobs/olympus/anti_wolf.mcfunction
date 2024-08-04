scoreboard players add @s dnl.subclock 1
execute if score @s dnl.subclock matches 50.. as @e[type=minecraft:wolf,distance=..16] run data merge entity @s {Sitting:1b}
execute if score @s dnl.subclock matches 50.. as @e[type=minecraft:wolf,distance=..16] at @e[type=minecraft:marker,limit=1,sort=nearest,tag=dnl.olympus,tag=dnl.wolf_location] run tp @s ~ ~ ~
execute if score @s dnl.subclock matches 50.. run scoreboard players reset @s dnl.subclock
