#built using mc-build (https://github.com/mc-build/mc-build)

execute if entity @s[tag=!dnl.set_bossbar] run function dnl.plains_castle:the_king/__generated__/execute/16
execute as @s store result score @s dnl.health run data get entity @s Health 1
execute if score @s dnl.bossbar_id matches 0 at @s run function dnl.plains_castle:the_king/__generated__/block/0
execute if score @s dnl.bossbar_id matches 1 at @s run function dnl.plains_castle:the_king/__generated__/block/1
execute if score @s dnl.bossbar_id matches 2 at @s run function dnl.plains_castle:the_king/__generated__/block/2
execute if score @s dnl.bossbar_id matches 3 at @s run function dnl.plains_castle:the_king/__generated__/block/3
execute if score @s dnl.bossbar_id matches 4 at @s run function dnl.plains_castle:the_king/__generated__/block/4
execute if score @s dnl.bossbar_id matches 5 at @s run function dnl.plains_castle:the_king/__generated__/block/5
execute if score @s dnl.bossbar_id matches 6 at @s run function dnl.plains_castle:the_king/__generated__/block/6
execute if score @s dnl.bossbar_id matches 7 at @s run function dnl.plains_castle:the_king/__generated__/block/7
execute if score @s dnl.bossbar_id matches 8 at @s run function dnl.plains_castle:the_king/__generated__/block/8
execute if score @s dnl.bossbar_id matches 9 at @s run function dnl.plains_castle:the_king/__generated__/block/9
scoreboard players add @s dnl.timer 1
execute if score @s dnl.timer matches 100.. run function dnl.plains_castle:the_king/__generated__/execute/69