### Playsound and Particle Effects ###
playsound minecraft:entity.enderman.teleport ambient @a ~ ~ ~ 1 1.5
particle minecraft:reverse_portal ~ ~ ~ 3 3 3 0.01 20 force

### Teleport Ghast to the Platform ###
tp @s[tag=dnl.blue] @e[type=minecraft:area_effect_cloud,limit=1,sort=nearest,tag=dnl.guardian_ghast,tag=dnl.platform,tag=dnl.blue]
tp @s[tag=dnl.red] @e[type=minecraft:area_effect_cloud,limit=1,sort=nearest,tag=dnl.guardian_ghast,tag=dnl.platform,tag=dnl.red]
tp @s[tag=dnl.yellow] @e[type=minecraft:area_effect_cloud,limit=1,sort=nearest,tag=dnl.guardian_ghast,tag=dnl.platform,tag=dnl.yellow]

### Tag and Scoreboard Change ###
tag @s remove dnl.attacker
scoreboard players reset @s dnl.timer
scoreboard players reset @s dnl.clock
