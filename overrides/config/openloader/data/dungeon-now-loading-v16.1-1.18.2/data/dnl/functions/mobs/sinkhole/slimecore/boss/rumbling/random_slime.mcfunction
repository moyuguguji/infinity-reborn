scoreboard players set in math 1
scoreboard players set in1 math 8
function rng:range_lcg

execute if score out math matches 1..4 run summon minecraft:slime ~ ~ ~ {Tags:["dnl.mob","dnl.sinkhole","dnl.boss_minion"],Size:0,ActiveEffects:[{Id:11b,Amplifier:4b,Duration:40}]}
execute if score out math matches 5..7 run summon minecraft:slime ~ ~ ~ {Tags:["dnl.mob","dnl.sinkhole","dnl.boss_minion"],Size:1,ActiveEffects:[{Id:11b,Amplifier:4b,Duration:40}]}
execute if score out math matches 8 run summon minecraft:slime ~ ~ ~ {Tags:["dnl.mob","dnl.sinkhole","dnl.boss_minion"],Size:4,ActiveEffects:[{Id:11b,Amplifier:4b,Duration:40}]}
