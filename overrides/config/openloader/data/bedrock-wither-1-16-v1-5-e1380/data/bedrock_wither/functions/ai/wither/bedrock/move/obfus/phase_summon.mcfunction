execute store result score #TEMP1 MobAIOther run difficulty
data merge entity @s {Invulnerable:0b}
execute if score #TEMP1 MobAIOther matches 2 run function bedrock_wither:ai/wither/bedrock/move/obfus/phase_summon2
execute if score #TEMP1 MobAIOther matches 3.. run function bedrock_wither:ai/wither/bedrock/move/obfus/phase_summon3
tag @s add Bedrock_WitherAI_Attack
