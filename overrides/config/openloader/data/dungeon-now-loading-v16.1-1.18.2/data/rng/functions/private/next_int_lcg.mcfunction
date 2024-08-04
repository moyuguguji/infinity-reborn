function rng:lcg

scoreboard players operation #temp math = out math
scoreboard players operation out math %= #range math
scoreboard players operation #temp math -= out math
scoreboard players operation #temp math += #m1 math
execute if score #temp math matches ..-1 run function rng:private/next_int_lcg
