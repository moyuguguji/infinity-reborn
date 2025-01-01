execute unless entity @e[tag=dut_dragon] as @e[type=ender_dragon,tag=!dut_dragon] at @s run function dut:enderdragon/setup
#末影龙
execute as @e[tag=dut_dragon,limit=1] at @s run function dut:enderdragon/common
#末影龙死亡
execute as @e[tag=dut_crystal,type=marker] at @s unless entity @e[type=end_crystal,distance=..1] run fill ~1 ~6 ~1 ~-1 ~-5 ~-1 air destroy
execute as @e[tag=dut_crystal,type=marker] at @s unless entity @e[type=end_crystal,distance=..1] run kill @s
execute as @e[tag=dut_bydragon,type=end_crystal] at @s unless entity @e[tag=dut_dragon] run fill ~1 ~6 ~1 ~-1 ~-5 ~-1 air destroy
execute as @e[tag=dut_bydragon,type=end_crystal] at @s unless entity @e[tag=dut_dragon] run summon lightning_bolt ~ ~ ~
execute as @e[tag=dut_bydragon,type=!end_crystal] at @s unless entity @e[tag=dut_dragon] run kill @s
execute as @e[tag=dut_bydragon,tag=dut_bydragon0] at @s unless entity @e[tag=dut_dragon] run kill @s
#技能-末影冲击
execute as @e[tag=dut_ender_shockwave] at @s run function dut:enderdragon/ender_shockwave/load
#技能-连发龙息
execute as @e[tag=dut_charge] at @s run function dut:enderdragon/dragon_charge/particle