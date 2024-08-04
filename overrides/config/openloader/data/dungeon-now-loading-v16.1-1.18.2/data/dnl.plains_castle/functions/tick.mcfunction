#built using mc-build (https://github.com/mc-build/mc-build)

execute as @a at @s run function dnl.plains_castle:as_player
execute as @e[type=#dnl.plains_castle:mobs] at @s run function dnl.plains_castle:as_mob
execute as @e[type=marker] at @s run function dnl.plains_castle:as_marker