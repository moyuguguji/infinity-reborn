scoreboard players add @s MobAITick 1
execute if entity @s[scores={MobAITick=..5}] run function bedrock_wither:ai/wither/bedrock/move/obfus/phase_fall
execute if entity @s[scores={MobAITick=6}] run function bedrock_wither:ai/wither/bedrock/move/obfus/phase_explosion
execute if entity @s[scores={MobAITick=7}] run function bedrock_wither:ai/wither/bedrock/move/obfus/phase_summon
execute if entity @s[scores={MobAITick=7}] run tag @s remove Bedrock_WitherAI_Explode
