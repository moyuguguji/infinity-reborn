scoreboard players add @s dnl.variable 1

execute at @s[scores={dnl.variable=100},tag=level2] run function dnl:mobs/watcher_camp/frost_watcher_arrow/level2
execute at @s[scores={dnl.variable=100},tag=level1] run function dnl:mobs/watcher_camp/frost_watcher_arrow/level1
execute at @s[scores={dnl.variable=100},tag=level0] run function dnl:mobs/watcher_camp/frost_watcher_arrow/level0
