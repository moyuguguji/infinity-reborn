#particle dust 1 0 0 1 ~ ~ ~ 0 0 0 0 1

execute unless block ^ ^ ^0.1 minecraft:air run function dnl:player/anti_block_placing/break_block

execute positioned ^ ^ ^0.1 if block ~ ~ ~ minecraft:air if entity @s[tag=dnl.break_block] run function dnl:player/anti_block_placing/loop
