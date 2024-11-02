### Tag List ###
# - dnl.mob
# - dnl.hivenest
# - dnl.bee_swarm
# - dnl.core

# - dnl.bossstarted - boss fight has begun.
# - dnl.healthdown - for decreasing health of the boss.

### When a beenest is destroyed ###
execute if entity @s[tag=dnl.healthdown,tag=dnl.bossstarted] run function dnl:mobs/hivenest/bee_swarm/core/healthdown
execute if entity @s[tag=dnl.healthdown,tag=!dnl.bossstarted] run function dnl:mobs/hivenest/bee_swarm/core/startfight

### Boss Bar Visibiliy ###
execute if entity @s[tag=dnl.bossstarted] run bossbar set dnl:bee_swarm players @a[distance=..50]

### Count Total Bees ###
execute store result score @s dnl.variable run execute if entity @e[type=minecraft:bee,tag=dnl.mob,tag=dnl.hivenest,tag=dnl.angry_bee,tag=dnl.boss,distance=..150]

### Phase 1 - (6 ~ 5 Bee Nest) ###
execute if score @s dnl.phase matches 1 run function dnl:mobs/hivenest/bee_swarm/core/phase/effect/1

# - transition to 2
execute if score @s dnl.phase matches 1 if score @s dnl.health matches 4 run function dnl:mobs/hivenest/bee_swarm/core/phase/transition/2

### Phase 2 - (4 ~ 2 Bee Nest) ###
execute if score @s dnl.phase matches 2 run function dnl:mobs/hivenest/bee_swarm/core/phase/effect/2

# - transition to 3
execute if score @s dnl.phase matches 2 if score @s dnl.health matches 1 run function dnl:mobs/hivenest/bee_swarm/core/phase/transition/3

### Phase 3 - (1 Bee Nest) ###
execute if score @s dnl.phase matches 3 run function dnl:mobs/hivenest/bee_swarm/core/phase/effect/3

# - transition to end
execute if score @s dnl.phase matches 3 if score @s dnl.health matches 0 run function dnl:mobs/hivenest/bee_swarm/core/phase/transition/end
