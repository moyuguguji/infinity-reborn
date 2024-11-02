scoreboard players add @s MobAITick 1
execute positioned ~ ~2 ~ run execute as @e[type=minecraft:wither_skull,distance=..2,nbt={HasBeenShot:0b}] run function bedrock_wither:ai/wither/bedrock/move/obfus/no_skulls

execute if entity @s[scores={MobAITick=41..}] run function bedrock_wither:ai/wither/bedrock/obfus/attack
execute if entity @s[scores={MobAITick=16}] run function bedrock_wither:ai/wither/bedrock/move/2/obfus/charge_setup
execute store result entity @s Rotation[0] float 1 run data get entity @s ArmorItems[0].tag.Rotx
execute if entity @s[scores={MobAITick=21..}] at @s run function bedrock_wither:ai/wither/bedrock/move/2/obfus/charge_charge
execute if entity @s[scores={MobAITick=1..20}] run function bedrock_wither:ai/wither/bedrock/move/2/obfus/spin
execute if entity @s store result score #TEMP1 MobAIOther run data get entity @s Motion[1] 1000
function bedrock_wither:ai/wither/bedrock/move/obfus/lowest_hover
