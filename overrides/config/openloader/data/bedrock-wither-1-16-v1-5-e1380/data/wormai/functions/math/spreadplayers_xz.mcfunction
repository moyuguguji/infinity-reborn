#does not work on players
scoreboard players operation #TEMP1 MobAIOther = #MATHin MobAIOther
scoreboard players set #TEMP2 MobAIOther 2
scoreboard players operation #TEMP1 MobAIOther /= #TEMP2 MobAIOther

execute store result score #poz_x1 MobAIOther run data get entity @s Pos[0] 10
execute store result score #poz_z1 MobAIOther run data get entity @s Pos[2] 10

function wormai:math/randomnumber_core
scoreboard players operation #RAND MobAIOther %= #MATHin MobAIOther
scoreboard players operation #RAND MobAIOther -= #TEMP1 MobAIOther
scoreboard players operation #poz_x1 MobAIOther += #RAND MobAIOther
execute store result entity @s Pos[0] double 0.1 run scoreboard players get #poz_x1 MobAIOther
function wormai:math/randomnumber_core
scoreboard players operation #RAND MobAIOther %= #MATHin MobAIOther
scoreboard players operation #RAND MobAIOther -= #TEMP1 MobAIOther
scoreboard players operation #poz_z1 MobAIOther += #RAND MobAIOther
execute store result entity @s Pos[2] double 0.1 run scoreboard players get #poz_z1 MobAIOther
