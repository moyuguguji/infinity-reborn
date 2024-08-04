### Particle ###
particle minecraft:enchant ~ ~3.8 ~ 0.1 0 0.1 1 2 normal
particle minecraft:falling_obsidian_tear ~ ~2 ~ 0.1 0 0.1 0.01 1 normal
particle minecraft:ash ~ ~2 ~ 0.1 0 0.1 0.01 2 normal

### Broken Seal ###
execute positioned ~ ~2 ~ unless entity @e[type=minecraft:item,nbt={Item:{id:"minecraft:enchanted_book",Count:1b,tag:{SealedRelic:1b}}},distance=..0.1] run function dnl:mobs/guardian_ghast/core/passive/broken_seal
