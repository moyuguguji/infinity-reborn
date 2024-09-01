### Bossbar ###
bossbar add dnl:guardian_ghast {"text":"Sisters of Sorrow","color":"aqua"}
bossbar set dnl:guardian_ghast color purple
bossbar set dnl:guardian_ghast players @a
bossbar set dnl:guardian_ghast max 12
bossbar set dnl:guardian_ghast value 12
bossbar set dnl:guardian_ghast style notched_12
bossbar set dnl:guardian_ghast visible false

### Scoreboards ###
scoreboard players set @s dnl.phase 1
scoreboard players set @s dnl.health 12
scoreboard players set @s dnl.variable 0

tag @s add dnl.init.core
