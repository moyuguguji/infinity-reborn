### Tag List ###
# - dnl.mob
# - dnl.sinkhole
# - dnl.slimecore
# - dnl.boss

# - dnl.bossstarted - boss fight has begun.

### Boss Bar Visibiliy ###
execute if entity @s[tag=dnl.bossstarted] run bossbar set dnl:slimecore players @a[distance=..50]

### Falling AI ###
execute if entity @s[nbt={wasOnGround:0b}] run data merge entity @s {NoAI:0b,Rotation:[-90.0f,0.0f]}
execute if entity @s[nbt={wasOnGround:1b}] run data merge entity @s {NoAI:1b,Rotation:[-90.0f,0.0f]}

### Spawn Slime whenever it gets damaged ###
execute if entity @s[nbt={HurtTime:10s}] run function dnl:mobs/sinkhole/slimecore/boss/random_slime
