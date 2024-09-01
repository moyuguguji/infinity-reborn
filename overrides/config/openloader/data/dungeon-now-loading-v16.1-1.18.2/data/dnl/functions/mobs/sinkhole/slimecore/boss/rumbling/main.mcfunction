scoreboard players add @s dnl.timer 1

execute if score @s dnl.timer matches 1..10 run function dnl:mobs/sinkhole/slimecore/boss/rumbling/position

execute if score @s dnl.timer matches 10..50 run particle minecraft:item_slime ~ ~ ~ 0 0 0 1 10 normal

execute if score @s dnl.timer matches 50 run function dnl:mobs/sinkhole/slimecore/boss/rumbling/random_slime

kill @s[scores={dnl.timer=50..}]
