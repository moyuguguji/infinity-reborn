execute if entity @s[type=player,nbt={HurtTime:0s}] run function bedrock_wither:ai/wither/bedrock/move/2/obfus/damage_player
execute if entity @s[type=!player,type=!#wormai:non_living,nbt={HurtTime:0s}] run function bedrock_wither:ai/wither/bedrock/move/2/obfus/damage_entity
