scoreboard players add @s dut_time 1
particle witch ~ ~0.1 ~ 0 0 0 0 1 force
execute as @s[scores={dut_time=80..}] at @s store result score @s dut_count run execute if entity @e[type=shulker,distance=..8,tag=dut_bydragon]
execute as @s[scores={dut_time=80..}] at @s store result score @s dut_count1 run execute if entity @a[distance=..128]
execute as @s[scores={dut_time=80..}] at @s if block ~ ~ ~ air if score @s dut_count1 > @s dut_count run summon shulker ~ ~ ~ {Tags:["dut_bydragon","dut_shulker"],DeathLootTable:"dut:none"}
kill @s[scores={dut_time=80..}]