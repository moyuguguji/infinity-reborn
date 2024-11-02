execute as @e[type=minecraft:item,nbt={Item:{id:"minecraft:barrier",Count:1b,tag:{dnl.olympus:1b,dnl.lord_of_olympus:1b,dnl.death:1b}}}] at @s run setblock ~ ~ ~ chest{LootTable:"dnl:structures/olympus/mobs/lord_of_olympus"} replace
execute as @e[type=minecraft:item,nbt={Item:{id:"minecraft:barrier",Count:1b,tag:{dnl.olympus:1b,dnl.lord_of_olympus:1b,dnl.death:1b}}}] at @s run playsound minecraft:entity.skeleton.hurt master @s ~ ~ ~ 1 0.5 1
execute as @e[type=minecraft:item,nbt={Item:{id:"minecraft:barrier",Count:1b,tag:{dnl.olympus:1b,dnl.lord_of_olympus:1b,dnl.death:1b}}}] at @s run particle minecraft:soul_fire_flame ~ ~ ~ 1 1 1 0.001 15
kill @e[type=minecraft:marker,tag=dnl.olympus,tag=dnl.wolf_location,sort=nearest,limit=1]
kill @e[type=minecraft:item,nbt={Item:{id:"minecraft:barrier",Count:1b,tag:{dnl.olympus:1b,dnl.lord_of_olympus:1b,dnl.death:1b}}}]
