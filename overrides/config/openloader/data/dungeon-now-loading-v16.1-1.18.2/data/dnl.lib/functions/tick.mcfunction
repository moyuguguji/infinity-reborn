#built using mc-build (https://github.com/mc-build/mc-build)

execute as @e[type=marker] at @s run function dnl.lib:as_marker
execute as @a at @s run function dnl.lib:as_player
execute as @e[type=item] at @s run function dnl.lib:as_item