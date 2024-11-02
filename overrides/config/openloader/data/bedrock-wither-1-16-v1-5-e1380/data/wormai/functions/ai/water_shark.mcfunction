tag @s add WormAITP2
tag @e[type=player,gamemode=!spectator,distance=..12,sort=nearest,limit=1] add WormAITP3

execute as @s at @s unless block ~ ~1.5 ~ #wormai:airlogged_blocks run summon area_effect_cloud ^ ^0.01 ^10 {Tags:["WormAITP"]}
execute as @s at @s unless entity @s[y=1,dy=500] run summon area_effect_cloud ^ ^0.01 ^10 {Tags:["WormAITP"]}

execute as @s at @s if block ~ ~1.5 ~ #wormai:airlogged_blocks run summon area_effect_cloud ^ ^0.001 ^10 {Tags:["WormAIFall"]}

execute as @e[type=area_effect_cloud,tag=WormAITP] at @s if entity @e[type=player,tag=WormAITP3,gamemode=!spectator,limit=1] facing entity @e[type=player,tag=WormAITP3,gamemode=!spectator,limit=1] feet run tp @s ^ ^ ^1.2
execute as @e[type=area_effect_cloud,tag=WormAITP] at @s unless entity @e[type=player,tag=WormAITP3,gamemode=!spectator,limit=1] facing entity @e[tag=WormAITP2,limit=1] feet run tp @s ^0.7 ^ ^0.2
execute as @e[type=area_effect_cloud,tag=WormAIFall] at @s run tp @s ~ ~-0.7 ~

tp @s ^ ^ ^0.21 facing entity @e[type=area_effect_cloud,tag=WormAITP,limit=1] feet
tp @s ^ ^ ^0.35 facing entity @e[type=area_effect_cloud,tag=WormAIFall,limit=1] feet

execute unless block ~ ~1 ~ #wormai:transparent_blocks run playsound minecraft:block.sand.break hostile @a ~ ~ ~ 1 0

kill @e[type=area_effect_cloud,tag=WormAITP]
kill @e[type=area_effect_cloud,tag=WormAIFall]
tag @e[type=player,tag=WormAITP3,gamemode=!spectator,limit=1] remove WormAITP3
tag @s remove WormAITP2


