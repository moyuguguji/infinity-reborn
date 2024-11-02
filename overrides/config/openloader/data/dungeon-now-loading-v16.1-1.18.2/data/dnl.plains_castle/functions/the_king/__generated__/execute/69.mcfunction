#built using mc-build (https://github.com/mc-build/mc-build)

scoreboard players set #dnl.min dnl.rng 1
scoreboard players set #dnl.max dnl.rng 1
execute store result score #dnl.rng dnl.rng run loot spawn ~ ~ ~ loot dnl.lib:rng
scoreboard players reset @s dnl.timer