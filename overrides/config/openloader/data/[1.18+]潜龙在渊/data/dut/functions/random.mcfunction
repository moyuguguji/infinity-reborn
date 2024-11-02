kill @e[type=marker,tag=dut_random]
summon marker ~ ~ ~ {Tags:["dut_random"]}
execute store result score @s dut_random run data get entity @e[tag=dut_random,limit=1] UUID[0]
kill @e[type=marker,tag=dut_random]
scoreboard players operation @s dut_random %= @s dut_randomRange
scoreboard players operation @s dut_random += @s dut_randomMin