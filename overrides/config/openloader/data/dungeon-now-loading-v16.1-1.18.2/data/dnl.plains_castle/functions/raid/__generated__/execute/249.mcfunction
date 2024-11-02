#built using mc-build (https://github.com/mc-build/mc-build)

execute at @s run function dnl.plains_castle:raid/__generated__/execute/250
title @a[dx=20,dy=13,dz=20] actionbar {"text":""}
title @a[dx=20,dy=13,dz=20] actionbar {"text":"Challenge Complete!","color":"gold","italic":false}
scoreboard players reset @s dnl.timer
scoreboard players reset @s dnl.second
execute as @a[dx=20,dy=13,dz=20] run bossbar set dnl.raidbar0 visible false
execute as @a[dx=20,dy=13,dz=20] run bossbar set dnl.raidbar1 visible false
execute as @a[dx=20,dy=13,dz=20] run bossbar set dnl.raidbar2 visible false
execute as @a[dx=20,dy=13,dz=20] run bossbar set dnl.raidbar3 visible false
execute as @a[dx=20,dy=13,dz=20] run bossbar set dnl.raidbar4 visible false
execute as @a[dx=20,dy=13,dz=20] run bossbar set dnl.raidbar5 visible false
execute as @a[dx=20,dy=13,dz=20] run bossbar set dnl.raidbar6 visible false
execute as @a[dx=20,dy=13,dz=20] run bossbar set dnl.raidbar7 visible false
execute as @a[dx=20,dy=13,dz=20] run bossbar set dnl.raidbar8 visible false
execute as @a[dx=20,dy=13,dz=20] run bossbar set dnl.raidbar9 visible false
kill @e[type=minecraft:marker,dx=20,dy=13,dz=20,tag=dnl.raid_mob_spawner]
kill @s