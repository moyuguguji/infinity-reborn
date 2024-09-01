### Hivenest ###
execute if entity @s[tag=dnl.honeycomb_ingot] run function dnl:crafting/results/honeycomb_ingot
execute if entity @s[tag=dnl.hive_chest] run function dnl:crafting/results/hive_chest
execute if entity @s[tag=dnl.honey_potion] run function dnl:crafting/results/honey_potion

### Forgotten Field ###
execute if entity @s[tag=dnl.golem_heart_chestplate] run function dnl:crafting/results/golem_heart_chestplate
execute if entity @s[tag=dnl.golem_heart_helmet] run function dnl:crafting/results/golem_heart_helmet
execute if entity @s[tag=dnl.golem_heart_leggings] run function dnl:crafting/results/golem_heart_leggings
execute if entity @s[tag=dnl.golem_heart_boots] run function dnl:crafting/results/golem_heart_boots

### Olympus ###
execute if entity @s[tag=dnl.ancient_sword] run function dnl:crafting/results/ancient_sword
execute if entity @s[tag=dnl.ancient_axe] run function dnl:crafting/results/ancient_axe
execute if entity @s[tag=dnl.ancient_bow] run function dnl:crafting/results/ancient_bow
execute if entity @s[tag=dnl.ancient_pickaxe] run function dnl:crafting/results/ancient_pickaxe
execute if entity @s[tag=dnl.ancient_shield] run function dnl:crafting/results/ancient_shield

# Locked Gate
execute if entity @s[tag=dnl.olympus_boss_gate] run function dnl:crafting/locks/olympus_boss_gate
execute if entity @s[tag=dnl.olympus_gate] run function dnl:crafting/locks/olympus_gate



### addon ###
function adn1:crafting/list
function adn2:crafting/list
function adn3:crafting/list
function adn4:crafting/list
function adn5:crafting/list


data merge entity @s {Invulnerable:0b}
