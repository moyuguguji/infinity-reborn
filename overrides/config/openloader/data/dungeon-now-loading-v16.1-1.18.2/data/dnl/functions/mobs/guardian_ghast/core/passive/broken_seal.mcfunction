### Particle ###
particle minecraft:enchant ~ ~2.3 ~ 0.1 0 0.1 100 20 force

### Sound ###
playsound minecraft:ambient.cave ambient @a ~ ~ ~ 16 0.1
playsound minecraft:block.glass.break ambient @a ~ ~ ~ 16 0.1
playsound minecraft:block.enchantment_table.use ambient @a ~ ~ ~ 16 0.5

### Weather Effect ###
weather thunder 1000000

### Scoreboard ###
scoreboard players set @s dnl.phase 1
scoreboard players set @e[type=minecraft:ghast,tag=dnl.guardian_ghast,tag=dnl.main,distance=..80] dnl.phase 1

### List of Seals ###
tag @e[type=minecraft:ghast,tag=dnl.guardian_ghast,tag=dnl.main,distance=..80] add dnl.transition.awoken

tag @s add dnl.broken_seal
