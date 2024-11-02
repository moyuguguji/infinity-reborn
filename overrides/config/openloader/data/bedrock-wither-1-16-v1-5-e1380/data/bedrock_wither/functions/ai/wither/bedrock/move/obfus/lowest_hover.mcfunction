execute store result score #poz_y2 MobAIOther run data get entity @s ArmorItems[0].tag.Pathfindy
execute store result score #poz_y1 MobAIOther run data get entity @s Pos[1]
execute if score #poz_y1 MobAIOther < #poz_y2 MobAIOther run function bedrock_wither:ai/wither/bedrock/move/obfus/hover
