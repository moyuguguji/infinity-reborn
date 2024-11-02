### Required crafting materials ###
execute if entity @s[nbt={Item:{id:"minecraft:clock",tag:{dnl.olympus_key:1b}}}] store success score @s dnl.success positioned ~ ~ ~ as @e[type=minecraft:item_frame,tag=dnl.material,tag=dnl.olympus_key,tag=!dnl.material.used,distance=..4.1,sort=random,limit=1] run function dnl:crafting/material_used

### Reset Crafter ###
execute if score @s dnl.success matches 1.. run function dnl:crafting/success

### Crafted item ###
execute if score @s dnl.craftpoint matches 3 run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 minecraft:air
execute if score @s dnl.craftpoint matches 3 run fill ~2 ~2 ~2 ~-2 ~-2 ~-2 minecraft:andesite replace minecraft:bedrock

### Crafting Success ###
execute if score @s dnl.craftpoint matches 3 run playsound minecraft:entity.experience_orb.pickup block @a[distance=..4] ~ ~ ~ 1 1 1
execute if score @s dnl.craftpoint matches 3 run kill @s
