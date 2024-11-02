execute as @s[scores={dnl.clock=175}] run function dnl:mobs/guardian_ghast/ability/yellow/thunder
execute as @s[scores={dnl.clock=180}] run function dnl:mobs/guardian_ghast/ability/yellow/thunder
execute as @s[scores={dnl.clock=185}] run function dnl:mobs/guardian_ghast/ability/yellow/thunder

execute as @s[scores={dnl.clock=200}] run function dnl:mobs/guardian_ghast/ability/yellow/thunder
execute as @s[scores={dnl.clock=205}] run function dnl:mobs/guardian_ghast/ability/yellow/thunder
execute as @s[scores={dnl.clock=210}] run function dnl:mobs/guardian_ghast/ability/yellow/thunder

execute as @s[scores={dnl.clock=235}] run function dnl:mobs/guardian_ghast/ability/yellow/thunder
execute as @s[scores={dnl.clock=240}] run function dnl:mobs/guardian_ghast/ability/yellow/thunder
execute as @s[scores={dnl.clock=245}] run function dnl:mobs/guardian_ghast/ability/yellow/thunder

execute as @s[scores={dnl.clock=175..235}] at @a[distance=..80,nbt={FallFlying:1b}] run particle totem_of_undying ~ ~ ~ 2 2 2 0.01 20 force
execute as @s[scores={dnl.clock=243..245}] at @a[distance=..80,nbt={FallFlying:1b}] run summon lightning_bolt ~ ~ ~1
execute as @s[scores={dnl.clock=243..245}] at @a[distance=..80,nbt={FallFlying:1b}] run summon lightning_bolt ~1 ~ ~
execute as @s[scores={dnl.clock=243..245}] at @a[distance=..80,nbt={FallFlying:1b}] run summon lightning_bolt ~ ~ ~-1
execute as @s[scores={dnl.clock=243..245}] at @a[distance=..80,nbt={FallFlying:1b}] run summon lightning_bolt ~-1 ~ ~
execute as @s[scores={dnl.clock=243..245}] as @a[distance=..80,nbt={FallFlying:1b}] run effect give @s minecraft:instant_damage 1 1
