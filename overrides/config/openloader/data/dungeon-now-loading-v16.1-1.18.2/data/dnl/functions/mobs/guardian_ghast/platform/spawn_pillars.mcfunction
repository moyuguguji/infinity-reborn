### Timer ###
scoreboard players add @s dnl.timer 1

### Summon Pillar of Relic ###
execute at @s[scores={dnl.timer=40},tag=dnl.tops] run summon minecraft:area_effect_cloud ~8.5 ~12 ~8.5 {Duration:2147483647,Tags:["dnl.mob","dnl.guardian_ghast","dnl.pillar_of_relic","dnl.generate","dnl.tops"]}
execute at @s[scores={dnl.timer=70},tag=dnl.tops] run summon minecraft:area_effect_cloud ~-8.5 ~12 ~8.5 {Duration:2147483647,Tags:["dnl.mob","dnl.guardian_ghast","dnl.pillar_of_relic","dnl.generate","dnl.tops"]}
execute at @s[scores={dnl.timer=100},tag=dnl.tops] run summon minecraft:area_effect_cloud ~-8.5 ~12 ~-8.5 {Duration:2147483647,Tags:["dnl.mob","dnl.guardian_ghast","dnl.pillar_of_relic","dnl.generate","dnl.tops"]}
execute at @s[scores={dnl.timer=130},tag=dnl.tops] run summon minecraft:area_effect_cloud ~8.5 ~12 ~-8.5 {Duration:2147483647,Tags:["dnl.mob","dnl.guardian_ghast","dnl.pillar_of_relic","dnl.generate","dnl.tops"]}

execute at @s[scores={dnl.timer=40},tag=dnl.bars] run summon minecraft:area_effect_cloud ~8.5 ~12 ~8.5 {Duration:2147483647,Tags:["dnl.mob","dnl.guardian_ghast","dnl.pillar_of_relic","dnl.generate","dnl.bars"]}
execute at @s[scores={dnl.timer=70},tag=dnl.bars] run summon minecraft:area_effect_cloud ~-8.5 ~12 ~8.5 {Duration:2147483647,Tags:["dnl.mob","dnl.guardian_ghast","dnl.pillar_of_relic","dnl.generate","dnl.bars"]}
execute at @s[scores={dnl.timer=100},tag=dnl.bars] run summon minecraft:area_effect_cloud ~-8.5 ~12 ~-8.5 {Duration:2147483647,Tags:["dnl.mob","dnl.guardian_ghast","dnl.pillar_of_relic","dnl.generate","dnl.bars"]}
execute at @s[scores={dnl.timer=130},tag=dnl.bars] run summon minecraft:area_effect_cloud ~8.5 ~12 ~-8.5 {Duration:2147483647,Tags:["dnl.mob","dnl.guardian_ghast","dnl.pillar_of_relic","dnl.generate","dnl.bars"]}

execute at @s[scores={dnl.timer=190}] run playsound minecraft:entity.ghast.warn ambient @a ~ ~ ~ 16 0.8
execute at @s[scores={dnl.timer=250}] run playsound minecraft:entity.lightning_bolt.thunder ambient @a ~ ~ ~ 1 2

### Tag and Scoreboard Change ###
tag @s[scores={dnl.timer=250},tag=dnl.bars] add dnl.invulnerable
tag @s[scores={dnl.timer=250}] remove dnl.generate.pillar_of_relic
tag @s[scores={dnl.timer=250}] remove dnl.tops
tag @s[scores={dnl.timer=250}] remove dnl.bars
tag @s[scores={dnl.timer=250}] add dnl.barrier
scoreboard players reset @s[scores={dnl.timer=250}] dnl.timer
