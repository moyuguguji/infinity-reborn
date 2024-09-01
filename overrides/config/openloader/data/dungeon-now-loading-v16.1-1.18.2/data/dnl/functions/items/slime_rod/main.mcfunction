execute as @e[type=minecraft:snowball,tag=dnl.slime_rod.slimeball,tag=!dnl.motion] at @s rotated as @p run function dnl:items/motion

execute if score @s dnl.rodclick matches 1.. anchored eyes run function dnl:items/slime_rod/slimeball

clear @s[scores={dnl.rodclick=1..}] minecraft:slime_ball 1

scoreboard players reset @a dnl.rodclick
