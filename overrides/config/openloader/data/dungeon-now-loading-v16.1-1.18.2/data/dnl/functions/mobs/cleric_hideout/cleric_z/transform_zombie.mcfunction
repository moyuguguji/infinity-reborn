particle minecraft:cloud ~ ~ ~ 0.5 0.5 0.5 0.01 10

scoreboard players set in math 1
scoreboard players set in1 math 2
function rng:range_lcg

execute if score out math matches 1 run summon zombie_villager ~ ~ ~ {VillagerData:{profession:"minecraft:none",type:"minecraft:plains"},Offers:{},Tags:["dnl.mob","dnl.cleric_hideout","dnl.zombie_villager"]}
execute if score out math matches 2 run summon zombie_villager ~ ~ ~ {VillagerData:{profession:"minecraft:none",type:"minecraft:plains"},Offers:{},Tags:["dnl.mob","dnl.cleric_hideout","dnl.zombie_villager"]}

tp @s ~ ~-1000 ~
