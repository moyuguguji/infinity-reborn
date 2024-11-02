execute at @s run tp @s ~ ~ ~ ~ 0
execute store result score #TEMP1 MobAIOther run gamerule mobGriefing
execute if score #TEMP1 MobAIOther matches 1 at @s store success score #TEMP1 MobAIOther run function bedrock_wither:ai/wither/bedrock/move/2/obfus/charge_damage_block
execute if score #TEMP1 MobAIOther matches 2.. run playsound minecraft:entity.wither.break_block hostile @a[distance=..16] ~ ~ ~
kill @s
