playsound entity.ender_dragon.ambient voice @a ~ ~ ~
execute at @a[distance=..128,gamemode=!creative,gamemode=!spectator] run particle wax_off ~ ~1 ~ 0.5 1.5 0.5 0.05 24 force
execute at @a[distance=..128,gamemode=!creative,gamemode=!spectator] run playsound entity.evoker.prepare_summon voice @a ~ ~ ~ 0.6
execute as @s[scores={dut_random=1}] at @s run effect give @a[distance=..128,gamemode=!creative,gamemode=!spectator] darkness 45 0
execute as @s[scores={dut_random=2..5}] at @s run effect give @a[distance=..128,gamemode=!creative,gamemode=!spectator] slowness 75 0
execute as @s[scores={dut_random=6..9}] at @s run effect give @a[distance=..128,gamemode=!creative,gamemode=!spectator] weakness 75 0
execute as @s[scores={dut_random=10..12}] at @s run effect give @a[distance=..128,gamemode=!creative,gamemode=!spectator] hunger 45 0