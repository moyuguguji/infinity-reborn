### Axe on Shield ###
execute if predicate dnl:mobs/olympus/lord_of_olympus/axe_on_shield if entity @e[tag=dnl.knight,tag=dnl.shield,nbt={HurtTime:10s}] run playsound minecraft:item.shield.break master @s ~ ~ ~ 1 1 1
execute if predicate dnl:mobs/olympus/lord_of_olympus/axe_on_shield as @e[tag=dnl.knight,tag=dnl.shield,nbt={HurtTime:10s}] run effect give @s minecraft:instant_health 1 1
execute if predicate dnl:mobs/olympus/lord_of_olympus/axe_on_shield as @e[tag=dnl.knight,tag=dnl.shield,nbt={HurtTime:10s}] run function dnl:mobs/olympus/lord_of_olympus/weapon/shield_disable

### Shield ###
execute if entity @e[tag=dnl.knight,tag=dnl.shield,nbt={HurtTime:10s}] run effect give @s minecraft:weakness 3 4 true
execute if entity @e[tag=dnl.knight,tag=dnl.shield,nbt={HurtTime:10s}] run effect give @s minecraft:slowness 3 5 true
execute if entity @e[tag=dnl.knight,tag=dnl.shield,nbt={HurtTime:10s}] run playsound minecraft:item.shield.block master @s ~ ~ ~ 1 1 1

### Revoke Advancement ###
advancement revoke @s only dnl:mobs/knight/hurt
