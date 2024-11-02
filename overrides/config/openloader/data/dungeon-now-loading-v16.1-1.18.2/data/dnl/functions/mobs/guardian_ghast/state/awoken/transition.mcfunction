### NBT Change ###
execute as @s[tag=dnl.red] run data merge entity @s {Invulnerable:0b,ExplosionPower:3,NoAI:0b,Silent:0b,CustomName:'{"text":"Guardian Ghast R","obfuscated":true}',Attributes:[{Name:generic.follow_range,Base:64}]}
execute as @s[tag=dnl.yellow] run data merge entity @s {Invulnerable:0b,ExplosionPower:3,NoAI:0b,Silent:0b,CustomName:'{"text":"Guardian Ghast Y","obfuscated":true}',Attributes:[{Name:generic.follow_range,Base:64}]}
execute as @s[tag=dnl.blue] run data merge entity @s {Invulnerable:0b,ExplosionPower:3,NoAI:0b,Silent:0b,CustomName:'{"text":"Guardian Ghast B","obfuscated":true}',Attributes:[{Name:generic.follow_range,Base:64}]}

### Tag Change ###
tag @s remove dnl.transition.awoken
tag @s remove dnl.sleeping
tag @s remove dnl.stunned
tag @s add dnl.awoken
