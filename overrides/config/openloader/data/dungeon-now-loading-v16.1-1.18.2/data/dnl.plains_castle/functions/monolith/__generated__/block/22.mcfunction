#built using mc-build (https://github.com/mc-build/mc-build)

execute unless entity @s[tag=dnl.init] run function dnl.plains_castle:monolith/__generated__/block/23
particle minecraft:enchant ~ ~1.9 ~ 0.1 0 0.1 1 2 normal
execute unless block ~ ~ ~ minecraft:crying_obsidian run function dnl.plains_castle:monolith/__generated__/block/24
execute positioned ~ ~1 ~ as @e[type=minecraft:glow_item_frame,tag=dnl.crafter_frame,distance=..1] at @s run function dnl.plains_castle:monolith/__generated__/execute/113