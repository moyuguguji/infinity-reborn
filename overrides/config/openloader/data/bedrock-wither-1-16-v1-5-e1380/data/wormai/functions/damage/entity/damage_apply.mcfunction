execute store result score #poz_x1 MobAIOther run data get entity @s AbsorptionAmount 100
execute store result score #poz_y1 MobAIOther run data get entity @s Health 100

scoreboard players operation #poz_z1 MobAIOther = #poz_x1 MobAIOther
scoreboard players operation #poz_z1 MobAIOther -= #Damage MobAIOther
execute if score #poz_x1 MobAIOther < #Damage MobAIOther run scoreboard players set #poz_z1 MobAIOther 0
execute if score #poz_x1 MobAIOther < #Damage MobAIOther run scoreboard players operation #Damage MobAIOther -= #poz_x1 MobAIOther
execute if score #poz_x1 MobAIOther < #Damage MobAIOther run scoreboard players operation #poz_y1 MobAIOther -= #Damage MobAIOther
execute if score #poz_y1 MobAIOther matches ..0 run scoreboard players set #poz_y1 MobAIOther 1
effect give @s wither 1 1 true
execute store result entity @s AbsorptionAmount float 0.01 run scoreboard players get #poz_z1 MobAIOther
execute store result entity @s Health float 0.01 run scoreboard players get #poz_y1 MobAIOther
scoreboard players remove #Damage MobAIOther
