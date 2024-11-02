#loops

schedule function bedrock_wither:tick 1t


#execute as @e at @s run function bedrock_wither:entity_manager
execute as @e at @s run function bedrock_wither:ai/util/managers/supermanager
