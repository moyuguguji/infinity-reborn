scoreboard players set @s dut_randomRange 100
scoreboard players set @s dut_randomMin 1
#技能-末影传送
function dut:random
execute as @s[scores={dut_stage=4..,dut_random=1..12}] at @s at @a[distance=..128,gamemode=!creative,gamemode=!spectator] run playsound entity.enderman.teleport voice @a
execute as @s[scores={dut_stage=4..,dut_random=1..12}] at @s as @a[distance=..128,gamemode=!creative,gamemode=!spectator] at @s run spreadplayers ~ ~ 0 16 false @s
execute as @s[scores={dut_stage=4..,dut_random=1..12}] at @s run effect give @a[distance=..128,gamemode=!creative,gamemode=!spectator] blindness 5 0
execute as @s[scores={dut_stage=4..,dut_random=1..12}] at @s at @a[distance=..128,gamemode=!creative,gamemode=!spectator] run playsound entity.enderman.teleport voice @a
execute as @s[scores={dut_stage=4..,dut_random=1..12}] at @s at @a[distance=..128,gamemode=!creative,gamemode=!spectator] run particle portal ~ ~1 ~ 0.5 1 0.5 0 32
#技能-龙息雨
function dut:random
execute as @s[scores={dut_stage=3..,dut_random=..16}] at @s run function dut:enderdragon/dragonbreath/set_charge
#技能-末影冲击
function dut:random
execute as @s[scores={dut_stage=1..,dut_random=..24}] at @s run function dut:enderdragon/ender_shockwave/set_shockwave
execute as @s[scores={dut_stage=1..,dut_random=91..100}] at @s run function dut:enderdragon/ender_shockwave/set_shockwave
#技能-连发龙息
function dut:random
scoreboard players set @s[scores={dut_stage=1..,dut_random=..36}] dut_delay 20
scoreboard players operation @s[scores={dut_stage=1..,dut_random=..36}] dut_delay *= @s dut_stage
#技能-腐蚀之环
function dut:random
execute as @s[scores={dut_stage=3..,dut_random=1..12}] at @s run function dut:enderdragon/dragonring/main
#技能-召唤幻翼
function dut:random
execute as @s[scores={dut_stage=2..,dut_random=..12}] at @s run function dut:enderdragon/summon_phantom/main


