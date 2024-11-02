scoreboard players set in math 1
scoreboard players set in1 math 4
function rng:range_lcg

execute if score out math matches 1..3 run function dnl:mobs/olympus/lord_of_olympus/weapon/bow
execute if score out math matches 4 run function dnl:mobs/olympus/lord_of_olympus/weapon/pickaxe

scoreboard players reset @s dnl.timer
