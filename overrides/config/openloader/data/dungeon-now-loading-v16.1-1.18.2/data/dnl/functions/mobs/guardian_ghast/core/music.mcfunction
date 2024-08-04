### Timer ###
scoreboard players add @s dnl.musictimer 1

execute as @s[scores={dnl.musictimer=5560}] run stopsound @a master minecraft:dnl.temple_of_tears.ambient
execute as @s[scores={dnl.musictimer=5560}] run schedule function dnl:music/start 1d replace

execute as @s[scores={dnl.musictimer=5560}] run playsound minecraft:dnl.temple_of_tears.boss voice @a[distance=..80] ~ 1000 ~ 1000000 1 1
#execute as @s[scores={dnl.musictimer=5560}] run weather thunder 1000000

scoreboard players reset @s[scores={dnl.musictimer=5560}] dnl.musictimer
