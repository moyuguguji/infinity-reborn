summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_evoker_fang"]}
summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_evoker_fang"]}
spreadplayers ~ ~ 0 7 false @e[tag=dut_evoker_fang]
execute at @e[tag=dut_evoker_fang] run particle minecraft:crit ~ ~ ~ 2 1 2 0.1 32 force
particle minecraft:crit ~ ~2 ~ 2 1 2 0.1 32 force
execute at @e[tag=dut_evoker_fang] run summon evoker_fangs
kill @e[tag=dut_evoker_fang]