#built using mc-build (https://github.com/mc-build/mc-build)

scoreboard players add @s dnl.timer 1
execute at @s align xyz positioned ~-10 ~-8.1 ~-10 if score @s dnl.timer matches 1..81 run function dnl.plains_castle:raid/__generated__/block/32
execute at @s align xyz positioned ~-10 ~-8.1 ~-10 if score @s dnl.timer matches 100.. run function dnl.plains_castle:raid/__generated__/block/33
execute at @s align xyz positioned ~-10 ~-8.1 ~-10 run kill @e[type=experience_orb,dx=20,dy=13,dz=20]