scoreboard players set in math 1
scoreboard players set in1 math 5
function rng:range_lcg

execute if score out math matches 1 run summon minecraft:slime ~ ~ ~ {Size:2,PersistenceRequired:1b,Tags:["dnl.sinkhole","dnl.mob","dnl.slime"],Silent:1b}
execute if score out math matches 2 run summon minecraft:slime ~ ~ ~ {Size:4,PersistenceRequired:1b,Tags:["dnl.sinkhole","dnl.mob","dnl.slime"],Silent:1b}
execute if score out math matches 3 run summon minecraft:slime ~ ~ ~ {Size:5,PersistenceRequired:1b,Tags:["dnl.sinkhole","dnl.mob","dnl.slime"],Silent:1b}
execute if score out math matches 4 run summon minecraft:slime ~ ~ ~ {Size:6,PersistenceRequired:1b,Tags:["dnl.sinkhole","dnl.mob","dnl.slime"],Silent:1b}
execute if score out math matches 5 run summon minecraft:slime ~ ~ ~ {Size:7,PersistenceRequired:1b,Tags:["dnl.sinkhole","dnl.mob","dnl.slime"],Silent:1b}

kill @s
