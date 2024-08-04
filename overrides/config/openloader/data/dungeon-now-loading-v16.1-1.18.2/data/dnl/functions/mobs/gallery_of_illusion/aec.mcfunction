execute at @s[tag=pillager_jokey] run summon spider ~ ~ ~ {PersistenceRequired:1b,Health:20f,Tags:["illusioned_gallery"],Passengers:[{id:"minecraft:pillager",PersistenceRequired:1b,Health:31f,Tags:["noai","illusioned_gallery"],HandItems:[{id:"minecraft:crossbow",Count:1b,tag:{Enchantments:[{id:"minecraft:quick_charge",lvl:1s}]}},{}],Attributes:[{Name:generic.max_health,Base:31}]}],Attributes:[{Name:generic.max_health,Base:20}]}
kill @s[tag=pillager_jokey]

execute at @s[tag=evoker_ravager] run summon ravager ~ ~ ~ {PersistenceRequired:1b,Health:120f,Tags:["illusioned_gallery"],Passengers:[{id:"minecraft:evoker",PersistenceRequired:1b,Health:30f,Tags:["noai","illusioned_gallery"],Attributes:[{Name:generic.max_health,Base:30}]}],Attributes:[{Name:generic.max_health,Base:120}]}
kill @s[tag=evoker_ravager]

execute at @s[tag=jukebox] if block ~ ~-1 ~ minecraft:jukebox{RecordItem:{id:"minecraft:music_disc_cat",Count:1b,tag:{display:{Name:'{"italic":false,"color":"gold","text":"Illusioner\'s Disc"}'}}}} run scoreboard players add @s dnl.variable 1
execute at @s[tag=jukebox] unless block ~ ~-1 ~ minecraft:jukebox{RecordItem:{id:"minecraft:music_disc_cat",Count:1b,tag:{display:{Name:'{"italic":false,"color":"gold","text":"Illusioner\'s Disc"}'}}}} run scoreboard players reset @s dnl.variable
execute if entity @s[tag=jukebox,scores={dnl.variable=45}] run title @a title {"text":".","color":"blue"}
execute if entity @s[tag=jukebox,scores={dnl.variable=85}] run title @a title {"text":". .","color":"blue"}
execute if entity @s[tag=jukebox,scores={dnl.variable=125}] run title @a title {"text":". . .","color":"blue"}
execute if entity @s[tag=jukebox,scores={dnl.variable=175}] run title @a title {"text":".","color":"blue"}
execute if entity @s[tag=jukebox,scores={dnl.variable=215}] run title @a title {"text":". .","color":"blue"}
execute if entity @s[tag=jukebox,scores={dnl.variable=255}] run title @a title {"text":". . .","color":"blue"}
execute if entity @s[tag=jukebox,scores={dnl.variable=305}] run title @a title {"text":".","color":"blue"}
execute if entity @s[tag=jukebox,scores={dnl.variable=345}] run title @a title {"text":". .","color":"blue"}
execute if entity @s[tag=jukebox,scores={dnl.variable=385}] run title @a title {"text":". . .","color":"blue"}
execute if entity @s[tag=jukebox,scores={dnl.variable=435}] run title @a title {"text":".","color":"blue"}
execute if entity @s[tag=jukebox,scores={dnl.variable=475}] run title @a title {"text":". .","color":"blue"}
execute if entity @s[tag=jukebox,scores={dnl.variable=515}] run title @a title {"text":". . .","color":"blue"}
execute if entity @s[tag=jukebox,scores={dnl.variable=610}] run title @a title {"text":"Dungeon Now Loading","color":"gold"}
execute if entity @s[tag=jukebox,scores={dnl.variable=610}] run title @a subtitle {"text":"Minecraft Datapack","color":"blue"}
execute if entity @s[tag=jukebox,scores={dnl.variable=750}] run title @a title {"text":"Hex","color":"gold"}
execute if entity @s[tag=jukebox,scores={dnl.variable=750}] run title @a subtitle {"text":"Creator","color":"blue"}
execute if entity @s[tag=jukebox,scores={dnl.variable=910}] run title @a title {"text":"Thank you!!","color":"gold"}
execute if entity @s[tag=jukebox,scores={dnl.variable=910}] run title @a subtitle {"text":"for Playing","color":"blue"}
execute at @s[tag=jukebox,scores={dnl.variable=1000}] run particle minecraft:cloud ~ ~ ~ 0.5 1 0.5 0.0000001 30
execute at @s[tag=jukebox,scores={dnl.variable=1000}] run summon cat ~ ~ ~ {PersistenceRequired:1b,Health:100f,CatType:10,CollarColor:1b,Tags:["pet","lantern"],Passengers:[{id:"minecraft:bat",PersistenceRequired:1b,Health:100f,Tags:["pet","jack"],CustomName:'{"text":"Jack","color":"gold","italic":false}',Attributes:[{Name:generic.max_health,Base:100}]}],CustomName:'{"text":"Lantern","color":"gold","italic":false}',Attributes:[{Name:generic.max_health,Base:100}]}
kill @s[tag=jukebox,scores={dnl.variable=1000..}]
