scoreboard players set #TEMP1 MobAIOther -1
execute store result entity @s Motion[1] double 2.4 run scoreboard players get #TEMP1 MobAIOther
execute unless block ~ ~-1 ~ #wormai:transparent_blocks run scoreboard players set @s MobAITick 6
