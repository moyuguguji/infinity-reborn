tag @s add WormAITP2
execute as @s at @s run summon area_effect_cloud ^ ^0.01 ^10 {Tags:["WormAITP"]}

execute as @e[type=area_effect_cloud,tag=WormAITP] at @s if entity @e[type=player,gamemode=!spectator,distance=..16,sort=nearest,limit=1] facing entity @e[type=player,gamemode=!spectator,distance=..16,sort=nearest,limit=1] feet run tp @s ^ ^ ^1.3
execute as @e[type=area_effect_cloud,tag=WormAITP] at @s unless entity @e[type=player,gamemode=!spectator,distance=..16] facing entity @e[tag=WormAITP2,limit=1] feet run tp @s ^0.5 ^-0.05 ^

tp @s ^ ^ ^ facing entity @e[type=area_effect_cloud,tag=WormAITP,limit=1] feet

kill @e[type=area_effect_cloud,tag=WormAITP]
tag @s remove WormAITP2
