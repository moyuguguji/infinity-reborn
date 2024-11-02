execute store result score #TEMP2 MobAIOther run data get entity @s Attributes[{Name:"minecraft:generic.max_health"}].Base 0.5
execute store result score #TEMP1 MobAIOther run data get entity @s Health
scoreboard players set #TEMP3 MobAIOther 0
execute if score #TEMP1 MobAIOther <= #TEMP2 MobAIOther run function bedrock_wither:ai/wither/bedrock/obfus/phase2
execute if score #TEMP3 MobAIOther matches 0 run function bedrock_wither:ai/wither/bedrock/obfus/phase1

execute if entity @s[tag=Bedrock_WitherAI_Explode] run function bedrock_wither:ai/wither/bedrock/move/phase_explosion
execute if entity @s[tag=Bedrock_WitherAI_Hover] run function bedrock_wither:ai/wither/bedrock/move/hover
execute if entity @s[tag=Bedrock_WitherAI_Charge] run function bedrock_wither:ai/wither/bedrock/move/2/charge
execute if entity @s[nbt={HurtTime:10s}] run function bedrock_wither:ai/wither/bedrock/obfus/hurt
