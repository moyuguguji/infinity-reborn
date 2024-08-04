### Restore Island ###
# - Blue
execute if entity @s[tag=dnl.blue] run setblock ~-10 ~-12 ~-6 minecraft:structure_block{mode:"LOAD",posX:0,posY:0,posZ:0,name:"dnl:temple_of_tears/restore/ghast_blue"}
execute if entity @s[tag=dnl.blue] run setblock ~-10 ~-11 ~-6 minecraft:redstone_block
execute if entity @s[tag=dnl.blue] run fill ~-10 ~-12 ~-6 ~-10 ~-11 ~-6 minecraft:air

# - Red
execute if entity @s[tag=dnl.red] run setblock ~-6 ~-12 ~-10 minecraft:structure_block{mode:"LOAD",posX:0,posY:0,posZ:0,name:"dnl:temple_of_tears/restore/ghast_red"}
execute if entity @s[tag=dnl.red] run setblock ~-6 ~-11 ~-10 minecraft:redstone_block
execute if entity @s[tag=dnl.red] run fill ~-6 ~-12 ~-10 ~-6 ~-11 ~-10 minecraft:air

# - Yellow
execute if entity @s[tag=dnl.yellow] run setblock ~-6 ~-12 ~-6 minecraft:structure_block{mode:"LOAD",posX:0,posY:0,posZ:0,name:"dnl:temple_of_tears/restore/ghast_yellow"}
execute if entity @s[tag=dnl.yellow] run setblock ~-6 ~-11 ~-6 minecraft:redstone_block
execute if entity @s[tag=dnl.yellow] run fill ~-6 ~-12 ~-6 ~-6 ~-11 ~-6 minecraft:air

tag @s remove dnl.restore
