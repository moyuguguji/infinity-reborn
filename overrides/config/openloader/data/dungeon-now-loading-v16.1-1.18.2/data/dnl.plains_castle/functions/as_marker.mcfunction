#built using mc-build (https://github.com/mc-build/mc-build)

execute if entity @s[tag=dnl.the_king] run function dnl.plains_castle:the_king/marker
execute if entity @s[tag=dnl.collector] run function dnl.plains_castle:collector/determine_type
execute if entity @s[tag=dnl.locked_chest] run function dnl.plains_castle:locked_chest/determine_type
execute if entity @s[tag=dnl.spawner_chest] run function dnl.plains_castle:spawner_chest/determine_type
execute if entity @s[tag=dnl.spawner] run function dnl.plains_castle:spawner/determine_type
execute if entity @s[tag=dnl.raid] run function dnl.plains_castle:raid/determine_type
execute if entity @s[tag=dnl.raid_mob_spawner] run function dnl.plains_castle:raid_mob/determine_type
execute if entity @s[tag=dnl.dungeon_mob] run function dnl.plains_castle:dungeon_mob/determine_type
execute if entity @s[tag=dnl.monolith] run function dnl.plains_castle:monolith/determine_type
execute if entity @s[tag=dnl.custom_mob] run function dnl.plains_castle:custom_mob/determine_type