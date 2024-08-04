### Required crafting materials ###
execute if entity @s[nbt={Item:{id:"minecraft:skeleton_skull"}}] store success score @s dnl.success positioned ~ ~ ~ as @e[type=minecraft:item_frame,tag=dnl.material,tag=dnl.skeleton_skull,tag=!dnl.material.used,distance=..4.1,sort=random,limit=1] run function dnl:crafting/material_used

### Reset Crafter ###
execute if score @s dnl.success matches 1.. run function dnl:crafting/success

### Crafted item ###
execute if score @s dnl.craftpoint matches 1 run fill ~2 ~3 ~2 ~-2 ~-1 ~-2 minecraft:air
execute if score @s dnl.craftpoint matches 1 run fill ~3 ~4 ~3 ~-3 ~-2 ~-3 minecraft:andesite replace minecraft:bedrock
execute if score @s dnl.craftpoint matches 1 run kill @e[type=minecraft:item_frame,tag=dnl.material,tag=dnl.skeleton_skull,tag=dnl.material.used,distance=..4.1,sort=random,limit=1]

### Crafting Success ###
execute if score @s dnl.craftpoint matches 1 run playsound minecraft:entity.experience_orb.pickup block @a[distance=..4] ~ ~ ~ 1 1 1
execute if score @s dnl.craftpoint matches 1 run kill @s
