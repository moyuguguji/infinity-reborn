#built using mc-build (https://github.com/mc-build/mc-build)

execute positioned ~ ~1.5 ~ run particle poof ~ ~ ~ 0.3 0.3 0.3 0.0001 5 normal
playsound minecraft:entity.arrow.hit_player master @a ~ ~ ~ 1 1 0
execute positioned ~ ~1.5 ~ run kill @e[type=minecraft:area_effect_cloud,tag=dnl.collector_bar,tag=dnl.knightly_sword_fragment,distance=..1]
scoreboard players set #max_value dnl.col_count 50
scoreboard players set #math dnl.col_count 10
scoreboard players operation #math dnl.col_count *= @s dnl.col_count
scoreboard players operation #math dnl.col_count /= #max_value dnl.col_count
execute if score #math dnl.col_count matches ..1 run summon area_effect_cloud ~ ~1.5 ~ {CustomNameVisible:1b,Duration:100,Tags:["dnl.collector_bar","dnl.knightly_sword_fragment"],CustomName:'{"text":"■□□□□□□□□□","color":"yellow","italic":false}'}
execute if score #math dnl.col_count matches 2 run summon area_effect_cloud ~ ~1.5 ~ {CustomNameVisible:1b,Duration:100,Tags:["dnl.collector_bar","dnl.knightly_sword_fragment"],CustomName:'{"text":"■■□□□□□□□□","color":"yellow","italic":false}'}
execute if score #math dnl.col_count matches 3 run summon area_effect_cloud ~ ~1.5 ~ {CustomNameVisible:1b,Duration:100,Tags:["dnl.collector_bar","dnl.knightly_sword_fragment"],CustomName:'{"text":"■■■□□□□□□□","color":"yellow","italic":false}'}
execute if score #math dnl.col_count matches 4 run summon area_effect_cloud ~ ~1.5 ~ {CustomNameVisible:1b,Duration:100,Tags:["dnl.collector_bar","dnl.knightly_sword_fragment"],CustomName:'{"text":"■■■■□□□□□□","color":"yellow","italic":false}'}
execute if score #math dnl.col_count matches 5 run summon area_effect_cloud ~ ~1.5 ~ {CustomNameVisible:1b,Duration:100,Tags:["dnl.collector_bar","dnl.knightly_sword_fragment"],CustomName:'{"text":"■■■■■□□□□□","color":"yellow","italic":false}'}
execute if score #math dnl.col_count matches 6 run summon area_effect_cloud ~ ~1.5 ~ {CustomNameVisible:1b,Duration:100,Tags:["dnl.collector_bar","dnl.knightly_sword_fragment"],CustomName:'{"text":"■■■■■■□□□□","color":"yellow","italic":false}'}
execute if score #math dnl.col_count matches 7 run summon area_effect_cloud ~ ~1.5 ~ {CustomNameVisible:1b,Duration:100,Tags:["dnl.collector_bar","dnl.knightly_sword_fragment"],CustomName:'{"text":"■■■■■■■□□□","color":"yellow","italic":false}'}
execute if score #math dnl.col_count matches 8 run summon area_effect_cloud ~ ~1.5 ~ {CustomNameVisible:1b,Duration:100,Tags:["dnl.collector_bar","dnl.knightly_sword_fragment"],CustomName:'{"text":"■■■■■■■■□□","color":"yellow","italic":false}'}
execute if score #math dnl.col_count matches 9 run summon area_effect_cloud ~ ~1.5 ~ {CustomNameVisible:1b,Duration:100,Tags:["dnl.collector_bar","dnl.knightly_sword_fragment"],CustomName:'{"text":"■■■■■■■■■□","color":"yellow","italic":false}'}
execute if score #math dnl.col_count matches 10 run summon area_effect_cloud ~ ~1.5 ~ {CustomNameVisible:1b,Duration:100,Tags:["dnl.collector_bar","dnl.knightly_sword_fragment"],CustomName:'{"text":"■■■■■■■■■■","color":"yellow","italic":false}'}
summon area_effect_cloud ~ ~1.8 ~ {CustomNameVisible:1b,Duration:100,Tags:["dnl.collector_bar","dnl.knightly_sword_fragment"],CustomName:'{"text":"Knightly Sword Fragment","color":"green","italic":false}'}