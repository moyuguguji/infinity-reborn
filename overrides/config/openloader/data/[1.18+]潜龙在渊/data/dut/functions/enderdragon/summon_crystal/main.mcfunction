summon marker ~ ~ ~ {Tags:["dut_summoncrystal"]}
spreadplayers 0 0 32 40 false @e[tag=dut_summoncrystal]
execute as @e[tag=dut_summoncrystal] at @s store result score @s dut_count run execute if entity @e[type=end_crystal,distance=..128]
execute as @e[tag=dut_summoncrystal,scores={dut_count=..3}] at @s positioned ~ ~11 ~ unless entity @e[type=end_crystal,distance=..8] run function dut:enderdragon/summon_crystal/set_crystal