scoreboard players set in math 1
scoreboard players set in1 math 2
function rng:range_lcg

execute if score out math matches 1 run function dnl:mobs/olympus/lord_of_olympus/weapon/axe
execute if score out math matches 2 run function dnl:mobs/olympus/lord_of_olympus/weapon/sword
execute if score out math matches 2 run function cmd:spawner/olympus/archer

scoreboard players reset @s dnl.timer
