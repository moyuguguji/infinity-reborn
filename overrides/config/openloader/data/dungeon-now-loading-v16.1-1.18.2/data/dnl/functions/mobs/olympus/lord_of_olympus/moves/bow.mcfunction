### Arrow Damage ###
# Phase 1
execute if score @s dnl.phase matches 1 at @s positioned ~ ~1.62 ~ as @e[type=minecraft:arrow,distance=..1,nbt={pickup:0b},tag=!dnl.olympus_arrow] run data merge entity @s {damage:20.0d,Tags:["dnl.olympus_arrow"]}

# Phase 2
execute if score @s dnl.phase matches 2 at @s positioned ~ ~1.62 ~ as @e[type=minecraft:arrow,distance=..1,nbt={pickup:0b},tag=!dnl.olympus_arrow] run function dnl:mobs/olympus/lord_of_olympus/weapon/bow_random_arrow

# Phase 3
execute if score @s dnl.phase matches 3 at @s positioned ~ ~1.62 ~ as @e[type=minecraft:arrow,distance=..1,nbt={pickup:0b},tag=!dnl.olympus_arrow] run function dnl:mobs/olympus/lord_of_olympus/weapon/bow_random_arrow_2
