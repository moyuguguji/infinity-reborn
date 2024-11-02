execute store result score #TEMP1 MobAIOther run gamerule mobGriefing
execute if score #TEMP1 MobAIOther matches 1 run function bedrock_wither:ai/obfus/blue_skull_damage2

particle minecraft:explosion ~ ~ ~ 0 0 0 0 1
playsound minecraft:entity.generic.explode hostile @a[distance=..16] ~ ~ ~ 1 1
scoreboard players set #TEMP3 MobAIOther 1
kill @s
