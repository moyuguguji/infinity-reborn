#built using mc-build (https://github.com/mc-build/mc-build)

loot spawn ~1.5 ~ ~1.5 loot dnl:items/knightly_sword
playsound minecraft:entity.experience_orb.pickup block @a[distance=..6] ~ ~ ~ 1 1 1
particle minecraft:totem_of_undying ~1 ~ ~1 0.3 0.3 0.3 0.001 5 normal
data merge entity @e[type=minecraft:item,distance=..3,nbt={Age:0s},sort=nearest,limit=1] {Glowing:1b,Age:-32768}
data remove entity @s Item.Count
execute as @e[type=minecraft:item_frame,nbt={Item:{tag:{dnl.material:1b}}},tag=dnl.used,dx=2,dy=2,dz=2] run function dnl.plains_castle:monolith/__generated__/execute/118