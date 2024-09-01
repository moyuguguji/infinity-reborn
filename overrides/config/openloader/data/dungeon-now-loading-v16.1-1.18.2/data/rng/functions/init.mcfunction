scoreboard objectives add dist dummy
scoreboard objectives add math dummy

forceload add 6942069 6942069
setblock 6942069 255 6942069 shulker_box
data remove block 6942069 255 6942069 Items

scoreboard players reset * dist

scoreboard objectives add constant dummy
scoreboard players set #2 constant 2
scoreboard players set #lcg constant 1103515245

execute unless score #lcg math matches ..0 unless score #lcg math matches 1.. run function rng:uuid_reset
