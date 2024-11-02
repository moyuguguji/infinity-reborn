### Timer ###
scoreboard players add @s dnl.timer 1

### Tag Other Entities ###
tag @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.platform,distance=..80] add dnl.generate.pillar_of_relic
tag @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.platform,distance=..80] add dnl.tops
execute as @s[scores={dnl.timer=1}] run tag @e[type=minecraft:ghast,tag=dnl.guardian_ghast,tag=dnl.main,tag=dnl.awoken,distance=..80] add dnl.transition.stunned
execute as @s[scores={dnl.timer=190}] run tag @e[type=minecraft:ghast,tag=dnl.guardian_ghast,tag=dnl.main,distance=..80] add dnl.transition.awoken
scoreboard players set @s[scores={dnl.timer=190}] dnl.clock 300
#execute as @s[scores={dnl.timer=190}] run tag @e[type=minecraft:ghast,tag=dnl.guardian_ghast,tag=dnl.main,distance=..80,limit=1,sort=random] add dnl.attacker

### Phase Change ###
scoreboard players add @s[scores={dnl.timer=190}] dnl.phase 1
scoreboard players set @e[type=minecraft:ghast,tag=dnl.guardian_ghast,tag=dnl.main,distance=..80] dnl.phase 5
scoreboard players set @s[scores={dnl.timer=190}] dnl.health 12

### Resets ###
scoreboard players reset @s[scores={dnl.timer=190}] dnl.variable
scoreboard players reset @s[scores={dnl.timer=190}] dnl.subvariable
scoreboard players reset @s[scores={dnl.timer=190}] dnl.timer
