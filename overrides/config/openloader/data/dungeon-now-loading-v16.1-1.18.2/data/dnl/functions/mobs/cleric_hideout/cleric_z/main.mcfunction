execute if entity @s[tag=!dnl.init] run function dnl:mobs/cleric_hideout/cleric_z/init

## Boss Health ###
execute as @s store result score @s dnl.health run data get entity @s Health 1

### Transform nearby zombies to zombie villagers ###
execute as @e[type=minecraft:zombie,distance=..64] at @s run function dnl:mobs/cleric_hideout/cleric_z/transform_zombie
execute as @e[type=minecraft:zombie_villager,distance=..64,tag=!dnl.zombie_villager] run function dnl:mobs/cleric_hideout/cleric_z/enhance_zombie

### Phase 1 ###
# Transition to next phase
execute if score @s dnl.phase matches 1 if score @s dnl.health matches ..150 at @s run function dnl:mobs/cleric_hideout/cleric_z/phase/transition/2

### Phase 2 ###
# transition to next phase
execute if score @s dnl.phase matches 2 if score @s dnl.health matches ..100 at @s run function dnl:mobs/cleric_hideout/cleric_z/phase/transition/3

### Phase 3 ###
# transition to next phase
execute if score @s dnl.phase matches 3 if score @s dnl.health matches ..50 at @s run function dnl:mobs/cleric_hideout/cleric_z/phase/transition/4
