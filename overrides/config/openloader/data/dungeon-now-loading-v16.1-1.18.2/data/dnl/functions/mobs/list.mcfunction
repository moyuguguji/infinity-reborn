### Instruction ###
# The area effect cloud has the following tags:
# - dnl.mob
# - dnl.(entity)

execute as @s[tag=dnl.noai] run function dnl:mobs/ai/enable

execute as @s[tag=dnl.guardian_ghast] run function dnl:mobs/guardian_ghast/list
execute as @s[tag=dnl.hivenest] run function dnl:mobs/hivenest/list
execute as @s[tag=dnl.sinkhole] run function dnl:mobs/sinkhole/list
execute as @s[tag=dnl.cleric_hideout] run function dnl:mobs/cleric_hideout/list
execute as @s[tag=dnl.forgotten_field] run function dnl:mobs/forgotten_field/list
execute as @s[tag=dnl.olympus] run function dnl:mobs/olympus/list

### addon ###
function adn1:mobs/list
function adn2:mobs/list
function adn3:mobs/list
function adn4:mobs/list
function adn5:mobs/list
