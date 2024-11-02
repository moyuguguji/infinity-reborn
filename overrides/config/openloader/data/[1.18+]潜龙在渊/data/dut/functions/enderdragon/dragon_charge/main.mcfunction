scoreboard players operation @s dut_count = @s dut_delay
scoreboard players set @s dut_count1 20
scoreboard players operation @s dut_count %= @s dut_count1
execute as @s[scores={dut_count=19}] at @s anchored eyes run function dut:enderdragon/dragon_charge/shoot
scoreboard players remove @s dut_delay 1