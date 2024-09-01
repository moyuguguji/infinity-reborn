execute as @s[type=minecraft:area_effect_cloud,tag=dnl.core] run function dnl:mobs/guardian_ghast/core/main
execute as @s[type=minecraft:ghast,tag=dnl.main] run function dnl:mobs/guardian_ghast/main
execute as @s[type=minecraft:area_effect_cloud,tag=dnl.platform] run function dnl:mobs/guardian_ghast/platform/main
execute as @s[type=minecraft:area_effect_cloud,tag=dnl.pillar_of_relic] run function dnl:mobs/guardian_ghast/pillar_of_relic/main

### Projectiles ###
execute as @s[tag=dnl.meteor_fireball] run function dnl:mobs/guardian_ghast/ability/red/main
execute as @s[tag=dnl.hail] run function dnl:mobs/guardian_ghast/ability/blue/main

### Effects ###
execute as @s[tag=dnl.ring] run function dnl:mobs/guardian_ghast/state/stunned/main
