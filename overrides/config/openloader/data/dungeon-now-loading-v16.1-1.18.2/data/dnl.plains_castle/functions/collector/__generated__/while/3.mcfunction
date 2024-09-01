#built using mc-build (https://github.com/mc-build/mc-build)


execute positioned ~ ~1 ~ at @e[type=minecraft:item,tag=!dnl.unconvertable,distance=..0.5,nbt={Item:{id:"minecraft:iron_ingot"}},sort=nearest,limit=1] run loot spawn ~ ~ ~ loot dnl:items/knightly_sword_fragment

data merge entity @e[type=minecraft:item,distance=..3,nbt={Age:0s},sort=nearest,limit=1] {Glowing:1b,Age:-32768,Tags:["dnl.unconvertable"]}
execute positioned ~ ~1 ~ run particle flame ~ ~ ~ 0.3 0.3 0.3 0.001 5 normal
playsound minecraft:entity.blaze.shoot master @a ~ ~ ~ 1 1 0
scoreboard players remove @s dnl.col_count 50
scoreboard players set #WHILE_1 LANG_MC_INTERNAL 1
function dnl.plains_castle:collector/__generated__/while/2