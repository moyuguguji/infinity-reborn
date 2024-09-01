scoreboard players set in math 1
scoreboard players set in1 math 4
function rng:range_lcg

execute if score out math matches 1..2 at @s run summon small_fireball ~ 180 ~ {direction:[0.0,-0.1,0.0],power:[0.0,-0.1,0.0],Tags:["dnl.mob","dnl.guardian_ghast","dnl.projectile","dnl.meteor_fireball"]}
execute if score out math matches 3..4 at @s run summon fireball ~ 180 ~ {ExplosionPower:3,direction:[0.0,-0.1,0.0],power:[0.0,-0.1,0.0],Tags:["dnl.mob","dnl.guardian_ghast","dnl.projectile","dnl.meteor_fireball"]}
