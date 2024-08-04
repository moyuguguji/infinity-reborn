bossbar remove dnl:guardian_ghast

setblock ~-2.5 ~-4 ~-2.5 minecraft:structure_block{mode:"LOAD",posX:0,posY:0,posZ:0,name:"dnl:temple_of_tears/reward"}
setblock ~-2.5 ~-3 ~-2.5 minecraft:redstone_block

advancement grant @a[distance=..200] only dnl:story/structures/temple_of_tears/sisters_of_sorrow
stopsound @a[distance=..200] voice minecraft:dnl.temple_of_tears.boss

weather clear

kill @e[tag=dnl.guardian_ghast,distance=..80]
