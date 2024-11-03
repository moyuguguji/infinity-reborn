scoreboard players add @s MobAITick 1
scoreboard players operation #TEMP1 MobAIOther = @s MobAIOther
scoreboard players reset #TEMP2 MobAIOther
execute positioned ~ ~2 ~ run execute as @e[type=minecraft:wither_skull,distance=..2,nbt={HasBeenShot:0b}] run function bedrock_wither:ai/wither/bedrock/move/obfus/count_skulls
scoreboard players operation @s MobAIOther = #TEMP1 MobAIOther

execute if score @s MobAIOther matches 4 run function bedrock_wither:ai/wither/bedrock/move/obfus/blue_skull
execute if entity @s[scores={MobAIOther=4..}] run function bedrock_wither:ai/wither/bedrock/obfus/attack_end
execute if entity @s[scores={MobAITick=150..}] run function bedrock_wither:ai/wither/bedrock/obfus/attack_agro_shift

execute if entity @s store result score #TEMP1 MobAIOther run data get entity @s Motion[1] 1000
function bedrock_wither:ai/wither/bedrock/move/obfus/lowest_hover
execute if block ~ ~0.1 ~ #wormai:transparent_blocks unless blocks ~ ~0.1 ~ ~ ~-7 ~ ~ ~-1 ~ all run function bedrock_wither:ai/wither/bedrock/move/obfus/hover
