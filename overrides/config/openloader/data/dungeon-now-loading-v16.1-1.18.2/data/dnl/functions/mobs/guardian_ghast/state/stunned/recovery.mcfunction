### Timer ###
scoreboard players add @s dnl.timer 1

### Phase 5 Stun Count ###
#execute as @s[scores={dnl.timer=1,dnl.phase=5..}] run scoreboard players remove @e[type=minecraft:area_effect_cloud,tag=dnl.guardian_ghast,tag=dnl.core,scores={dnl.phase=5..}] dnl.health 1

### Sound and Particle Effects ###

particle minecraft:reverse_portal ~ ~ ~ 3 3 3 0.01 20 force
particle minecraft:soul ~ ~ ~ 3 3 3 0.01 10 force
execute as @s[scores={dnl.timer=1}] at @s run summon minecraft:area_effect_cloud ~ ~4 ~ {Duration:2147483647,Tags:["dnl.mob","dnl.guardian_ghast","dnl.ring"]}

execute at @s[scores={dnl.timer=160}] run playsound minecraft:entity.ghast.warn ambient @a ~ ~ ~ 64 0.8
execute at @s[scores={dnl.timer=160}] run playsound minecraft:entity.lightning_bolt.thunder ambient @a ~ ~ ~ 64 1

### Tag and Scoreboard Change ###
tag @s[scores={dnl.timer=160..}] add dnl.transition.awoken
scoreboard players reset @s[scores={dnl.timer=160..}] dnl.timer
