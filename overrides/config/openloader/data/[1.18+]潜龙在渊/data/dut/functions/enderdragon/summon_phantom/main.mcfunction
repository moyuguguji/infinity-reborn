execute as @a[distance=..128] run summon marker ~ ~ ~ {Tags:["dut_summon_phantom"]}
execute as @s[scores={dut_stage=1..}] run summon marker ~ ~ ~ {Tags:["dut_summon_phantom"]}
execute as @s[scores={dut_stage=2..}] run summon marker ~ ~ ~ {Tags:["dut_summon_phantom"]}
execute as @s[scores={dut_stage=3..}] run summon marker ~ ~ ~ {Tags:["dut_summon_phantom"]}
execute as @s[scores={dut_stage=4..}] run summon marker ~ ~ ~ {Tags:["dut_summon_phantom"]}
execute as @s[scores={dut_stage=5..}] run summon marker ~ ~ ~ {Tags:["dut_summon_phantom"]}
spreadplayers 0 0 6 32 false @e[tag=dut_summon_phantom]
execute as @e[tag=dut_summon_phantom] at @s positioned ~ ~6 ~ store result score @s dut_count run execute if entity @e[tag=dut_phantom,distance=..24]
execute as @e[tag=dut_summon_phantom] at @s positioned ~ ~6 ~ store result score @s dut_count1 run execute if entity @e[tag=dut_phantom,distance=..64]
execute at @e[tag=dut_summon_phantom,scores={dut_count=..3,dut_count1=..12}] positioned ~ ~6 ~ run summon phantom ~ ~ ~ {Tags:["dut_phantom","dut_phantom0","dut_bydragon"],DeathLootTable:"dut:none"}
execute at @e[tag=dut_summon_phantom,scores={dut_count=..3,dut_count1=..12}] positioned ~ ~6 ~ run playsound entity.evoker.prepare_summon voice @a ~ ~ ~ 0.6
execute at @e[tag=dut_summon_phantom,scores={dut_count=..3,dut_count1=..12}] positioned ~ ~6 ~ run particle soul_fire_flame ~ ~ ~ 1.5 1.5 1.5 0.01 48 force
execute at @e[tag=dut_summon_phantom,scores={dut_count=..3,dut_count1=..12}] positioned ~ ~6 ~ summon marker run function dut:enderdragon/ender_shockwave/particlee
execute as @e[tag=dut_phantom0] run function dut:enderdragon/summon_phantom/set_phantom
kill @e[tag=dut_summon_phantom] 