scoreboard players set @s dut_time 0
scoreboard players set @s dut_stage 0
scoreboard players set @s dut_delay 0
execute store result score @s dut_maxhp run attribute @s generic.max_health base get
execute store result entity @s Health float 1 run attribute @s generic.max_health base get
tag @s add dut_dragon
tag @e[type=end_crystal,distance=..128] add dut_bydragon
tag @e[type=end_crystal,distance=..128] add dut_bydragon0