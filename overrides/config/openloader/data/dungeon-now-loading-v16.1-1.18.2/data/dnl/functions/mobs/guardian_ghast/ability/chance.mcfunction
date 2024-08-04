### Ability Chance ###
scoreboard players set in math 1
scoreboard players set in1 math 3
function rng:range_lcg

### On Ground ###
execute if score out math matches 1 run tag @s add dnl.ability.ground
execute if score out math matches 2 run tag @s add dnl.ability.ground
#execute if score out math matches 3 run tag @s add dnl.ability.ground


### Flying with Elytra ###
#execute if entity @p[nbt={FallFlying:1b}] if score out math matches 1 run tag @s add dnl.ability.air
