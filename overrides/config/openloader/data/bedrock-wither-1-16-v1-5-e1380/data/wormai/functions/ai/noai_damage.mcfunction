data merge entity @s {NoAI:1b}
execute at @s if entity @e[type=player,distance=..1] run data merge entity @s {NoAI:0b}
execute at @s positioned ~ ~1 ~ if entity @e[type=player,distance=..1] run data merge entity @s {NoAI:0b}
