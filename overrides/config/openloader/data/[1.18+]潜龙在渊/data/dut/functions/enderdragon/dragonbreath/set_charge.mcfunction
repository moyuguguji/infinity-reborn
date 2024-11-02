summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
execute as @s[scores={dut_stage=2..}] run summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
execute as @s[scores={dut_stage=2..}] run summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
execute as @s[scores={dut_stage=2..}] run summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
execute as @s[scores={dut_stage=2..}] run summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
execute as @s[scores={dut_stage=4..}] run summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
execute as @s[scores={dut_stage=4..}] run summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
execute as @s[scores={dut_stage=4..}] run summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
execute as @s[scores={dut_stage=4..}] run summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
execute as @s[scores={dut_stage=5..}] run summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
execute as @s[scores={dut_stage=5..}] run summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
execute as @s[scores={dut_stage=5..}] run summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
execute as @s[scores={dut_stage=5..}] run summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
execute as @a[limit=15,distance=..128] run summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
execute as @a[limit=15,distance=..128] run summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_dragonbreath"]}
spreadplayers 0 0 0 48 false @e[tag=dut_dragonbreath]
execute at @e[tag=dut_dragonbreath] run playsound entity.ender_dragon.shoot voice @a ~ ~16 ~
execute at @e[tag=dut_dragonbreath] run summon dragon_fireball ~ ~ ~ {power:[0d,-0.12d,0d]}
execute at @e[tag=dut_dragonbreath] run particle minecraft:dragon_breath ~ ~ ~ 0 0 0 0.1 32 force
kill @e[tag=dut_dragonbreath]