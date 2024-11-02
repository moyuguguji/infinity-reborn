execute store result entity @s Rotation[0] float 1 run scoreboard players get #poz_x1 MobAIOther
execute store result entity @s Rotation[1] float 1 run scoreboard players get #poz_y1 MobAIOther
execute at @s run tp @s ^ ^ ^1
execute store result score #poz_x2 MobAIOther run data get entity @s Pos[0] 1000
execute store result score #poz_y2 MobAIOther run data get entity @s Pos[1] 1000
execute store result score #poz_z2 MobAIOther run data get entity @s Pos[2] 1000
#tellraw @a [{"text":"v(","color":"red"},{"score":{"name":"#poz_x2","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_y2","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_z2","objective":"MobAIOther"}},{"text":")"}]
kill @s
