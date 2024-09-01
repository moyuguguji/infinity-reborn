scoreboard players set in math 1
scoreboard players set in1 math 28
function rng:range_lcg

scoreboard players set #14 dnl.constant 14

execute if score out math matches 1 at @s run summon minecraft:skeleton ~ ~ ~ {Tags:["camp_mob"]}
execute if score out math matches 2 at @s run summon minecraft:stray ~ ~ ~ {Tags:["camp_mob"]}
execute if score out math matches 3 at @s run summon minecraft:spider ~ ~ ~ {Tags:["camp_mob"]}
execute if score out math matches 4 at @s run summon minecraft:skeleton ~ ~ ~ {Tags:["camp_mob"],HandItems:[{id:"minecraft:golden_hoe",Count:1b,tag:{Enchantments:[{id:"minecraft:sharpness",lvl:5s}]}},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{},{id:"minecraft:leather_helmet",Count:1b,tag:{display:{color:15728397},Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.085F,0.000F]}
execute if score out math matches 5 at @s run summon minecraft:skeleton ~ ~ ~ {Tags:["camp_mob"],HandItems:[{id:"minecraft:golden_sword",Count:1b,tag:{Enchantments:[{id:"minecraft:sharpness",lvl:5s}]}},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{},{id:"minecraft:jack_o_lantern",Count:1b}],ArmorDropChances:[0.085F,0.085F,0.085F,0.000F]}
execute if score out math matches 6 at @s run summon minecraft:skeleton ~ ~ ~ {Tags:["camp_mob"],HandItems:[{id:"minecraft:iron_pickaxe",Count:1b,tag:{Unbreakable:1b}},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{},{id:"minecraft:chainmail_helmet",Count:1b,tag:{Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.085F,0.000F]}
execute if score out math matches 7 at @s run summon minecraft:skeleton ~ ~ ~ {Tags:["camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{id:"minecraft:iron_chestplate",Count:1b,tag:{Unbreakable:1b}},{id:"minecraft:iron_helmet",Count:1b,tag:{Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.000F,0.000F]}
execute if score out math matches 8 at @s run summon minecraft:skeleton ~ ~ ~ {Tags:["camp_mob"],HandItems:[{},{}]}
execute if score out math matches 9 at @s run summon minecraft:skeleton ~ ~ ~ {Tags:["camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b},{}]}
execute if score out math matches 10 at @s run summon minecraft:stray ~ ~ ~ {Tags:["camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b},{}]}
execute if score out math matches 11 at @s run summon stray ~ ~ ~ {Tags:["camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{},{id:"minecraft:iron_helmet",Count:1b}],ArmorDropChances:[0.085F,0.085F,0.085F,0.000F]}
execute if score out math matches 12 at @s run summon stray ~ ~ ~ {Tags:["camp_mob"],HandItems:[{id:"minecraft:iron_sword",Count:1b},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{id:"minecraft:iron_chestplate",Count:1b,tag:{Unbreakable:1b}},{id:"minecraft:iron_helmet",Count:1b,tag:{Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.000F,0.000F]}
execute if score out math matches 13 at @s run summon stray ~ ~ ~ {Tags:["camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:1s},{id:"minecraft:punch",lvl:1s}]}},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{id:"minecraft:iron_chestplate",Count:1b,tag:{Unbreakable:1b}},{id:"minecraft:diamond_helmet",Count:1b,tag:{Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.000F,0.000F]}
execute if score out math matches 14 at @s run summon spider ~ ~ ~ {Tags:["camp_mob"],Passengers:[{id:"minecraft:stray",Tags:["camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:1s},{id:"minecraft:punch",lvl:1s}]}},{}],ArmorItems:[{},{},{id:"minecraft:iron_chestplate",Count:1b,tag:{Unbreakable:1b}},{id:"minecraft:diamond_helmet",Count:1b,tag:{Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.000F,0.000F]}]}

execute if score out math <= #14 dnl.constant at @s at @e[sort=nearest,type=!arrow,limit=1] run particle minecraft:cloud ~ ~ ~ 0.5 1 0.5 0.0000001 30

kill @s
