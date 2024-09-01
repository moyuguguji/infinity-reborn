#built using mc-build (https://github.com/mc-build/mc-build)

playsound minecraft:entity.arrow.hit_player master @a ~ ~ ~ 1 1 0
particle lava ~ ~0.3 ~ 0.3 0.3 0.3 0.0001 10 normal

execute if score @s dnl.difficulty matches ..5 run setblock ~ ~ ~ chest[type=single]{LootTable:"dnl:structures/plains_castle/treasure_chest/raid_common"} replace
execute if score @s dnl.difficulty matches 6..7 run setblock ~ ~ ~ chest[type=single]{LootTable:"dnl:structures/plains_castle/treasure_chest/raid_rare"} replace
execute if score @s dnl.difficulty matches 8.. run setblock ~ ~ ~ chest[type=single]{LootTable:"dnl:structures/plains_castle/treasure_chest/raid_legendary"} replace
