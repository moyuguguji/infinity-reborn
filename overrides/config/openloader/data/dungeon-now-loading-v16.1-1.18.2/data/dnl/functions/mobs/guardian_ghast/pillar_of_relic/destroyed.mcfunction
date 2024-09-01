### Count Destroyed Pillars ###
scoreboard players add @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.core,distance=..80] dnl.variable 1

### Decrease Health ###
scoreboard players remove @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.core,distance=..80] dnl.health 1

### Tag and Scoreboard Change ###
tag @s remove dnl.active
