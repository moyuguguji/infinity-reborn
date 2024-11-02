#built using mc-build (https://github.com/mc-build/mc-build)


execute if entity @s[nbt={Item:{id:"minecraft:iron_ingot",Count:1b,tag:{dnl.knightly_sword_fragment:1b}}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.knightly_sword_fragment:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.plains_castle:monolith/give/material_knightly_sword_fragment

execute if entity @s[nbt={Item:{id:"minecraft:enchanted_book",Count:1b,tag:{dnl.nobility:1b,dnl.level:1b}}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.nobility_i:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.plains_castle:monolith/give/material_nobility_i