scoreboard players set in math 1
scoreboard players set in1 math 3
function rng:range_lcg

execute if score out math matches 1..2 run data merge entity @s {damage:20.0d,Tags:["dnl.olympus_arrow"],Fire:100,PierceLevel:1b,CustomPotionEffects:[{Id:7b,Amplifier:0b,Duration:1}]}
execute if score out math matches 3 run data merge entity @s {damage:20.0d,Tags:["dnl.olympus_arrow"]}
