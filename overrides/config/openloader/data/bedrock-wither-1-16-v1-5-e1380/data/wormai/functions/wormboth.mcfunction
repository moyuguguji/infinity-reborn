tag @s add WormTP
scoreboard players operation #TEMPB WormB = @s WormB
scoreboard players operation #TEMPC WormC2 = @s WormC2
scoreboard players set #CLEARB WormB 0
execute as @e[type=vindicator,tag=Worm2] if score @s WormB = #TEMPB WormB if score @s WormC1 = #TEMPC WormC2 run function wormai:wormboth_obfus
execute if score #CLEARB WormB matches 0 run kill @s
tag @s remove WormTP
execute as @s[nbt={HurtTime:10s}] run function wormai:wormhealth_consistancy

