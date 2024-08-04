### Break Blocks ###
function dnl:mobs/olympus/lord_of_olympus/weapon/break_blocks

### Move ###
# - Phase 1 + 2
execute if score @s dnl.timer matches 1 run effect give @s minecraft:slowness 2 3 true
execute if score @s dnl.timer matches 1 run data merge entity @s {Attributes:[{Name:generic.knockback_resistance,Base:1.0d}]}
execute if score @s dnl.timer matches 1..40 run particle block dirt ~ ~ ~ 0.2 0 0.2 0.1 10 normal
execute if score @s dnl.timer matches 40 run effect give @s minecraft:speed 3 2 true
execute if score @s dnl.timer matches 40 run data merge entity @s {Attributes:[{Name:generic.knockback_resistance,Base:0.0d}]}

# - Phase 3
execute if score @s dnl.phase matches 3 if score @s dnl.timer matches 40..100 run setblock ~ ~ ~ minecraft:fire keep

execute if score @s dnl.timer matches 100.. run effect clear @s minecraft:speed
