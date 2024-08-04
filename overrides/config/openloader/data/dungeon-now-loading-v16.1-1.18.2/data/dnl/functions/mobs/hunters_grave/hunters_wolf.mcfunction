execute as @s[tag=!dnl.wolf_spawned] at @s if block ~ ~ ~ minecraft:snow run fill ~1 ~ ~1 ~-1 ~ ~-1 minecraft:snow
execute as @s[tag=!dnl.wolf_spawned] at @s unless block ~ ~ ~ minecraft:snow run fill ~1 ~ ~1 ~-1 ~ ~-1 minecraft:air
execute at @s[tag=!dnl.wolf_spawned] if block ~ ~-1 ~ minecraft:snow run tp @s ~ ~-1 ~
execute as @s[tag=!dnl.wolf_spawned] at @s run summon armor_stand ~ ~-1 ~ {Rotation:[90.0f,0.0f],Tags:["dnl.hunters_bow"],Invulnerable:0b,Invisible:1b,Pose:{RightArm:[90f,90f,0f]},HandItems:[{id:"minecraft:bow",Count:1b,tag:{display:{Name:'{"text":"Broken Bow","color":"gold","italic":false}',Lore:['{"text":"Lingering Regret","color":"blue","italic":false}']},Damage:377}},{}]}
tag @s add dnl.wolf_spawned
