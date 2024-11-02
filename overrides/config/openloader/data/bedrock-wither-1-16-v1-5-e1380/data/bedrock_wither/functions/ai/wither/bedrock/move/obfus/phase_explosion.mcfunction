data merge entity @s {Invulnerable:1b}
summon creeper ~ ~ ~ {powered:0b,ExplosionRadius:7b,Fuse:0,ignited:1b,Tags:["TEMP2"],CustomName:'{"text":"Wither"}'}
tag @s add TEMP1
execute as @e[type=minecraft:creeper,tag=TEMP2] run data modify entity @s CustomName set from entity @e[type=minecraft:wither,tag=TEMP1,limit=1] CustomName
tag @s remove TEMP1
