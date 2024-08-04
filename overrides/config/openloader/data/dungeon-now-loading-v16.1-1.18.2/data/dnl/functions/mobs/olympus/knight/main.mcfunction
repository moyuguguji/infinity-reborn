execute if entity @s[tag=!dnl.init] run function dnl:mobs/olympus/knight/init

### Timer ###
scoreboard players add @s dnl.timer 1

### Shield ###
execute if score @s dnl.timer matches 1 run function dnl:mobs/olympus/lord_of_olympus/weapon/shield_off_hand

execute if entity @a[distance=..5] if score @s dnl.timer matches 150.. run scoreboard players reset @s dnl.timer

### Potion Effect ###
effect give @s minecraft:fire_resistance 2 0 true
