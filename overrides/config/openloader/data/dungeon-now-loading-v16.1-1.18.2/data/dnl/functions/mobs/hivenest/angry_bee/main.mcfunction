### Tags ###
# - dnl.mob
# - dnl.hivenest
# - dnl.angry_bee

### Timer ###
scoreboard players add @s dnl.timer 1

### Recover Stinger ###
execute if score @s dnl.timer matches 1 run data merge entity @s {HasStung:0b,AngerTime:1000000,CannotEnterHiveTicks:1000000}

### Angry Target ###
execute if score @s dnl.timer matches 5.. run data modify entity @s AngryAt set from entity @p[distance=..20] UUID
scoreboard players reset @s[scores={dnl.timer=5..}] dnl.timer
