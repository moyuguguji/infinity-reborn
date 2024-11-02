execute if entity @s[tag=HasntPhase2] run function bedrock_wither:ai/wither/bedrock/obfus/phase_explode
execute if entity @s[tag=Bedrock_WitherAI_Idle] run function bedrock_wither:ai/wither/bedrock/move/2/idle
execute if entity @s[tag=Bedrock_WitherAI_Attack] run function bedrock_wither:ai/wither/bedrock/move/2/attack
scoreboard players set #TEMP3 MobAIOther 1
