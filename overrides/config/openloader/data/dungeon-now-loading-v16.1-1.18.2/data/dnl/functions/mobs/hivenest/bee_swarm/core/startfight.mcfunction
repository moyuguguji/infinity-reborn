### Bossbar ###
bossbar add dnl:bee_swarm {"text":"Bee Swarm","color":"aqua"}
bossbar set dnl:bee_swarm color purple
bossbar set dnl:bee_swarm max 6
bossbar set dnl:bee_swarm value 6
bossbar set dnl:bee_swarm style notched_6
bossbar set dnl:bee_swarm visible true

### Scoreboards ###
scoreboard players add @s dnl.phase 1
scoreboard players set @s dnl.health 6
scoreboard players set @s dnl.variable 0

### Tag ###
tag @s add dnl.bossstarted
tag @s remove dnl.healthdown

### Start Music ###
function dnl:music/hivenest/bee_swarm