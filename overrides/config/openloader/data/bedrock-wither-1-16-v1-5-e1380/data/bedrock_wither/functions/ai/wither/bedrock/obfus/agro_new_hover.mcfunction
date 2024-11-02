execute store result score #poz_x1 MobAIOther run data get entity @s Pos[0]
execute store result score #poz_y1 MobAIOther run data get entity @s Pos[1]
execute store result score #poz_z1 MobAIOther run data get entity @s Pos[2]

scoreboard players set #TEMP3 MobAIOther 32
scoreboard players set #TEMP2 MobAIOther 16

function wormai:math/randomnumber_core
scoreboard players operation #RAND MobAIOther %= #TEMP3 MobAIOther
scoreboard players operation #RAND MobAIOther -= #TEMP2 MobAIOther
scoreboard players operation #poz_x1 MobAIOther += #RAND MobAIOther

function wormai:math/randomnumber_core
scoreboard players operation #RAND MobAIOther %= #TEMP3 MobAIOther
scoreboard players operation #RAND MobAIOther -= #TEMP2 MobAIOther
scoreboard players operation #poz_z1 MobAIOther += #RAND MobAIOther
