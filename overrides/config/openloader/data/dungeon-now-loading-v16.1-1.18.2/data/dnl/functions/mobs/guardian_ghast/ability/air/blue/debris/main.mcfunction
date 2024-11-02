### Timer ###
scoreboard players add @s dnl.timer 1

execute as @s[scores={dnl.timer=1}] run fill ~-1 ~-1 ~-1 ~1 ~1 ~1 minecraft:packed_ice
execute as @s[scores={dnl.timer=1}] run playsound minecraft:block.glass.break ambient @a ~ ~ ~ 5 0.5

execute at @s[scores={dnl.timer=100..}] run particle block blue_ice ~ ~ ~ 3 3 3 1 50 force
execute as @s[scores={dnl.timer=100..}] run playsound minecraft:block.glass.break ambient @a ~ ~ ~ 5 0.5
execute as @s[scores={dnl.timer=100..}] run fill ~-1 ~-1 ~-1 ~1 ~1 ~1 minecraft:air
kill @s[scores={dnl.timer=100..}]
