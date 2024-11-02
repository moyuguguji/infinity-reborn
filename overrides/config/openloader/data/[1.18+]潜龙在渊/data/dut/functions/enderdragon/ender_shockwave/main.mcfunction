function dut:enderdragon/ender_shockwave/particle
summon lightning_bolt ~ ~ ~
effect give @e[distance=..5] levitation 1 24 true
summon dragon_fireball ~ ~ ~ {power:[0d,-0.12d,0d]}
particle dragon_breath ~ ~ ~ 1.6 0.5 1.6 0.05 128 force
particle glow ~ ~1.5 ~ 0.3 3 0.3 0.02 48 force
particle flash ~ ~ ~ 0 0 0 0 1 force
kill @s
