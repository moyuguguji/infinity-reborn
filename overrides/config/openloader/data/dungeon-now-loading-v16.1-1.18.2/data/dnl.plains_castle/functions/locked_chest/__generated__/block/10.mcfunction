#built using mc-build (https://github.com/mc-build/mc-build)

execute unless entity @s[tag=dnl.init] run function dnl.plains_castle:locked_chest/__generated__/block/11
execute if block ~ ~ ~ minecraft:air run function dnl.plains_castle:locked_chest/__generated__/block/12
execute as @a[distance=..10,advancements={dnl.lib:interact_locked_chest=true}] run function dnl.plains_castle:locked_chest/__generated__/block/14
execute unless block ~ ~ ~ minecraft:chest{LootTable:"dnl.lib:locked_chest"} run function dnl.plains_castle:locked_chest/__generated__/block/15