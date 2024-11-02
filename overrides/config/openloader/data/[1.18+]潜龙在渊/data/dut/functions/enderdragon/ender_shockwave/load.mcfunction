execute at @s if entity @e[type=end_crystal,distance=..6] run spreadplayers ~ ~ 5 9 false @s
scoreboard players add @s dut_time 1
execute as @s[scores={dut_time=1}] at @s run playsound entity.evoker.prepare_summon voice @a ~ ~ ~ 0.6
particle witch ~ ~0.5 ~ 0.1 0.1 0.1 0 3 force
particle end_rod ^ ^0.2 ^3.52 0 0 0 0 1 force
particle end_rod ^ ^0.2 ^-1.6 0 0 0 0 1 force
tp @s ~ ~ ~ ~9 ~
execute as @s[scores={dut_time=80..}] at @s run function dut:enderdragon/ender_shockwave/main