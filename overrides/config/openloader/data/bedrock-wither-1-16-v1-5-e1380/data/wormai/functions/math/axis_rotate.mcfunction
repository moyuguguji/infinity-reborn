execute store result score #poz_x2 MobAIOther run data get entity @s Pos[0] 1000
execute store result score #poz_y2 MobAIOther run data get entity @s Pos[1] 1000
execute store result score #poz_z2 MobAIOther run data get entity @s Pos[2] 1000
scoreboard players operation #poz_x6 MobAIOther = #poz_x3 MobAIOther
scoreboard players operation #poz_y6 MobAIOther = #poz_y3 MobAIOther
scoreboard players operation #poz_z6 MobAIOther = #poz_z3 MobAIOther
scoreboard players operation #poz_x6 MobAIOther *= #poz_x2 MobAIOther
scoreboard players operation #poz_y6 MobAIOther *= #poz_y2 MobAIOther
scoreboard players operation #poz_z6 MobAIOther *= #poz_z2 MobAIOther
scoreboard players operation #poz_x1 MobAIOther = #poz_x6 MobAIOther
scoreboard players operation #poz_x1 MobAIOther += #poz_y6 MobAIOther
scoreboard players operation #poz_x1 MobAIOther += #poz_z6 MobAIOther

scoreboard players operation #poz_x6 MobAIOther = #poz_x4 MobAIOther
scoreboard players operation #poz_y6 MobAIOther = #poz_y4 MobAIOther
scoreboard players operation #poz_z6 MobAIOther = #poz_z4 MobAIOther
scoreboard players operation #poz_x6 MobAIOther *= #poz_x2 MobAIOther
scoreboard players operation #poz_y6 MobAIOther *= #poz_y2 MobAIOther
scoreboard players operation #poz_z6 MobAIOther *= #poz_z2 MobAIOther
scoreboard players operation #poz_y1 MobAIOther = #poz_x6 MobAIOther
scoreboard players operation #poz_y1 MobAIOther += #poz_y6 MobAIOther
scoreboard players operation #poz_y1 MobAIOther += #poz_z6 MobAIOther

scoreboard players operation #poz_x6 MobAIOther = #poz_x5 MobAIOther
scoreboard players operation #poz_y6 MobAIOther = #poz_y5 MobAIOther
scoreboard players operation #poz_z6 MobAIOther = #poz_z5 MobAIOther
scoreboard players operation #poz_x6 MobAIOther *= #poz_x2 MobAIOther
scoreboard players operation #poz_y6 MobAIOther *= #poz_y2 MobAIOther
scoreboard players operation #poz_z6 MobAIOther *= #poz_z2 MobAIOther
scoreboard players operation #poz_z1 MobAIOther = #poz_x6 MobAIOther
scoreboard players operation #poz_z1 MobAIOther += #poz_y6 MobAIOther
scoreboard players operation #poz_z1 MobAIOther += #poz_z6 MobAIOther

tp @s ~ ~ ~
scoreboard players set #poz_x2 MobAIOther 100000
scoreboard players operation #poz_x1 MobAIOther /= #poz_x2 MobAIOther
scoreboard players operation #poz_y1 MobAIOther /= #poz_x2 MobAIOther
scoreboard players operation #poz_z1 MobAIOther /= #poz_x2 MobAIOther
#1000 constant

execute store result score #poz_x2 MobAIOther run data get entity @s Pos[0] 10
execute store result score #poz_y2 MobAIOther run data get entity @s Pos[1] 10
execute store result score #poz_z2 MobAIOther run data get entity @s Pos[2] 10
scoreboard players operation #poz_x2 MobAIOther += #poz_x1 MobAIOther
scoreboard players operation #poz_y2 MobAIOther += #poz_y1 MobAIOther
scoreboard players operation #poz_z2 MobAIOther += #poz_z1 MobAIOther
execute store result entity @s Pos[0] double 0.1 run scoreboard players get #poz_x2 MobAIOther
execute store result entity @s Pos[1] double 0.1 run scoreboard players get #poz_y2 MobAIOther
execute store result entity @s Pos[2] double 0.1 run scoreboard players get #poz_z2 MobAIOther

#tellraw @a [{"text":"x(","color":"red"},{"score":{"name":"#poz_x2","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_y2","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_z2","objective":"MobAIOther"}},{"text":")"}]
