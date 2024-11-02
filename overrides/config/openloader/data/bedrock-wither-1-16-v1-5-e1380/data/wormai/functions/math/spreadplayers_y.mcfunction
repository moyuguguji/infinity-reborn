#does not work on players
scoreboard players operation #TEMP1 MobAIOther = #MATHin MobAIOther
scoreboard players set #TEMP2 MobAIOther 2
scoreboard players operation #TEMP1 MobAIOther /= #TEMP2 MobAIOther

execute store result score #poz_y1 MobAIOther run data get entity @s Pos[1] 10

function wormai:math/randomnumber_core
scoreboard players operation #RAND MobAIOther %= #MATHin MobAIOther
scoreboard players operation #RAND MobAIOther -= #TEMP1 MobAIOther
scoreboard players operation #poz_y1 MobAIOther += #RAND MobAIOther
execute store result entity @s Pos[1] double 0.1 run scoreboard players get #poz_y1 MobAIOther
