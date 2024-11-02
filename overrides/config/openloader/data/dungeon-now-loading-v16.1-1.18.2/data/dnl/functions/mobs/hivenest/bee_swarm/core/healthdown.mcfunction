### Decrease the health of the boss by 1 ###
scoreboard players remove @s dnl.health 1
execute store result bossbar dnl:bee_swarm value run scoreboard players get @s dnl.health
tag @s remove dnl.healthdown
