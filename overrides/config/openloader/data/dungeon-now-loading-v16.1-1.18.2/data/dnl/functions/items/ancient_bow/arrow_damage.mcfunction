### Multiplying the original value
execute store result entity @s damage double 1.5 run data get entity @s damage 1

### Adding to the original value 3##
#execute store result score @s dnl.arrowdamage run data get entity @s damage 1
#scoreboard players operation @s dnl.arrowdamage += #100 dnl.constant

### Setting set value ###
#data merge entity @s {damage:3.0d}
