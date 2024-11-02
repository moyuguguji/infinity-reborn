#Health detection
#Its set up in a way that we can make many different bosses use the same bar
#exept it would need a general name like boss health
scoreboard players add @s Hlth
execute as @s store result score @s Hlth run data get entity @s Health 1
execute at @s run bossbar set minecraft:bosshealth players @a[distance=..50]
execute store result bossbar minecraft:bosshealth max as @s run data get entity @s Attributes[{Name:"minecraft:generic.max_health"}].Base
execute store result bossbar minecraft:bosshealth value as @s run data get entity @s Health
function wormai:hlthbar_index
