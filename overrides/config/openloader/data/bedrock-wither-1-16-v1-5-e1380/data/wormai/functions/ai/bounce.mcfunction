tag @s add WormAITP2
execute as @s at @s run summon area_effect_cloud ^ ^ ^0.5 {Tags:["WormAITP3"]}
execute as @s at @s positioned ~ ~1.5 ~ if block ~ ~ ~ #wormai:transparent_blocks run function wormai:ai/bounce2
execute as @s at @s unless block ~ ~1.5 ~ #wormai:transparent_blocks run tp @s ^ ^0.05 ^0.5 facing ^ ^ ^-1

execute as @e[tag=WormAITP] at @s facing entity @e[type=area_effect_cloud,tag=WormAITP3,sort=nearest,limit=1] feet run tp @s ^ ^0.2 ^10
execute as @e[tag=WormAITP2] at @s run tp @s ~ ~ ~ facing entity @e[tag=WormAITP,sort=furthest,limit=1] feet

execute as @e[tag=WormAITP2] at @s if entity @e[tag=WormAITP] run playsound minecraft:entity.player.big_fall block @a ~ ~ ~ 1 1

kill @e[tag=WormAITP]
kill @e[type=area_effect_cloud,tag=WormAITP3]
execute as @e[tag=WormAITP2] run tag @s remove WormAITP2
