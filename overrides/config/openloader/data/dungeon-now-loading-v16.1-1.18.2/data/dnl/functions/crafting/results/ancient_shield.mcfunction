### Required crafting materials ###
execute if entity @s[nbt={Item:{id:"minecraft:netherite_ingot"}}] store success score @s dnl.success positioned ~ ~1.5 ~ as @e[type=minecraft:item_frame,tag=dnl.material,tag=dnl.netherite_ingot,tag=!dnl.material.used,distance=..2.1,sort=random,limit=1] run function dnl:crafting/material_used
execute if entity @s[nbt={Item:{id:"minecraft:shield",tag:{Enchantments:[{id:"minecraft:vanishing_curse",lvl:1s}]}}}] store success score @s dnl.success positioned ~ ~1.5 ~ as @e[type=minecraft:item_frame,tag=dnl.material,tag=dnl.shield,tag=dnl.vanishing_curse,tag=!dnl.material.used,distance=..2.1,sort=random,limit=1] run function dnl:crafting/material_used

### Reset Crafter ###
execute if score @s dnl.success matches 1.. run function dnl:crafting/success

### Crafted item ###
execute if score @s dnl.craftpoint matches 6 run loot spawn ~ ~ ~ loot dnl:items/ancient_shield

### Crafting Success ###
execute if score @s dnl.craftpoint matches 6 run playsound minecraft:entity.experience_orb.pickup block @a[distance=..6] ~ ~ ~ 1 1 1
execute if score @s dnl.craftpoint matches 6 run function dnl:crafting/reset_result
