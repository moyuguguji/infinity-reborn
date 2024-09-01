# save station chief's health to scoreboard #
execute as @s store result score @s dnl.health run data get entity @s Health 1

# Health #
# 100% - 76% #
data merge entity @s[scores={dnl.health=271..360},tag=!phase_change] {HandItems:[{id:"minecraft:crossbow",Count:1b,tag:{Enchantments:[{id:"minecraft:quick_charge",lvl:2s}],ChargedProjectiles:[{id:"minecraft:arrow",Count:1b},{id:"minecraft:arrow",Count:1b},{id:"minecraft:arrow",Count:1b}],Charged:1b}},{}],HandDropChances:[0.000F,0.085F]}

# 75% - 51% #
data merge entity @s[scores={dnl.health=181..270},tag=!phase_change] {HandItems:[{id:"minecraft:crossbow",Count:1b,tag:{Enchantments:[{id:"minecraft:quick_charge",lvl:3s}],ChargedProjectiles:[{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:17b,Amplifier:2b,Duration:300}],CustomPotionColor:5797459}},{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:17b,Amplifier:2b,Duration:300}],CustomPotionColor:5797459}},{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:17b,Amplifier:2b,Duration:300}],CustomPotionColor:5797459}}],Charged:1b}},{}],HandDropChances:[0.000F,0.085F]}

# 50% #
data merge entity @s[scores={dnl.health=..180},tag=!phase_change] {HandItems:[{id:"minecraft:crossbow",Count:1b,tag:{Enchantments:[{id:"minecraft:quick_charge",lvl:3s}],ChargedProjectiles:[{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:17b,Amplifier:2b,Duration:300}],CustomPotionColor:5797459}},{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:17b,Amplifier:2b,Duration:300}],CustomPotionColor:5797459}},{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:17b,Amplifier:2b,Duration:300}],CustomPotionColor:5797459}}],Charged:1b}},{id:"minecraft:ravager_spawn_egg",Count:1b}],HandDropChances:[0.000F,0.085F]}

scoreboard players add @s[scores={dnl.health=..180},tag=!phase_change] dnl.variable 1

execute if entity @s[scores={dnl.variable=20},tag=!phase_change] at @s run playsound event.raid.horn ambient @a[distance=..16] ~ ~ ~ 100.0 1 1

execute at @s[scores={dnl.variable=59},tag=!phase_change] run particle minecraft:cloud ~ ~2 ~ 1 1 1 0.0000001 50

execute at @s[scores={dnl.variable=60},tag=!phase_change] run summon ravager ~ ~ ~ {Invulnerable:1b,DeathLootTable:"dnl:structures/railway_outpost/mobs/ravager",PersistenceRequired:1b,Tags:["station_chief_ravager"],Passengers:[{id:"minecraft:pillager",Glowing:1b,DeathLootTable:"dnl:structures/railway_outpost/mobs/station_chief",PersistenceRequired:1b,Health:180f,Tags:["phase_change","station_chief","pillager_persistence_true","railway_boss"],CustomName:'{"text":"Station Chief","color":"red","bold":true,"italic":false}',HandItems:[{id:"minecraft:crossbow",Count:1b,tag:{ChargedProjectiles:[{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:19b,Amplifier:3b,Duration:60}],CustomPotionColor:5149489}},{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:19b,Amplifier:3b,Duration:60}],CustomPotionColor:5149489}},{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:19b,Amplifier:3b,Duration:60}],CustomPotionColor:5149489}}],Charged:1b}},{}],HandDropChances:[0.000F,0.085F],Attributes:[{Name:generic.max_health,Base:360}]}]}

tp @s[scores={dnl.variable=60},tag=!phase_change] ~ -1000 ~
kill @s[scores={dnl.variable=60},tag=!phase_change]

# 50% - 25% #
data merge entity @s[scores={dnl.health=91..180},tag=phase_change] {HandItems:[{id:"minecraft:crossbow",Count:1b,tag:{Enchantments:[{id:"minecraft:quick_charge",lvl:3s}],ChargedProjectiles:[{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:17b,Amplifier:2b,Duration:300},{Id:19b,Amplifier:3b,Duration:60}],CustomPotionColor:5149489}},{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:17b,Amplifier:2b,Duration:300},{Id:19b,Amplifier:3b,Duration:60}],CustomPotionColor:5149489}},{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:17b,Amplifier:2b,Duration:300},{Id:19b,Amplifier:3b,Duration:60}],CustomPotionColor:5149489}}],Charged:1b}},{}]}

# 25% - 0% #
data merge entity @s[scores={dnl.health=0..90},tag=phase_change] {HandItems:[{id:"minecraft:crossbow",Count:1b,tag:{Enchantments:[{id:"minecraft:quick_charge",lvl:4s}],ChargedProjectiles:[{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:9b,Amplifier:0b,Duration:200},{Id:17b,Amplifier:2b,Duration:300},{Id:19b,Amplifier:3b,Duration:60}],CustomPotionColor:5578058}},{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:9b,Amplifier:0b,Duration:200},{Id:17b,Amplifier:2b,Duration:300},{Id:19b,Amplifier:3b,Duration:60}],CustomPotionColor:5578058}},{id:"minecraft:tipped_arrow",Count:1b,tag:{CustomPotionEffects:[{Id:9b,Amplifier:0b,Duration:200},{Id:17b,Amplifier:2b,Duration:300},{Id:19b,Amplifier:3b,Duration:60}],CustomPotionColor:5578058}}],Charged:1b}},{}]}
