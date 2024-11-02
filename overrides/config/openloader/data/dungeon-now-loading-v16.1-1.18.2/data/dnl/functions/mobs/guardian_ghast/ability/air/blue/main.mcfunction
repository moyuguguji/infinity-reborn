particle minecraft:soul_fire_flame ~ ~ ~ 0 0 0 0.01 10 force
execute if entity @a[distance=..5] run summon area_effect_cloud ~ ~ ~ {Duration:2147483647,Tags:["dnl.mob","dnl.guardian_ghast","dnl.hail.debris"]}
