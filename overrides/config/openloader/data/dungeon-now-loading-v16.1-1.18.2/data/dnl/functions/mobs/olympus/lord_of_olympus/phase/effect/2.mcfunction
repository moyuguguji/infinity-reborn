### Actions ###
execute if score @s dnl.timer matches 100.. at @s if entity @p[distance=..5] run function dnl:mobs/olympus/lord_of_olympus/actions/2/close_range
execute if score @s[tag=!dnl.bow] dnl.timer matches 100.. at @s if entity @p[distance=5..50] run function dnl:mobs/olympus/lord_of_olympus/actions/2/long_range
execute if score @s dnl.timer matches 300.. at @s if entity @p[distance=..50] run function dnl:mobs/olympus/lord_of_olympus/actions/2/close_up
