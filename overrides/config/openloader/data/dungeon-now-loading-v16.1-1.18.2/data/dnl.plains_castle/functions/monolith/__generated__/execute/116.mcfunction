#built using mc-build (https://github.com/mc-build/mc-build)

playsound minecraft:entity.experience_orb.pickup block @a[distance=..6] ~ ~ ~ 1 1 1
particle minecraft:totem_of_undying ~ ~0.5 ~
data remove entity @s Item.Count
scoreboard players reset #dnl.success dnl.temp