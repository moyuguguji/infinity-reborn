### Required crafting materials ###
execute if entity @s[nbt={Item:{id:"minecraft:gold_ingot"}}] store success score @s dnl.success positioned ~ ~1.5 ~ as @e[type=minecraft:item_frame,tag=dnl.material,tag=dnl.gold_ingot,tag=!dnl.material.used,distance=..2.1,sort=random,limit=1] run function dnl:crafting/material_used
execute if entity @s[nbt={Item:{id:"minecraft:honey_bottle"}}] store success score @s dnl.success positioned ~ ~1.5 ~ as @e[type=minecraft:item_frame,tag=dnl.material,tag=dnl.honey_bottle,tag=!dnl.material.used,distance=..2.1,sort=random,limit=1] run function dnl:crafting/material_used
execute if entity @s[nbt={Item:{id:"minecraft:honeycomb"}}] store success score @s dnl.success positioned ~ ~1.5 ~ as @e[type=minecraft:item_frame,tag=dnl.material,tag=dnl.honeycomb,tag=!dnl.material.used,distance=..2.1,sort=random,limit=1] run function dnl:crafting/material_used

### Reset Crafter ###
execute if score @s dnl.success matches 1.. run function dnl:crafting/success

### Crafted item ###
execute if score @s dnl.craftpoint matches 9 run loot spawn ~ ~ ~ loot dnl:items/honeycomb_ingot

### Crafting Success ###
execute if score @s dnl.craftpoint matches 9 run playsound minecraft:entity.experience_orb.pickup block @a[distance=..6] ~ ~ ~ 1 1 1
execute if score @s dnl.craftpoint matches 9 run function dnl:crafting/reset_result
