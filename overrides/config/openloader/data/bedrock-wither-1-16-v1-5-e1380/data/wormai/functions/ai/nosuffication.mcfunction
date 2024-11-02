execute as @s run data merge entity @s {Invulnerable:1b}
execute as @s at @s positioned ~ ~1.5 ~ if block ~0.5 ~0.45 ~0.5 #wormai:transparent_blocks if block ~0.5 ~0.45 ~-0.5 #wormai:transparent_blocks if block ~0.5 ~-0.25 ~0.5 #wormai:transparent_blocks if block ~0.5 ~-0.25 ~-0.5 #wormai:transparent_blocks if block ~-0.5 ~0.45 ~0.5 #wormai:transparent_blocks if block ~-0.5 ~0.45 ~-0.5 #wormai:transparent_blocks if block ~-0.5 ~-0.25 ~0.5 #wormai:transparent_blocks if block ~-0.5 ~-0.25 ~-0.5 #wormai:transparent_blocks run data merge entity @s {Invulnerable:0b}

