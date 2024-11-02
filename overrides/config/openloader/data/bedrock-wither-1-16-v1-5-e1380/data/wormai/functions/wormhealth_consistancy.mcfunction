tag @s add WormHlthFix
execute as @e[type=vindicator,tag=Worm2] at @s if score #TEMPB WormB = @s WormB run data modify entity @s Health set from entity @e[tag=WormHlthFix,limit=1] Health
execute as @e[type=vindicator,tag=Worm2] at @s if score #TEMPB WormB = @s WormB run data modify entity @s AbsorptionAmount set from entity @e[tag=WormHlthFix,limit=1] AbsorptionAmount
tag @s remove WormHlthFix
