bossbar set dnl:slimecore visible false

setblock ~ ~-33 ~ minecraft:chiseled_stone_bricks
setblock ~ ~-32 ~ chest{LootTable:"dnl:structures/sinkhole/mobs/slimecore/reward"}
execute at @s positioned ~ ~-32 ~ as @e[type=minecraft:slime,distance=..40] run data merge entity @s {Size:0}
execute at @s positioned ~ ~-32 ~ run kill @e[type=minecraft:slime,distance=..40]
execute at @s positioned ~ ~-32 ~ run playsound minecraft:entity.spider.death master @a[distance=..16] ~ ~ ~ 1 0.1 1

advancement grant @a[distance=..50] only dnl:story/structures/sinkhole/slime_core
kill @s
