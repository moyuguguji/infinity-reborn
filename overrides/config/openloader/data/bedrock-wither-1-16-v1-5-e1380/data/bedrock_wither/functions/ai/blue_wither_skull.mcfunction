#did you know that you can't spawn blue wither skulls?
#had to make my own
scoreboard players reset #TEMP3 MobAIOther
execute unless block ^0.17 ^0.17 ^0.5 #wormai:transparent_blocks unless score #TEMP3 MobAIOther matches 1 run function bedrock_wither:ai/obfus/blue_skull_damage
execute unless block ^0.17 ^-0.17 ^0.5 #wormai:transparent_blocks unless score #TEMP3 MobAIOther matches 1 run function bedrock_wither:ai/obfus/blue_skull_damage
execute unless block ^-0.17 ^0.17 ^0.5 #wormai:transparent_blocks unless score #TEMP3 MobAIOther matches 1 run function bedrock_wither:ai/obfus/blue_skull_damage
execute unless block ^-0.17 ^-0.17 ^0.5 #wormai:transparent_blocks unless score #TEMP3 MobAIOther matches 1 run function bedrock_wither:ai/obfus/blue_skull_damage
particle minecraft:soul_fire_flame ~ ~ ~ 0.15 0.15 0.15 0.02 2
