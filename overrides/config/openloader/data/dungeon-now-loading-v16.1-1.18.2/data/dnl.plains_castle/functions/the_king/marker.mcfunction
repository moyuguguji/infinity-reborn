#built using mc-build (https://github.com/mc-build/mc-build)

execute if entity @s[tag=!dnl.init] run function dnl.plains_castle:the_king/__generated__/execute/71
execute if block ~ ~ ~ minecraft:spawner if entity @a[distance=..8] run function dnl.plains_castle:the_king/__generated__/execute/72
execute if entity @s[tag=!dnl.spawn] if block ~ ~ ~ minecraft:air run function dnl.plains_castle:the_king/__generated__/execute/74