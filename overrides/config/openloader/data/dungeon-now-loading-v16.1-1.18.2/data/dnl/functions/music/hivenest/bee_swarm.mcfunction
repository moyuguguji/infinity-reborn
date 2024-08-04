execute as @e[type=area_effect_cloud,tag=dnl.bee_swarm] at @s run stopsound @a[distance=..32] master
execute as @e[type=area_effect_cloud,tag=dnl.bee_swarm] at @s run playsound minecraft:dnl.hivenest.bee_swarm master @a[distance=..32] ~ 1000 ~ 58.16 1 0
schedule function dnl:music/hivenest/bee_swarm 69s
execute unless entity @e[type=area_effect_cloud,tag=dnl.bee_swarm] run schedule clear dnl:music/hivenest/bee_swarm