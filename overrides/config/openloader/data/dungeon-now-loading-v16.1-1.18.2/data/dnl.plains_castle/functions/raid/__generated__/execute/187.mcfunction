#built using mc-build (https://github.com/mc-build/mc-build)

execute if entity @s[dx=20,dy=13,dz=20] run bossbar set dnl.raidbar1 visible true
execute unless entity @s[dx=20,dy=13,dz=20] run bossbar set dnl.raidbar1 visible false