execute as @a[gamemode=!creative] at @s run execute if score choice nether matches 1 run execute if block ~ ~ ~ minecraft:nether_portal run tellraw @s "下界传送门已禁用，请使用特殊处理的黑曜石搭建传送门，并使用迷失的灵魂激活传送门"
execute as @a[gamemode=!creative] at @s run execute if score choice nether matches 1 run execute if block ~ ~ ~ minecraft:nether_portal run setblock ~ ~ ~ air