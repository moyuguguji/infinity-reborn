#built using mc-build (https://github.com/mc-build/mc-build)

execute unless entity @s[tag=dnl.init] run function dnl.plains_castle:raid/__generated__/block/27
particle soul ~ ~0.4 ~ 0.15 0.3 0.15 0.0000001 1 normal
execute if block ~ ~ ~ minecraft:campfire[lit=true] unless entity @s[tag=dnl.start_raid] align xyz positioned ~-10 ~-8.1 ~-10 run function dnl.plains_castle:raid/__generated__/block/28
execute if block ~ ~ ~ minecraft:air run function dnl.plains_castle:raid/__generated__/block/29
execute if entity @s[tag=dnl.start_raid] run function dnl.plains_castle:raid/__generated__/block/31