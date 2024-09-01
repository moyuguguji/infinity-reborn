#execute as @s[scores={dnl.clock=175..}] at @s at @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.core,limit=1,sort=nearest] run tp ~ 200 ~
### Teleport Above Player ###
execute as @s[scores={dnl.clock=175}] at @s at @p[sort=random] run tp ~ 140 ~

### Particle and Sound Effects ###
execute as @s[scores={dnl.clock=175}] run playsound minecraft:entity.ghast.warn ambient @a ~ ~ ~ 64 0.8
execute as @s[scores={dnl.clock=175}] run playsound minecraft:entity.lightning_bolt.thunder ambient @a ~ ~ ~ 64 1

execute as @s[scores={dnl.clock=175..},tag=dnl.red] run function dnl:mobs/guardian_ghast/ability/red/effect
execute as @s[scores={dnl.clock=175..},tag=dnl.blue] run function dnl:mobs/guardian_ghast/ability/blue/effect
execute as @s[scores={dnl.clock=175..},tag=dnl.yellow] run function dnl:mobs/guardian_ghast/ability/yellow/effect
