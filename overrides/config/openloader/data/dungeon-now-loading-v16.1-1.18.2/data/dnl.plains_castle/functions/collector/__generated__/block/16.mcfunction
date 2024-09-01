#built using mc-build (https://github.com/mc-build/mc-build)

execute unless entity @s[tag=dnl.init] run function dnl.plains_castle:collector/__generated__/block/17

execute positioned ~ ~1 ~ store result score #store_count dnl.col_count run data get entity @e[type=minecraft:item,tag=!dnl.unconvertable,distance=..0.5,nbt={Item:{id:"minecraft:iron_ingot"}},sort=nearest,limit=1] Item.Count

scoreboard players operation @s dnl.col_count += #store_count dnl.col_count
execute if score #store_count dnl.col_count matches 1.. run function dnl.plains_castle:collector/__generated__/block/18
scoreboard players reset #store_count dnl.col_count
function dnl.plains_castle:collector/__generated__/while/2

execute positioned ~ ~1 ~ run kill @e[type=minecraft:item,tag=!dnl.unconvertable,distance=..0.5,nbt={Item:{id:"minecraft:iron_ingot"}},sort=nearest,limit=1]

execute unless block ~ ~ ~ minecraft:chiseled_stone_bricks if entity @a[gamemode=creative,distance=..10] run function dnl.plains_castle:collector/__generated__/block/19
execute unless block ~ ~ ~ minecraft:chiseled_stone_bricks unless entity @a[gamemode=creative,distance=..10] run function dnl.plains_castle:collector/__generated__/block/20
particle minecraft:enchant ~ ~1.9 ~ 0.1 0 0.1 1 2 normal