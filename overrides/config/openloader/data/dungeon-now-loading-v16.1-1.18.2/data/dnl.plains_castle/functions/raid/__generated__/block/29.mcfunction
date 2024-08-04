#built using mc-build (https://github.com/mc-build/mc-build)

execute if entity @a[distance=..10,gamemode=creative] run kill @s
execute unless entity @a[distance=..10,gamemode=creative] run function dnl.plains_castle:raid/__generated__/block/30