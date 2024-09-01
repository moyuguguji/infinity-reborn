execute positioned ~ ~1.5 ~ as @e[type=minecraft:item_frame,tag=dnl.material,tag=dnl.material.used,distance=..2.1] run function dnl:crafting/reset_material
scoreboard players reset @s dnl.option
scoreboard players reset @s dnl.craftpoint

advancement grant @a[distance=..5] only dnl:story/general/craft_with_monolith
