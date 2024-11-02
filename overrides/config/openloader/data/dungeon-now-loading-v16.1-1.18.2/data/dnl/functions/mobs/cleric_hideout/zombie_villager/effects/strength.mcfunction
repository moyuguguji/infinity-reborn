### Use Potion ###
execute at @s if entity @p[distance=..6] run tag @s add dnl.use_potion

execute if entity @s[tag=dnl.use_potion] run scoreboard players add @s dnl.timer 1

execute if score @s dnl.timer matches 1 run data merge entity @s {HandItems:[{id:"minecraft:potion",Count:1b,tag:{Potion:"minecraft:strength"}},{}]}

execute if score @s dnl.timer matches 4 run playsound entity.generic.drink ambient @a ~ ~ ~ 1.0 1 0
execute if score @s dnl.timer matches 8 run playsound entity.generic.drink ambient @a ~ ~ ~ 1.0 1 0
execute if score @s dnl.timer matches 12 run playsound entity.generic.drink ambient @a ~ ~ ~ 1.0 1 0
execute if score @s dnl.timer matches 16 run playsound entity.generic.drink ambient @a ~ ~ ~ 1.0 1 0
execute if score @s dnl.timer matches 20 run playsound entity.generic.drink ambient @a ~ ~ ~ 1.0 1 0
execute if score @s dnl.timer matches 24 run playsound entity.generic.drink ambient @a ~ ~ ~ 1.0 1 0

execute if score @s dnl.timer matches 28 run data merge entity @s {HandItems:[{},{}]}

execute if score @s dnl.timer matches 30 run effect give @s minecraft:strength 180 0
execute if score @s dnl.timer matches 30 run tag @s remove dnl.use_potion
execute if score @s dnl.timer matches 30 run tag @s remove dnl.strength
