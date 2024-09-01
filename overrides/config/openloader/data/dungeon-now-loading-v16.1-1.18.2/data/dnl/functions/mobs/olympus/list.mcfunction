### Boss ###
execute as @s[tag=dnl.lord_of_olympus] run function dnl:mobs/olympus/lord_of_olympus/main

### Guards ###
execute as @s[tag=dnl.charger] run function dnl:mobs/olympus/charger/main
execute as @s[tag=dnl.archer] run function dnl:mobs/olympus/archer/main
execute as @s[tag=dnl.miner] run function dnl:mobs/olympus/miner/main
execute as @s[tag=dnl.knight] run function dnl:mobs/olympus/knight/main
execute as @s[tag=dnl.swordsmen] run function dnl:mobs/olympus/swordsmen/main

### Team ###
team join dnl.team @s[team=!dnl.team]
team join dnl.team @e[distance=..16,team=!dnl.team,type=minecraft:wolf]

### Common Ability ###
# anti-boat
execute at @s run kill @e[type=minecraft:boat,distance=..1]
# anti-wolf
execute as @s run function dnl:mobs/olympus/anti_wolf
# anti-water + lava
execute at @s run fill ~1 ~2 ~1 ~-1 ~-1 ~-1 minecraft:air replace minecraft:water
execute at @s run fill ~1 ~2 ~1 ~-1 ~-1 ~-1 minecraft:magma_block replace minecraft:lava
