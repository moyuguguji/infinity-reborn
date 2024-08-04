### Arrow Stun ###
scoreboard players add @s[nbt={HurtTime:10s}] dnl.variable 1
execute as @s[scores={dnl.variable=12..}] run function dnl:mobs/guardian_ghast/state/awoken/change_state

### Phase 5 Invulnerable ###
execute as @s[scores={dnl.phase=5..},tag=!dnl.invulnerable] if entity @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.platform,tag=dnl.barrier,distance=..0.1] run function dnl:mobs/guardian_ghast/state/awoken/invulnerable/active
execute as @s[scores={dnl.phase=5..},tag=dnl.invulnerable] unless entity @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.platform,tag=dnl.barrier,distance=..0.1] run function dnl:mobs/guardian_ghast/state/awoken/invulnerable/deactive
