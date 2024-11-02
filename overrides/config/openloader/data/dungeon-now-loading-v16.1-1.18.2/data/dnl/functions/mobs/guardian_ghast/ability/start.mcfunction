### Timer ###
scoreboard players add @s dnl.clock 1

### Teleport ###
execute as @s[scores={dnl.clock=5}] at @s at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.core,limit=1,sort=nearest] run function dnl:mobs/guardian_ghast/ability/teleport
execute as @s[scores={dnl.clock=10}] at @s at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.core,limit=1,sort=nearest] run function dnl:mobs/guardian_ghast/ability/teleport
execute as @s[scores={dnl.clock=15}] at @s at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.core,limit=1,sort=nearest] run function dnl:mobs/guardian_ghast/ability/teleport
execute as @s[scores={dnl.clock=20}] at @s at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.core,limit=1,sort=nearest] run function dnl:mobs/guardian_ghast/ability/teleport

execute as @s[scores={dnl.clock=155}] at @s at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.core,limit=1,sort=nearest] run function dnl:mobs/guardian_ghast/ability/teleport
execute as @s[scores={dnl.clock=160}] at @s at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.core,limit=1,sort=nearest] run function dnl:mobs/guardian_ghast/ability/teleport
execute as @s[scores={dnl.clock=165}] at @s at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.core,limit=1,sort=nearest] run function dnl:mobs/guardian_ghast/ability/teleport
execute as @s[scores={dnl.clock=170}] at @s at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.core,limit=1,sort=nearest] run function dnl:mobs/guardian_ghast/ability/teleport

### Ability ###
execute as @s[scores={dnl.clock=175,dnl.phase=5..}] run function dnl:mobs/guardian_ghast/ability/chance

execute as @s[scores={dnl.clock=175..},tag=dnl.ability.ground] run function dnl:mobs/guardian_ghast/ability/activation

### Tag Chance ###
tag @s[scores={dnl.clock=300},tag=dnl.ability] remove dnl.ability
tag @s[scores={dnl.clock=300},tag=dnl.ability] remove dnl.ability.ground
tag @s[scores={dnl.clock=300},tag=dnl.ability] remove dnl.ability.air

### Retreat ###
execute at @s[scores={dnl.clock=300}] run function dnl:mobs/guardian_ghast/ability/retreat
execute as @s[tag=dnl.stunned] run function dnl:mobs/guardian_ghast/ability/retreat
