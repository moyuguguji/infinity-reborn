#built using mc-build (https://github.com/mc-build/mc-build)

execute positioned ~ ~0.5 ~ run kill @e[type=minecraft:area_effect_cloud,tag=dnl.locked_chest_bar,tag=dnl.plains_castle_locked_chest,distance=..1]
summon area_effect_cloud ~ ~0.5 ~ {CustomNameVisible:1b,Duration:40,Tags:["dnl.locked_chest_bar","dnl.plains_castle_locked_chest"],CustomName:'{"text":"Requires [Plains Castle Key] to open","color":"yellow","italic":false}'}
advancement revoke @s only dnl.lib:interact_locked_chest