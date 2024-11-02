#built using mc-build (https://github.com/mc-build/mc-build)

execute as @a[distance=30..] run bossbar set dnl.bossbar3 visible false
execute as @a[distance=..30] run bossbar set dnl.bossbar3 visible true
execute store result bossbar dnl.bossbar3 value as @s run scoreboard players get @s dnl.health