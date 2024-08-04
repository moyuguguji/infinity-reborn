execute if entity @s[tag=!dnl.init] run function dnl:mobs/olympus/archer/init

execute at @s positioned ~ ~1.62 ~ as @e[type=minecraft:arrow,distance=..1,nbt={pickup:0b},tag=!dnl.olympus_arrow] run data merge entity @s {damage:15.0d,Tags:["dnl.olympus_arrow"]}

### Potion Effect ###
effect give @s minecraft:fire_resistance 2 0 true
