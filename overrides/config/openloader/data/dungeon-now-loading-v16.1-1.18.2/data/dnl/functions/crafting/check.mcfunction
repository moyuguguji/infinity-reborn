### Tags ###
# For Crafter
# - dnl.crafter
# - dnl.(item to craft)
#
# For Materials
# - dnl.material
# - dnl.(material item)
#
# - dnl.material.used (if the material is used)

execute as @e[type=minecraft:item_frame,tag=dnl.crafter,nbt={Item:{Count:1b}}] at @s run function dnl:crafting/list
execute as @e[type=minecraft:item_frame,tag=dnl.crafter] unless entity @s[nbt={Item:{Count:1b}}] run data merge entity @s {Invulnerable:1b}
execute as @e[type=minecraft:item_frame,tag=dnl.crafter] at @s run particle minecraft:enchant ~ ~0.9 ~ 0.1 0 0.1 1 2 normal
