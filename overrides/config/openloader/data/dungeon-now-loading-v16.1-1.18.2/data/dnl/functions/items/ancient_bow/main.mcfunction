execute if score @s dnl.arrowshot matches 1.. if predicate dnl:items/list/ancient_bow/red as @e[type=minecraft:arrow,limit=1,sort=nearest] run function dnl:items/ancient_bow/detect_arrow/red
execute if score @s dnl.arrowshot matches 1.. if predicate dnl:items/list/ancient_bow/blue as @e[type=minecraft:arrow,limit=1,sort=nearest] run function dnl:items/ancient_bow/detect_arrow/blue
execute if score @s dnl.arrowshot matches 1.. if predicate dnl:items/list/ancient_bow/yellow as @e[type=minecraft:arrow,limit=1,sort=nearest] run function dnl:items/ancient_bow/detect_arrow/yellow

execute if score @s dnl.arrowshot matches 1.. if predicate dnl:items/list/ancient_bow/red run clear @s minecraft:ghast_tear 1
execute if score @s dnl.arrowshot matches 1.. if predicate dnl:items/list/ancient_bow/blue run clear @s minecraft:ghast_tear 1
execute if score @s dnl.arrowshot matches 1.. if predicate dnl:items/list/ancient_bow/yellow run clear @s minecraft:ghast_tear 1

execute if score @s dnl.arrowshot matches 1.. as @e[type=minecraft:arrow,limit=1,sort=nearest] run function dnl:items/ancient_bow/arrow_damage
