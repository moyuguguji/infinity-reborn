#built using mc-build (https://github.com/mc-build/mc-build)

tellraw @a[distance=..50] {"text":"Boss Cannot be summon, since there's more then 10 bosses loaded in the world.","color":"red"}
data modify entity @s DeathLootTable set value "minecraft:empty"
kill @s