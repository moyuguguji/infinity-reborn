execute if entity @s[tag=!dnl.init] run function dnl:mobs/olympus/lord_of_olympus/init

## Boss Health ###
execute as @s store result score @s dnl.health run data get entity @s Health 1

### Boss Bar ###
# visibility
execute as @a[distance=30..] run bossbar set dnl:lord_of_olympus visible false
execute as @a[distance=..30] run bossbar set dnl:lord_of_olympus visible true
# health updating
execute store result bossbar dnl:lord_of_olympus value as @s run scoreboard players get @s dnl.health

### Potion Effect ###
effect give @s minecraft:fire_resistance 2 0 true

### Regeneration ###
execute unless score @s dnl.health matches 300 run function dnl:mobs/olympus/lord_of_olympus/regeneration

### Timer ###
scoreboard players add @s dnl.timer 1

### Weapons ###
execute as @s[tag=dnl.axe] run function dnl:mobs/olympus/lord_of_olympus/moves/axe
execute as @s[tag=dnl.bow] run function dnl:mobs/olympus/lord_of_olympus/moves/bow
execute as @s[tag=dnl.sword] run function dnl:mobs/olympus/lord_of_olympus/moves/sword
execute as @s[tag=dnl.pickaxe] run function dnl:mobs/olympus/lord_of_olympus/moves/pickaxe
execute as @s[tag=dnl.pickaxe_off_hand] run function dnl:mobs/olympus/lord_of_olympus/moves/pickaxe_off_hand

### Phases ###
# Phase 1
execute if score @s dnl.health matches 201..300 run scoreboard players set @s dnl.phase 1
execute if score @s dnl.phase matches 1 run function dnl:mobs/olympus/lord_of_olympus/phase/effect/1
# Phase 2
execute if score @s dnl.health matches 101..200 run scoreboard players set @s dnl.phase 2
execute if score @s dnl.phase matches 2 run function dnl:mobs/olympus/lord_of_olympus/phase/effect/2
# Phase 3
execute if score @s dnl.health matches ..100 run scoreboard players set @s dnl.phase 3
execute if score @s dnl.phase matches 3 run function dnl:mobs/olympus/lord_of_olympus/phase/effect/3
