### Break Blocks ###
function dnl:mobs/olympus/lord_of_olympus/weapon/break_blocks

### Moves ###
execute if score @s dnl.timer matches 1 run effect give @s minecraft:speed 5 0 true
execute if score @s dnl.timer matches 1 if score @s dnl.phase matches 1 run function dnl:mobs/olympus/lord_of_olympus/weapon/pickaxe_random_spawner
execute if score @s dnl.timer matches 1 if score @s dnl.phase matches 2 run function dnl:mobs/olympus/lord_of_olympus/weapon/pickaxe_random_spawner_2
execute if score @s dnl.timer matches 1 if score @s dnl.phase matches 3 run function dnl:mobs/olympus/lord_of_olympus/weapon/pickaxe_random_spawner_3
execute if score @s dnl.timer matches 100.. run effect clear @s minecraft:speed
