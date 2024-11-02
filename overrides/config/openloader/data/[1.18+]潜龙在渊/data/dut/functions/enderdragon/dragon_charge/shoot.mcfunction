summon armor_stand ^ ^-3 ^-6.5 {Tags:["dut_charge","dut_charge0"],Invisible:1b,Invulnerable:1b,NoGravity:0b}
execute positioned 0.000 0.000 0.000 run summon marker ^ ^-0.1 ^-1.12 {Tags:["dut_charge_getspeed"]}
data modify entity @e[tag=dut_charge0,limit=1] Motion set from entity @e[tag=dut_charge_getspeed,limit=1] Pos
tag @e[tag=dut_charge0] remove dut_charge0
kill @e[tag=dut_charge_getspeed]
particle dragon_breath ^ ^-3 ^-6.5 0.1 0.1 0.1 0.08 24 force
playsound entity.ender_dragon.shoot voice @a ~ ~ ~