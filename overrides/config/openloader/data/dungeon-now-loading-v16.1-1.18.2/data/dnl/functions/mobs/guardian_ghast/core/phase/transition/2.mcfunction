### Timer ###
scoreboard players add @s dnl.timer 1

### Tag Other Entities ###
tag @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.platform,distance=..80] add dnl.generate.pillar_of_relic
tag @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.platform,distance=..80] add dnl.tops
execute as @s[scores={dnl.timer=190}] run tag @e[type=minecraft:ghast,tag=dnl.guardian_ghast,tag=dnl.main,distance=..80] add dnl.transition.awoken

### Phase Change ###
scoreboard players add @s[scores={dnl.timer=190}] dnl.phase 1
scoreboard players set @e[type=minecraft:ghast,tag=dnl.guardian_ghast,tag=dnl.main,distance=..80] dnl.phase 2

### Bossbar Visibility ###
execute as @s[scores={dnl.timer=190}] run bossbar set dnl:guardian_ghast visible true

### Start "dnl.temple_of_tears.boss" Music ###
execute as @s[scores={dnl.timer=20}] run stopsound @a voice minecraft:dnl.temple_of_tears.ambient
execute as @s[scores={dnl.timer=20}] run schedule function dnl:music/start 1d replace
execute as @s[scores={dnl.timer=190}] run playsound minecraft:dnl.temple_of_tears.boss voice @a[distance=..1050] ~ 1000 ~ 1000000 1 1
tag @s[scores={dnl.timer=190}] add dnl.music.temple_of_tears.boss

### Resets ###
scoreboard players reset @s[scores={dnl.timer=190}] dnl.variable
scoreboard players reset @s[scores={dnl.timer=190}] dnl.timer
