execute if entity @s[tag=!dnl.init] run function dnl:mobs/olympus/miner/init

### Break Blocks ###
execute if entity @a[distance=..5] run function dnl:mobs/olympus/lord_of_olympus/weapon/break_blocks

### Potion Effect ###
effect give @s minecraft:fire_resistance 2 0 true
