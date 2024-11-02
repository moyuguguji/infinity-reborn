particle minecraft:composter ~ ~ ~ 1.5 1.5 1.5 0.01 10 normal @a
playsound minecraft:block.grass.place block @a[distance=..16] ~ ~ ~ 1 0.7 1

fill ~1 ~ ~ ~-1 ~ ~ minecraft:jungle_leaves replace air
fill ~ ~ ~1 ~ ~ ~-1 minecraft:jungle_leaves replace air
fill ~ ~1 ~ ~ ~-1 ~ minecraft:jungle_leaves replace air

tag @s remove dnl.leafbarrier
