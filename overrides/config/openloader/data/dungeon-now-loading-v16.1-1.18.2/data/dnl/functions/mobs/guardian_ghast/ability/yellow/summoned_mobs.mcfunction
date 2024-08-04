scoreboard players set in math 1
scoreboard players set in1 math 12
function rng:range_lcg

execute if score out math matches 1 at @s run summon creeper ~ ~ ~ {powered:1b}
execute if score out math matches 2 at @s run summon witch ~ ~ ~
execute if score out math matches 3 at @s run summon skeleton ~ ~ ~ {HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s}]}},{}],ArmorItems:[{},{},{},{id:"minecraft:iron_helmet",Count:1b,tag:{Enchantments:[{id:"minecraft:blast_protection",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s}]}}]}
execute if score out math matches 4 at @s run summon skeleton ~ ~ ~ {HandItems:[{id:"minecraft:iron_sword",Count:1b,tag:{Enchantments:[{id:"minecraft:sharpness",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s}]}},{}],ArmorItems:[{},{},{},{id:"minecraft:iron_helmet",Count:1b,tag:{Enchantments:[{id:"minecraft:blast_protection",lvl:5s},{id:"minecraft:vanishing_curse",lvl:1s}]}}]}
