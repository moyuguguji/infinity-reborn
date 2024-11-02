tag @s add OwnerUUID
playsound minecraft:entity.wither.shoot hostile @a[distance=..32] ~ ~ ~ 2 1

execute store result score #poz_x1 MobAIOther run data get entity @s Pos[0]
execute store result score #poz_y1 MobAIOther run data get entity @s Pos[1]
execute store result score #poz_z1 MobAIOther run data get entity @s Pos[2]
scoreboard players add #poz_y1 MobAIOther 3

execute store result score #TEMP1 MobAIOther run data get entity @s ArmorItems[0].tag.Target
execute as @e[type=!#wormai:non_living,distance=..32,nbt={Invulnerable:0b}] run function bedrock_wither:ai/wither/bedrock/move/obfus/agro_tag

execute positioned ~ ~3 ~ run execute facing entity @e[type=!#wormai:non_living,tag=TEMP2,limit=1] eyes run summon area_effect_cloud ^ ^ ^10 {Tags:["TEMPvector"]}
execute positioned ~ ~3 ~ run summon wither_skull ~ ~ ~ {HasBeenShot:1b,Owner:[I;0,0,0,0],power:[0.0,0.0,0.0],Tags:["Blue_Wither_SkullAI","Astral_Lazer2"]}
execute as @e[type=wither_skull,tag=Astral_Lazer2] run function wormai:owner/getowner_projectile

execute as @e[type=area_effect_cloud,tag=TEMPvector] at @s store result score #poz_x2 MobAIOther run data get entity @s Pos[0]
execute as @e[type=area_effect_cloud,tag=TEMPvector] at @s store result score #poz_y2 MobAIOther run data get entity @s Pos[1]
execute as @e[type=area_effect_cloud,tag=TEMPvector] at @s store result score #poz_z2 MobAIOther run data get entity @s Pos[2]
kill @e[type=area_effect_cloud,tag=TEMPvector]

execute store result score #CMtn_x MobAIOther run scoreboard players operation #poz_x2 MobAIOther -= #poz_x1 MobAIOther
execute store result score #CMtn_y MobAIOther run scoreboard players operation #poz_y2 MobAIOther -= #poz_y1 MobAIOther
execute store result score #CMtn_z MobAIOther run scoreboard players operation #poz_z2 MobAIOther -= #poz_z1 MobAIOther

execute as @e[type=wither_skull,tag=Astral_Lazer2] store result entity @s power[0] double 0.01 run scoreboard players get #CMtn_x MobAIOther
execute as @e[type=wither_skull,tag=Astral_Lazer2] store result entity @s power[1] double 0.01 run scoreboard players get #CMtn_y MobAIOther
execute as @e[type=wither_skull,tag=Astral_Lazer2] store result entity @s power[2] double 0.01 run scoreboard players get #CMtn_z MobAIOther

tag @e[type=wither_skull,tag=Astral_Lazer2] remove Astral_Lazer2
tag @e[type=!#wormai:non_living,tag=TEMP2,limit=1] remove TEMP2
