#10 SECONDS TILL EXPLODE
scoreboard players add @s MobAITick 1
scoreboard players set #poz_x1 MobAIOther 3
scoreboard players operation #poz_x1 MobAIOther *= @s MobAITick
execute as @s[scores={MobAITick=1}] run tp @s ~ ~1.5 ~
data merge entity @s {PickupDelay:32767,Invulnerable:1b,NoGravity:1b,Age:-6001s,Motion:[0.0,0.0,0.0]}
forceload add 0 0 0 0

summon area_effect_cloud 10.0 0.0 0.0 {Tags:["TEMP1"]}
summon area_effect_cloud -10.0 0.0 0.0 {Tags:["TEMP1"]}
summon area_effect_cloud 0.0 10.0 0.0 {Tags:["TEMP1"]}
summon area_effect_cloud 0.0 -10.0 0.0 {Tags:["TEMP1"]}
summon area_effect_cloud 0.0 0.0 10.0 {Tags:["TEMP1"]}
summon area_effect_cloud 0.0 0.0 -10.0 {Tags:["TEMP1"]}
scoreboard players operation #poz_x2 MobAIOther = #poz_x1 MobAIOther
scoreboard players operation #poz_y2 MobAIOther = #poz_x1 MobAIOther
scoreboard players operation #MATHin MobAIOther = #poz_x1 MobAIOther
function wormai:math/axis_rotation_tensor

scoreboard players set #TEMP1 MobAIOther 200
scoreboard players operation #TEMP1 MobAIOther -= @s MobAITick
scoreboard players set #poz_y1 MobAIOther 5
scoreboard players operation #TEMP1 MobAIOther *= #poz_y1 MobAIOther

execute as @e[type=minecraft:area_effect_cloud,tag=TEMP1] run function bedrock_wither:ai/util/animation/wither/particle_spin

execute as @s[scores={MobAITick=201..}] run data merge entity @s {PickupDelay:0,Invulnerable:0b,NoGravity:0b,Age:-5999s,Motion:[0.0,0.0,0.0]}
