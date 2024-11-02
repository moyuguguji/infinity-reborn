scoreboard players add @s dut_time 1
particle soul_fire_flame ^ ^ ^2.6 0 0 0 0 1 force
tp @s ~ ~ ~ ~4.5 ~
execute as @s[scores={dut_time=..79}] at @s run function dut:enderdragon/ender_shockwave/particle
kill @s[scores={dut_time=80..}]