### Barrier Recovery ###
execute if entity @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.platform,tag=dnl.barrier,distance=..3] run function dnl:mobs/guardian_ghast/state/stunned/recovery

execute if entity @s[scores={dnl.phase=1}] run particle minecraft:soul ~ ~ ~ 3 3 3 0.01 10 force
