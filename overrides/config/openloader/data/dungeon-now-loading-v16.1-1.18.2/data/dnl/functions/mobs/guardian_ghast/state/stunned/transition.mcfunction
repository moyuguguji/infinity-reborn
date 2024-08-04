### NBT Change ###
data merge entity @s {Invulnerable:1b,Silent:1b,CustomName:'{"text":"Guardian Ghast","obfuscated":true}',Attributes:[{Name:generic.follow_range,Base:0}]}

### Reset Arrow Stun ###
scoreboard players reset @s dnl.variable

### Sound Effects ###
playsound minecraft:entity.wither.hurt ambient @a ~ ~ ~ 64 0.1

### Tag Change ###
tag @s remove dnl.transition.stunned
tag @s remove dnl.sleeping
tag @s remove dnl.awoken
tag @s add dnl.stunned
