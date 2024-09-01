### Bossbar ###
bossbar add dnl:slimecore {"text":"Slime Core","color":"aqua"}
bossbar set dnl:slimecore color purple
bossbar set dnl:slimecore max 10
bossbar set dnl:slimecore value 10
bossbar set dnl:slimecore style notched_10
bossbar set dnl:slimecore visible true
bossbar set dnl:slimecore players @a[distance=..50]

### Scoreboards ###
scoreboard players add @s dnl.phase 1
scoreboard players set @s dnl.health 10
scoreboard players set @s dnl.variable 0

### Tag ###
tag @s add dnl.bossstarted
