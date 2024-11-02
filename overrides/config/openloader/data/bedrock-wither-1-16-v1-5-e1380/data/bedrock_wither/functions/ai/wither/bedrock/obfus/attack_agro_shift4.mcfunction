execute if score #TEMP1 MobAIOther matches 1 run tag @s add Bedrock_WitherAI_Charge
execute if score #TEMP1 MobAIOther matches 1 run tag @s remove Bedrock_WitherAI_Attack
execute if score #TEMP1 MobAIOther matches 0 run tag @s add Bedrock_WitherAI_Idle
execute if score #TEMP1 MobAIOther matches 0 run tag @s remove Bedrock_WitherAI_Attack
execute if score #TEMP1 MobAIOther matches 0 run function bedrock_wither:ai/wither/bedrock/obfus/charge
execute if score #TEMP1 MobAIOther matches 1 run function bedrock_wither:ai/wither/bedrock/move/obfus/blue_skull
