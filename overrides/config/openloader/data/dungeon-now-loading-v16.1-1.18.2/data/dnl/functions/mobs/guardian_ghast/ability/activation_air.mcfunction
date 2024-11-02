### Teleport Above Player ###
execute as @s[scores={dnl.clock=175}] at @s at @p[sort=random] run tp ~ 200 ~

### Particle and Sound Effects ###
execute as @s[scores={dnl.clock=175}] run playsound minecraft:entity.ghast.warn ambient @a ~ ~ ~ 64 0.8
execute as @s[scores={dnl.clock=175}] run playsound minecraft:entity.lightning_bolt.thunder ambient @a ~ ~ ~ 64 1

execute as @s[scores={dnl.clock=175..},tag=dnl.red] run function dnl:mobs/guardian_ghast/ability/air/red/effect
execute as @s[scores={dnl.clock=175..},tag=dnl.blue] run function dnl:mobs/guardian_ghast/ability/air/blue/effect
execute as @s[scores={dnl.clock=175..},tag=dnl.yellow] run function dnl:mobs/guardian_ghast/ability/air/yellow/effect
