scoreboard players set in math 1
scoreboard players set in1 math 10
function rng:range_lcg

execute if score out math matches 1..3 run function dnl:mobs/olympus/lord_of_olympus/weapon/sword
execute if score out math matches 4..6 run function dnl:mobs/olympus/lord_of_olympus/weapon/axe
execute if score out math matches 7..8 run function dnl:mobs/olympus/lord_of_olympus/weapon/bow
execute if score out math matches 9..10 run function dnl:mobs/olympus/lord_of_olympus/weapon/pickaxe

scoreboard players reset @s dnl.timer
