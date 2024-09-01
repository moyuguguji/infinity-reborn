execute at @s[tag=!dnl.healed,nbt={Health:1000.0f}] run advancement grant @a[distance=..32] only dnl:story/structures/forgotten_field/daily_maintenance
execute at @s[tag=!dnl.healed,nbt={Health:1000.0f}] run effect give @a[distance=..32] minecraft:hero_of_the_village 180 0
execute at @s[tag=!dnl.healed,nbt={Health:1000.0f}] run loot spawn ~ ~ ~ loot dnl:structures/forgotten_field/mobs/iron_golem_reward
tag @s[tag=!dnl.healed,nbt={Health:1000.0f}] add dnl.healed
