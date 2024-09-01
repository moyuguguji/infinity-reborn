#built using mc-build (https://github.com/mc-build/mc-build)

scoreboard players set #dnl.bossbar_id dnl.bossbar_id 0
scoreboard players set #dnl.bossbar_count dnl.count 0
function dnl.plains_castle:the_king/__generated__/while/0
execute if score #dnl.bossbar_count dnl.count matches 10.. run function dnl.plains_castle:the_king/__generated__/execute/17
scoreboard players operation @s dnl.bossbar_id = #dnl.bossbar_id dnl.bossbar_id
execute if score @s dnl.bossbar_id matches 0 run function dnl.plains_castle:the_king/__generated__/execute/18
execute if score @s dnl.bossbar_id matches 1 run function dnl.plains_castle:the_king/__generated__/execute/19
execute if score @s dnl.bossbar_id matches 2 run function dnl.plains_castle:the_king/__generated__/execute/20
execute if score @s dnl.bossbar_id matches 3 run function dnl.plains_castle:the_king/__generated__/execute/21
execute if score @s dnl.bossbar_id matches 4 run function dnl.plains_castle:the_king/__generated__/execute/22
execute if score @s dnl.bossbar_id matches 5 run function dnl.plains_castle:the_king/__generated__/execute/23
execute if score @s dnl.bossbar_id matches 6 run function dnl.plains_castle:the_king/__generated__/execute/24
execute if score @s dnl.bossbar_id matches 7 run function dnl.plains_castle:the_king/__generated__/execute/25
execute if score @s dnl.bossbar_id matches 8 run function dnl.plains_castle:the_king/__generated__/execute/26
execute if score @s dnl.bossbar_id matches 9 run function dnl.plains_castle:the_king/__generated__/execute/27
tag @s add dnl.set_bossbar