#built using mc-build (https://github.com/mc-build/mc-build)

execute at @s as @e[type=marker,tag=dnl.raid,tag=dnl.start_raid,limit=1,sort=nearest] run tag @s add dnl.defeated
advancement revoke @s only dnl.lib:player_death_in_raid