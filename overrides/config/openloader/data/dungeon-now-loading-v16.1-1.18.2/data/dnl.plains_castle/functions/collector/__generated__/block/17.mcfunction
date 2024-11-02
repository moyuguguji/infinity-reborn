#built using mc-build (https://github.com/mc-build/mc-build)

setblock ~ ~ ~ minecraft:chiseled_stone_bricks

summon glow_item_frame ~ ~ ~1 {Facing:3b,Invulnerable:1b,Invisible:1b,Fixed:1b,Tags:["dnl.collector_item_frame",dnl.knightly_sword_fragment],Item:{id:"minecraft:iron_ingot",Count:1b}}
summon glow_item_frame ~1 ~ ~ {Facing:5b,Invulnerable:1b,Invisible:1b,Fixed:1b,Tags:["dnl.collector_item_frame",dnl.knightly_sword_fragment],Item:{id:"minecraft:iron_ingot",Count:1b}}
summon glow_item_frame ~ ~ ~-1 {Facing:2b,Invulnerable:1b,Invisible:1b,Fixed:1b,Tags:["dnl.collector_item_frame",dnl.knightly_sword_fragment],Item:{id:"minecraft:iron_ingot",Count:1b}}
summon glow_item_frame ~-1 ~ ~ {Facing:4b,Invulnerable:1b,Invisible:1b,Fixed:1b,Tags:["dnl.collector_item_frame",dnl.knightly_sword_fragment],Item:{id:"minecraft:iron_ingot",Count:1b}}

summon area_effect_cloud ~ ~1.8 ~ {CustomNameVisible:1b,Duration:100,Tags:["dnl.collector_bar","dnl.knightly_sword_fragment"],CustomName:'{"text":"Knightly Sword Fragment","color":"green","italic":false}'}
summon area_effect_cloud ~ ~1.5 ~ {CustomNameVisible:1b,Duration:100,Tags:["dnl.collector_bar","dnl.knightly_sword_fragment"],CustomName:'{"text":"□□□□□□□□□□","color":"yellow","italic":false}'}
tag @s add dnl.init