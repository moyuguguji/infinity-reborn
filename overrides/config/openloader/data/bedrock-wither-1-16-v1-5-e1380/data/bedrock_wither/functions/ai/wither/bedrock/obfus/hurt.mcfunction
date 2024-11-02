execute as @a[distance=..32,gamemode=!creative,gamemode=!spectator,limit=1] run execute store result score #poz_y2 MobAIOther run data get entity @s UUID[0]
execute store result entity @s ArmorItems[0].tag.Target int 1 run scoreboard players get #poz_y2 MobAIOther
function bedrock_wither:ai/wither/bedrock/move/obfus/agro_up
