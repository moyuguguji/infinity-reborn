execute as @s store result entity @s ArmorItems[0].tag.AttributeModifiers[0].UUID[0] int 1 run data get entity @e[tag=OwnerUUID,limit=1] Owner[0]
execute as @s store result entity @s ArmorItems[0].tag.AttributeModifiers[0].UUID[1] int 1 run data get entity @e[tag=OwnerUUID,limit=1] Owner[1]
execute as @s store result entity @s ArmorItems[0].tag.AttributeModifiers[0].UUID[2] int 1 run data get entity @e[tag=OwnerUUID,limit=1] Owner[2]
execute as @s store result entity @s ArmorItems[0].tag.AttributeModifiers[0].UUID[3] int 1 run data get entity @e[tag=OwnerUUID,limit=1] Owner[3]
tag @e remove OwnerUUID
