scoreboard players set #RAND2 MobAIOther 1103515245
scoreboard players operation #RANDCORE MobAIOther *= #RAND2 MobAIOther
execute store result score #RAND2 MobAIOther run time query gametime
scoreboard players operation #RANDCORE MobAIOther += #RAND2 MobAIOther
scoreboard players operation #RAND MobAIOther = #RANDCORE MobAIOther

