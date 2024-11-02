particle minecraft:soul_fire_flame ~ ~ ~ 0 0 0 0.01 10 force

### Upon Impact ###
execute at @s unless block ~ ~-1 ~ minecraft:air run function dnl:mobs/guardian_ghast/ability/blue/impact

execute at @s as @a[distance=..2] run function dnl:mobs/guardian_ghast/ability/blue/airimpact
execute at @s at @a[distance=..2] run kill @s
