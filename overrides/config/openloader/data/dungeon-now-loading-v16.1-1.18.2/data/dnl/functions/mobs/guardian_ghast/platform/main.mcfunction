### Transition from Phase 1 to Phase 4 ###
execute as @s[tag=dnl.generate.pillar_of_relic] run function dnl:mobs/guardian_ghast/platform/spawn_pillars

### Barrier ###
execute at @s[tag=dnl.barrier] if entity @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.pillar_of_relic,tag=dnl.active,distance=..18] run function dnl:mobs/guardian_ghast/platform/barrier
execute at @s[tag=dnl.barrier] unless entity @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.pillar_of_relic,tag=dnl.active,distance=..18] run function dnl:mobs/guardian_ghast/platform/deactive

### Invulnerable Barrier ###
execute at @s[tag=dnl.invulnerable] if entity @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.pillar_of_relic,tag=dnl.active,distance=..18] run function dnl:mobs/guardian_ghast/platform/invulnerable

### Restore Platform ###
execute at @s[tag=dnl.restore] run function dnl:mobs/guardian_ghast/platform/restore
