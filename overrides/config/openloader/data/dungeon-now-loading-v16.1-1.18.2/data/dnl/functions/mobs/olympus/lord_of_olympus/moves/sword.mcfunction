### Shield Chance ###
execute if score @s dnl.timer matches 40 run scoreboard players set in math 1
execute if score @s dnl.timer matches 40 run scoreboard players set in1 math 2
execute if score @s dnl.timer matches 40 run function rng:range_lcg

### Moves ###
# - Phase 1 (Pickaxe)
execute if entity @s[tag=!dnl.pickaxe_off_hand] unless block ^ ^ ^1 minecraft:air unless block ^1 ^ ^1 minecraft:air unless block ^-1 ^ ^1 minecraft:air run function dnl:mobs/olympus/lord_of_olympus/weapon/pickaxe_off_hand
execute if score @s[tag=dnl.pickaxe_off_hand] dnl.timer matches 100.. run function dnl:mobs/olympus/lord_of_olympus/weapon/pickaxe_off_hand_disable

# - Phase 2 (Shield)
execute if score out math matches 2 if score @s dnl.phase matches 2..3 if score @s[tag=!dnl.shield] dnl.timer matches 40 if entity @a[distance=..5] run function dnl:mobs/olympus/lord_of_olympus/weapon/shield_off_hand
execute if score @s[tag=dnl.shield] dnl.timer matches 100.. run function dnl:mobs/olympus/lord_of_olympus/weapon/shield_disable
