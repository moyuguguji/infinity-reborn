#built using mc-build (https://github.com/mc-build/mc-build)

execute if entity @s[tag=dnl.collector] run function dnl.lib:collector/determine_type
execute if entity @s[tag=dnl.locked_chest] run function dnl.lib:locked_chest/determine_type
execute if entity @s[tag=dnl.spawner_chest] run function dnl.lib:spawner_chest/determine_type
execute if entity @s[tag=dnl.spawner] run function dnl.lib:spawner/determine_type
execute if entity @s[tag=dnl.raid] run function dnl.lib:raid/determine_type
execute if entity @s[tag=dnl.raid_mob_spawner] run function dnl.lib:raid_mob/determine_type
execute if entity @s[tag=dnl.dungeon_mob] run function dnl.lib:dungeon_mob/determine_type
execute if entity @s[tag=dnl.monolith] run function dnl.lib:monolith/determine_type
execute if entity @s[tag=dnl.custom_mob] run function dnl.lib:custom_mob/determine_type
execute if entity @s[tag=marker_killer] run function dnl.lib:__generated__/execute/21