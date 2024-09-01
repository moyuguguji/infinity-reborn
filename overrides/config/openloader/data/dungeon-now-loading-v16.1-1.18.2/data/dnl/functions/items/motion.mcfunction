execute store result entity @s Owner[0] int 1 run data get entity @p UUID[0] 1
execute store result entity @s Owner[1] int 1 run data get entity @p UUID[1] 1
execute store result entity @s Owner[2] int 1 run data get entity @p UUID[2] 1
execute store result entity @s Owner[3] int 1 run data get entity @p UUID[3] 1

execute store result score @s dnl.mx1 run data get entity @s Pos[0] 1000
execute store result score @s dnl.my1 run data get entity @s Pos[1] 1000
execute store result score @s dnl.mz1 run data get entity @s Pos[2] 1000

tp @s ^ ^ ^0.1

execute store result score @s dnl.mx2 run data get entity @s Pos[0] 1000
execute store result score @s dnl.my2 run data get entity @s Pos[1] 1000
execute store result score @s dnl.mz2 run data get entity @s Pos[2] 1000

scoreboard players operation @s dnl.mx2 -= @s dnl.mx1
scoreboard players operation @s dnl.my2 -= @s dnl.my1
scoreboard players operation @s dnl.mz2 -= @s dnl.mz1

execute store result entity @s Motion[0] double 0.0150 run scoreboard players get @s dnl.mx2
execute store result entity @s Motion[1] double 0.0150 run scoreboard players get @s dnl.my2
execute store result entity @s Motion[2] double 0.0150 run scoreboard players get @s dnl.mz2

tag @s add dnl.motion
