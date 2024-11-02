#built using mc-build (https://github.com/mc-build/mc-build)


execute if score @s dnl.difficulty matches ..5 run bossbar set dnl.raidbar0 color green
execute if score @s dnl.difficulty matches 6..7 run bossbar set dnl.raidbar0 color red
execute if score @s dnl.difficulty matches 8.. run bossbar set dnl.raidbar0 color purple

bossbar set dnl.raidbar0 name "Remaining Mobs"
bossbar set dnl.raidbar0 players @a
bossbar set dnl.raidbar0 style progress
execute store result bossbar dnl.raidbar0 max run execute if entity @e[type=minecraft:marker,dx=20,dy=13,dz=20,tag=dnl.raid_mob_spawner]
execute store result bossbar dnl.raidbar0 value run execute if entity @e[type=minecraft:marker,dx=20,dy=13,dz=20,tag=dnl.raid_mob_spawner]
execute as @a[dx=20,dy=13,dz=20] run bossbar set dnl.raidbar0 visible true