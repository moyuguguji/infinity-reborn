#Protection EPF
#(1 - (min(20,AllProtection * 1))/25 )

#(1.00 - (min(20.00,AllProtection0.00 * 1))/25 ) = x3

scoreboard players reset #poz_x1 MobAIOther
scoreboard players reset #poz_y1 MobAIOther
execute store result score #poz_x1 MobAIOther run data get entity @s ArmorItems[3].tag.Enchantments[{id:"minecraft:protection"}].lvl
scoreboard players operation #poz_x1 MobAIOther += #poz_y1 MobAIOther
execute store result score #poz_y1 MobAIOther run data get entity @s ArmorItems[2].tag.Enchantments[{id:"minecraft:protection"}].lvl
scoreboard players operation #poz_x1 MobAIOther += #poz_y1 MobAIOther
execute store result score #poz_y1 MobAIOther run data get entity @s ArmorItems[1].tag.Enchantments[{id:"minecraft:protection"}].lvl
scoreboard players operation #poz_x1 MobAIOther += #poz_y1 MobAIOther
execute store result score #poz_y1 MobAIOther run data get entity @s ArmorItems[0].tag.Enchantments[{id:"minecraft:protection"}].lvl
scoreboard players operation #poz_x1 MobAIOther += #poz_y1 MobAIOther

execute if score #poz_x1 MobAIOther matches 20.. run scoreboard players set #poz_x1 MobAIOther 20
scoreboard players set #poz_y1 MobAIOther 4
scoreboard players operation #poz_x1 MobAIOther *= #poz_y1 MobAIOther
scoreboard players set #poz_x3 MobAIOther 100
scoreboard players operation #poz_x3 MobAIOther -= #poz_x1 MobAIOther
