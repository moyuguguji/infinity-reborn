execute if entity @s[type=slime,tag=BasicDamageHitboxAI] run function wormai:damage/basic_damage
execute if entity @s[type=wither] run function bedrock_wither:ai/wither/wither
execute if entity @s[type=wither_skull,tag=Blue_Wither_SkullAI] run function bedrock_wither:ai/blue_wither_skull
execute if entity @s[type=item,nbt={Item:{id:"minecraft:nether_star"},Age:-6000s}] run function bedrock_wither:ai/util/animation/wither/death
