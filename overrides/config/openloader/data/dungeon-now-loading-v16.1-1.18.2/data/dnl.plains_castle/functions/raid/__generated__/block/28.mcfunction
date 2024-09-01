#built using mc-build (https://github.com/mc-build/mc-build)

execute as @a[dx=20,dy=13,dz=20] run title @s actionbar {"text":"Defeat All the Mobs!","color":"red","italic":false}
tag @e[type=minecraft:marker,dx=20,dy=13,dz=20,tag=dnl.raid_mob_spawner] add dnl.spawn_raid
scoreboard players set #dnl.difficulty_1 dnl.difficulty 0
scoreboard players set #dnl.difficulty_2 dnl.difficulty 0
scoreboard players set #dnl.difficulty_3 dnl.difficulty 0
scoreboard players set #dnl.difficulty_4 dnl.difficulty 0
scoreboard players set #dnl.difficulty_5 dnl.difficulty 0
scoreboard players set #dnl.difficulty_6 dnl.difficulty 0
scoreboard players set #dnl.difficulty_7 dnl.difficulty 0
scoreboard players set #dnl.difficulty_8 dnl.difficulty 0
scoreboard players set #dnl.difficulty_9 dnl.difficulty 0
execute store result score #dnl.difficulty_1 dnl.difficulty run execute if entity @e[type=minecraft:marker,dx=20,dy=13,dz=20,tag=dnl.raid_mob_spawner,tag=dnl.difficulty_1]
execute store result score #dnl.difficulty_2 dnl.difficulty run execute if entity @e[type=minecraft:marker,dx=20,dy=13,dz=20,tag=dnl.raid_mob_spawner,tag=dnl.difficulty_2]
execute store result score #dnl.difficulty_3 dnl.difficulty run execute if entity @e[type=minecraft:marker,dx=20,dy=13,dz=20,tag=dnl.raid_mob_spawner,tag=dnl.difficulty_3]
execute store result score #dnl.difficulty_4 dnl.difficulty run execute if entity @e[type=minecraft:marker,dx=20,dy=13,dz=20,tag=dnl.raid_mob_spawner,tag=dnl.difficulty_4]
execute store result score #dnl.difficulty_5 dnl.difficulty run execute if entity @e[type=minecraft:marker,dx=20,dy=13,dz=20,tag=dnl.raid_mob_spawner,tag=dnl.difficulty_5]
execute store result score #dnl.difficulty_6 dnl.difficulty run execute if entity @e[type=minecraft:marker,dx=20,dy=13,dz=20,tag=dnl.raid_mob_spawner,tag=dnl.difficulty_6]
execute store result score #dnl.difficulty_7 dnl.difficulty run execute if entity @e[type=minecraft:marker,dx=20,dy=13,dz=20,tag=dnl.raid_mob_spawner,tag=dnl.difficulty_7]
execute store result score #dnl.difficulty_8 dnl.difficulty run execute if entity @e[type=minecraft:marker,dx=20,dy=13,dz=20,tag=dnl.raid_mob_spawner,tag=dnl.difficulty_8]
execute store result score #dnl.difficulty_9 dnl.difficulty run execute if entity @e[type=minecraft:marker,dx=20,dy=13,dz=20,tag=dnl.raid_mob_spawner,tag=dnl.difficulty_9]
scoreboard players operation #dnl.difficulty_1 dnl.difficulty *= #1 dnl.constant
scoreboard players operation #dnl.difficulty_2 dnl.difficulty *= #2 dnl.constant
scoreboard players operation #dnl.difficulty_3 dnl.difficulty *= #3 dnl.constant
scoreboard players operation #dnl.difficulty_4 dnl.difficulty *= #4 dnl.constant
scoreboard players operation #dnl.difficulty_5 dnl.difficulty *= #5 dnl.constant
scoreboard players operation #dnl.difficulty_6 dnl.difficulty *= #6 dnl.constant
scoreboard players operation #dnl.difficulty_7 dnl.difficulty *= #7 dnl.constant
scoreboard players operation #dnl.difficulty_8 dnl.difficulty *= #8 dnl.constant
scoreboard players operation #dnl.difficulty_9 dnl.difficulty *= #9 dnl.constant
scoreboard players set @s dnl.difficulty 0
scoreboard players operation @s dnl.difficulty += #dnl.difficulty_1 dnl.difficulty
scoreboard players operation @s dnl.difficulty += #dnl.difficulty_2 dnl.difficulty
scoreboard players operation @s dnl.difficulty += #dnl.difficulty_3 dnl.difficulty
scoreboard players operation @s dnl.difficulty += #dnl.difficulty_4 dnl.difficulty
scoreboard players operation @s dnl.difficulty += #dnl.difficulty_5 dnl.difficulty
scoreboard players operation @s dnl.difficulty += #dnl.difficulty_6 dnl.difficulty
scoreboard players operation @s dnl.difficulty += #dnl.difficulty_7 dnl.difficulty
scoreboard players operation @s dnl.difficulty += #dnl.difficulty_8 dnl.difficulty
scoreboard players operation @s dnl.difficulty += #dnl.difficulty_9 dnl.difficulty
scoreboard players set @s dnl.second 30
scoreboard players reset @s dnl.timer
scoreboard players set #dnl.raidbar_id dnl.raidbar_id 0
scoreboard players set #dnl.raidbar_count dnl.count 0
function dnl.plains_castle:raid/__generated__/while/4
execute if score #dnl.raidbar_count dnl.count matches 10.. run tellraw @a[distance=..50] {"text":"Raid cannot start, since there's more then 10 raids running in the world.","color":"red"}
scoreboard players operation @s dnl.raidbar_id = #dnl.raidbar_id dnl.raidbar_id
execute if score @s dnl.raidbar_id matches 0 run function dnl.plains_castle:raid/__generated__/execute/134
execute if score @s dnl.raidbar_id matches 1 run function dnl.plains_castle:raid/__generated__/execute/138
execute if score @s dnl.raidbar_id matches 2 run function dnl.plains_castle:raid/__generated__/execute/142
execute if score @s dnl.raidbar_id matches 3 run function dnl.plains_castle:raid/__generated__/execute/146
execute if score @s dnl.raidbar_id matches 4 run function dnl.plains_castle:raid/__generated__/execute/150
execute if score @s dnl.raidbar_id matches 5 run function dnl.plains_castle:raid/__generated__/execute/154
execute if score @s dnl.raidbar_id matches 6 run function dnl.plains_castle:raid/__generated__/execute/158
execute if score @s dnl.raidbar_id matches 7 run function dnl.plains_castle:raid/__generated__/execute/162
execute if score @s dnl.raidbar_id matches 8 run function dnl.plains_castle:raid/__generated__/execute/166
execute if score @s dnl.raidbar_id matches 9 run function dnl.plains_castle:raid/__generated__/execute/170
tag @s add dnl.start_raid