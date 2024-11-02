scoreboard players set in math 1
scoreboard players set in1 math 6
function rng:range_lcg

scoreboard players set #3 dnl.constant 3

execute if score out math matches 1 at @s run summon minecraft:skeleton ~ ~ ~ {Tags:["camp_mob"]}
execute if score out math matches 2 at @s run summon minecraft:stray ~ ~ ~ {Tags:["camp_mob"]}
execute if score out math matches 3 at @s run summon minecraft:spider ~ ~ ~ {Tags:["camp_mob"]}

execute if score out math <= #3 dnl.constant at @s at @e[sort=nearest,type=!arrow,limit=1] run particle minecraft:cloud ~ ~ ~ 0.5 1 0.5 0.0000001 30

kill @s
