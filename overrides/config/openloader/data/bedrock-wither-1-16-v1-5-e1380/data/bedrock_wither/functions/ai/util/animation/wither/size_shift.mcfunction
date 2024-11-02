scoreboard players set #poz_y1 MobAIOther 1000
execute store result score #TEMP2 MobAIOther run data get entity @s Pos[0] 1000
scoreboard players operation #TEMP2 MobAIOther *= #TEMP1 MobAIOther
scoreboard players operation #TEMP2 MobAIOther /= #poz_y1 MobAIOther
execute store result entity @s Pos[0] double 0.001 run scoreboard players get #TEMP2 MobAIOther

execute store result score #TEMP2 MobAIOther run data get entity @s Pos[1] 1000
scoreboard players operation #TEMP2 MobAIOther *= #TEMP1 MobAIOther
scoreboard players operation #TEMP2 MobAIOther /= #poz_y1 MobAIOther
execute store result entity @s Pos[1] double 0.001 run scoreboard players get #TEMP2 MobAIOther

execute store result score #TEMP2 MobAIOther run data get entity @s Pos[2] 1000
scoreboard players operation #TEMP2 MobAIOther *= #TEMP1 MobAIOther
scoreboard players operation #TEMP2 MobAIOther /= #poz_y1 MobAIOther
execute store result entity @s Pos[2] double 0.001 run scoreboard players get #TEMP2 MobAIOther
