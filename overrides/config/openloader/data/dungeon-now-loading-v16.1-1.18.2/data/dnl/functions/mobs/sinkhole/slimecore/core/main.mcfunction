### Tag List ###
# - dnl.mob
# - dnl.sinkhole
# - dnl.slimecore
# - dnl.core

# - dnl.bossstarted - boss fight has begun.
# - dnl.healthdown - for decreasing health of the boss.

### Start Fight ###
execute if entity @s[tag=!dnl.bossstarted] run function dnl:mobs/sinkhole/slimecore/core/startfight

### Timer ###
scoreboard players add @s[tag=dnl.bossstarted] dnl.timer 1

### Bossbar health and visibility ###
execute if entity @s[tag=dnl.bossstarted] run bossbar set dnl:slimecore players @a[distance=..50]
execute store result bossbar dnl:slimecore value run scoreboard players get @s dnl.health

### Slimeball Drops ###
execute as @e[type=minecraft:slime,tag=!dnl.slimecore,nbt={Size:0}] run data merge entity @s {DeathLootTable:"minecraft:empty"}

### Detect when Slimecore size decreases ###
execute if entity @e[type=minecraft:item,nbt={Item:{id:"minecraft:barrier",Count:1b,tag:{dnl.sinkhole:1b,dnl.slimecore:1b,dnl.healthdown:1b}}}] run scoreboard players remove @s dnl.health 1
execute as @e[type=minecraft:item,nbt={Item:{id:"minecraft:barrier",Count:1b,tag:{dnl.sinkhole:1b,dnl.slimecore:1b,dnl.healthdown:1b}}}] run function dnl:mobs/sinkhole/slimecore/core/size_decrease

### Enable AI for Splitted Slimes ###
execute as @e[type=minecraft:slime,tag=!dnl.slimecore,nbt={NoAI:1b},distance=..50] run function dnl:mobs/sinkhole/slimecore/core/slimes_ai

### Rumbling ###
execute if score @s dnl.timer matches 200 at @a[distance=..50] run function dnl:mobs/sinkhole/slimecore/boss/rumbling/summon
execute if score @s dnl.health matches ..8 if score @s dnl.timer matches 210 at @a[distance=..50] run function dnl:mobs/sinkhole/slimecore/boss/rumbling/summon
execute if score @s dnl.health matches ..8 if score @s dnl.timer matches 220 at @a[distance=..50] run function dnl:mobs/sinkhole/slimecore/boss/rumbling/summon
execute if score @s dnl.health matches ..4 if score @s dnl.timer matches 230 at @a[distance=..50] run function dnl:mobs/sinkhole/slimecore/boss/rumbling/summon
execute if score @s dnl.health matches ..4 if score @s dnl.timer matches 240 at @a[distance=..50] run function dnl:mobs/sinkhole/slimecore/boss/rumbling/summon
scoreboard players reset @s[scores={dnl.timer=240}] dnl.timer

### Phase Transition ###
execute if score @s dnl.health matches 9 run function dnl:mobs/sinkhole/slimecore/core/phase/transition/1
execute if score @s dnl.health matches 8 run function dnl:mobs/sinkhole/slimecore/core/phase/transition/2
execute if score @s dnl.health matches 6 run function dnl:mobs/sinkhole/slimecore/core/phase/transition/3
execute if score @s dnl.health matches 4 run function dnl:mobs/sinkhole/slimecore/core/phase/transition/4

execute if score @s dnl.health matches 0 run function dnl:mobs/sinkhole/slimecore/core/phase/transition/end

### Kill if No Slimecore ###
execute unless entity @e[type=minecraft:slime,tag=dnl.slimecore,tag=dnl.boss,distance=..50] run bossbar set dnl:slimecore visible false
execute unless entity @e[type=minecraft:slime,tag=dnl.slimecore,tag=dnl.boss,distance=..50] run kill @s
